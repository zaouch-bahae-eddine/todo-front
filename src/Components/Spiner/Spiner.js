import React from 'react'
import {StyleSpiner, StyleSpinerBlock} from './StyleSpiner';
    
function Spiner(props) {
    return (
        <StyleSpiner size={props.size} duration={props.duration}>
            <StyleSpinerBlock size={props.size} duration={props.duration}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </StyleSpinerBlock>
        </StyleSpiner>
    )
}

export default Spiner
