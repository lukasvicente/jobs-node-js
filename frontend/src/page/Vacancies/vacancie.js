import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import api from '../../services/api';
 
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
 
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
 
import Typography from '@material-ui/core/Typography';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkUi from '@material-ui/core/Link';

import AppBar from '../../components/template/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:40,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'lefth',
    
  },
  textTitle:{
      marginBottom:10,
      fontSize:40,
  },
  textSubTitle:{
    marginTop:20,
    fontSize:25,
},
pos: {
    marginBottom: 40,
},
userName:{
  marginBottom: 40,
},

}));


function Vacancies(){
    const classes = useStyles();
    const nameUser = localStorage.getItem('name');
    
    const [ vacancies, setVacancies ] = useState([]);
    
    let { id } = useParams();

    useEffect( () =>{
      api.get(`vecancies/${id}`)
      .then(response => {
        setVacancies(response.data);
      })
    },[]);
 
    function handleHistory(){
      localStorage.setItem('historyVacancie',`/vacancie/${id}`)
    }

    return (
        <div>
          <AppBar /> 
        <div className={classes.root}>
           
        <Container maxWidth="md">
        <Typography  className={classes.userName} variant="h5" component="h2">
        { nameUser && (`Seja bem vindo, ${nameUser}`) }
        </Typography>
         
        <Breadcrumbs aria-label="breadcrumb">
            <LinkUi color="inherit" href="/" onClick={() => {}}>
                Home
            </LinkUi>
            <LinkUi color="inherit" href="/getting-started/installation/" onClick={() => {}}>
            <Typography color="textPrimary">Vagas</Typography>
            </LinkUi>
            
        </Breadcrumbs>
        
        <Card className={classes.root}>
      <CardContent>
        

        <Typography variant="h4" component="h2">
        {vacancies.title}
        </Typography>
        
        <Typography className={classes.pos} color="textSecondary">
        <AccessTimeIcon fontSize="inherit" style={{ color: 'red' }} />  09/04/2020 às 17:59
        <LocationOnIcon fontSize="inherit" style={{ color: 'red', marginLeft:30 }} />  {vacancies.city}/{vacancies.uf}
        </Typography>
        <Typography variant="body2" component="p">
            Desafios
            Desenvolver interface de integração de dados;
            Desenvolver, testar, documentar e dar manutenção em páginas web;
            Trabalho em equipe.

            Requisitos Mínimos
          <br />
         
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/"  style={{ textDecoration: 'none',color:"inherit" }}>
            <Button variant="contained" color="default" style={{  marginTop:30 }}>Voltar</Button>
        </Link>
         
        <Link to="/login"  style={{ textDecoration: 'none',color:"inherit" }}>
        <Button onClick={handleHistory} variant="contained" color="secondary" style={{  marginTop:30 }}>Candidate-se</Button>
        </Link>

      </CardActions>
      
    </Card>

        </Container>


      </div>
       
      </div>
    )
}

export default Vacancies;