import { lazy } from 'react'

import BlankLayout from 'Layouts/blank'
import HomeLayout from 'Layouts/home'

import HomeScreen from 'Modules/home'

import { USER_ROLE } from 'Constants/auth'

// lazy
const CourseScreen = lazy(() => import('Modules/course'))

const RoutesName = {
  HOME: '/',
  COURSE: '/course-management'
}

export const ROUTES = [
  {
    path: RoutesName.HOME,
    component: HomeScreen,
    layout: HomeLayout,
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  },
  {
    path: RoutesName.COURSE,
    component: CourseScreen,
    layout: BlankLayout,
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  }
]

export default RoutesName
