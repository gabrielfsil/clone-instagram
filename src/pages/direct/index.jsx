import Chat from "../../components/chat"
import Footer from "../../components/footer"
import Header from "../../components/header"
import ListUsers from "../../components/listUsers"

import styles from './styles.module.css'

function Direct(props) {

    return (
        <div className="App">
            <Header setIsLogged={props.setIsLogged}  />
            <main>

                <div className={styles.direct}>
                    <ListUsers />
                    <Chat />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Direct