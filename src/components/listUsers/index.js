import Avatar from '../avatar'
import styles from './styles.module.css'

const avatars = [
    {
        name: 'AppMasters',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8J--iMuAtatjP0tDt6KZni7arnDwbSZ-59s86vpYs4DW9Jm4itlt3FuL6ZRz6pyxDVVPH2UdzLpDXPhbE26SeF_WNbvP-Fffq6Q&usqp=CAU&ec=45732301'
    },
    {
        name: 'AppMasters',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8J--iMuAtatjP0tDt6KZni7arnDwbSZ-59s86vpYs4DW9Jm4itlt3FuL6ZRz6pyxDVVPH2UdzLpDXPhbE26SeF_WNbvP-Fffq6Q&usqp=CAU&ec=45732301'
    },
    {
        name: 'AppMasters',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8J--iMuAtatjP0tDt6KZni7arnDwbSZ-59s86vpYs4DW9Jm4itlt3FuL6ZRz6pyxDVVPH2UdzLpDXPhbE26SeF_WNbvP-Fffq6Q&usqp=CAU&ec=45732301'
    },
    {
        name: 'AppMasters',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8J--iMuAtatjP0tDt6KZni7arnDwbSZ-59s86vpYs4DW9Jm4itlt3FuL6ZRz6pyxDVVPH2UdzLpDXPhbE26SeF_WNbvP-Fffq6Q&usqp=CAU&ec=45732301'
    },
    {
        name: 'AppMasters',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8J--iMuAtatjP0tDt6KZni7arnDwbSZ-59s86vpYs4DW9Jm4itlt3FuL6ZRz6pyxDVVPH2UdzLpDXPhbE26SeF_WNbvP-Fffq6Q&usqp=CAU&ec=45732301'
    },
    {
        name: 'AppMasters',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8J--iMuAtatjP0tDt6KZni7arnDwbSZ-59s86vpYs4DW9Jm4itlt3FuL6ZRz6pyxDVVPH2UdzLpDXPhbE26SeF_WNbvP-Fffq6Q&usqp=CAU&ec=45732301'
    },
    {
        name: 'AppMasters',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8J--iMuAtatjP0tDt6KZni7arnDwbSZ-59s86vpYs4DW9Jm4itlt3FuL6ZRz6pyxDVVPH2UdzLpDXPhbE26SeF_WNbvP-Fffq6Q&usqp=CAU&ec=45732301'
    },
    {
        name: 'AppMasters',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8J--iMuAtatjP0tDt6KZni7arnDwbSZ-59s86vpYs4DW9Jm4itlt3FuL6ZRz6pyxDVVPH2UdzLpDXPhbE26SeF_WNbvP-Fffq6Q&usqp=CAU&ec=45732301'
    },
    {
        name: 'AppMasters',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8J--iMuAtatjP0tDt6KZni7arnDwbSZ-59s86vpYs4DW9Jm4itlt3FuL6ZRz6pyxDVVPH2UdzLpDXPhbE26SeF_WNbvP-Fffq6Q&usqp=CAU&ec=45732301'
    },
    {
        name: 'AppMasters',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8J--iMuAtatjP0tDt6KZni7arnDwbSZ-59s86vpYs4DW9Jm4itlt3FuL6ZRz6pyxDVVPH2UdzLpDXPhbE26SeF_WNbvP-Fffq6Q&usqp=CAU&ec=45732301'
    },
    {
        name: 'AppMasters',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8J--iMuAtatjP0tDt6KZni7arnDwbSZ-59s86vpYs4DW9Jm4itlt3FuL6ZRz6pyxDVVPH2UdzLpDXPhbE26SeF_WNbvP-Fffq6Q&usqp=CAU&ec=45732301'
    },
    {
        name: 'AppMasters',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8J--iMuAtatjP0tDt6KZni7arnDwbSZ-59s86vpYs4DW9Jm4itlt3FuL6ZRz6pyxDVVPH2UdzLpDXPhbE26SeF_WNbvP-Fffq6Q&usqp=CAU&ec=45732301'
    },
]


function ListUsers(props) {

    return (
        <ul className={styles.list} >

            {
                avatars.map((avatar,index) => (
                    <li key={index} className={styles.item}>
                        <Avatar profile={avatar} image />
                    </li>
                ))
            }
        </ul>
    )
}

export default ListUsers