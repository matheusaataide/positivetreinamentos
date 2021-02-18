import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TimeAgo from 'javascript-time-ago';

import ptBR from 'javascript-time-ago/locale/pt';
import br from 'javascript-time-ago/locale/br';

TimeAgo.addDefaultLocale(ptBR)
TimeAgo.addLocale(br)

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

