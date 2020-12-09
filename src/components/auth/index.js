import React from "react";

import logo from '../../logo.png'

import styles from './styles.module.css'

class AuthView extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            password: "",
        };
    }

    handleChange(key, event) {
        const newState = {};
        newState[key] = event.target.value;
        this.setState(newState);
    }

    render() {

        return (
            <div className={styles.container}>
                <div className={styles.brand}>
                    <img src={logo} className={styles.logo} alt="Instacode" />
                    <h1 className={styles.brandName}>Instacode</h1>
                </div>
                <div
                    className={styles.content}
                    style={{ display: "flex", flexDirection: "column", padding: "20px" }}
                >
                    <h2 className={styles.headerTitle}>Entre para ver o conteúdo</h2>
                    <p className={styles.headerSubtitle}>Bem vindo, {this.state.name}</p>
                    <input
                        className={styles.input}
                        placeholder="Nome"
                        disabled={this.props.loading}
                        onChange={(event) => this.handleChange("name", event)}
                        value={this.state.name}
                    />
                    <input
                        className={styles.input}
                        placeholder="E-mail"
                        type='email'
                        disabled={this.props.loading}
                        onChange={(event) => this.handleChange("email", event)}
                        value={this.state.email}
                    />
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Senha"
                        disabled={this.props.loading}
                        onChange={(event) => this.handleChange("password", event)}
                        value={this.state.password}
                    />
                    <button
                        className={styles.button}
                        disabled={this.props.loading}
                        onClick={() => this.props.handleLogin(this.state)}
                    >
                        Entrar
                    </button>
                    {this.props.error && <p>{this.props.error}</p>}
                </div>
            </div>
        );
    }
}

export default AuthView;