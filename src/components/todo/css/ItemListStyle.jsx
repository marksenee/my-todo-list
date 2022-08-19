import React from 'react';
import styled from 'styled-components';

const StyleItemList = styled.div`
    margin: 17px 0px 0px 10px;
    padding-left: 10px;
`;

function ItemListStyle({ children, ...rest }) {
    return <StyleItemList {...rest}>{children}</StyleItemList>
}

export default ItemListStyle;