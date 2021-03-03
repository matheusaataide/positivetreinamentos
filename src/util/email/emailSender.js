import axios from 'axios';

export default {
    send: async (to, subject, contentHTML) => {

        try {
            axios.post(
                'http://app1.iagentesmtp.com.br/api/v3/send/',
                {
                    "api_user": "contato@positivetreinamentos.com.br",
                    "api_key" : "j9ir6b0v5jt5666m4339r1o2f56670el3701t4mc22l047ln9",
                    to,
                    "from": 
                      {
                        "name": "Positive Treinamentos",
                        "email": "contato@positivetreinamentos.com.br",
                        "reply_to": "positivetreinamentos@gmail.com"
                      }
                    ,
                    subject,
                    "html": contentHTML,
                    "addheaders":
                      {
                        "x-priority" : "1"
                      }
            }).then((response) => {
                console.log(`Email enviado para <${to[0]}>`);
              }, (error) => {
                console.log(error);
              });
        } catch (err) {
            console.log(err.stack);
        }

        return { success: true };
    }
};