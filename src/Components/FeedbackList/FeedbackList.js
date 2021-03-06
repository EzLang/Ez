import React, { Fragment } from 'react'
import Waypoint from 'react-waypoint'
import PropTypes from 'prop-types'

import FeedbackCard from '../mui/FeedbackCard'

import './FeedbackList.css'

const FeedbackList = ({ feedbacks, fetchFeedbacks }) => {
  return (
    <Fragment>
      {feedbacks.map((feedback, id) => (
        <FeedbackCard feedback={feedback} key={id} />
      ))},
      <Waypoint onEnter={fetchFeedbacks} />
    </Fragment>
  )
}

export default FeedbackList

FeedbackList.propTypes = {
  feedbacks: PropTypes.array.isRequired,
  fetchFeedbacks: PropTypes.func.isRequired,
}
