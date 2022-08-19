import React from 'react';
import styled from 'styled-components';

const StyleSpan = styled.span`
    margin: 23px 0px 0px 15px;
    font-size: 15px;
    font-weight: 500;
`;

function SpanStyle({ children, ...rest }) {
    return <StyleSpan {...rest}>{children}</StyleSpan>
}

export default SpanStyle;