import React from 'react';
import ReactDOMServer from 'react-dom/server';
import config from 'config';
import App from 'components/App';
import axios from 'axios';
import StateApi from '../components/StateApi';

const serverRender = async () => {
    const response = await axios.get(`http://${config.host}:${config.port}/data`);
    const store = new StateApi(response.data);

    return {
        initialMarkup: ReactDOMServer.renderToString(
            <App store={store} />
        ),
        initialData: response.data
    };    
};

export default serverRender;