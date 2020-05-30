import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Lyric from '../Components/Lyric.js'
import axios from 'axios'



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function BuscaLetra() {

    const classes = useStyles();
    const [artistaASerBuscado,setArtistaASerBuscado] = useState('');
    const [musicaASerBuscada,setMusicaASerBuscada] = useState('');
    const [letraEncontrada, setLetraEncontrada] = useState('Insira um artista e uma música.');

    function buscarLetraDeMusica(event)
    {
        event.preventDefault();
        var urlAPI = "https://api.lyrics.ovh/v1/";
        
        if(artistaASerBuscado.trim !== '' && musicaASerBuscada.trim !== '')
        {
            axios.get(urlAPI + substituiEspacosVaziosNaString(artistaASerBuscado) +"/"+ substituiEspacosVaziosNaString(musicaASerBuscada))
            .then( response =>{
                setLetraEncontrada(response.data.lyrics);
            })
            .catch(error =>{
                setLetraEncontrada("Nenhuma música ou artista encontrado.")
            })
        }
    }

    function substituiEspacosVaziosNaString(string)
    {
        return string.replace(" ","_")
    }

    return (
        <div id= "areaBusca">
            <form >
            
            <span class = "entrada"><TextField id="outlined-basic" label="Musica" variant="outlined" className = "botao"  /></span>
            <span class = "entrada"><TextField id="outlined-basic" label="artista" variant="outlined" className = "botao" /></span>
            <div class = "botao"> 
            <Button variant="contained" color="primary" onClick = {buscarLetraDeMusica} > Buscar </Button>
            </div>
            </form>
            <Lyric letra ={letraEncontrada}/>
        </div>
    )
}
