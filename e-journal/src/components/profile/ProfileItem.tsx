import { useState } from 'react'
import { Button, ButtonGroup, Col, Form, InputGroup, Row } from "react-bootstrap"
import { User } from "../../types/User";
import { PenFill, CheckSquareFill, XSquareFill } from 'react-bootstrap-icons';
import { useInput } from '../../hooks/useInput';
import { useAppDispatch, useAppSelector } from '../../Redux/storehooks';
import { RootState } from '../../Redux/store';
import { UpdateUserInfoRequest, UpdateUserInfoResponse } from '../../Redux/features/user/PayloadTypes/UserUpdate';
import { updateUser } from '../../Redux/features/user/userSlice';
import { appAxios } from '../../appAxios/appAxios';

interface ProfileItemProps {
    title: string,
    value: string,
    isEditable: boolean,
    updateUser: (newUserData: User) => void
}

export const ProfileItem = ({ title, value, isEditable }: ProfileItemProps) => {
    const user = useAppSelector((state: RootState) => state.user)
    const dispatch = useAppDispatch();
    const [isUpdating, setIsUpdating] = useState(false)
    const firstnameInput = useInput(value.split(' ')[0], "firstName")
    const secondNameInput = useInput(value.split(' ')[1], "secondName")

    const onEditClick = (isEdit: boolean) => {
        setIsUpdating(isEdit);
    }

    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault();
        const infoToUpdate : UpdateUserInfoRequest = {
            firstName: firstnameInput.value,
            surname: secondNameInput.value,
            phoneNumber: user.PhoneNumber
        }

        const response = await appAxios.post<UpdateUserInfoResponse>("/user/update-information", JSON.stringify(infoToUpdate), {
            headers:{
                "Authorization": "Bearer " + user.JwtToken
            }
        });

        dispatch(updateUser(response.data))
        setIsUpdating(false);
    }

    return (
        <>
            <Row className="py-2">
                <Col md={4} sm={2} xs={2} className="text-gray-500 font-extrabold tracking-widest text-2xl">
                    <span>{title}:</span>
                </Col>
                <Col className="md:text-left text-center">
                    {
                        isEditable ?
                            !isUpdating ?
                                <>
                                    {value}
                                    <ButtonGroup>
                                        <Button
                                            className='bg-transparent border-0'
                                            onClick={() => onEditClick(true)}
                                        >
                                            <PenFill
                                                size={22}
                                                color=''
                                                className='hover:fill-green-600'
                                            />
                                        </Button>
                                    </ButtonGroup>
                                </>
                                :
                                <>
                                    <InputGroup as={"form"} className="py-0" onSubmit={handleSubmit}>
                                        <Form.Control
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                            {...firstnameInput}
                                        />
                                        <Form.Control
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                            {...secondNameInput}
                                        />
                                        <Button 
                                            className='bg-transparent p-0 m-0 px-1 border-0'
                                            type='submit'
                                        >
                                            <CheckSquareFill 
                                                size={24}
                                                color=''
                                                className='hover:fill-green-600'
                                            />
                                        </Button>
                                        <Button 
                                            className='bg-transparent border-0 p-0 m-0 px-1'
                                            onClick={() => onEditClick(false)}
                                            >
                                            <XSquareFill 
                                                size={24}
                                                color=''
                                                className='hover:fill-red-600'
                                            />
                                        </Button>
                                    </InputGroup>
                                </>
                            :
                            <>
                                {value}
                            </>
                    }
                </Col>
            </Row>
        </>
    )
}