import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { TODO_ITEM } from '../Queries/GetTodo';
import {
    StyleDetailsTitle,
    StyleDetialsElemenets,
    StyleBackLink
} from './StyleDetails'
import Spiner from '../Components/Spiner/Spiner';
function Details() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(TODO_ITEM, {
        variables: {
            id: id
        }
    });

    if (loading) return <Spiner/>;
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            <StyleDetailsTitle>
                <h1>{data.todoElement.title}</h1>
                <div>{data.todoElement.createdAt}</div>
            </StyleDetailsTitle>
            <StyleDetialsElemenets>
                <div>{data.todoElement.text}</div>
                <div>{data.todoElement.type}</div>
                <div>{data.todoElement.isDone ? "Réalisée" : "Encours"}</div>
                <StyleBackLink to="/" >Retoure</StyleBackLink>
            </StyleDetialsElemenets>
            
        </div>
    );
}

export default Details;
