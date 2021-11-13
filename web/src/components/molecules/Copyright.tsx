import React from 'react'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link underline="none" color="inherit" href="https://twitter.com/home?lang=ja">
        Project Customize Game
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright
