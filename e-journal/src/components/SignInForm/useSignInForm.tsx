import { UserLoginInfoRequest, UserLoginInfoResponse } from "../../Redux/features/user/PayloadTypes/userLogin";
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

        const response = await appAxios.post<UserLoginInfoResponse>("/user/login", loginData)

        dispatch(login(response.data));
    }

    return {
        phoneInput,
        passwordInput,
        doLogin
    }
}
