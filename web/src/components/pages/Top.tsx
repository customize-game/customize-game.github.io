import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

/* organisms */
import TopSection from '../organisms/TopSection'
import TitleSection from '../organisms/top/TitleSection'
import ImageTitle from '../organisms/ImageTitle'
import UpdateInfoList from '../organisms/UpdateInfoList'
import Navbar from '../organisms/Navbar'
import Footer from '../organisms/Footer'

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  subTitle: {
    whiteSpace: "pre-line",
  },
  worldSection: {
    width: "100%",
    paddingTop: "10px",
    paddingBottom: "10px",
    backgroundImage: `url(/img/top_world_background.png)`,
    backgroundSize: "100% auto",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
  },
  partsSection: {
    width: "100%",
    paddingTop: "10px",
    paddingBottom: "10px",
    backgroundImage: `url(/img/top_parts_background.png)`,
    backgroundSize: "100% auto",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
  },
  mobileSection: {
    width: "100%",
    paddingTop: "10px",
    paddingBottom: "10px",
    backgroundImage: `url(/img/top_mobile_background.png)`,
    backgroundSize: "100% auto",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
  },
  updateList: {
    paddingTop: "100px",
    paddingBottom: "100px",
  },
}))

/**
 * TOP画面
 */
const TopPage: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <React.Fragment>
      <Navbar />
      <TitleSection />
      <TopSection
        isReverse={true}
        title={'すべての敵を蹴散らせ'}
        descriptions={[
          '1～6人のチームを組んで敵を蹴散らせ！',
          '最大20人の同時対戦。全てのチームの頂点に立て！',
        ]}
        onClickDetailButton={() => history.push('/world')}
        sectionClass={classes.worldSection}
      />
      <TopSection
        isReverse={false}
        title={'自分だけのロボットで戦え！'}
        descriptions={[
          '骨格、装甲、武器、カラーリング、デカール、そしてステータス',
          '無限の組み合わせから自分だけのロボットを作り上げろ！',
        ]}
        onClickDetailButton={() => history.push('/parts')}
        sectionClass={classes.partsSection}
      />
      <TopSection
        isReverse={true}
        title={'スマホからいつでもカスタマイズ！'}
        descriptions={[
          'スマホアプリと連携していつでもロボットのカスタマイズが可能！',
          '戦績と相手のカスタマイズを参考にオリジナルのロボットを作り続けろ！',
        ]}
        onClickDetailButton={() => history.push('/mobile')}
        sectionClass={classes.mobileSection}
      />
      <section className={classes.updateList}>
        <Container fixed maxWidth={false}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={12} md={8} lg={6} xl={4}><UpdateInfoList /></Grid>
          </Grid>
        </Container>
      </section>
      <section>
        <Container fixed maxWidth={false}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <ImageTitle src="img/top_recruit.png" >
                開発メンバー募集中
              </ImageTitle>
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    align="center"
                    component="h2"
                    variant="h5"
                    color="inherit"
                    noWrap
                  >
                    鋭意製作中
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button>詳細はこちら</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <ImageTitle src="img/top_crowdfunding.png" >
                クラウドファンディング支援募集中
              </ImageTitle>
            </Grid>
            <Grid item xs={12}>
              <Link to="/field" >
                <Card>
                  <CardContent>
                    <Typography
                      align="left"
                      component="h2"
                      variant="h5"
                      color="inherit"
                      noWrap
                    >
                      対戦マップ紹介
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link to="/rule_pvp" >
                <Card>
                  <CardContent>
                    <Typography
                      align="left"
                      component="h2"
                      variant="h5"
                      color="inherit"
                      noWrap
                    >
                      ルール紹介 PvP
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link to="/word">
                <Card>
                  <CardContent>
                    <Typography
                      align="left"
                      component="h2"
                      variant="h5"
                      color="inherit"
                      noWrap
                    >
                      用語集
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link to="/members" >
                <Card>
                  <CardContent>
                    <Typography
                      align="left"
                      component="h2"
                      variant="h5"
                      color="inherit"
                      noWrap
                    >
                      開発メンバー
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link to="/question" >
                <Card>
                  <CardContent>
                    <Typography
                      align="left"
                      component="h2"
                      variant="h5"
                      color="inherit"
                      noWrap
                    >
                      よくある質問
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link to="/right" >
                <Card>
                  <CardContent>
                    <Typography
                      align="left"
                      component="h2"
                      variant="h5"
                      color="inherit"
                      noWrap
                    >
                      権利表記
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default TopPage
