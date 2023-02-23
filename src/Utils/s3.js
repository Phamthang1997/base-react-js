/* eslint-disable no-console */
import { BASE_API_URL } from 'Constants'
import { getLocalStorage, STORAGE } from 'Utils'

export const getFileInfoS3 = (s3url) => {
  let fileName = s3url.substr(0, s3url.lastIndexOf('_'))
  fileName = fileName.substring(fileName.lastIndexOf('/') + 1)
  fileName = decodeURIComponent(fileName)
  return fileName
}

export const downloadS3File = (item) => {
  fetch(item.s3Path, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*'
    }
  })
    .then((response) => {
      response.arrayBuffer().then((buffer) => {
        const url = window.URL.createObjectURL(new Blob([buffer]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', item.fileName)
        document.body.appendChild(link)
        link.click()
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

export const downloadOctetFile = (item) => {
  const token = getLocalStorage(STORAGE.USER_TOKEN)
  fetch(`${BASE_API_URL}/api/v1${item.downloadPath}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/octet-stream'
    }
  })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      document.body.appendChild(a)
      a.href = url
      a.download = item.fileName
      a.click()
      window.URL.revokeObjectURL(url)
    })
    .catch((err) => {
      console.log(err)
    })
}
