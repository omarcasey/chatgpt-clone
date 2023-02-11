import { DocumentData } from "firebase/firestore"

type Props = {
    message: DocumentData
}

function Message({ message }: Props) {
    const isChatGPT = message.user.name === 'ChatGPT'

    return (
        <div className={`py-5 text-white ${isChatGPT && 'bg-[#434654]'}`}>
            <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
                <img src={message.user.avatar} alt="" className="h-8 w-8 rounded-lg" />
                <p className="text-sm pt-1">{message.text}</p>
            </div>
        </div>
    )
}

export default Message