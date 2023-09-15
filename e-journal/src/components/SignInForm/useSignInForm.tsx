import { UserLoginInfoRequest, UserLoginInfoResponse } from "../../Redux/features/user/PayloadTypes/userLogin";
import { useInput } from "../../hooks/useInput"
import { login } from "../../Redux/features/user/userSlice";
import { appAxios } from "../../appAxios/appAxios";
import { useAppDispatch } from "../../Redux/storehooks";
import { useLocalStorage } from "../../localStorageManager/useLocalStorage";
import { User } from "../../types/User";
import { UserInStorage } from "../../localStorageManager/types/userInStorage";
import { useNavigate } from "react-router-dom";

export const useSignInForm = () => {
    const {putRoLocalStorage} = useLocalStorage();
    const phoneInput = useInput("", "phone");
    const passwordInput = useInput("", "password");
    const dispatch = useAppDispatch();
    const navigator = useNavigate();

    const doLogin = async (event : React.FormEvent) => {
        event.preventDefault();

        const loginData : UserLoginInfoRequest = {
            Password: passwordInput.value,
            PhoneNumber: "+38"+phoneInput.value,
        }

        const response = await appAxios.post<UserLoginInfoResponse>("/user/login", loginData)
        dispatch(login(response.data));
        if(response.status === 200){
            putRoLocalStorage("user", {
                jwtToken: response.data.jwtToken,
                user: {
                    firstName: response.data.name,
                    lastName: response.data.surname,
                    phoneNumber: response.data.phoneNumber,
                    role: response.data.role,
                } as User
            } as UserInStorage)
            navigator("/main");
        }
    }

    return {
        phoneInput,
        passwordInput,
        doLogin
    }
}
