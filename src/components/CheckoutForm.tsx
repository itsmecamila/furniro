import { useEffect } from "react";
import { useForm } from "react-hook-form"

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

export default function CheckoutForm() {
  const form = useForm<Checkout>({
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      zipCode: "",
      streetAddress: "",
      town: "",
      province: "",
      addOnAddress: "",
      email: "",
    }
  });

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

  return (
    <form>
      <div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" {...form.register("firstName")} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" {...form.register("lastName")} />
        </div>
      </div>
      <div>
        <label htmlFor="companyName">Compary Name</label>
        <input type="text" id="companyName" {...form.register("companyName")} />
      </div>
      <div>
        <label htmlFor="zipCode">Zip Code</label>
        <input type="text" id="zipCode" {...form.register("zipCode")} />
        {form.formState.errors.zipCode && <p>{form.formState.errors.zipCode.message}</p>}
      </div>
      <div>
        <label htmlFor="streetAddress">Street Address</label>
        <input type="text" id="streetAddress" disabled {...form.register("streetAddress")} />
      </div>
      <div>
        <label htmlFor="town">Town / City</label>
        <input type="text" id="town" disabled {...form.register("town")} />
      </div>
      <div>
        <label htmlFor="province">Province</label>
        <input type="text" id="province" disabled {...form.register("province")} />
      </div>
      <div>
        <label htmlFor="addOnAddress">Add-on address</label>
        <input type="text" id="addOnAddress" {...form.register("addOnAddress")} />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="text" id="email" {...form.register("email")} />
      </div>
    </form>
  )
}