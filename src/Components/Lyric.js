import React from 'react'
import '../App.css';
import parse from 'html-react-parser';



export default function Lyric({letra}) {
    function stringParaHTML(string){
        return `<div>${string.replace(/\n/g, "<br>")}<div>`;
    }

    return (
        <div id = "lyric">
                {parse(stringParaHTML(letra))}
        </div>
    )
}
 