
import { useState } from 'react'
import { API } from '../../service/api'
import Avatar from '../avatar'
import Comment from '../comment'
import FormInput from '../formInput'

import styles from './styles.module.css'

import heartOutlineIcon from '../../assets/heart-outline.svg'
import heartIcon from '../../assets/heart.svg'
import commentIcon from '../../assets/chatbubble-outline.svg'
import sendIcon from '../../assets/paper-plane-outline.svg'
import saveIcon from '../../assets/pricetag-outline.svg'

const profile = {
    photo: "https://avatars1.githubusercontent.com/u/54597891?s=460&u=a79e990bc2376a2683afd3f4c723a07e2198b13d&v=4",
    name: "Gabriel Fernandes"
}

function Post({ post }) {

    const [comment, setCommet] = useState('')
    const [like, setLike] = useState(post.like)
    const [liked, setLiked] = useState(false)

    const likePost = async () => {

        if (liked) {


            setLike(like - 1)
            setLiked(false)

        } else {

            setLike(like + 1)
            setLiked(true)
            
            API.patch(`/posts/${post.id}/like`)
                .then(res => {
                    if (res.data) {
                    }
                })
                .catch(err => {
                    console.log(err)
                })


        }

    }

    const commentPost = async () => {


        const data = {
            text: comment,
            post_id: post.id
        }

        API.post('/comments', data)
            .then(res => {

                post.comments.push(res.data)
                setCommet('')

            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <div className={styles.post}>
            <Avatar profile={post.user} />
            <div className={styles.postBody}>
                <img className={styles.postBodyImg} src={post.imageUrl} atl={post.title ? post.title : "Post do Instagram"} />
            </div>
            <div className={styles.postFooter}>
                <div>
                    <button className={styles.postFooterButton} onClick={likePost}>
                        {
                            liked ?
                                <img src={heartIcon} atl="like" className={styles.icon} style={{ width: "34px", height: "34px" }} />
                                :
                                <img src={heartOutlineIcon} atl="unlike" className={styles.icon} style={{ width: "34px", height: "34px" }} />
                        }
                    </button>
                    <button className={styles.postFooterButton}>
                        <img src={commentIcon} atl="comment" className={styles.icon} />
                    </button>
                    <button className={styles.postFooterButton}>
                        <img src={sendIcon} atl="send" className={styles.icon} />
                    </button>
                </div>
                <div>
                    <button className={styles.postFooterButton}>
                        <img src={saveIcon} atl="save" className={styles.icon} />
                    </button>
                </div>
            </div>
            <div className={styles.postLikes}>
                <strong>{like} {like === 1 ? "curtida" : "curtidas"}</strong>
            </div>
            <div className={styles.postLegend}>
                <p className={styles.textLegend}><strong>{post.user.name}: </strong>{`${post.title} \n\n ${post.description}`}</p>
            </div>
            <div >
                <Comment comments={post.comments ? post.comments : []} />
                <FormInput placeholder="Deixe seu comentário" textButton="Publicar" profile={profile} image value={comment} onChange={setCommet} onSubmit={() => { commentPost() }} />
            </div>
        </div>
    )
}

export default Post