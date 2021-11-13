import React from 'react'

import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

export interface TemplateProps {
  is_reverse: boolean
  image_path?: string
  template_name: string
}
const Template: React.FC<TemplateProps> = ({
  is_reverse,
  image_path,
  template_name,
}) => {
  return (
    <Paper >
      <Grid container direction={is_reverse ? "row-reverse" : "row"}>
        {image_path ?
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom variant="h5" align="center">
              <Avatar variant="rounded"  src={image_path} />
            </Typography>
          </Grid>
          : null}
        <Grid item xs={12} sm={image_path ? 6 : 12}>
          <Typography gutterBottom variant="h5" align="center">
            {template_name}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}
export default Template
