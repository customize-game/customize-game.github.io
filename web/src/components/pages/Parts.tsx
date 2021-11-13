import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

/* templates */
import TitleTemplate from '../templates/title_template'

/* organisms */
import Frame from '../organisms/Frame'
import Part from '../organisms/Part'
import Template from '../organisms/Template'

// フレーム一覧
import frames from '../../data/frames.json'
// パーツ一覧
import parts from '../../data/parts.json'
// テンプレート一覧
import templates from '../../data/templates.json'

/**
 * パーツ／フレーム紹介画面
 */
const PartsPage: React.FC = () => {
  return (
    <div>
      <TitleTemplate title="パーツ／フレーム紹介" updateAt="2021/08/23">
        <Typography align="center" gutterBottom variant="h5">
          テンプレート
        </Typography>
        <Typography align="center" gutterBottom variant="body1">
          プレイヤーは各テンプレートに従ってパーツを組み合わせます。
        </Typography>
        <Grid container>
          {
            templates.map((template, index) => (
              <Grid item xs={12} key={index}>
                <Template is_reverse={index % 2 === 0} template_name={template.name} />
              </Grid>
            ))
          }
        </Grid>
        <Typography align="center" gutterBottom variant="h5">
          パーツ
        </Typography>
        <Typography align="center" gutterBottom variant="body1">
          ロボットはテンプレートに従ってパーツを選びますが、全てのパーツを選ばなくても出撃できます。
        </Typography>
        <Grid container>
          {
            parts.map((part,index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Part part_name={part.name} />
              </Grid>
            ))
          }
        </Grid>
        <Typography align="center" gutterBottom variant="h5">
          フレーム
        </Typography>
        <Typography align="center" gutterBottom variant="body1">
          装甲、武器の総称。
          パーツ、またはフレームに装備することができます。
          フレームをつけることで、攻撃力や防御力のUP。また、自分のプレイスタイルにあった武器を選べます。
        </Typography>
        <Grid container>
          {
            frames.map((frame,index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Frame frame_name={frame.name} statuses={frame.statuses}/>
              </Grid>
            ))
          }
        </Grid>
      </TitleTemplate>
    </div>
  )
}

export default PartsPage
