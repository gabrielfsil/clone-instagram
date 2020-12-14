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
                        <div className={styles.column}>
                            {
                                (image && image.length > 10) ?

                                    <img src={image} atl="Criando post" className={styles.previewImage} />
                                    :
                                    <div className={styles.awaitImage}>
                                        <ion-icon size="large" name="image-outline"></ion-icon>
                                    </div>
                            }

                        </div>

                        <div className={styles.column}>
                            <div className={styles.groupInput}>

                                <label className={styles.label}>URL da Imagem</label>
                                <input className={styles.inputFile} value={image} onChange={e => setImage(e.target.value)} type="text" />
                            </div>
                            <div className={styles.groupInput}>

                                <label>Título</label>
                                <input type="text" className={styles.inputTitle} value={title} onChange={e => setTitle(e.target.value)} />
                            </div>
                            <div className={styles.groupInput}>
                                <label>Descrição</label>
                                <textarea className={styles.inputLegend} onChange={e => setDescription(e.target.value)} defaultValue={description}></textarea>

                            </div>
                            <button onClick={handleCreate} className={styles.submit}> Publicar </button>
                        </div>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    )
}

export default CreatePost