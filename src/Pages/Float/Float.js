import React, { Component, Fragment } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from '../../Components/Header/Header'

import withContainer from '../../Components/withContainer'

import './Float.css'

class Float extends Component {
  render() {
    const { headerName } = this.props
    return (
      <Fragment>
        <Header headerName={headerName} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

const enhance = compose(
  withContainer({ name: 'Float' }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)

export default enhance(Float)

Float.propTypes = {
  headerName: PropTypes.string.isRequired,
}
