
import styles from './styles.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <a
                    className={styles.link}
                    href="https://appmasters.io/"
                    target="_blank"
                >
                    App Masters
                </a>
                <a
                    className={styles.link}
                    href="https://codejr.com.br/"
                    target="_blank"
                >
                    Code Júnior
                </a>
                <a
                    className={styles.link}
                    target="_blank"
                    href="/"
                >Link do Repositório</a>
            </div>
            <div className={styles.bottom}>
                <p className={styles.developer}>Desenvolvido por Gabriel Fernandes</p>

            </div>


        </footer>
    );
}

export default Footer;
