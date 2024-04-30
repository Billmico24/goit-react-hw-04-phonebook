import styled from "@emotion/styled";

export const FormContainer = styled.form`
    margin: 0 auto;
    display:flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 5px;
    max-width: 330px;
    box-shadow: ${props => props.theme.filters.shadow};
    padding: 10px;
    background-image: ${props => props.theme.gradients.grey};
    text-transform: uppercase;
`;

export const FromInput = styled.input`
    height: 20px;
    margin-bottom: 8px;
    border-top: 1px;
    border-left: 1px;
    border-right: 1px;
    border-width: 1px;
    background-color: rgb(242, 191, 94, 0);
`;

export const SubmitButton = styled.button`
    width: 150px;
    margin: 0 auto;
    padding: 5px;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    color: rgb(45, 45, 45);
    border-radius: 5px;
    box-shadow: ${props => props.theme.filters.shadow};
    background-color: rgb(242, 191, 94, 0);
    :hover {
    background-color: rgba(192,198,230,0.3); 
    }
    :active {
    transform: translateY(1px);
`;