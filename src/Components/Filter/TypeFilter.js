import React from 'react'
import {StyleFilterElement} from "./StyleFilter";

function TypeFilter(props) {
    const filtersByType = (e) => {
        let typesSelected;
        if (e.target.name === "todoTypes") {
            typesSelected = Array.from(e.target.selectedOptions, option => option.value);
        } else if (e.target.checked === true) {
            typesSelected = ["Marketing", "Communication"];
        } else {
            typesSelected = ["TYPE_DEFAULT"];
        }
        const result = (typesSelected.find(e => e === "TYPE_DEFAULT") !== undefined) ? undefined : typesSelected;
        props.controllFilterType(result);
    }

    const updateCheckBoxState = (typesSelected) => {
        if (typesSelected === undefined) {
            return false;
        }
        const defultType = typesSelected.find(e => (e === "TYPE_DEFAULT")) !== undefined;
        const marketingType = typesSelected.find(e => (e === "Marketing")) !== undefined;
        const communtiationType = typesSelected.find(e => (e === "Communication")) !== undefined;
        return (!defultType && (marketingType && communtiationType));
    }

    return (
        <React.Fragment>
            <StyleFilterElement>
                <select
                    id="type"
                    name="todoTypes"
                    multiple={true}
                    value={(props.prevFilterType !== undefined) ? props.prevFilterType : ["TYPE_DEFAULT"]}
                    onChange={(e) => { filtersByType(e) }}
                >
                    <option value="TYPE_DEFAULT">Tous types</option>
                    <option value="RH">RH</option>
                    <option value="Tech">Tech</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Communication">Communication</option>
                </select>
            </StyleFilterElement>
            <StyleFilterElement>
                <label htmlFor="business">Business</label>
                <input
                    id="business"
                    type="checkBox"
                    onChange={(e) => { filtersByType(e) }}
                    checked={updateCheckBoxState(props.prevFilterType)}
                />
            </StyleFilterElement>
        </React.Fragment>
    )
}

export default TypeFilter;
