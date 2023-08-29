export interface UpdateUserInfoRequest {
    firstName: string,
    surname: string,
    phoneNumber: string
}

export interface UpdateUserInfoResponse {
    fullName: string,
    phoneNumber: string
}