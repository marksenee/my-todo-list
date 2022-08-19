import React from 'react';
import styled from 'styled-components';

const StyleHeader = styled.div`
    background-color: #ffe268;
    width: 700px;
    height: 100px;
    border-radius: 20px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

function HeaderStyle({ children, ...rest }) {
    return <StyleHeader {...rest}>{children}</StyleHeader>
}

export default HeaderStyle;