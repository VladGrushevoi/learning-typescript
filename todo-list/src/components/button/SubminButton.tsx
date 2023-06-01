interface SubmitButtonProps {
    type : "submit" | "button" | "reset",
    className: string | undefined,
    text: string
}

export const SubmitButton = ({ type, className, text }: SubmitButtonProps) => {
    return (
        <>
            <button
                type={type}
                className={className}
            >
                {text}
            </button>
        </>
    )
}