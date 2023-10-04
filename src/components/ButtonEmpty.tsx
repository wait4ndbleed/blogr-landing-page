import styled from "styled-components"

type props = {
    children: React.ReactNode;
}

const Btn = styled.button`
    background: none;
    border: 1px solid #fff;
    padding: 10px 30px;
    cursor: pointer;
    background-color: transparent;
    border-radius: 50px;
    font-weight: 700;
    color: #fff;

    &:hover {
        background-color: #fff;
        color: var(--light-red);
    }
`;

export const ButtonEmpty = ({ children }: props) => {
    return(
        <Btn>
            {children}
        </Btn>
    )
}