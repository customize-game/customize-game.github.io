import React from 'react'
import Typography from '@material-ui/core/Typography'

/* templates */
import TitleTemplate from '../templates/title_template'

/* organisms */
import Construction from '../organisms/Construction'

/**
 * ルール紹介 PvP画面
 */
const RulePvP: React.FC = () => {
  return (
    <div>
      <TitleTemplate title="ルール紹介 PvP" updateAt="2021/08/23">
        <Construction />
      </TitleTemplate>
    </div>
  )
}

export default RulePvP
