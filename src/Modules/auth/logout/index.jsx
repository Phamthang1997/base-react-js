/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'

import { Loading } from 'Components'
import { removeLocalStorage, STORAGE } from 'Utils'

import { USER_URL, SIGNAL_TYPE } from 'Constants'

// this page use for logout from user domain
const LogoutScreen = () => {
  useEffect(() => {
    removeLocalStorage(STORAGE.USER_TOKEN)
    removeLocalStorage(STORAGE.META_DATA)
    window.location.replace(`${USER_URL}?signal=${SIGNAL_TYPE.LOGOUT}`)
  }, [])
  return <Loading />
}

export default LogoutScreen
