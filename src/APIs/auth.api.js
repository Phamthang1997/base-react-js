import AxiosClient from './api'
import END_POINT from './constants'

function getProfile({ userId }) {
  return AxiosClient.get(`${END_POINT.PROFILE_USER}?userId=${userId}`)
    .then((res) => res)
}

export {
  getProfile
}
