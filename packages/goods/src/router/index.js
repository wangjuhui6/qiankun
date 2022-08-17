import React, { lazy } from 'react'
import { Route, Switch} from 'react-router-dom'

const AppRouter = () => {

  return (
    <Switch>
      <Route exact path="/goods/" component={lazy(() => import(`ROOT/pages/index`))} />
    </Switch>
  )
}

export default AppRouter
