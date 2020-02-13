import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddItemForm = ({ onAdd }) => {
  const [value, setValue] = useState('');

  return (
    <form>
      <input value={value} onChange={event => setValue(event.target.value)} />
      <button
        type='submit'
        onClick={event => {
          event.preventDefault();
          onAdd(value);
        }}>
        Add
      </button>
    </form>
  );
};

AddItemForm.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default AddItemForm;
