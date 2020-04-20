const connection = require('../database/connection');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');


module.exports = {

    async create(req,res){

        const { name, lastname, email} = req.body;
        var { password } = req.body;

       
         const encryptPassword = password => {

            const salt = bcrypt.genSaltSync(10)

            return bcrypt.hashSync(password, salt)
        }
        
        const hash = encryptPassword(password)
        
        password = hash 

        try{

            const user = await connection('users')
            .where('email',email)
            .first()
            
            if (user){
                
                return res.status(400).json({error:'User already exists'})
            }

            const [data] = await connection('users').insert({

                name, 
                lastname,
                email, 
                password, 
                 
            });

            const token = jwt.sign({ id: data}, authConfig.secret, {
                expiresIn: 86400,
            } );
             
    
            return res.json({
                id: data,
                nome: name,
                email:email,
                token:token
            });

        }catch{

            return res.status(400).json({

                error: 'Registration failed'
                
            });
        }
        

    }

}