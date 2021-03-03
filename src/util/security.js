const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');

const SECRET = 'p0s1t1v3.';

const security = {
    login: (user, password) => {
        if (user.password !== password) 
            return { auth: false, token: null };

        const token = jwt.sign({ id: user.id }, SECRET);
        return { auth: true, token };
    },
    authenticate: (req, res, next) => {
        const token = req.headers['x-access-token'];
    
        if (!token)
            return res.status(httpStatus.UNAUTHORIZED).json({ auth: false, msg: 'No token provided.' });
        
        jwt.verify(token, SECRET, function(err, decoded) {
            if (err) {
                console.log(err)
                return res
                        .status(httpStatus.INTERNAL_SERVER_ERROR)
                        .json({ auth: false, msg: 'Failed to authenticate token.' });
            }
            
            // se tudo estiver ok, salva no request para uso posterior
            req.userId = decoded.id;
            
            next();
        });
    }
};

module.exports = security;