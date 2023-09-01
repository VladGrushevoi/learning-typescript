import { useState } from "react";
import { appAxios } from "../../appAxios/appAxios";
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
    const [showRegisterResult, setResult] = useState("")
    const firstNameInput = useInput("", "FirstName");
    const lastNameInput = useInput("", "LastName");
    const phoneNumberInput = useInput("","Phone")
    const passwordInput = useInput("", "Password");
    const confirmPassword = useInput("", "ConfirmPasword");

    const registerHandle = async (event: React.FormEvent) => {
        event.preventDefault();
        if(passwordInput.value !== confirmPassword.value){
            setResult("Паролі не співпадають, перевірте правильність вводу");
            return;
        }
        const userRegisterInfo : UserRegisterInfo = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            phoneNumber: "+38"+phoneNumberInput.value,
            password: passwordInput.value,
            role: UserRole.User
        }
        const response = await appAxios.post("/user/register", JSON.stringify(userRegisterInfo))
        if(response.status !== 200){
            setResult("Помилка. Користувач не був зареєстрований. Будь ласка провірте дані")
            return;
        }
        setResult("Користувач успішно зареєстрований. Будь-ласка авторизуйтеся")
    }

    return {
        firstNameInput,
        lastNameInput,
        phoneNumberInput,
        passwordInput,
        confirmPassword,
        registerHandle,
        showRegisterResult
    }
}