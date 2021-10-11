import React from 'react'
import clsx from 'clsx'
import {
  createMuiTheme, makeStyles, createStyles, Theme,
} from '@material-ui/core/styles'
import * as colors from '@material-ui/core/colors'
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
    primary: {main: colors.blue[800]}, // テーマの色
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

export interface GenericTemplateProps {
  children: React.ReactNode
}

const GenericTemplate: React.FC<GenericTemplateProps> = ({
  children,
}) => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <Navbar />
      {children}
      <Footer description=""/>
    </div>
  )
}

export default GenericTemplate
