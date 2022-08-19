import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
    background-color: #ffe268;
    width: 700px;
    height: 1200px;
    border-radius: 20px;
`;

function FormStyle({ children, ...rest }) {
    return <StyledForm {...rest}>{children}</StyledForm>
}

export default FormStyle;
