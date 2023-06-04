interface ItemChatProps {
    text: string
}

export const ItemChat = ({ text } : ItemChatProps) => {

    return (
        <>
            <div className="px-4 py-2 min-w-full break-words border rounded-lg bg-orange-200 my-2">
                {text}
            </div>
        </>
    )
}