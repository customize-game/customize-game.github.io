import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

/* templates */
import TitleTemplate from '../templates/title_template'

/**
 * 直リンク等で該当ページが無かった場合に表示される404画面
 */
const NotFoundPage: React.FC = () => {
  return (
    <div>
      <TitleTemplate title="404 Not Found" updateAt="2021/08/23">
        <Typography align="center" gutterBottom variant="h5">
          申し訳ございません。お探しのページは見つかりません
        </Typography>
        <Typography align="center" variant="subtitle1" gutterBottom>
          以下のボタンよりTOP画面に戻ってください。
        </Typography>
        <Link to="/">
          <Typography align="center" variant="subtitle1" gutterBottom>
            TOPに戻る
          </Typography>
        </Link>
      </TitleTemplate>
    </div>
  )
}

export default NotFoundPage
