import styled from "styled-components";

export default function Input({ type, placeholder, value, name, onChange, status }) {
    return <StyledInput type={type} placeholder={placeholder} onChange={onChange} value={value} name={name} status={status} />
}

const StyledInput = styled.input`
    background:rgba(255,255,255,0.15);
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
    border-radius : 2rem;
    height:3rem;
    width:130%;
    padding: 1rem;
    margin:0.5rem;
    border:none;
    outline:none;
    color:#3c354e;
    font-size:1rem;
    font-weight:bold;
    &:focus{
        display:inline-block;
        box-shadow:0 0 0 0.2rem #b9abe0;
        backdrop-filter: blur(12rem);
        border-radius:2rem;
    }
    &::placeholder{
        color:#e0daf1;
        font-weight:100;
        font-size:1rem;
    }
`;

