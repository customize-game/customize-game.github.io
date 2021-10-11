import React from 'react'

/* templates */
import TitleTemplate from '../templates/title_template'

/* organisms */
import Construction from '../organisms/Construction'

/**
 * クラウドファンディング紹介画面
 */
const CrowdfundingPage: React.FC = () => {
  return (
    <div>
      <TitleTemplate title="クラウドファンディング" updateAt="2021/08/23">
        <Construction />
      </TitleTemplate>
    </div>
  )
}

export default CrowdfundingPage
