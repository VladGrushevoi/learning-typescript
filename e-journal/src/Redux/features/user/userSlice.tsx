import { User, UserRole } from "../../../types/User";
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { UserLoginInfoResponse } from "./PayloadTypes/userLogin";
import { RootState } from "../../store";
import { UpdateUserInfoResponse } from "./PayloadTypes/UserUpdate";
import { UserInformationResponse } from "./PayloadTypes/getFullInformation";

interface UserState {
    isLogin: boolean,
    JwtToken: string,
    user: User
}

const initialState: UserState = {
    isLogin: false,
    JwtToken: "",
    user: {
        firstName: "",
        id: "",
        lastName: "",
        phoneNumber: "",
        recordHistoryItems: [],
        role: UserRole.Undefined
    }
}

export const UserSlice = createSlice({
    name: "User",
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<UserLoginInfoResponse>) => {
            state.JwtToken = action.payload.jwtToken;
            state.user.firstName = action.payload.name;
            state.user.lastName = action.payload.surname;
            state.user.role = action.payload.role;
            state.user.phoneNumber = action.payload.phoneNumber;
            state.isLogin = action.payload.jwtToken ? true : false;
        },
        updateUser: (state, action: PayloadAction<UpdateUserInfoResponse>) => {
            console.log(action.payload)
            var [firstName, surname] = action.payload.fullName.split(" ");
            state.user.firstName = firstName;
            state.user.lastName = surname;
            state.user.phoneNumber = action.payload.phoneNumber
        },
        getUserInfo: (state, action: PayloadAction<UserInformationResponse>) => {
            state.user = action.payload.allInformation
        }
    }
});

export const { login, updateUser, getUserInfo } = UserSlice.actions;
export default UserSlice.reducer;
export const selectUser = (state: RootState) => state.user; 