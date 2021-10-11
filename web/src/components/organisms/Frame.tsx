import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Slider from '@material-ui/core/Slider'
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
  slider:{
    thumb: {
      display:'hidden'
    }
  }
}))
export interface StatusInterface {
  name: string
  val: number
}
export interface FrameProps {
  image_path?: string
  frame_name: string
  statuses: Array<StatusInterface>
}
const Word: React.FC<FrameProps> = ({
  image_path,
  frame_name,
  statuses,
}) => {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <Grid container>
        {image_path ?
          <Grid item xs={12}>
            <Typography gutterBottom variant="h5" align="center">
              <Avatar variant="rounded" className={classes.large} src={image_path} />
            </Typography>
          </Grid>
          : null}
        <Grid item xs={12}>
          <Typography gutterBottom variant="h5" align="center">
            {frame_name}
          </Typography>
        </Grid>
        {statuses.map( (status,index) => (
          <Grid item xs={12} key={index}>
            <Grid container>
              <Grid item xs={12} sm={2}>
                {status.name}
              </Grid>
              <Grid item xs={12} sm={10}>
                <Slider className={classes.slider} value={status.val} step={10} min={0} max={100} marks />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}
export default Word