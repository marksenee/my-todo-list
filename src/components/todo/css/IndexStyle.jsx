import React from 'react';
import styled from 'styled-components';

const StyleIndex = styled.div`
    width: 650px;
    height: 60px;
    border-style: solid;
    border-width: 3px;
    border-color: white;
    border-radius: 10px;
    margin: 10px 0px 0px 20px;
    display: flex;
    justify-content: space-between;
`;

function IndexStyle({ children, ...rest }) {
    return <StyleIndex {...rest}>{children}</StyleIndex>
}

export default IndexStyle;