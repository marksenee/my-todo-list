import React from 'react';
import styled from 'styled-components';

const StyleCreateBtn = styled.button`
    width: 50px;
    height: 30px;
    background-color: black;
    border-radius: 10px;
    border-color: black;
    color: white;
    margin-top: 18px;
`;

function CreateBtnStyle({ children, ...rest }) {
    return <StyleCreateBtn {...rest}>{children}</StyleCreateBtn>
}

export default CreateBtnStyle;