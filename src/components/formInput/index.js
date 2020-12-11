import styles from './styles.module.css'

function FormComment(props) {

    return (
        <form className={styles.form} onSubmit={e => {
            e.preventDefault()
            props.onSubmit()
        }} >
            {
                props.image &&

                <img className={styles.image} src={props.profile.photo} atl={props.profile.name} />
            }
            <input className={styles.input} type='text' onChange={e => props.onChange(e.target.value)} value={props.value} placeholder={props.placeholder} />
            <button className={props.value !== '' ? styles.activeButton :styles.button} disabled={props.value === ''} type="submit">
                {props.textButton}
            </button>
        </form >
    )
}

export default FormComment