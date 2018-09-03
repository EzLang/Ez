import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: '20px auto 0',
    width: '50%',
    minWidth: '400px',
    maxWidth: '500px',
  },
  button: {
    margin: theme.spacing.unit,
  },
})

class FeedbackForm extends React.Component {
  render() {
    const {
      classes,
      handleInputChange,
      handleCheckboxChange,
      handleSubmitClick,
      name,
      email,
      feedback,
      hidden,
    } = this.props

    return (
      <Paper className={classes.root} elevation={10}>
        <Typography variant="headline" component="h3">
          Send a feedback
        </Typography>
        <TextField
          label="Name"
          value={name}
          placeholder="public name"
          fullWidth
          className={classes.textField}
          margin="normal"
          onChange={event => handleInputChange(event, 'name')}
        />
        <TextField
          label="Email"
          value={email}
          placeholder="private, only I can see"
          fullWidth
          className={classes.textField}
          margin="normal"
          onChange={event => handleInputChange(event, 'email')}
        />
        <TextField
          label="Feedback"
          value={feedback}
          placeholder="thanks"
          fullWidth
          multiline
          className={classes.textField}
          margin="normal"
          onChange={event => handleInputChange(event, 'feedback')}
        />
        <div className="flex">
          <FormControlLabel
            control={
              <Checkbox
                checked={hidden}
                onChange={() => handleCheckboxChange()}
                color="primary"
              />
            }
            label="Hidden Feedback"
          />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => handleSubmitClick()}
          >
            Submit
          </Button>
        </div>
      </Paper>
    )
  }
}

FeedbackForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
}

export default withStyles(styles)(FeedbackForm)
