const connection = require('../database/connection');


module.exports = {

    async index(req, res){

        const { id } = req.params;
        

        const vecancies = await connection('vecancies')
        .where('id',id)
        .first();
        
        if(!vecancies){
            return res.status(400).json('Vacancie not exists');
        }

        return res.json(vecancies);
    },

};