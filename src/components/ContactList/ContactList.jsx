import { ContactsTable, TableHeaders, TableRows, TableData, DeleteButton } from "./ContactList.styled";
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
      
        <ContactsTable >
            <thead>
                <TableRows>
                <TableHeaders>Name</TableHeaders>
                <TableHeaders>Phone number</TableHeaders>
                <TableHeaders></TableHeaders>
                </TableRows>
            </thead>
      
             <tbody>
                {contacts.map(el => (
                    <TableRows key={el.id}>
                    <TableData>{el.name}</TableData>
                    <TableData>{el.number}</TableData>
                    <TableData><DeleteButton type="button" onClick={() => onDeleteContact(el.id)}>delete</DeleteButton></TableData>
                    </TableRows>
                ))}  
             </tbody>
      </ContactsTable>
      )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

