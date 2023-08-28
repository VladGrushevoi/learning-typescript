import { UserLoginInfoRequest, userLoginInfoResponse } from "../../Redux/features/user/PayloadTypes/userLogin";
import { useInput } from "../../hooks/useInput"
import { login } from "../../Redux/features/user/userSlice";
import { appAxios } from "../../appAxios/appAxios";
import { useAppDispatch } from "../../Redux/storehooks";

export const useSignInForm = () => {
    const phoneInput = useInput("", "phone");
    const passwordInput = useInput("", "password");
    const dispatch = useAppDispatch();

    const doLogin = async (event : React.FormEvent) => {
        event.preventDefault();

        const loginData : UserLoginInfoRequest = {
            Password: passwordInput.value,
            PhoneNumber: "+380"+phoneInput.value,
        }

        const response = await appAxios.post<userLoginInfoResponse>("/user/login", loginData, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch(login(response.data));
    }

    return {
        phoneInput,
        passwordInput,
        doLogin
    }
}
