
import styles from './styles.module.css'

function Avatar(props) {

    return (

        <div className={styles.header}>
            <img className={styles.image} src={props.profile.photo} atl={props.profile.name} />
            <p><strong>{props.profile.name}</strong></p>
        </div>

    )
}

export default Avatar