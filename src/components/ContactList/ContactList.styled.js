import styled from "@emotion/styled";

export const ContactsTable = styled.table`
    border-collapse: collapse;
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
    box-shadow: ${props => props.theme.filters.shadow};
    margin-bottom: 50px;
`;

export const TableHeaders = styled.th`
    text-transform: uppercase;
    border: 1px solid #ddd;
    padding: 12px;
    background-color: rgba(255,255,255,0.5) ;

`;

export const TableRows = styled.tr`
    :nth-of-type(even){background-color: rgba(255,255,255,0.2)}
`;

export const TableData = styled.td`
    border: 1px solid #ddd;
    text-transform: capitalize;
    padding: 6px 0;
    padding: 8px;
    color: ${props => props.theme.colors.darkGrey};
`;

export const DeleteButton = styled.button`
    background-color:  rgba(192,198,230,0);
    border: solid 1px ;
    border-radius: 5px;
    height:25px;
    :hover {
    color: red;
    }
`;


    
