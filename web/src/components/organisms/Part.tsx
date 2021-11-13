import React from 'react'

import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

export interface PartProps {
  image_path?: string
  part_name: string
}
const Word: React.FC<PartProps> = ({
  image_path,
  part_name,
}) => {
  return (
    <Paper >
      <Grid container>
        {image_path ?
          <Grid item>
            <Typography gutterBottom variant="h5" align="center">
              <Avatar variant="rounded" src={image_path} />
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
