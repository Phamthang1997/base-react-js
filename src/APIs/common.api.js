import { BASE_API_URL } from 'Constants'
import AxiosClient from './api'

import ENDPOINT from './constants'

function checkExistFile({ folderId = 0, params }) {
  return AxiosClient.get(ENDPOINT.UPLOAD_FILE.CHECK_EXIST_FILE, folderId, { params })
    .then(({ data }) => data)
}

function getS3PresinedUrl({ fileList }) {
  return AxiosClient.post(`${BASE_API_URL}${ENDPOINT.PRESIGNED}`, fileList)
    .then(({ data }) => data)
}

export {
  checkExistFile,
  getS3PresinedUrl
}
