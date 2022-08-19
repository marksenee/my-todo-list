import React from 'react';
import styled from 'styled-components';

const StyledCheck = styled.div`
    height: auto;
`;

function CheckStyle({ children, ...rest }) {
    return <StyledCheck {...rest}>{children}</StyledCheck>
}

export default CheckStyle;
