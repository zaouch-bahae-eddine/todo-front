import styled from 'styled-components';


export const TodoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 920px;
    margin: auto;
    padding: 22px;
}
`;
export const TodoContainerChildren = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    max-width: 700px;
    margin: auto;
    padding: 22px;

    & > div{
        align-self: flex-start;
    }
}
`;

export const StyleEmptySpaceChild = styled.div`
    width: 230px;
    visibility: hidden;
`;
