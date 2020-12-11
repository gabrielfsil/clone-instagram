import { useState } from 'react'
import styles from './styles.module.css'

function Comment(props) {

    const [showAllComments, setShowAllComments] = useState(false)

    return (
        <div className={styles.comment}>
            {
                props.comments.map((comment, index) => (
                    <p key={comment.id} className={(index < 3 || showAllComments) ? styles.commentText : styles.displayNone}><strong className={styles.commentText}>{/*comment.profile.name*/} </strong>{comment.text}</p>
                ))
            }
            {
                props.comments.length > 3 &&
                <>
                    <button className={showAllComments ? styles.displayNone : styles.buttonShowMore} onClick={() => { setShowAllComments(true) }}>
                        Ver mais
                    </button>
                    <button className={!showAllComments ? styles.displayNone : styles.buttonShowMore} onClick={() => { setShowAllComments(false) }}>
                        Ocultar
                    </button>

                </>
            }
        </div>
    )
}

export default Comment