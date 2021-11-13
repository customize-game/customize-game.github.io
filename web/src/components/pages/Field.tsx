import React from 'react'

/* templates */
import TitleTemplate from '../templates/title_template'

/* organisms */
import Construction from '../organisms/Construction'

/**
 * フィールド紹介画面
 */
const FieldPage: React.FC = () => {
  return (
    <div>
      <TitleTemplate title="フィールド紹介" updateAt="2021/08/23">
        <Construction />
      </TitleTemplate>
    </div>
  )
}

export default FieldPage
