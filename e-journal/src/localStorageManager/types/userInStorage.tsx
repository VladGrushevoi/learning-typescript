import { User } from "../../types/User";

export interface UserInStorage {
    jwtToken: string,
    user: User
}