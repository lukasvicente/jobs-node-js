import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'


import './style.css';

import logo from '../../assets/logo.png';
 

function Work(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function HandleRegister(e){
        
    }


    return (
        <div className="register-conteiner">
            <div className="content">
                <section>
                    <img src={logo} alt="logo"/>
                

                    <h1>Trabalhe Conosco</h1>
                    <p>Faça seu cadastro, seu curriculo ficará no nosso banco de dados. </p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft  size={16} color="#e02041"/> 
                         tenho cadastro
                    </Link>
                </section>
       
                <form onSubmit={HandleRegister}>

                    <input placeholder="Nome"
                    value={nome}
                    onChange={ e => setNome(e.target.value)}
                    />

                    <input type="email" placeholder="E-Mail"
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
                    />

                    <input type="password" placeholder="Senha"
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
                    />
                    <input placeholder="WhatsApp"
                    value={whatsapp}
                    onChange={ e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">

                        <input placeholder="Cidade"
                        value={city}
                        onChange={ e => setCity(e.target.value)}
                        />
                        <input placeholder="UF" style={{ width: 80}}
                        value={uf}
                        onChange={ e => setUf(e.target.value)}
                         />

                    </div>

                    <button className="button" type="submit"> Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Work;