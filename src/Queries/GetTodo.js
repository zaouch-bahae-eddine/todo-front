import { gql } from '@apollo/client';

export const TODO_LIST = gql`
query TodoList($filters: TodoFiltersInput, $orderBy: Ordering){
    todoList: getTodoList(filters:$filters, orderBy: $orderBy){
      id
      title
      text
      createdAt
      type
      isDone
    }
  }`;

export const TODO_ITEM = gql`
query TodoList($id: ID!){
    todoElement: getTodoById(id: $id){
      id
      title
      text
      createdAt
      type
      isDone
    }
  }`;