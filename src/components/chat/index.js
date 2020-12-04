
import { useState } from 'react'
import FormInput from '../formInput'
import Message from '../message'
import styles from './styles.module.css'


const chat = [
    {
        profile: {
            name: 'AppMasters',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8J--iMuAtatjP0tDt6KZni7arnDwbSZ-59s86vpYs4DW9Jm4itlt3FuL6ZRz6pyxDVVPH2UdzLpDXPhbE26SeF_WNbvP-Fffq6Q&usqp=CAU&ec=45732301'
        },
        messages: [
            "Teste 1",
            "Teste 2",
            "Teste 3"
        ],
        createAt: 1
    },
    {
        profile: {
            name: 'AppMasters',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8J--iMuAtatjP0tDt6KZni7arnDwbSZ-59s86vpYs4DW9Jm4itlt3FuL6ZRz6pyxDVVPH2UdzLpDXPhbE26SeF_WNbvP-Fffq6Q&usqp=CAU&ec=45732301'
        },
        messages: [
            "Teste 1",
            "Teste 2",
            "Teste 3"
        ],
        createAt: 2
    },
    {
        profile: {
            name: 'AppMasters',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8J--iMuAtatjP0tDt6KZni7arnDwbSZ-59s86vpYs4DW9Jm4itlt3FuL6ZRz6pyxDVVPH2UdzLpDXPhbE26SeF_WNbvP-Fffq6Q&usqp=CAU&ec=45732301'
        },
        messages: [
            "Teste 1",
            "Teste 2",
            "Teste 3"
        ],
        createAt: 3
    },
    {
        profile: {
            name: 'AppMasters',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8J--iMuAtatjP0tDt6KZni7arnDwbSZ-59s86vpYs4DW9Jm4itlt3FuL6ZRz6pyxDVVPH2UdzLpDXPhbE26SeF_WNbvP-Fffq6Q&usqp=CAU&ec=45732301'
        },
        messages: [
            "Teste 1",
            "Teste 2",
            "Teste 3"
        ],
        createAt: 4
    },

]



function Chat(props) {

    const [messages, setMessages] = useState(chat)
    const [message, setMessage] = useState("")

    const submitMessage = () => {

        
        setMessages(
            [
                ...messages,
                {
                    profile: {
                        name: 'AppMasters',
                        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8J--iMuAtatjP0tDt6KZni7arnDwbSZ-59s86vpYs4DW9Jm4itlt3FuL6ZRz6pyxDVVPH2UdzLpDXPhbE26SeF_WNbvP-Fffq6Q&usqp=CAU&ec=45732301'
                    },
                    messages: [
                        message
                    ]
                }
            ]
        )

        setMessage("")
    }

    return (
        <div className={styles.chat}>
            <div className={styles.displayChat}>
                {
                    messages.map((group, index) => {

                        return (
                            <Message key={index} profile={group.profile} message={group.messages} right={index % 2 ? true : false} />
                        )
                    })
                }
            </div>
            <FormInput placeholder="Digite uma mensagem..." textButton="Enviar" value={message} onChange={setMessage} onSubmit={submitMessage} />
        </div>
    )
}

export default Chat