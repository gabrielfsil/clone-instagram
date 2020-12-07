import logo from '../../logo.png';

import './style.css'

function Header() {

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Instacode
            </p>
            <form onSubmit={e => {
                e.preventDefault()
            }}>
                <input type="text" placeholder="&#128269; Search" />
            </form>
            <div>
                <button>
                    <ion-icon name="home-outline"></ion-icon>
                </button>
                <button>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </button>
                <button>
                    <ion-icon name="heart-outline"></ion-icon>
                </button>
                <img src="https://avatars1.githubusercontent.com/u/54597891?s=460&u=a79e990bc2376a2683afd3f4c723a07e2198b13d&v=4" alt="Gabriel Fernandes" />
            </div>
        </header>
    )
}

export default Header