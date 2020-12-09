import { useState } from "react"
import { useHistory } from "react-router-dom"
import Footer from "../../components/footer"
import Header from "../../components/header"

import { API } from '../../service/api'

import styles from './styles.module.css'

function CreatePost(props) {

    const history = useHistory()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const handleCreate = async () => {

        const body = {
            title,
            description,
            imageUrl: image
        }


        try {

            const response = await API.post('/posts', body);

            if (response.data) {
                history.push('/feed')
            }

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="App">
            <Header setIsLogged={props.setIsLogged} />
            <main>
                <h1 className={styles.title}>Criando Publicação</h1>
                <form className={styles.form} onSubmit={e => e.preventDefault()}>
                    <div className={styles.card}>
                        {
                            (image && image.length > 10 )?

                                <img src={image} atl="Criando post" className={styles.previewImage} />
                                :
                                <div className={styles.awaitImage}>
                                    <ion-icon size="large" name="image-outline"></ion-icon>
                                </div>
                        }

                        <input className={styles.inputFile} value={image} onChange={e => setImage(e.target.value)} type="text" placeholder="URL da Imagem" />

                        <input type="text" className={styles.inputTitle} placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
                        <textarea className={styles.inputLegend} placeholder="Descrição" onChange={e => setDescription(e.target.value)} defaultValue={description}></textarea>
                        <button onClick={handleCreate} className={styles.submit}> Publicar </button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    )
}

export default CreatePost