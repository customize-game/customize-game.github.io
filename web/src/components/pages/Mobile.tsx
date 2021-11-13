import React from 'react'

/* templates */
import TitleTemplate from '../templates/title_template'

/* organisms */
import Construction from '../organisms/Construction'

/**
 * モバイルアプリ紹介画面
 */
const MobilePage: React.FC = () => {
  return (
    <div>
      <TitleTemplate title="モバイルアプリ紹介" updateAt="2021/08/23">
        <Construction />
      </TitleTemplate>
    </div>
  )
}

export default MobilePage
