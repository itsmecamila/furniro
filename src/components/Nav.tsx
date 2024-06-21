import { useSelector } from "react-redux";
import Cart from "./Cart";
import { AppDispatch, RootState } from "../redux";
import { useDispatch } from "react-redux";
import { logout } from "../redux/user/thunks";

export default function Nav() {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  return (
    <nav className="flex justify-between p-9">
      <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/logo.svg" alt="Furniro's logo" />

      <ul className="flex items-center gap-16 font-semibold">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <div className="flex items-center gap-6">
        { isAuth ? (
          <button onClick={() => dispatch(logout())}>Logout</button>
        ) : (
          <a href="/login">
            <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/user.svg" alt="User" />
          </a>
        ) }

        <Cart />
      </div>
    </nav>
  )
}