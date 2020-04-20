import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
    color: theme.palette.text.secondary,
  },
  textTitle:{
      marginBottom:10,
      fontSize:40,
  },
  textSubTitle:{
    marginTop:20,
    fontSize:25,
},
link:{
  textDecoration:'none',
}

}));

function Vacancies(){
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const [open, setOpen] = React.useState(false);

    const [ vacancies, setVacancies ] = useState([]);

    useEffect( () =>{
      api.get('vecancies')
      .then(response => {
        setVacancies(response.data['data']);
      })
    },[]);

    if (!vacancies){
      var vazio = 'Nenhuma vaga disponivel.'
    }

    const handleClickOpen = (e) => {
      
      
    };

    return (
        <div>
           
          <AppBar /> 
        <div className={classes.root}>
            
        <Container maxWidth="lg">
         
        
        <Breadcrumbs aria-label="breadcrumb">
            <LinkUi color="inherit" href="/" onClick={() => {}}>
                Home
            </LinkUi>
            <LinkUi color="inherit" href="/getting-started/installation/" onClick={() => {}}>
            <Typography color="textPrimary">Vagas</Typography>
            </LinkUi>
            
        </Breadcrumbs>

        <Grid container spacing={3}>
          <Grid item xs={12}>
             
            <h2 className={classes.textSubTitle}>Seleção em aberto</h2>
            <Divider />
             
          </Grid> 
          
          <Grid item xs={12}>
             
            <p> {vazio} </p>

          </Grid>  

          <Grid item xs={12} md={6}>
           
          <div className={classes.root}>

            <List component="nav" aria-label="main mailbox folders">
              
              {vacancies.map( vacancie => (
                 <Link to={`/vacancie/${vacancie.id}`}   style={{ textDecoration: 'none',color:"inherit" }}> 
                <ListItem key={vacancie.id} button onClick={(e) => handleClickOpen(vacancie.id,e)}>              
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={vacancie.title} secondary={`${vacancie.city}/${vacancie.uf}`}/>
                
              </ListItem>
              </Link>
              ))}
            </List>
            
    </div>
        </Grid>
                         
        </Grid>
        </Container>


      </div>
       
      </div>
    )
}

export default Vacancies;