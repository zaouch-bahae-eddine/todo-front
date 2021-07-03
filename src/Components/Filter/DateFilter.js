import React from 'react';
import {StyleFilterElement} from "./StyleFilter";

function DateFilter(props) {
    const orderByDateFilter = (e) => {
        let result;
        result = (e.target.value === "DATE_DEFAULT") ? undefined : e.target.value;
        props.controllOrderBy(result);
    }

    return (
        <StyleFilterElement>
            <label htmlFor="orderDate">Date</label>
            <select id="orderDate" value={props.prevOrderBy === undefined ? "DATE_DEFAULT" : props.prevOrderBy} onChange={(e) => { orderByDateFilter(e) }}>
                <option value="DATE_DESC">Décroissant</option>
                <option value="DATE_ASC">Croissant</option>
                <option value="DATE_DEFAULT">Par défaut</option>
            </select>
        </StyleFilterElement>
    )
}

export default DateFilter;
