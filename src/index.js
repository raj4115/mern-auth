import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import Register from './components/Register';
import Newbook from './components/Newbook';
import Book from './components/Book';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App}/>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/books/new' component={Newbook} />
            <Route exact path='/show/:id' component={Book} />
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
