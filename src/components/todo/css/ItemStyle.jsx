import React from 'react';
import styled from 'styled-components';

const StyleItem = styled.span`
    font-weight: bold;
`;

function ItemStyle({ children, ...rest }) {
    return <StyleItem {...rest}>{children}</StyleItem>
}

export default ItemStyle;