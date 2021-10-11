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
export interface ProfileProps {
  is_reverse: boolean
  image_path?: string
  member_name?: string
  children: React.ReactNode
}
const Profile: React.FC<ProfileProps> = ({
  is_reverse,
  image_path,
  member_name,
  children
}) => {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <Grid container direction={is_reverse ? "row-reverse" : "row"}>
        {image_path ?
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom variant="h5" align="center">
              <Avatar variant="rounded" className={classes.large} src={image_path} />
            </Typography>
          </Grid>
          : null}
        <Grid item xs={12} sm={image_path ? 6 : 12}>
          <Grid>
            <Typography gutterBottom variant="h5" align="center">
              {member_name ? member_name : "メンバー募集中！"}
            </Typography>
          </Grid>
          <Grid>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
export default Profile;
