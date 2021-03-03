import React from 'react';
import ReactDOM from 'react-dom';
import TimeAgo from 'javascript-time-ago';
import ptBR from 'javascript-time-ago/locale/br';

import App from './App';

TimeAgo.addDefaultLocale(ptBR);

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
