import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux";

export default function Authentication() {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      return navigate("/login");
    }
  }, [isAuth]);

  return <Outlet />
}