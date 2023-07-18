import styled from "styled-components";
import React from 'react';

export default function ButtonLogin({ content, goto }) {
    return (
        <StyledButton >
            <a href={goto}>   {content}</a>
        </StyledButton>

    )
}

const StyledButton = styled.button`
    background:linear-gradient(to right, #14163c 0%,#03217d 79%);
    text-transform:uppercase;
    letter-spacing: 0.2rem;
   
    width:50%;
    height:3rem;
    border:none;
    color:white;
    border-radius:2rem;
    cursor:pointer;
    margin:2rem 0.5rem 0rem 0rem;
`;
