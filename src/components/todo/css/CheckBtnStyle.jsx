import React from 'react';
import styled from 'styled-components';

const StyleCheckBtn = styled.button`
    width: 40px;
    height: 30px;
    background-color: ${(props) => props.color};
    border-radius: 5px;
    border-color: transparent;
    color: white;
    margin: 12px 10px 0px 0px;
`;

function CheckBtnStyle({ children, ...rest }) {
    return <StyleCheckBtn {...rest}>{children}</StyleCheckBtn>
}

export default CheckBtnStyle;