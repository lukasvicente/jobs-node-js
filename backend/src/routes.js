const express = require('express');

const authMiddlewares = require('../src/middlewares/auth'); 


const VecanciesController = require('./controllers/VecanciesController');
const VecanciesOneController = require('./controllers/VacanciesOneController');
const UsersController = require('./controllers/UsersController');
const AuthController = require('./controllers/AuthController');
const routes = express.Router();


routes.post('/users', UsersController.create);
routes.post('/auth', AuthController.index);

routes.get('/vecancies', VecanciesController.index);
routes.get('/vecancies/:id', VecanciesOneController.index);
routes.post('/vecancies', authMiddlewares ,VecanciesController.create);

routes.get('/teste', authMiddlewares,(req,res) => {
    res.json({
        ok:true,
        id:req.userId
    })
});

module.exports = routes;