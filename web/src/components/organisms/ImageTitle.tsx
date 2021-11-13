import React from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { makeStyles } from '@mui/styles'
import { styled } from '@mui/styles'

const useStyles = makeStyles({
  typography: {
    color: '#ffffff',
  },
})
export interface ImageTitleProps {
  src: string
  children: React.ReactNode
}
const ImageTitle: React.FC<ImageTitleProps> = ({
  src,
  children,
}) => {
  const classes = useStyles()
  /**
   * Paperのスタイルをいじって背景画像を指定
   * 
   * TODO
   * もしかしてheightを指定しないといけない？
   * 画像のサイズまで広がってほしいんだけどなぁ
   */
  const MyPaper = styled(Paper)({
    backgroundImage: `url( ${src} )`,
  })
  return (
    <MyPaper
      elevation={0}
      square={true}
    >
      <Typography
        align="center"
        component="div"
        variant="h5"
        color="inherit"
        noWrap
        className={classes.typography}
      >
        {children}
      </Typography>
    </MyPaper>
  )
}

export default ImageTitle
