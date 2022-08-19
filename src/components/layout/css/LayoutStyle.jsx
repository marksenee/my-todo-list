import React from 'react';
import styled from 'styled-components';

const StyleLayout = styled.body`
    background-color: white;
    width: 1200px;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    margin: 0 auto;
`;

function LayoutStyle({ children, ...rest }) {
    return <StyleLayout {...rest}>{children}</StyleLayout>
}

export default LayoutStyle;