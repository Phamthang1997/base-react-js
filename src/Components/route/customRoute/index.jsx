/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import {
  Route
} from 'react-router-dom'

import HomeLayout from 'Layouts/home'

function CustomRoute({
  component: Component, layout: Layout = HomeLayout, ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

export default CustomRoute
