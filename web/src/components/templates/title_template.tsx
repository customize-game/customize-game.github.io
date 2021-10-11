import React from 'react'

import {
  createMuiTheme, makeStyles, createStyles, Theme,
} from '@material-ui/core/styles'
import * as colors from '@material-ui/core/colors'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


/* organisms */
import Navbar from '../organisms/Navbar'
import Footer from '../organisms/Footer'


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Noto Sans JP',
      'Lato',
      '游ゴシック Medium',
      '游ゴシック体',
      'Yu Gothic Medium',
      'YuGothic',
      'ヒラギノ角ゴ ProN',
      'Hiragino Kaku Gothic ProN',
      'メイリオ',
      'Meiryo',
      'ＭＳ Ｐゴシック',
      'MS PGothic',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: { main: colors.blue[800] }, // テーマの色
  },
})

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    background: '#cccccc',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.secondary,
  },
  pageTitle: {
    margin: theme.spacing(3),
  }
}))

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
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Navbar />
      <Container fixed>
        <Grid container spacing={2} justify="center">
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
                      className={classes.pageTitle}
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
                      className={classes.pageTitle}
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
        <Footer description="" />
      </Container>
    </div>
  )
}

export default TitleTemplate
