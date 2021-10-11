import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

/* Pages */
import Crowdfunding from './components/pages/crowdfunding'
import Field from './components/pages/field'
import Members from './components/pages/members'
import Mobile from './components/pages/mobile'
import NotFound from './components/pages/not_found'
import Parts from './components/pages/parts'
import Question from './components/pages/question'
import Right from './components/pages/right'
import RulePvP from './components/pages/rule_pvp'
import Top from './components/pages/top'
import Wanted from './components/pages/wanted'
import Word from './components/pages/word'
import World from './components/pages/world'

import Update20210817 from './components/pages/update_information/update_20210817'


function App() {
  return (
    <div>
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
          <Route path="/wanted" component={Wanted} exact />
          <Route path="/word" component={Word} exact />
          <Route path="/world" component={World} exact />
          <Route path="/update_information/update_20210817" component={Update20210817} exact />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
