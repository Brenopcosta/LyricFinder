import React from 'react'
import '../App.css';


export default function Lyric({letra}) {
    return (
        <div id = "lyric">
            <text>
                {letra}
            </text>
        </div>
    )
}
 