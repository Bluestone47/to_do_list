import React, { useState } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemForm);
