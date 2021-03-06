import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: '40px auto',
    width: '50%',
    minWidth: '400px',
    maxWidth: '500px',
  },
})

const Description = ({ classes, title }) => (
  <Paper className={classes.root} elevation={10}>
    <CardContent>
      <Typography gutterBottom variant="headline" component="h5">
        Examples of {title}
      </Typography>
      <Typography component="p">{feedback.feedback}</Typography>
    </CardContent>
  </Paper>
)

Description.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Description)
