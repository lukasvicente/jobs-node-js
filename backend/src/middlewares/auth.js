const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');



module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader){
        return res.status(401).json({error : 'No token provider'});
    }

    const parts = authHeader.split(' ');

    if (!parts.length === 2){
        return res.status(401).json({error : 'token error'});
    }

    const [schema, token] = parts;

    if (!/^Bearer$/i.test(schema)){
        return res.status(401).json({error : 'token malformatted'});
    }

    jwt.verify(token, authConfig.secret, (err,decoded) =>{
        if (err) return res.status(401).json({error:'Token Invalid'})

        req.userId = decoded.id;

        return next(); 
    })
}