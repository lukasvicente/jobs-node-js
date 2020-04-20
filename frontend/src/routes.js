import React from 'react';
import { BrowserRouter,Switch, Route} from 'react-router-dom';

import Login from './page/Login';
import Register from './page/Register';
import Work from './page/Work';
import Vacancies from './page/Vacancies';
import Vacancie from './page/Vacancies/vacancie';

function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Vacancies} />
            <Route path="/vacancie/:id" component={Vacancie} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/work" component={Work} />
        </Switch>
    </BrowserRouter>
);
}

export default Routes;