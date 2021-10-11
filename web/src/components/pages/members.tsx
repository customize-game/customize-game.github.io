import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

/* templates */
import TitleTemplate from '../templates/title_template'

/* organisms */
import Profile from '../organisms/Profile'

const MembersPage: React.FC = () => {
  return (
    <TitleTemplate title="メンバー紹介" updateAt="2021/10/11">
      <Grid container justify="center">
        <Grid item xs={12}>
          <Profile is_reverse={true} image_path="https://avatars3.githubusercontent.com/u/24400215?s=96&v=4" member_name="Shass Beleth">
            <Typography gutterBottom variant="body1" align="center" >
              Programer
            </Typography>
          </Profile>
        </Grid>
        <Grid item xs={12}>
          <Profile is_reverse={true} >
            <Typography gutterBottom variant="body1" align="center" >
              Programer
            </Typography>
          </Profile>
        </Grid>
        <Grid item xs={12}>
          <Profile is_reverse={true} >
            <Typography gutterBottom variant="body1" align="center" >
              Motion Animater
            </Typography>
          </Profile>
        </Grid>
        <Grid item xs={12}>
          <Profile is_reverse={true} >
            <Typography gutterBottom variant="body1" align="center" >
              Mechanic Modeler
            </Typography>
          </Profile>
        </Grid>
        <Grid item xs={12}>
          <Profile is_reverse={true} >
            <Typography gutterBottom variant="body1" align="center" >
              UI Designer
            </Typography>
          </Profile>
        </Grid>
        <Grid item xs={12}>
          <Profile is_reverse={true} >
            <Typography gutterBottom variant="body1" align="center" >
              2D Artist
            </Typography>
          </Profile>
        </Grid>
        <Grid item xs={12}>
          <Profile is_reverse={true} >
            <Typography gutterBottom variant="body1" align="center" >
              3D Artist
            </Typography>
          </Profile>
        </Grid>
        <Grid item xs={12}>
          <Profile is_reverse={true} >
            <Typography gutterBottom variant="body1" align="center" >
              Logo Designer
            </Typography>
          </Profile>
        </Grid>
        <Grid item xs={12}>
          <Profile is_reverse={true} >
            <Typography gutterBottom variant="body1" align="center" >
              Sound Designer
            </Typography>
          </Profile>
        </Grid>
        <Grid item xs={12}>
          <Profile is_reverse={true} >
            <Typography gutterBottom variant="body1" align="center" >
              Composer
            </Typography>
          </Profile>
        </Grid>
        <Grid item xs={12}>
          <Profile is_reverse={true} >
            <Typography gutterBottom variant="body1" align="center" >
              Official Web Designer
            </Typography>
          </Profile>
        </Grid>
      </Grid>
    </TitleTemplate >
  )
}

export default MembersPage
