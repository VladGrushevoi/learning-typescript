import { useInput } from "../../hooks/useInput"
import { UserRole } from "../../types/User";

interface UserRegisterInfo {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    password: string,
    role: UserRole
}

export const useSignUpForm = () => {
    const firstNameInput = useInput("", "FirstName");
    const lastNameInput = useInput("", "LastName");
    const phoneNumberInput = useInput("","Phone")
    const passwordInput = useInput("", "Password");
    const confirmPassword = useInput("", "ConfirmPasword");

    const registerHandle = (event: React.FormEvent) => {
        event.preventDefault();

        const userRegisterInfo : UserRegisterInfo = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            phoneNumber: "+38"+phoneNumberInput.value,
            password: passwordInput.value,
            role: UserRole.User
        }

        console.log(userRegisterInfo)
    }

    return {
        firstNameInput,
        lastNameInput,
        phoneNumberInput,
        passwordInput,
        confirmPassword,
        registerHandle
    }
}