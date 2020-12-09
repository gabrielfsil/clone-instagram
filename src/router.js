import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import { useState } from 'react';
import AuthView from './components/auth'
import { API, setAuthToken } from './service/api';



import Direct from './pages/direct'
import Feed from './pages/feed'
import CreatePost from './pages/create';


const PrivateRoutes = (props) => {

    return (
        <Switch>
            <Route path="/feed" exact >
                <Feed setIsLogged={props.setIsLogged} />
            </Route>
            <Route path="/direct" exact >
                <Direct setIsLogged={props.setIsLogged} />
            </Route>
            <Route path="/create" exact >
                <CreatePost setIsLogged={props.setIsLogged} />
            </Route>

            <Redirect from="*" to="/feed" />
        </Switch>
    )
}

const PublicRoutes = (props) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    return (
        <Switch>
            <Route path="/login" exact >
                <AuthView
                    loading={loading}
                    error={error}
                    handleLogin={(user) => {
                        if (user && user.password) {
                            setLoading(true);
                            API.post("/users/login", user)
                                .then((response) => {
                                    setAuthToken(response.data.token);
                                    props.setIsLogged(response.data);
                                    setLoading(false);
                                })
                                .catch((apiError) => {
                                    setLoading(false);
                                    setError(apiError.response.data.error);
                                });
                        }
                    }}
                />
            </Route>
            <Redirect from="*" to="/login" />
        </Switch>
    )
}

export const Routes = () => {

    const initialState = localStorage.getItem("auth-token");
    const [isLogged, setIsLogged] = useState(initialState);


    return (
        <Router>
            {
                isLogged ?
                    <PrivateRoutes
                        setIsLogged={setIsLogged}
                    />
                    :
                    <PublicRoutes
                        setIsLogged={setIsLogged}
                    />
            }
        </Router>
    )
}