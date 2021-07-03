import React from 'react'
import { StyleFilterElement, StyleFilterDadioButton } from "./StyleFilter";

function IsDoneFilter(props) {
    const filtersByIsDone = (e) => {
        let result;
        if (e.target.value === "IS_DONE_DEFAULT") {
            result = undefined;
        } else {
            result = JSON.parse(e.target.value);
        }
        props.controllFilterIsDone(result);
    }
    return (

        <StyleFilterElement className="radio">
            <StyleFilterDadioButton>
                <div>
                    <label htmlFor="all">Tous</label>
                    <input
                        id="all"
                        type="radio"
                        value="IS_DONE_DEFAULT"
                        checked={(props.prevFilterIsDone === undefined) ? true : false}
                        onChange={(e) => filtersByIsDone(e)}
                    />
                </div>
                <div>
                    <label htmlFor="done">Réalisé </label>
                    <input
                        id="done"
                        type="radio"
                        value="true"
                        checked={(props.prevFilterIsDone === true) ? true : false}
                        onChange={(e) => filtersByIsDone(e)}
                    />
                </div>
                <div>
                    <label htmlFor="not-done">Encours</label>
                    <input
                        id="not-done"
                        type="radio"
                        value="false"
                        checked={(props.prevFilterIsDone === false) ? true : false}
                        onChange={(e) => filtersByIsDone(e)}
                    />
                </div>
            </StyleFilterDadioButton>
        </StyleFilterElement>
    )
}

export default IsDoneFilter
