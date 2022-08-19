import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h3`
    padding: 20px 0px 0px 10px;
    margin: 15px 0px 0px 20px;
`;

function TitleStyle({ children, ...rest }) {
    return <StyledTitle {...rest}>{children}</StyledTitle>
}

export default TitleStyle;
