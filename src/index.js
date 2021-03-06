import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import MainPage from './components/main-page';
import * as serviceWorker from './serviceWorker';

// Auth-login
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/AuthLogin/Login'
// Auth-login

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={MainPage} />
            <Route exact path="/registration/login" component={Login} />
        </div>
    </BrowserRouter>, document.getElementById('root'));


// ReactDOM.render(<MainPage />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
// serviceWorker.unregister();













// // client/src/index.js

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();



// // // If you want your app to work offline and load faster, you can change
// // // unregister() to register() below. Note this comes with some pitfalls.
// // // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister();
