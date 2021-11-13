import React from 'react'
import { createStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

/* templates */
import TitleTemplate from '../templates/title_template';

/**
 * よくある質問画面
 */
const QuestionPage: React.FC = () => {
  return (
    <div>
      <TitleTemplate title="よくある質問" updateAt="2021/08/23">
        <Grid container>
          <Grid item xs={10} justifyContent="flex-start">
            <Card >
              <Typography align="left" gutterBottom variant="h5">
                Q. ゲーム開発に参加したいです。
              </Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item xs={10}>
            <Card >
              <Typography align="left" gutterBottom variant="h6">
                A. いつでもご相談ください。
              </Typography>
              <Typography align="left" gutterBottom variant="body1">
                <Link underline="none" href="https://twitter.com/shassbeleth">ShassのTwitter</Link>他、開発メンバーのTwitterへリプライ、DM等で気軽にご相談ください。
              </Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-start">
          <Grid item xs={10}>
            <Card >
              <Typography align="left" gutterBottom variant="h5">
                Q. いつリリースしますか？
              </Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item xs={10}>
            <Card >
              <Typography align="left" gutterBottom variant="h6">
                A. ごめんなさいまだリリース未定です！鋭意製作中です＞＜
              </Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-start">
          <Grid item xs={10}>
            <Card >
              <Typography align="left" gutterBottom variant="h5">
                Q. こういう装備やパーツを作ってほしい！
              </Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item xs={10}>
            <Card >
              <Typography align="left" gutterBottom variant="h6">
                A. 是非聞かせてください！皆様のご意見お待ちしております！
              </Typography>
              <Typography align="left" gutterBottom variant="body1">
                必ず実装できるかというとお約束できませんが、皆様のご意見にはすべて目を通します。
              </Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-start">
          <Grid item xs={10}>
            <Card >
              <Typography align="left" gutterBottom variant="h5">
                Q. バグや要望はどこに送ったらいいの？
              </Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item xs={10}>
            <Card >
              <Typography align="left" gutterBottom variant="h6">
                A. <Link underline="none" href="https://twitter.com/shassbeleth">こちらのShassのTwitter</Link>へ気軽にリプライ、DMでご連絡ください。
              </Typography>
              <Typography align="left" gutterBottom variant="body1">
                必ず返信できるかはお約束できませんが、必ず全てに目を通します。
              </Typography>
              <Typography align="left" gutterBottom variant="body1">
                また、以下に記載致しました、GitHubのIssueに記載していただきますとShassだけでなく、開発メンバー全員がご意見、ご要望を確認できますので、こちらに記載していただくと確実です。
              </Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography align="center" gutterBottom variant="h5">
              不具合、ご要望はGitHubへ
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Card >
              <Typography align="left" gutterBottom variant="h5">
                GitHubで全ての不具合、ご要望を開発メンバーと共有しています。
              </Typography>
              <Typography align="left" gutterBottom variant="h5">
                <Link underline="none" href="https://github.com/customize-game/customize-game.github.io/issues">こちら</Link>でIssueを投稿していただけると、開発メンバーとともに、内容を精査し、不具合の修正、機能追加に最善を尽くします。
              </Typography>
              <Typography align="left" gutterBottom variant="h5">
                ※GitHubアカウントが必要となります。Sign Upよりアカウント作成してIssueを投稿してください。
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </TitleTemplate>
    </div>
  )
}

export default QuestionPage
