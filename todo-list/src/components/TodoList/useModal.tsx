import { useState, useContext } from 'react'
import { ModalContext } from '../../Context/ModalContext';

interface ModalProps {
    title: string,
    children: React.ReactElement | null
}

export const useModal = () => {
    const [modalInfo, setModalInfo] = useState({
        title: "",
        children: null
    }as ModalProps)

    const modal = useContext(ModalContext)

    const createModalInfo = (info : ModalProps) => {
        setModalInfo(info)
    }

    return {
        modal,
        modalInfo,
        createModalInfo
    }
}