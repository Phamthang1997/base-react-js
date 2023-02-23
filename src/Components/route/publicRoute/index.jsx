/* eslint-disable react/prop-types */
import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

import HomeLayout from 'Layouts/home'
import { useAuth } from 'Hooks'

function PublicRoute({
  component: Component,
  layout: Layout = HomeLayout,
  ...rest
}) {
  const { authenticated } = useAuth()

  return (
    <Route
      {...rest}
      render={(props) => (!authenticated ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect
          to={{ pathname: '/', state: {} }}
        />
      ))}
    />
  )
}

export default PublicRoute
