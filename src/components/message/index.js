import styles from './styles.module.css'

function Message(props) {

    return (
        <div className={props.right ? styles.contentRight : styles.contentLeft}>
            {
                props.right &&
                <img className={styles.image} src={props.profile.photo} alt={props.profile.name} />

            }
            <div className={props.right ? styles.contentMessage : styles.contentMessageHost}>

                <p className={styles.message}>{props.message}</p>

            </div>
        </div>
    )
}

export default Message