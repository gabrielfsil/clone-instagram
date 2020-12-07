
import Avatar from '../avatar'
import Comment from '../comment'
import FormInput from '../formInput'

import styles from './styles.module.css'

const profile = {
    photo: "https://avatars1.githubusercontent.com/u/54597891?s=460&u=a79e990bc2376a2683afd3f4c723a07e2198b13d&v=4",
    name: "Gabriel Fernandes"
}

function Post({ post }) {

    return (
        <div className={styles.post}>
            <Avatar profile={post.profile} />
            <div className={styles.postBody}>
                <img className={styles.postBodyImg} src={post.image} atl={post.legend ? post.legend : post.profile.name} />
            </div>
            <div className={styles.postFooter}>
                <div>
                    <button className={styles.postFooterButton}>
                        <ion-icon size="large" name="heart-outline"></ion-icon>
                    </button>
                    <button className={styles.postFooterButton}>
                        <ion-icon size="large" name="chatbubble-outline"></ion-icon>
                    </button>
                    <button className={styles.postFooterButton}>
                        <ion-icon size="large" name="paper-plane-outline"></ion-icon>
                    </button>
                </div>
                <div>
                    <button className={styles.postFooterButton}>
                        <ion-icon size="large" name="pricetag-outline"></ion-icon>
                    </button>
                </div>
            </div>
            <div className={styles.postLegend}>
                <p><strong>{post.profile.name}: </strong>{post.legend}</p>
            </div>
            <div >
                <Comment comments={post.comments} />
                <FormInput placeholder="Deixe seu comentário" textButton="Publicar" profile={profile} image onSubmit={() => { }} />
            </div>
        </div>
    )
}

export default Post