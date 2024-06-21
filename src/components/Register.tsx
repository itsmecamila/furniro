import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux"
import { registerWithEmail } from "../redux/user/thunks";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must contain at least 6 character(s)"),
});

export default function SignUp() {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema)
  });

  useEffect(() => {
    if (isAuth) {
      return navigate("/");
    }
  }, [isAuth]);

  function onRegister(data: z.infer<typeof signupSchema>) {
    dispatch(registerWithEmail(data.email, data.password));
    form.reset();
  }

  return (
    <form
      onSubmit={form.handleSubmit(onRegister)}
      className="flex flex-col justify-center max-w-96 min-h-screen mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

      <div className="flex flex-col">
        <label htmlFor="email" className="font-medium">Email</label>
        <input type="text" name="email" id="email"  className="h-12 px-4 mt-4 border border-[#9F9F9F] rounded-md"/>
        {form.formState.errors.email && <p className="text-red-600">{form.formState.errors.email.message}</p>}
      </div>

      <div className="flex flex-col mt-4">
        <label htmlFor="password" className="font-medium">Password</label>
        <input type="password" name="password" id="password"  className="h-12 px-4 mt-4 border border-[#9F9F9F] rounded-md"/>
        {form.formState.errors.password && <p className="text-red-600">{form.formState.errors.password.message}</p>}
      </div>

      <button
        type="submit"
        className="h-12 mt-4 bg-[#B88E2F] text-white font-semibold rounded-md"
      >
        Sign Up
      </button>
    </form>
  )
}