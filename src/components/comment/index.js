import styles from './styles.module.css'

function Comment(props) {

    return (
        <div className={styles.comment}>
            {
                props.comments.map(comment => (
                    <p className={styles.commentText}><strong  className={styles.commentText}>{comment.profile.name}: </strong>{comment.comment}</p>
                ))
            }
        </div>
    )
}

export default Comment