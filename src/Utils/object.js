export const parseFilter = (params) => {
  if (params?.filter) {
    const { filter, ...restParams } = params
    return { ...restParams, ...filter }
  }
  return params
}

export const parseFilterArrayToString = (params) => {
  if (!params) return ''
  let string = ''
  Object.keys(params).forEach((key) => {
    if (Array.isArray(params[key])) {
      params[key].forEach((param) => {
        string = `${string}&${key}=${param}`
      })
    } else {
      string = `${string}&${key}=${params[key]}`
    }
  })
  return string
}

export const parseFilterArrayToStringV2 = (params) => {
  let newParams
  let string = ''
  if (params?.filter) {
    const { filter, ...restParams } = params
    newParams = { ...filter, ...restParams }
  } else {
    newParams = { ...params }
  }
  if (newParams) {
    Object.keys(newParams).forEach((key) => {
      if (Array.isArray(newParams[key])) {
        newParams[key].forEach((param) => {
          string = `${string}&${key}=${param}`
        })
      } else {
        string = `${string}&${key}=${newParams[key]}`
      }
    })
  }
  return string
}
