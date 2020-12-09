import { Link } from 'react-router-dom';
import logo from '../../logo.png';

import './style.css'

function Header(props) {

    const logoutUser = () => {

        localStorage.clear()
        props.setIsLogged(false)
    }

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="Instacode" />
            <p>
                Instacode
            </p>
            <form onSubmit={e => {
                e.preventDefault()
            }}>
                <input type="text" placeholder="&#128269; Search" />
            </form>
            <div>
                <Link to="/create">
                    <button>
                        <ion-icon name="add-outline"></ion-icon>
                    </button>
                </Link>
                <Link to="/feed">
                    <button>
                        <ion-icon name="home-outline"></ion-icon>
                    </button>
                </Link>
                <Link to="/direct">
                    <button>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </button>
                </Link>
                <button>
                    <ion-icon name="heart-outline"></ion-icon>
                </button>
                <img src="https://avatars1.githubusercontent.com/u/54597891?s=460&u=a79e990bc2376a2683afd3f4c723a07e2198b13d&v=4" alt="Gabriel Fernandes" />
                <button id="exit" onClick={logoutUser} >
                    Sair {" "} <ion-icon name="exit-outline"></ion-icon>
                </button>
            </div>
        </header>
    )
}

export default Header