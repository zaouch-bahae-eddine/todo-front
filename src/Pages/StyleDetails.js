import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyleDetailsTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    color: white;
    text-align: center;
    background-color: #3a0ca3;
    pad: 12px;
    & h1{
        font-size: 22pt;
    }
    & div{
        font-size: 14pt;
    }
`;
export const StyleBackLink = styled(Link)`
    text-decoration: none;
    display: block;
    font-size: 14pt;
    width: 100%;
    padding: 12px;
    margin: auto;
    background-color: #3a0ca3;
    color: white;
    border-radius: 5px;
    text-align: center;
    position: absolute;
    bottom: -41px;
    left: -3px;
    transition: .3s cubic-bezier(.3, 0, 0, 1.3);
`
export const StyleDetialsElemenets = styled.div`
    position: relative;
    max-width: 500px;
    height: 300px;
    padding: 20px;
    margin-top:12px;
    margin: auto;
    background-color: white;
    color: #3a0ca3;
    font-size: 16pt;
    text-align: center;
    border-radius: 0 0 5px 5px;
    overflow: hidden;
    &:hover ${StyleBackLink}{
        bottom: 0;
        transition: .3s cubic-bezier(.3, 0, 0, 1.3); 
    }

`;
