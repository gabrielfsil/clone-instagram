import styles from './styles.module.css'

function Message(props) {

    return (
        <div className={props.right ? styles.contentRight : styles.contentLeft}>
            {
                props.right &&
                <img className={styles.image} src={props.profile.photo} alt={props.profile.name} />

            }
            <div className={styles.contentMessage}>
                {
                    props.message.map((message, index) => (
                        <p key={index} className={styles.message}>{message}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default Message