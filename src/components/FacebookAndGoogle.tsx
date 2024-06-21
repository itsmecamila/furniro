import { useDispatch } from "react-redux";
import {loginWithGoogle } from "../redux/user/thunks";
import { loginWithFacebook } from "../redux/user/thunks";
import { AppDispatch } from "../redux";

export default function FacebookAndGoogle(){
    const dispatch  = useDispatch<AppDispatch>()

    return(
        <>
          <button onClick={()=>dispatch(loginWithGoogle())}>Login With Google</button>
          <button onClick={()=>dispatch(loginWithFacebook())}>Login With Facebook</button>   
        </>    
    )
}

   