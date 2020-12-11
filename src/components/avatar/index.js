
import styles from './styles.module.css'

function Avatar(props) {

    return (

        <div className={styles.header}>
            <div className={styles.outCircle}>
                <div className={styles.innerCicle}>
                    <img className={styles.image} src={props.profile.avatar ? props.profile.avatar : "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"} atl={props.profile.name} />
                </div>
            </div>
            <p><strong>{props.profile.name}</strong></p>
        </div>

    )
}

export default Avatar