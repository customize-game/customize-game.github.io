import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Typography from '@material-ui/core/Typography'

import * as colors from '@material-ui/core/colors'
import {
  createMuiTheme, makeStyles, createStyles, Theme,
} from '@material-ui/core/styles'

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
}))

const Navbar: React.FC = () => {
  const classes = useStyles()
  const [isOpening, setOpening] = useState(false)
  return (
    <React.Fragment>
      <Button onClick={() => setOpening(true)}>Menu</Button>
      <SwipeableDrawer anchor="left" open={isOpening} onOpen={() => setOpening(true)} onClose={() => setOpening(false)}>
        <Button onClick={() => setOpening(false)}>Close</Button>
        <Divider variant="middle" />
        <Link to="/" className={classes.link}>
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            Top
          </Typography>
        </Link>
        <Divider variant="middle" />
        <Link to="/wanted" className={classes.link}>
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            開発メンバー募集について
          </Typography>
        </Link>
        <Link to="/crowdfunding" className={classes.link}>
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            クラウドファンディングについて
          </Typography>
        </Link>
        <Divider variant="middle" />
        <Link to="/mobile" className={classes.link}>
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            モバイルアプリについて
          </Typography>
        </Link>
        <Divider variant="middle" />
        <Link to="/world" className={classes.link}>
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            世界観
          </Typography>
        </Link>
        <Link to="/parts" className={classes.link}>
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            パーツ紹介
          </Typography>
        </Link>
        <Link to="/field" className={classes.link}>
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            対戦マップ紹介
          </Typography>
        </Link>
        <Link to="/rule_pvp" className={classes.link}>
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            ルール紹介 PvP
          </Typography>
        </Link>
        <Link to="/word" className={classes.link}>
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            用語集
          </Typography>
        </Link>
        <Divider variant="middle" />
        <Link to="/members" className={classes.link}>
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            開発メンバー
          </Typography>
        </Link>
        <Divider variant="middle" />
        <Link to="/right" className={classes.link}>
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            権利表記
          </Typography>
        </Link>
        <Link to="/question" className={classes.link}>
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            よくある質問
          </Typography>
        </Link>
      </SwipeableDrawer>
    </React.Fragment>
  )
}

export default Navbar
