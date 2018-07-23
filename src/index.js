import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import PeopleService from './services/PeopleService';

ReactDOM.render(<App peopleService={new PeopleService()} />, document.getElementById('root'));
registerServiceWorker();
