import React from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

/* organisms */
import Navbar from '../organisms/Navbar'
import Footer from '../organisms/Footer'

export interface TitleTemplateProps {
  children: React.ReactNode
  title: string
  updateAt: string
}

const TitleTemplate: React.FC<TitleTemplateProps> = ({
  children,
  title,
  updateAt,
}) => {
  return (
    <div >
      <Navbar />
      <Container fixed>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid>
                  <Grid item xs={12}>
                    <Typography
                      align="center"
                      component="h2"
                      variant="h5"
                      color="inherit"
                      noWrap
                    >
                      {title}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid>
                  <Grid item zeroMinWidth>
                    <Typography
                      align="right"
                      component="h2"
                      variant="h5"
                      color="inherit"
                      noWrap
                    >
                      更新日：{updateAt}
                    </Typography>
                  </Grid>
                  <Grid>
                    {children}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </div>
  )
}

export default TitleTemplate
