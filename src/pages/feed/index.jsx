import { useEffect, useState } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';

import Post from "../../components/post"
import Story from "../../components/story"
import { API } from '../../service/api';

import styles from './styles.module.css'

function Feed(props) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        loadingPosts()

    }, []);

    const loadingPosts = async () => {

        setLoading(true);
        API.get("/posts")
            .then((response) => {
                setPosts(response.data);
                setLoading(false);
                setError(null)
            })
            .catch((apiError) => {
                setLoading(false);
                setError(apiError.response.data.error);
                console.log(apiError)
            });

    }

    return (
        <div className="App">
            <Header setIsLogged={props.setIsLogged} />
            <main>
                <div>
                    <Story />
                    {
                        error &&
                        <div className={styles.contentMessage}>
                            <strong className={styles.error}>Ocorreu um erro!</strong>
                            <strong className={styles.error}>Tente novamente para corrigí-lo</strong>
                            <p>Caso o erro persista clique no botão sair e realize o login novamente</p>
                            <button className={styles.button} onClick={loadingPosts}>
                                Tentar novamente
                            </button>
                        </div>
                    }

                    {
                        loading && 
                        <div className={styles.contentMessage}>
                            <strong className={styles.text}>Carregando . . .</strong>
                            
                        </div>
                    }

                    {posts.map(post => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>

            </main>
            <Footer />
        </div>
    )
}

export default Feed