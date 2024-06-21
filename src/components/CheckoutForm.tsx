import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux";
import { z } from "zod";
import { AppDispatch, RootState } from "../redux";
import { currency } from "../utils/currenty";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cleanCart } from "../redux/cart/actions";

interface Checkout {
  firstName: string;
  lastName: string;
  companyName: string;
  zipCode: string;
  streetAddress: string;
  town: string;
  province: string;
  addOnAddress: string;
  email: string;
}

const checkoutSchema = z.object({
  firstName: z.string().min(3, "First name must contain at least 3 character(s)"),
  lastName: z.string().min(3, "Last name must contain at least 3 character(s)"),
  companyName: z.string(),
  zipCode: z.string().min(1, "Zip code must contain at least 3 character(s)"),
  streetAddress: z.string().min(1, "Street address must contain at least 3 character(s)"),
  town: z.string().min(1, "Town must contain at least 3 character(s)"),
  province: z.string().min(1, "Province must contain at least 3 character(s)"),
  addOnAddress: z.string().min(1, "Add On Address must contain at least 3 character(s)"),
  email: z.string().email("Must be a valid email"),
});

export default function CheckoutForm() {
  const form = useForm<Checkout>({
    resolver: zodResolver(checkoutSchema)
  });
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart.products);
  const subtotal = cart.reduce((prev, curr) => curr.price + prev, 0);
  const total = cart.reduce((prev, curr) => curr.price * curr.quantity + prev, 0);
  const navigate = useNavigate();

  const zipCode = form.watch("zipCode", "");

  useEffect(() => {
    if (zipCode === "") return;

    fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
      .then(res => res.json())
      .then(data => {
        form.setValue("streetAddress", data.logradouro);
        form.setValue("town", data.localidade);
        form.setValue("province", data.bairro);
        form.clearErrors("zipCode");
      })
      .catch(() => {
        form.setError("zipCode", { type: "custom", message: "Invalid zip code" })
      });
  }, [zipCode]);

  function onSubmit() {
    dispatch(cleanCart());
    navigate("/shop");
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-24 mt-40 mx-44 mb-24"
    >
      <div
        className="flex flex-col gap-9"
      >
        <h2 className="font-semibold text-4xl">Biling details</h2>

        <div className="flex gap-8">
          <div className="flex-1 flex flex-col">
            <label htmlFor="firstName" className="font-medium">First Name</label>
            <input type="text" id="firstName" {...form.register("firstName")} className="h-12 px-4 mt-4 border border-[#9F9F9F] rounded-md" />
            {form.formState.errors.firstName && <p className="text-red-600">{form.formState.errors.firstName.message}</p>}
          </div>
          <div className="flex-1 flex flex-col">
            <label htmlFor="lastName" className="font-medium">Last Name</label>
            <input type="text" id="lastName" {...form.register("lastName")} className="h-12 px-4 mt-4 border border-[#9F9F9F] rounded-md" />
            {form.formState.errors.lastName && <p className="text-red-600">{form.formState.errors.lastName.message}</p>}
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="companyName" className="font-medium">Compary Name (Optional)</label>
          <input type="text" id="companyName" {...form.register("companyName")} className="h-12 px-4 mt-4 border border-[#9F9F9F] rounded-md" />
          {form.formState.errors.companyName && <p className="text-red-600">{form.formState.errors.companyName.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="zipCode" className="font-medium">Zip Code</label>
          <input type="text" id="zipCode" {...form.register("zipCode")} className="h-12 px-4 mt-4 border border-[#9F9F9F] rounded-md" />
          {form.formState.errors.zipCode && <p className="text-red-600">{form.formState.errors.zipCode.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="streetAddress" className="font-medium">Street Address</label>
          <input type="text" id="streetAddress" disabled {...form.register("streetAddress")} className="h-12 px-4 mt-4 border border-[#9F9F9F] rounded-md" />
          {form.formState.errors.streetAddress && <p className="text-red-600">{form.formState.errors.streetAddress.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="town" className="font-medium">Town / City</label>
          <input type="text" id="town" disabled {...form.register("town")} className="h-12 px-4 mt-4 border border-[#9F9F9F] rounded-md" />
          {form.formState.errors.town && <p className="text-red-600">{form.formState.errors.town.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="province" className="font-medium">Province</label>
          <input type="text" id="province" disabled {...form.register("province")} className="h-12 px-4 mt-4 border border-[#9F9F9F] rounded-md" />
          {form.formState.errors.province && <p className="text-red-600">{form.formState.errors.province.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="addOnAddress" className="font-medium">Add-on address</label>
          <input type="text" id="addOnAddress" {...form.register("addOnAddress")} className="h-12 px-4 mt-4 border border-[#9F9F9F] rounded-md" />
          {form.formState.errors.addOnAddress && <p className="text-red-600">{form.formState.errors.addOnAddress.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium">Email Address</label>
          <input type="text" id="email" {...form.register("email")} className="h-12 px-4 mt-4 border border-[#9F9F9F] rounded-md" />
          {form.formState.errors.email && <p className="text-red-600">{form.formState.errors.email.message}</p>}
        </div>
      </div>

      <div className="flex flex-col">
        <ul className="flex flex-col gap-3">
          <li className="flex items-center justify-between">
            <h3 className="text-2xl font-medium">Product</h3>
            <h3 className="text-2xl font-medium">Subtotal</h3>
          </li>

          {cart.map(product => (
            <li
              key={product.id}
              className="flex items-center justify-between"
            >
              <p><span className="text-[#9F9F9F]">{product.name}</span> x {product.quantity}</p>
              <strong className="font-normal">{currency.format(product.price)}</strong>
            </li>
          ))}

          <li className="flex items-center justify-between">
            <p>Subtotal</p>
            <strong>{currency.format(subtotal)}</strong>
          </li>

          <li className="flex items-center justify-between">
            <p>Total</p>
            <strong className="font-bold text-2xl text-[#B88E2F]">{currency.format(total)}</strong>
          </li>
        </ul>

        <button
          type="submit"
          className="py-4 px-24 mt-6 border border-black rounded-md"
        >
          Place order
        </button>
      </div>
    </form>
  )
}