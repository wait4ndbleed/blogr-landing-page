import styled from "styled-components"

type props = {
    children: React.ReactNode;
}

const Btn = styled.button`
    background: none;
    border: none;
    padding: 10px 30px;
    cursor: pointer;
    background-color: #fff;
    border-radius: 50px;
    font-weight: 700;
    color: var(--light-red);

    &:hover {
        background-color: rgba(255, 255, 255, .3);
        color: #fff;
    }
`;

export const ButtonFull = ({ children }: props) => {
    return(
        <Btn>
            {children}
        </Btn>
    )
}