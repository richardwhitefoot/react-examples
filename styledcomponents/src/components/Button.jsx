import styled, { css } from 'styled-components';

export const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 1em;
    padding: 0.25em 1em;
    color: ${props => props.theme.main};
    border: 2px solid ${props => props.theme.main};

    ${props =>
        props.primary &&
        css`
        background: palevioletred;
        color: white;
        `};
`

// override styles
export const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`;

