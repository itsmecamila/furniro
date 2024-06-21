import { projectAuth } from "../../services/firebaseConfig"
import { AppDispatch } from "..";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth/web-extension";

//actions como htunks, realizam requisições
//declarar aqui, disparam funções (dispatch)

export function loginWithEmail(email : string, password : string){
    
    return async (dispatch : AppDispatch) =>{
        dispatch({
            type : "LOGIN_REQUEST"   
        })

        try{
            const res =  await signInWithEmailAndPassword(projectAuth,email, password);
            dispatch({
                type : "LOGIN_SUCCESS",
                payload : res.user?.email
            })
        }

        catch (error : any){
            dispatch({
                type : "LOGIN_FAILED",
                error : error.message
            })
        }
    }
}

export function loginWithGoogle(){
    
    return async (dispatch : AppDispatch) =>{
        dispatch({
            type : "LOGIN_REQUEST"   
        })
        const provider = new GoogleAuthProvider();

        try{
            const res = await signInWithPopup(projectAuth, provider);
            dispatch({ 
                type: "LOGIN_SUCCESS", 
                payload: res.user.email 
            });
        }

        catch (error : any){
            dispatch({
                type : "LOGIN_FAILED",
                error : error.message
            })
        }
    }
}

export function loginWithFacebook(){
    
    return async (dispatch : AppDispatch) =>{
        dispatch({
            type : "LOGIN_REQUEST"   
        })
        const provider = new FacebookAuthProvider();

        try{
            const res = await signInWithPopup(projectAuth, provider);
            dispatch({ 
                type: "LOGIN_SUCCESS", 
                payload: res.user.email 
            });
        }

        catch (error : any){
            dispatch({
                type : "LOGIN_FAILED",
                error : error.message
            })
        }
    }
}


export function registerWithEmail(email : string, password : string){
    
    return async (dispatch : AppDispatch) =>{
        dispatch({
            type : "REGISTER_REQUEST"   
        })

        try{
            const res =  await createUserWithEmailAndPassword(projectAuth,email, password);
            dispatch({
                type : "REGISTER_SUCCESS",
                payload : res.user?.email
            })
        }

        catch (error : any){
            dispatch({
                type : "REGISTER_FAILED",
                error : error.message
            })
        }
    }
}

export function logout(){
    return async (dispatch : AppDispatch) =>{
        try{
            await signOut(projectAuth)
            dispatch({
                type : "LOGOUT_SUCCESS"
            })
        }

        catch (error : any){
            dispatch({
                type : "LOGOUT_FAILED",
                error : error.message
            })
        }
    }
}