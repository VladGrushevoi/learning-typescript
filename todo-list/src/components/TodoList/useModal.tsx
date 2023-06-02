import { useState, useContext } from 'react'
import { IModalContext, ModalContext } from '../../Context/ModalContext';

interface ModalProps {
    title: string,
    children: React.ReactElement | null
}

export interface ModalInfo {
    modal : IModalContext,
    modalInfo : ModalProps,
    createModal : (info : ModalProps) => void
}

export const useModal = () : ModalInfo => {
    const [modalInfo, setModalInfo] = useState({
        title: "",
        children: null
    }as ModalProps)

    const modal = useContext(ModalContext)

    const createModal = (info : ModalProps) => {
        setModalInfo(info)
    }

    return {
        modal,
        modalInfo,
        createModal
    }
}