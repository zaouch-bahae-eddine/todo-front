import React from 'react'
import { useMutation } from '@apollo/client';
import { SET_TODO_STATE } from '../../Queries/UpdateTodoState';
import {
    StyleTodo,
    StyleTodoContainer,
    StyleTodoImage,
    StyleTodoTitle,
    StyleTodoType,
    StyleTodoState,
    Detail,
    StyleTodoDate
} from './StyleTodo';

function Todo(props) {
    const [changeTodoStateMutation] = useMutation(SET_TODO_STATE);
    const changeTodoState = (e) => {
        changeTodoStateMutation({
            variables: {
                id: props.todo.id,
                isDone: e.target.checked
            },
            refetchQueries: "query TodoList($filters: TodoFiltersInput, $orderBy: Ordering){" +
                "todoList: getTodoList(filters:$filters, orderBy: $orderBy){" +
                "id" +
                "title" +
                "text" +
                "createdAt" +
                "type" +
                "isDone" +
                "}" +
                "}",
        });
    };

    return (
        (props.todo.isDone === props.prevFilterIsDone || props.prevFilterIsDone === undefined) ?
            (
                <StyleTodoContainer>
                    <StyleTodo>
                        <StyleTodoTitle>{props.todo.title}</StyleTodoTitle>
                        <StyleTodoType>{props.todo.type}</StyleTodoType>
                        <StyleTodoDate>{props.todo.createdAt}</StyleTodoDate>
                        <StyleTodoState>
                            <label htmlFor="realised">Réalisée</label>
                            <input id="realised" type="checkbox" checked={props.todo.isDone} onChange={(e) => changeTodoState(e)} />
                        </StyleTodoState>
                        <Detail to={"/details/" + props.todo.id} onClick={props.storFilter}></Detail>
                        <StyleTodoImage />
                    </StyleTodo>
                </StyleTodoContainer>
            ) : null
    );
}

export default Todo;
