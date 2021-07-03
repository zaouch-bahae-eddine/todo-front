import styled from 'styled-components';

export const StyleFilterElement = styled.div`
    margin-right: 7px;
    margin-bottom: 17px;
    & label {
        color: white;
        font-size: 14pt;
        padding: 5px;
    }
`;
export const StyleFilterDadioButton = styled.div`
    display: flex;
    flex-direction: column;
    & > div{
        display: flex;
        justify-content: space-between;
    }
}
`;
export const StyleFilterForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
    align-items: center;
    margin: auto;
    background-color: #3a0ca3;
    padding: 14px;
}
`;
export const StyleFilterButton = styled.button`
  color: #fff;
  border: 2px solid white;
  background-color: white;
  color: #3a0ca3;
  padding: 10px 25px;
  font-size: 17px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
}
`;
