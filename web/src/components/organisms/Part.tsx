import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    margin: '10px',
    maxWidth: 500,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    display: 'inline-block',
  },
}))
export interface PartProps {
  image_path?: string
  part_name: string
}
const Word: React.FC<PartProps> = ({
  image_path,
  part_name,
}) => {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <Grid container>
        {image_path ?
          <Grid item>
            <Typography gutterBottom variant="h5" align="center">
              <Avatar variant="rounded" className={classes.large} src={image_path} />
            </Typography>
          </Grid>
          : null}
        <Grid item>
          <Typography gutterBottom variant="h5" align="center">
            {part_name}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}
export default Word
