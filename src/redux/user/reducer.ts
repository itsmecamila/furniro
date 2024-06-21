interface UserState{
    email : string | null; // ent aqui ira preencher
    isAuth : boolean; /// aqui true
    loading : boolean; // aqui false
    error : string | null; // aqui null, pq quando houver erro, ira guardar a descrição dele pq está em string?
}

const userState : UserState = {
    email : null,
    isAuth : false,
    loading : false,
    error : null
}

export default function userReducer(state = userState, action : any) : UserState{
    switch(action.type){
        case "REGISTER_REQUEST":
        case "LOGIN_REQUEST":
            return {...state,
                loading : true,
                error : null,
            }

        case "REGISTER_SUCCESS":
        case "LOGIN_SUCCESS":
            return{...state,
                email : action.payload,
                isAuth : true,
                loading : false
            }

        case "LOGOUT_SUCCESS":
            return{...state,
                isAuth : false,
                email : null,
                loading : false
            }


        case "LOGOUT_FAILED":
        case "REGISTER_FAILED":
        case "LOGIN_FAILED":
            return{...state,
                loading : false,
                error : action.error
            }
        
        
        default:
            return{...state}
    }
}