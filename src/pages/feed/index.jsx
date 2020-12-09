import { useEffect, useState } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';

import Post from "../../components/post"
import Story from "../../components/story"
import { API } from '../../service/api';


function Feed(props) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        setLoading(true);
        API.get("/posts")
            .then((response) => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch((apiError) => {
                setLoading(false);
                setError(apiError.response.data.error);
            });

    }, []);

    return (
        <div className="App">
            <Header setIsLogged={props.setIsLogged}  />
            <main>
                <div>
                    <Story />

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