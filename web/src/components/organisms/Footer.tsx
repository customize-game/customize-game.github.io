import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Copyright from '../molecules/copyright'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0),
  },
}))

export interface FooterProps {
  description: string,
}

const Footer: React.FC<FooterProps> = ({
  description
  }) => {
  const classes = useStyles();
  return(
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  )
}

export default Footer
