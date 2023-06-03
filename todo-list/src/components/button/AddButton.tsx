interface AddButtonProps {
    addTodoHandler : (data : any) => void,
    className: string | undefined
}

export const AddButton = ({className, addTodoHandler}:AddButtonProps) => {

    return (
        <>
            <button
                className={className}
                onClick={addTodoHandler}
            >+</button>
        </>)
}