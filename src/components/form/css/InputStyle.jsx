import React from 'react';
import styled from 'styled-components';

const StyleInput = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 10px;
    border-color: transparent;
    margin: 20px;
    display: inline-block;
    justify-content: center;
`;

function InputStyle({ children, ...rest }) {
    return <StyleInput {...rest}>{children}</StyleInput>
}

export default InputStyle;