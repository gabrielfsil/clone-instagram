
import './style.css'

function Post({ post }) {

    return (
        <div className="post">
            <div className="post-header">
                <img src={post.profile.photo} atl={post.profile.name} />
                <p><strong>{post.profile.name}</strong></p>
            </div>
            <div className="post-body">
                <img src={post.image} atl="Primeiro Post" />
            </div>
            <div className="post-footer">
                <div>
                    <button>
                        <ion-icon name="heart-outline"></ion-icon>
                    </button>
                    <button>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                    </button>
                    <button>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </button>
                </div>
                <div>
                    <button>
                        <ion-icon name="pricetag-outline"></ion-icon>
                    </button>
                </div>
            </div>
            <div className="post-legend">
                <p><strong>{post.profile.name}: </strong>{post.legend}</p>
            </div>
            <div className="post-comments">
                <div>
                    {
                        post.comments.map(comment => (
                            <p><strong>{comment.profile.name}: </strong>{comment.comment}</p>
                        ))
                    }
                </div>
                <div>
                    <img src="https://avatars1.githubusercontent.com/u/54597891?s=460&u=a79e990bc2376a2683afd3f4c723a07e2198b13d&v=4" atl="Gabriel Fernandes" />
                    <input type='text' placeholder="Deixe seu comentário..." />
                    <button>
                        Publicar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Post