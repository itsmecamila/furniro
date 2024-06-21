import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux";
import { loginWithEmail } from "../redux/user/thunks";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must contain at least 6 character(s)"),
});

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema)
  });

  useEffect(() => {
    if (isAuth) {
      return navigate("/");
    }
  }, [isAuth]);

  function onLogin(data: z.infer<typeof loginSchema>) {
    dispatch(loginWithEmail(data.email, data.password));
  }

  return (
    <form
      onSubmit={form.handleSubmit(onLogin)}
      className="flex flex-col justify-center max-w-96 min-h-screen mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

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
        Entrar
      </button>
    </form>
  )
}