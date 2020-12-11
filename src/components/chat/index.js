
import { useState } from 'react'
import FormInput from '../formInput'
import Message from '../message'
import styles from './styles.module.css'


const chat = [
    {
        profile: {
            host: true,
            photo: "https://avatars1.githubusercontent.com/u/54597891?s=460&u=a79e990bc2376a2683afd3f4c723a07e2198b13d&v=4",
            name: "Gabriel Fernandes"
        },
        message: "Olá App Masters",
        createAt: new Date(2020, 12, 8, 10)
    },
    {
        profile: {
            host: true,
            photo: "https://avatars1.githubusercontent.com/u/54597891?s=460&u=a79e990bc2376a2683afd3f4c723a07e2198b13d&v=4",
            name: "Gabriel Fernandes"
        },
        message: "Tudo jóia?",
        createAt: new Date(2020, 12, 8, 10, 1)
    },
    {
        profile: {
            host: true,
            photo: "https://avatars1.githubusercontent.com/u/54597891?s=460&u=a79e990bc2376a2683afd3f4c723a07e2198b13d&v=4",
            name: "Gabriel Fernandes"
        },
        message: "Gostaria de agradecer pelo treinamento de React, foi realmente muito engrandecedor!",
        createAt: new Date(2020, 12, 8, 10, 2)
    },
    {
        profile: {
            host: false,
            name: 'AppMasters',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8J--iMuAtatjP0tDt6KZni7arnDwbSZ-59s86vpYs4DW9Jm4itlt3FuL6ZRz6pyxDVVPH2UdzLpDXPhbE26SeF_WNbvP-Fffq6Q&usqp=CAU&ec=45732301'
        },
        message: "Olá Gabriel, tudo jóia!",
        createAt: new Date(2020, 12, 8, 11)
    },
    {
        profile: {
            host: false,
            name: 'AppMasters',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8J--iMuAtatjP0tDt6KZni7arnDwbSZ-59s86vpYs4DW9Jm4itlt3FuL6ZRz6pyxDVVPH2UdzLpDXPhbE26SeF_WNbvP-Fffq6Q&usqp=CAU&ec=45732301'
        },
        message: "Que bom que gostou!!",
        createAt: new Date(2020, 12, 8, 12)
    },
    {
        profile: {
            host: true,
            photo: "https://avatars1.githubusercontent.com/u/54597891?s=460&u=a79e990bc2376a2683afd3f4c723a07e2198b13d&v=4",
            name: "Gabriel Fernandes"
        },
        message: "Espero que façamos próximos no futuro!",
        createAt: new Date(2020, 12, 8, 12, 20)
    },

]

chat.sort((item) => !item.createAt)

function Chat(props) {

    const [messages, setMessages] = useState(chat)
    const [message, setMessage] = useState("")

    const submitMessage = () => {


        setMessages(
            [
                ...messages,
                {
                    profile: {
                        host: true,
                        photo: "https://avatars1.githubusercontent.com/u/54597891?s=460&u=a79e990bc2376a2683afd3f4c723a07e2198b13d&v=4",
                        name: "Gabriel Fernandes"
                    },
                    message: message,
                    createAt: new Date()
                }
            ]
        )

        setMessage("")
    }

    return (
        <div className={styles.chat}>
            <div className={styles.displayChat}>
                {
                    messages.map((messagem, index) => {

                        return (
                            <Message key={index} profile={messagem.profile} message={messagem.message} right={!messagem.profile.host} />
                        )
                    })
                }
            </div>
            <FormInput placeholder="Digite uma mensagem..." textButton="Enviar" value={message} onChange={setMessage} onSubmit={submitMessage} />
        </div>
    )
}

export default Chat