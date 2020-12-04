import Chat from "../../components/chat"
import ListUsers from "../../components/listUsers"

import styles from './styles.module.css'

function Direct(props){

    return (
        <div className={styles.direct}>
            <ListUsers />
            <Chat />
        </div>
    )
}

export default Direct