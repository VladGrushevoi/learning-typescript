import { UserRole } from "../../../../types/User"

export interface UserLoginInfoRequest {
    PhoneNumber: string,
    Password: string
}

export interface userLoginInfoResponse {
    name: string,
    surname: string,
    phoneNumber: string,
    role: UserRole,
    jwtToken: string
}