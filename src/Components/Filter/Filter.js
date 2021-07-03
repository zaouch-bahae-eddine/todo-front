import React from 'react';
import DateFilter from './DateFilter';
import TypeFilter from './TypeFilter';
import IsDoneFilter from './IsDoneFilter';
import {StyleFilterForm, StyleFilterButton} from "./StyleFilter";

function Filter(props) {
    return (
        <StyleFilterForm>
            <DateFilter
                prevOrderBy={props.prevOrderBy}
                controllOrderBy={props.controllOrderBy}
            />
            <IsDoneFilter 
                prevFilterIsDone={props.prevFilterIsDone}
                controllFilterIsDone={props.controllFilterIsDone}
            />
            <TypeFilter
                prevFilterType={props.prevFilterType}
                controllFilterType={props.controllFilterType}
            />
            <StyleFilterButton onClick={()=>{props.resetFilter();}}>Initialiser</StyleFilterButton>
        </StyleFilterForm>
    )
}

export default Filter;
