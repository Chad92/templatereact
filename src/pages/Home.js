import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Home.scss';
const Home = () => {
 return (
<div className='container-home'>
<h2>Bienvenue sur le Pokédex de Kanto</h2>
<p>
Ce Pokédex est un projet en cours de développement qui vise à répertorier tous les Pokémon de la première génération.
</p>
<ul>
<p>Pour l'instant, vous pouvez consulter les informations suivantes sur chaque Pokémon :</p>
<li>* Son nom</li>
<li>* Son numéro de Pokédex</li>
<li>* Son évolution</li>
</ul>
<Button variant="contained" color="success"><Link to={'test'}>Pokédex</Link></Button>

</div>
 );
};

export default Home;