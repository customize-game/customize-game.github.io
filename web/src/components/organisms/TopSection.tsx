import React from 'react'
import { makeStyles } from '@mui/styles'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import SendIcon from '@mui/icons-material/ArrowForwardIos'

const useStyles = makeStyles(() => ({
  title: {
    marginBottom: "20px",
  },
  description: {
    marginBottom: "50px",
  },
  button: {
    marginBottom: "70px",
    textAlign: "right",
  },
  buttonR: {
    marginBottom: "70px",
  },
}))
export interface TopSectionProps {
  isReverse: boolean,
  title: string,
  descriptions: Array<string>,
  onClickDetailButton: Function,
  sectionClass: any,
}
const TopSection: React.FC<TopSectionProps> = ({
  isReverse,
  title,
  descriptions,
  onClickDetailButton,
  sectionClass,
}) => {
  const classes = useStyles()
  return (
    <section className={sectionClass}>
      <Container fixed maxWidth={false}>
        <Grid container spacing={2} justifyContent={isReverse ? "flex-end" : "flex"} >
          <Grid item xs={12} sm={6} container>
            <Grid item xs={12}>
              <div className={classes.title}>
                <Typography align={isReverse ? "left" : "right"} variant="h5" color="white" >
                  {title}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.description}>
                {descriptions.map(description => (
                  <Typography align={isReverse ? "left" : "right"} variant="body1" color="white" >
                    {description}
                  </Typography>
                ))}
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={isReverse ? classes.buttonR : classes.button} >
                <Button  variant="outlined" endIcon={<SendIcon />} onClick={() => onClickDetailButton()} >
                  詳細はこちら
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default TopSection
