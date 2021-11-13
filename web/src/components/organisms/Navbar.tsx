import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import useScrollTrigger from '@mui/material/useScrollTrigger'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Typography from '@mui/material/Typography'
import Slide from '@mui/material/Slide'

const Navbar: React.FC = () => {
  const trigger = useScrollTrigger({
    target: undefined,
  })
  // const classes = useStyles()
  const [isOpening, setOpening] = useState(false)

  return (
    <React.Fragment>
      <Slide appear={false} direction="down" in={!trigger}>
        <Button style={{ position: 'fixed', top: 0 }} variant="text" onClick={() => setOpening(true)}>Menu</Button>
      </Slide>
      <SwipeableDrawer
        anchor="left"
        open={isOpening}
        onOpen={() => setOpening(true)}
        onClose={() => setOpening(false)}
      >
        <Button variant="text" onClick={() => setOpening(false)}>Close</Button>
        <Divider variant="middle" />
        <Link to="/" >
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            Top
          </Typography>
        </Link>
        <Divider variant="middle" />
        <Link to="/wanted" >
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            開発メンバー募集について
          </Typography>
        </Link>
        <Link to="/crowdfunding" >
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            クラウドファンディングについて
          </Typography>
        </Link>
        <Divider variant="middle" />
        <Link to="/mobile" >
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            モバイルアプリについて
          </Typography>
        </Link>
        <Divider variant="middle" />
        <Link to="/world" >
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            世界観
          </Typography>
        </Link>
        <Link to="/parts" >
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            パーツ紹介
          </Typography>
        </Link>
        <Link to="/field" >
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            対戦マップ紹介
          </Typography>
        </Link>
        <Link to="/rule_pvp">
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            ルール紹介 PvP
          </Typography>
        </Link>
        <Link to="/word" >
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            用語集
          </Typography>
        </Link>
        <Divider variant="middle" />
        <Link to="/members" >
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            開発メンバー
          </Typography>
        </Link>
        <Divider variant="middle" />
        <Link to="/right" >
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            権利表記
          </Typography>
        </Link>
        <Link to="/question" >
          <Typography align="center" component="h2" variant="h6" color="inherit" noWrap >
            よくある質問
          </Typography>
        </Link>
      </SwipeableDrawer>
    </React.Fragment>
  )
}

export default Navbar
