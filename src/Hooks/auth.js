/* eslint-disable no-restricted-globals */
import { useDispatch, useSelector } from 'react-redux'

import saga from 'Modules/auth/store/saga'
import reducer from 'Modules/auth/store/reducer'
import { loadProfile } from 'Modules/auth/store/actions'
import { useInjectSaga, useInjectReducer } from 'Stores'
import { USER_ROLE } from 'Constants/auth'
import { makeSelectAuthentication } from 'Modules/auth/store/selectors'

export const useAuth = () => {
  useInjectSaga({ key: 'auth', saga })
  useInjectReducer({ key: 'auth', reducer })

  const { isLoading, error, authenticated, profile, metaData } = useSelector(
    makeSelectAuthentication()
  )

  const dispatch = useDispatch()
  const loadProfileAction = (payload) => dispatch(loadProfile(payload))

  return {
    isLoading,
    error,
    authenticated,
    profile,
    metaData,
    loadProfileAction
  }
}

export const useRoles = () => {
  useInjectSaga({ key: 'auth', saga })
  useInjectReducer({ key: 'auth', reducer })
  const role = USER_ROLE.NISSHOKEN_SUPER_ADMIN

  const isSuperAdmin = [USER_ROLE.NISSHOKEN_SUPER_ADMIN].includes(role)
  const isAdmin = [USER_ROLE.NISSHOKEN_ADMIN].includes(role)
  const isCompany = [USER_ROLE.COMPANY_ADMIN].includes(role)

  return { isSuperAdmin, isAdmin, isCompany }
}
