import React from 'react'

/* templates */
import TitleTemplate from '../../templates/title_template'

/* organisms */
import Construction from '../../organisms/Construction'

/**
 * 最新情報画面
 */
const UpdateInformation20210817Page: React.FC = () => {
  return (
    <div>
      <TitleTemplate title="最新情報画面 2021/08/17" updateAt="2021/08/23">
        <Construction />
      </TitleTemplate>
    </div>
  )
}

export default UpdateInformation20210817Page
