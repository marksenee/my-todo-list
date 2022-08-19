import React from 'react';
import styled from 'styled-components';

const StyleMainTitle = styled.h3`
    margin: 0 auto;
    padding-top: 15px;
`;

function MainTitleStyle({ children, ...rest }) {
    return <StyleMainTitle {...rest}>{children}</StyleMainTitle>
}

export default MainTitleStyle;