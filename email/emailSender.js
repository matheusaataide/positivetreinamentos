const axios = require('axios');

const emailConfig = require('./emailConfig.json');

module.exports = {
    send: async (to, subject, contentHTML) => {
        const { api_user, api_key, reply_to } = emailConfig;

        const data = {
            api_user,
            api_key,
            to,
            from: {
                name: "Positive Treinamentos",
                email: api_user,
                reply_to
            },
            subject,
            html: contentHTML,
            addheaders: { "x-priority" : "1" }
        };

        try {
            const result = await axios.post(
                'http://app1.iagentesmtp.com.br/api/v3/send',
                { data }
            );
            
            console.log(result);
        } catch (err) {
            console.log(err.stack);
        }

        return { success: true };
    }
};