import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Copyright from '../molecules/Copyright'

export interface FooterProps {
}

const Footer: React.FC<FooterProps> = ({
}) => {
  return (
    <footer>
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        </Typography>
        <Copyright />
      </Container>
    </footer>
  )
}

export default Footer
