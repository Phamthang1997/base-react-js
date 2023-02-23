/* eslint-disable react/prop-types */
import React, { useMemo } from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

import HomeLayout from 'Layouts/home'
import { USER_ROLE } from 'Constants/auth'
import { useAuth } from 'Hooks'

function PrivateRoute({
  component: Component,
  layout: Layout = HomeLayout,
  ...rest
}) {
  const { authenticated } = useAuth()
  const { rules } = rest
  const role = USER_ROLE.NISSHOKEN_SUPER_ADMIN
  const accessible = useMemo(() => authenticated && rules?.includes(role), [role])
  return (
    <Route
      {...rest}
      render={(props) => (accessible ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect
          to={{ pathname: '/403', state: {} }}
        />
      ))}
    />
  )
}

export default PrivateRoute
