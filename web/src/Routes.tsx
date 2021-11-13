import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* Pages */
import Crowdfunding from './components/pages/Crowdfunding'
import Field from './components/pages/Field'
import Members from './components/pages/Members'
import Mobile from './components/pages/Mobile'
import NotFound from './components/pages/NotFound'
import Parts from './components/pages/Parts'
import Question from './components/pages/Question'
import Right from './components/pages/Right'
import RulePvP from './components/pages/RulePvP'
import Top from './components/pages/Top'
import Recruitment from './components/pages/Recruitment'
import Word from './components/pages/Word'
import World from './components/pages/World'

import Update20210817 from './components/pages/update_information/update_20210817'

/**
 * 画面遷移先をまとめるコンポーネント
 */
const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Top} exact />
        <Route path="/crowdfunding" component={Crowdfunding} exact />
        <Route path="/field" component={Field} exact />
        <Route path="/members" component={Members} exact />
        <Route path="/mobile" component={Mobile} exact />
        <Route path="/parts" component={Parts} exact />
        <Route path="/question" component={Question} exact />
        <Route path="/right" component={Right} exact />
        <Route path="/rule_pvp" component={RulePvP} exact />
        <Route path="/recruitment" component={Recruitment} exact />
        <Route path="/word" component={Word} exact />
        <Route path="/world" component={World} exact />
        <Route path="/update_information/update_20210817" component={Update20210817} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
