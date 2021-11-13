import React from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

/* templates */
import TitleTemplate from '../templates/title_template'

/* organisms */
import Word from '../organisms/Word'

// 用語集
import keywords from '../../data/keywords.json'

/**
 * 用語集画面
 */
const WordPage: React.FC = () => {
  return (
    <div>
      <TitleTemplate title="用語集" updateAt="2021/08/23">
        <Grid container justifyContent="center">
          {
            keywords.map((keyword, index) => (
              <Grid item xs={12}>
                <Word is_reverse={index % 2 === 0} word_name={keyword.name}>
                  <Typography gutterBottom variant="body1" align="center">
                    {keyword.description}
                  </Typography>
                </Word>
              </Grid>
            ))
          }
        </Grid>
      </TitleTemplate>
    </div>
  )
}

export default WordPage
