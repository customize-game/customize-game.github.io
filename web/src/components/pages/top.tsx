import React from 'react'
import { Link } from 'react-router-dom'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

import * as colors from '@material-ui/core/colors'
import {
  createMuiTheme, makeStyles, createStyles, Theme,
} from '@material-ui/core/styles'

/* organisms */
import Navbar from '../organisms/Navbar'
import Footer from '../organisms/Footer'

/* template */
// import GenericTemplate from '../templates/generic_template'

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
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.secondary,
  },
  active: {
    color: 'inherit',
  },
  pageTitle: {
    margin: theme.spacing(3),
  },
  image: {
    height: 600
  },
  list: {
    maxHeight: 350,
    position: 'relative',
    overflow: 'auto',
  }
}))

const updateInformationList = [
  {
    date: '2021/08/18',
    title: '最新情報',
    path: '/update_information/update_20210817'
  },
  {
    date: '2021/08/18',
    title: '最新情報',
    path: '/update_information/update_20210817'
  },
  {
    date: '2021/08/18',
    title: '最新情報',
    path: '/update_information/update_20210817'
  },
  {
    date: '2021/08/18',
    title: '最新情報',
    path: '/update_information/update_20210817'
  },
  {
    date: '2021/08/18',
    title: '最新情報',
    path: '/update_information/update_20210817'
  },
  {
    date: '2021/08/18',
    title: '最新情報',
    path: '/update_information/update_20210817'
  },
  {
    date: '2021/08/18',
    title: '最新情報',
    path: '/update_information/update_20210817'
  },
  {
    date: '2021/08/18',
    title: '最新情報',
    path: '/update_information/update_20210817'
  },
  {
    date: '2021/08/18',
    title: '最新情報',
    path: '/update_information/update_20210817'
  }
]

/**
 * TOP画面
 */
const TopPage: React.FC = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Navbar />
      <Container fixed>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <Card className={classes.image}>
              <CardContent>
                <Typography
                  align="center"
                  component="h2"
                  variant="h5"
                  color="inherit"
                  noWrap
                  className={classes.link}
                >
                  TOP画像
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Link to="/wanted" className={classes.link}>
              <Card>
                <CardContent>
                  <Typography
                    align="left"
                    component="h2"
                    variant="h5"
                    color="inherit"
                    noWrap
                    className={classes.link}
                  >
                    開発メンバー募集中！！！
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/crowdfunding" className={classes.link}>
              <Card>
                <CardContent>
                  <Typography
                    align="left"
                    component="h2"
                    variant="h5"
                    color="inherit"
                    noWrap
                    className={classes.link}
                  >
                    クラウドファンディング支援募集中！！！
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography
                  align="left"
                  component="h2"
                  variant="h5"
                  color="inherit"
                  noWrap
                  className={classes.link}
                >
                  最新情報
                </Typography>
                <List className={classes.list}>
                  {updateInformationList.map((updateInformation, index) => (
                    <Link to={updateInformation.path} className={classes.link}>
                      <ListItem key={index} dense>
                        <Typography
                          align="left"
                          component="h2"
                          variant="h5"
                          color="inherit"
                          noWrap
                          className={classes.link}
                        >
                          {updateInformation.date} {updateInformation.title}
                        </Typography>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Link to="/mobile" className={classes.link}>
              <Card>
                <CardContent>
                  <Typography
                    align="left"
                    component="h2"
                    variant="h5"
                    color="inherit"
                    noWrap
                    className={classes.link}
                  >
                    モバイルアプリリリース！！
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link to="/world" className={classes.link}>
              <Card>
                <CardContent>
                  <Typography
                    align="left"
                    component="h2"
                    variant="h5"
                    color="inherit"
                    noWrap
                    className={classes.link}
                  >
                    世界観
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link to="/parts" className={classes.link}>
              <Card>
                <CardContent>
                  <Typography
                    align="left"
                    component="h2"
                    variant="h5"
                    color="inherit"
                    noWrap
                    className={classes.link}
                  >
                    パーツ／フレーム紹介
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link to="/field" className={classes.link}>
              <Card>
                <CardContent>
                  <Typography
                    align="left"
                    component="h2"
                    variant="h5"
                    color="inherit"
                    noWrap
                    className={classes.link}
                  >
                    対戦マップ紹介
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link to="/rule_pvp" className={classes.link}>
              <Card>
                <CardContent>
                  <Typography
                    align="left"
                    component="h2"
                    variant="h5"
                    color="inherit"
                    noWrap
                    className={classes.link}
                  >
                    ルール紹介 PvP
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link to="/rule_pve" className={classes.link}>
              <Card>
                <CardContent>
                  <Typography
                    align="left"
                    component="h2"
                    variant="h5"
                    color="inherit"
                    noWrap
                    className={classes.link}
                  >
                    ルール紹介 PvE
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/word" className={classes.link}>
              <Card>
                <CardContent>
                  <Typography
                    align="left"
                    component="h2"
                    variant="h5"
                    color="inherit"
                    noWrap
                    className={classes.link}
                  >
                    用語集
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/members" className={classes.link}>
              <Card>
                <CardContent>
                  <Typography
                    align="left"
                    component="h2"
                    variant="h5"
                    color="inherit"
                    noWrap
                    className={classes.link}
                  >
                    開発メンバー
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/right" className={classes.link}>
              <Card>
                <CardContent>
                  <Typography
                    align="left"
                    component="h2"
                    variant="h5"
                    color="inherit"
                    noWrap
                    className={classes.link}
                  >
                    権利表記
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/question" className={classes.link}>
              <Card>
                <CardContent>
                  <Typography
                    align="left"
                    component="h2"
                    variant="h5"
                    color="inherit"
                    noWrap
                    className={classes.link}
                  >
                    よくある質問
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Footer description="" />
    </React.Fragment>
  )
}

export default TopPage
