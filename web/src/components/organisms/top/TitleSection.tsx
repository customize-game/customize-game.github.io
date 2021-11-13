import React from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const TitleSectionOrg: React.FC = () => {
  return (
    <section>
      <Container fixed maxWidth={false}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} >
            <img src={'img/top.png'} />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default TitleSectionOrg
