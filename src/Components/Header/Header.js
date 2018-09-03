import React from 'react'
import PropTypes from 'prop-types'

import HeadBar from '../mui/HeadBar'

import './Header.scss'

const Header = ({ headerName }) => <HeadBar headerName={headerName} />

export default Header

Header.propTypes = {
  headerName: PropTypes.string.isRequired,
}
