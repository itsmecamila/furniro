import { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux"
import { registerWithEmail } from "../redux/user/thunks";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const error = useSelector((state: RootState) => state.user.error);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      return navigate("/");
    }
  }, [isAuth]);

  function onRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email")?.toString();
    const password = form.get("password")?.toString();

    if (!email || !password) {
      return;
    }

    dispatch(registerWithEmail(email, password));
  }

  return (
    <form onSubmit={onRegister}>
      <h2>Cadastro</h2>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button type="submit">Cadastrar</button>
      { error !== null ? ( <strong>{error}</strong> ) : null }
    </form>
  )
}