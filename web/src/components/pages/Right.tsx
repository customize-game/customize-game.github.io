import React from 'react'
import Typography from '@mui/material/Typography'

/* templates */
import TitleTemplate from '../templates/title_template'

/**
 * 権利表記画面
 */
const RightPage: React.FC = () => {
  return (
    <div>
      <TitleTemplate title="権利表記" updateAt="2021/08/23">
        <Typography align="center" gutterBottom variant="h5">
          二次創作ガイドライン
        </Typography>
        <Typography align="center" gutterBottom variant="h5">
          必須事項
        </Typography>
        <Typography align="left" gutterBottom variant="body1">
          本プロジェクトの二次創作である旨を必ず記載してください。
        </Typography>
        <Typography align="center" gutterBottom variant="h5">
          禁止事項
        </Typography>
        <Typography align="left" gutterBottom variant="body1">
          ・本プロジェクトのイメージを損なう内容
          ・他社の権利を侵害する、または侵害するおそれのある内容
          ・本プロジェクトの公式コンテンツであると誤解をまねく内容
          ・スクリーンショット、プレイ動画以外のゲーム素材を使用、公開する行為
          ・原作コンテンツや二次創作物を利用し、個人の思想を発信する行為
          ・二次創作物を、その二次創作者に無断で再利用する行為
          ・その他過剰な性的表現や、特定の個人、団体、人種等を中傷する内容等、社会通念上著しく不適応だと判断される行為
        </Typography>
        <Typography align="center" gutterBottom variant="h5">
          ファン活動可能範囲について
        </Typography>
        <Typography align="left" gutterBottom variant="body1">
          二次創作物の頒布は、原作が販売されている流通か、許可している流通のみで行えます。
          ブラウザ上で動くゲームアプリ、スマートフォンでのゲームアプリは無料のもののみとします。アプリ内への広告の導入、広告機能の解除のための課金機能はOKです。
          二次創作動画（原作のプレイ動画含む）を動画配信サービスで配信すること。
          その他、個別に許諾を得た物はその旨を明記してください。
          上記に当てはまらない活動を行いたい場合は、個別にお問い合わせください。
          二次創作が原因でのトラブルは、本プロジェクト開発メンバーは一切責任を負いません。
          自己責任でお願いします。
          企業が営利目的で二次創作やファン活動を行う場合は、個別にお問い合わせください。
        </Typography>
        <Typography align="center" gutterBottom variant="h5">
          ゲーム実況に関するポリシー
        </Typography>
        <Typography align="left" gutterBottom variant="body1">
          このポリシーは本プロジェクトで開発されたゲームを用いて皆様が行うゲーム実況動画およびゲーム実況配信に関するポリシーです。
          以下ゲーム実況に関するポリシーを皆様に守っていただく限り、個人のファンの皆様があらゆるプラットフォームで自由にゲーム実況を行っていただくことについて、著作権侵害を主張しません。
          ※ファンの皆様が実施されるゲーム実況の中に、第三者が権利を保有又は管理するコンテンツが含まれる場合、当該コンテンツの利用について当該第三者からの許諾が別途必要となる場合があります。
          
          ゲーム実況を実施、配信される場合、以下の内容を守ってください。
          ・この画面のURLまたは、本プロジェクトを指し、利用規約に基づきゲーム実況を実施、配信している旨をコンテンツの受け手に伝わる形式で表記してください。
          ・ゲーム実況を行う主体は個人に限ります。法人は認められません。なお、個人事業主の方は問題ございません。
          ・営利を目的としたゲーム実況は禁止します。ただし、ゲーム実況を行うプラットフォームが公式に提供している機能は該当機能から副次的に収益が発生したとしても営利を目的とした利用とはみなしませんので、これらの機能はご使用いただいても構いません。
          ・ゲーム実況が主たる目的ではない動画・配信（ゲーム内のムービーシーンやＢＧＭ等の要素を視聴させることを目的とするもの、並びに、お客様ご自身や第三者の商品等の宣伝を目的とするものを含みますがこれに限りません）はゲーム実況とはみなしませんので、実施しないでください。
          ・本プロジェクト、本プロジェクト開発メンバー、または、第三者の所有権、著作権を含む知的財産権、名誉、信用、プライバシーおよびそのた一切の権利を侵害することを禁止します。
          ・政治的信条の主張、宗教的信条の主張または、ヘイトスピーチを目的として行うことは禁止します。
        </Typography>
        <Typography align="center" gutterBottom variant="h5">
          免責
        </Typography>
        <Typography align="left" gutterBottom variant="body1">
          このガイドラインは円滑なファン活動のための目安となるものです。
          上記内容により、皆様に対して何らの保証も提供するものではありません。
          ガイドラインの内容や二次創作活動について、個人からのお問い合わせ・報告につきましては個別の返答は行いません。
          ガイドラインから大きく逸脱した行為については直接連絡することがあります。
          このガイドラインは予告なく変更されることがあります。
        </Typography>
      </TitleTemplate>
    </div>
  )
}

export default RightPage
