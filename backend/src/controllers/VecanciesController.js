const connection = require('../database/connection');


module.exports = {

    async index(req, res){

        const vecancies = await connection('vecancies').select('*');

        return res.json({

            data: vecancies
            
        });
    },

    async create( req, res){
        
        const { title, goal,description, city, uf } = req.body;

        await connection('vecancies').insert({
            title, 
            goal,
            description, 
            city, 
            uf,
        });

        return res.json('sucess');
    }

};