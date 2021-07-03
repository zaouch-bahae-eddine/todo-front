import { gql } from '@apollo/client';

export const SET_TODO_STATE = gql`
mutation updateTodoStatusById($id: ID!, $isDone: Boolean!){
    updateTodoStatusById(id: $id,isDone: $isDone){
    id
    isDone
    }
}`;