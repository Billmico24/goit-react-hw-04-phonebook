import { SearchInput } from "./Filter.styled"
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
    return (
        <label htmlFor="">
            Find contacts by name <SearchInput type="text" value={value} onChange={onChange} />
          </label>
    )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};