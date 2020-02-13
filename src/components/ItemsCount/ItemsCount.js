import React from 'react'
import PropTypes from 'prop-types'

const ItemsCount = ({items}) => <p>{items.length} items:</p>

ItemsCount.defaultProps = {
  items: []
}

ItemsCount.propTypes = {
  items: PropTypes.array
}

export default ItemsCount