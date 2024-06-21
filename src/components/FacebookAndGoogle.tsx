import { useDispatch } from "react-redux"

import { AppDispatch } from "../redux"
import { loginWithFacebook, loginWithGoogle } from "../redux/user/thunks";

export default function FacebookAndGoogle() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex flex-col mt-4 gap-2">
      <button
        onClick={() => dispatch(loginWithGoogle())}
        className="h-12 border border-zinc-200 rounded-md"
      >
        Sign In with Google
      </button>
      <button
        onClick={() => dispatch(loginWithFacebook())}
        className="h-12 border border-zinc-200 rounded-md"
      >
        Sign In with Facebook
      </button>
    </div>
  )
}