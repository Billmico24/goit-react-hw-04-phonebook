import { useState } from "react";

import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import { FormContainer, FromInput, SubmitButton } from "./ContactForm.styled";

export function ContactForm({onFormSubmit}) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
 const reset = () => {
   setName('');
   setNumber('');
    }
const handleOnSubmit = e => {
     e.preventDefault();
     
  onFormSubmit({
    name: name,
    number: number
  });
  
  reset();
   }

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    }
  }


  let formNameId = nanoid(3);
  let formNumberId = nanoid(3);

  return (
    <FormContainer onSubmit={handleOnSubmit}>
            <label htmlFor={formNameId}>Name</label>
             <FromInput
                  id={formNameId}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Type name"
                  value={name}
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Chris, Toby Maquire, Hubert Blaine Wolfeschlegelstein hausenbergerdorff Sr"
                  required
      />
      <label htmlFor={formNumberId} >Number</label>
             <FromInput
                  
                  id={formNumberId}
                  onChange={handleInputChange}
                  placeholder="Type number"
                  type="tel"
                  name="number"
                  value={number}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              <SubmitButton type="submit">Add contact</SubmitButton>
              </FormContainer>
  )
};

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
}