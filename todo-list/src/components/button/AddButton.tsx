interface AddButtonProps {
    addTodoHandler : (data : any) => void,
    classes: string | undefined
}

export const AddButton = ({classes, addTodoHandler}:AddButtonProps) => {

    return (
        <>
            <button
                className={classes}
                onClick={addTodoHandler}
            >+</button>
        </>)
}