import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0),
  },
}))

const Construction: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h6" align="center">
        現在作成中のページです。
      </Typography>
      <Typography variant="body1" align="center">
        申し訳ございませんが、今しばらくお待ちください。
      </Typography>
    </div>
  )
}

export default Construction
