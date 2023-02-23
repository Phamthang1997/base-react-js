import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'

// import PrivateRoute from 'Components/route/privateRoute'
import PublicRoute from 'Components/route/publicRoute'
import CourseRoutes from 'Modules/course/routes'
import Loading from 'Components/loading'

import BlankLayout from 'Layouts/blank'

import ForbiddenScreen from 'Modules/other/403'
import { ROUTES } from './constant'

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <PublicRoute exact path="/403" layout={BlankLayout} component={ForbiddenScreen} />
        {/* {ROUTES.map((routeConfig, index) => (
          <PrivateRoute
            key={index}
            exact
            {...routeConfig}
          />
        ))} */}
        {ROUTES.map((routeConfig, index) => (
          <PublicRoute
            key={index}
            exact
            {...routeConfig}
          />
        ))}
        <CourseRoutes />
      </Switch>
    </Suspense>
  )
}
