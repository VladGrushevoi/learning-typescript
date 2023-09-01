import { UserLoginInfoRequest, UserLoginInfoResponse } from "../../Redux/features/user/PayloadTypes/userLogin";
import { useInput } from "../../hooks/useInput"
import { login } from "../../Redux/features/user/userSlice";
import { appAxios } from "../../appAxios/appAxios";
import { useAppDispatch } from "../../Redux/storehooks";
import { useLocalStorage } from "../../localStorageManager/useLocalStorage";
import { User } from "../../types/User";
import { UserInStorage } from "../../localStorageManager/types/userInStorage";

export const useSignInForm = () => {
    const {putRoLocalStorage} = useLocalStorage();
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
        putRoLocalStorage("user", {
            jwtToken: response.data.jwtToken,
            user: {
                firstName: response.data.name,
                lastName: response.data.surname,
                phoneNumber: response.data.phoneNumber,
                role: response.data.role,
            } as User
        } as UserInStorage)
    }

    return {
        phoneInput,
        passwordInput,
        doLogin
    }
}
