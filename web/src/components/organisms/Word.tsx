import React from 'react'

import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

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
  return (
    <Paper >
      <Grid container direction={is_reverse ? "row-reverse" : "row"}>
        {image_path ?
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom variant="h5" align="center">
              <Avatar variant="rounded" src={image_path} />
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
