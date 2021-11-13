import React from 'react'
import { makeStyles } from '@mui/styles'

import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

/* templates */
import TitleTemplate from '../templates/title_template'

/**
 * メンバー募集画面
 */
const RecruitmentPage: React.FC = () => {
  return (
    <div>
      <TitleTemplate title="ゲーム作成メンバー募集中！" updateAt="2021/08/23">
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography align="center" gutterBottom variant="h5">
              一緒にゲームを作りたい方、随時募集中です！
            </Typography>
            <Typography align="center" gutterBottom variant="body1">
              参加希望、質問、ご意見等ありましたら、<a href="https://twitter.com/shassbeleth">こちら</a>までご連絡くださいませ。
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper >
              <Typography gutterBottom variant="h5" align="center">
                タスク管理
                <CardMedia>
                  <img src="https://img.shields.io/badge/-Github-black?logo=github" />
                </CardMedia>
              </Typography>
              <Typography gutterBottom variant="body1" align="center">
                各開発メンバーのタスクはGitHub上で管理して作業を行います。
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper >
              <Typography gutterBottom variant="h5" align="center">
                ミーティング
                <CardMedia>
                  <img src="https://img.shields.io/badge/-discord-black?logo=discord" />
                </CardMedia>
              </Typography>
              <Typography gutterBottom variant="body1" align="center">
                毎週の進捗報告、臨時ミーティングはDiscordで行います。
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper >
              <Typography align="center" gutterBottom variant="h5">
                使用するプログラミング言語／ライブラリ等
                <CardMedia>
                  <img src="https://img.shields.io/badge/-Rust-black?logo=rust" />
                </CardMedia>
                <CardMedia>
                  <img src="https://img.shields.io/badge/-Typescript-black?logo=TypeScript" />
                </CardMedia>
                <CardMedia>
                  <img src="https://img.shields.io/badge/-Csharp-black?logo=csharp" />
                </CardMedia>
                <CardMedia>
                  <img src="https://img.shields.io/badge/-React-black?logo=React" />
                </CardMedia>
                <CardMedia>
                  <img src="https://img.shields.io/badge/-Flutter-black?logo=Flutter" />
                </CardMedia>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper >
              <Typography align="center" gutterBottom variant="h5">
                ソースコード管理
                <CardMedia>
                  <img src="https://img.shields.io/badge/-Github-black?logo=github" />
                </CardMedia>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper >
              <Typography align="center" gutterBottom variant="h5">
                アセット管理(BGM/Graphic等)
                <CardMedia>
                  <img src="https://img.shields.io/badge/-GoogleDrive-black?logo=GoogleDrive" />
                </CardMedia>
              </Typography>
            </Paper>
          </Grid>
        </Grid>

      </TitleTemplate>
    </div>
  )
}

export default RecruitmentPage
