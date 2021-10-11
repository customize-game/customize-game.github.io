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
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    display: 'inline-block',
  },
}))
export interface WordProps {
  is_reverse: boolean
  image_path?: string
  word_name: string
  children: React.ReactNode
}
const Word: React.FC<WordProps> = ({
  is_reverse,
  image_path,
  word_name,
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
              {word_name}
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
export default Word
