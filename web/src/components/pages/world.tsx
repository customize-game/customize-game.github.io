import React from 'react'

/* templates */
import TitleTemplate from '../templates/title_template'

/* organisms */
import Construction from '../organisms/Construction'

/**
 * 世界観画面
 */
const WorldPage: React.FC = () =>  {
  return (
    <div>
      <TitleTemplate title="世界観" updateAt="2021/08/23">
        <Construction />
      </TitleTemplate>
    </div>
  )
}

export default WorldPage
