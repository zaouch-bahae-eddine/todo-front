import { useLazyQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import Filter from '../Components/Filter/Filter';
import Todo from '../Components/Todo/Todo';
import { TODO_LIST } from '../Queries/GetTodo';
import { TodoContainer, TodoContainerChildren, StyleEmptySpaceChild } from "./StyleTodoList";

import Spiner from '../Components/Spiner/Spiner';

function TodoList() {
    /* Gestion LocalStorage */
    const [storedFilter, setStoredFilter] = useState(() => JSON.parse(localStorage.getItem('filter')));
    useEffect(() => {
        localStorage.setItem('filter', null);
        setStoredFilter(undefined);
    }, []);

    /* Initialisation Filter State */
    const [filterType, setFilterType] = useState(storedFilter != null ? storedFilter.types : undefined);
    const [filterIsDone, setFilterIsDone] = useState(storedFilter != null ? storedFilter.isDone : undefined);
    const [orderBy, setOrderBy] = useState(storedFilter != null ? storedFilter.orderBy : undefined);
    const queryParameters = {
        variables: {
            filters: { types: filterType },
            orderBy: orderBy
        }
    };

    const [getTodo, { error, loading, data }] = useLazyQuery(TODO_LIST);

    const changeFilterType = (newType) => {
        queryParameters.variables.filters.types = newType;
        setFilterType(newType);
        getTodo(queryParameters);
    }

    const changeFilterIsDone = (newIsDone) => {
        setFilterIsDone(newIsDone);
        getTodo(queryParameters);
    }

    const changeOrderBy = (newOrderBy) => {
        setOrderBy(newOrderBy);
        queryParameters.variables.orderBy = newOrderBy;
        getTodo(queryParameters);
    }

    const resetFilter = () => {
        setFilterType(undefined);
        setFilterIsDone(undefined);
        setOrderBy(undefined);
    }

    const storFilter = () => {
        const filter = {
            types: filterType,
            isDone: filterIsDone,
            orderBy: orderBy
        };
        localStorage.setItem('filter', JSON.stringify(filter));
    }

    if (loading) return <Spiner/>;
    if (error) return <p>Error :(</p>;
    return (
        <React.Fragment>
            <Filter
                prevFilterType={filterType}
                prevFilterIsDone={filterIsDone}
                prevOrderBy={orderBy}
                controllFilterType={changeFilterType}
                controllFilterIsDone={changeFilterIsDone}
                controllOrderBy={changeOrderBy}
                resetFilter={resetFilter}
            />

            <TodoContainer>
                <TodoContainerChildren>
                {
                    (data !== undefined) ? (
                        data.todoList.map((todo) => (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                prevFilterIsDone={filterIsDone}
                                storFilter={storFilter}
                            />
                        ))
                    ) : getTodo(queryParameters)
                }
                <StyleEmptySpaceChild/>
                <StyleEmptySpaceChild/>
                </TodoContainerChildren>
            </TodoContainer>

        </React.Fragment>
    );
}

export default TodoList;
