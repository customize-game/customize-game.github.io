import React from 'react'

import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

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
  // const classes = useStyles()
  return (
    <Paper>
      <Grid container>
        {image_path ?
          <Grid item xs={12}>
            <Typography gutterBottom variant="h5" align="center">
              <Avatar variant="rounded" src={image_path} />
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
                <Slider value={status.val} step={10} min={0} max={100} marks />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}
export default Word
