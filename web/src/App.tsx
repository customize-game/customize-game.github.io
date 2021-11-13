import React from 'react'
import Routes from './Routes'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import GlobalStyles from '@mui/material/GlobalStyles'

/**
 * テーマの定義
 */
const theme = createTheme({
  palette: {
    background: {
      default: '#000000',
      paper: '#333333',
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    // TODO フォントダサくない？
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
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          border: "1px solid rgba(255,255,255,1)",
          color: "white",
        },
      },
    },
  },
})

/**
 * MUIによらないbodyやhtmlタグのスタイル定義
 */
const globalStyles = {
  body: {
    background: '#000000',
  },
  // 画像のサイズは基本親コンポーネントでサイズを指定するので100%固定
  img: {
    width: '100%',
  }
}
const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyles styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
