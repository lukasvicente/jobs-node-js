const connection = require('../database/connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');

module.exports = {
    async index(req, res){

        const { email, password} = req.body;

        const user = await connection('users')
        .where('email',email)
        .first()

        if (!user){
                
            return res.status(400).json({error:'User not found'})
        }

        if (!await bcrypt.compareSync( password,  user.password ) ){

            return res.status(400).json({error:'Invalid passord'})

        }

        user.password = undefined;

        const token = jwt.sign({ id: user.id}, authConfig.secret, {
            expiresIn: 86400,
        } );
        

        return res.json({ data:user, token});
    }
}