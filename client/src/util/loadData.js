import axios from 'axios';

import baseUrl from './baseUrl';

const loadData = (uri, setData) => {
    axios.get(`${baseUrl}/api${uri}`)
        .then(res => {
            try {
                const { status, content } = res.data;
                if (status) setData(content);
            } catch (err) {
                console.error(err)
            }
        });
};

export default loadData;

