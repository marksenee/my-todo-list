import React from 'react';
import styled from 'styled-components';

const StyleContainer = styled.div`
    margin: 0 auto;
`;

function ContainerStyle({ children, ...rest }) {
    return <StyleContainer {...rest}>{children}</StyleContainer>
}

export default ContainerStyle;