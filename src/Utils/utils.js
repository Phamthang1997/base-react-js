/* eslint-disable */
import { reduce, isArray, isFunction } from 'lodash';

export const decodePath = (path) => {
  const arr = path.split('/');
  arr.shift();
  return arr;
};

export const json2Form = (jsonObj) => reduce(
  jsonObj,
  (result, item, key) => {
    result.append(key, item);
    return result;
  }, new FormData(),
);

export const isFunc = isFunction;
export { isArray };
export const isArrayHasItem = (items) => isArray(items) && items.length;
export const isSafari =
  /constructor/i.test(window.HTMLElement) ||
  (function (p) {
    return p.toString() === '[object SafariRemoteNotification]';
  })(
    !window.safari ||
    (typeof window.safari !== 'undefined' && window.safari.pushNotification),
  );

export const convertBodyToFormData = (body) => {
  const formData = new FormData()
  Object.keys(body).forEach((prop) => body[prop] && formData.append(prop, body[prop]))
  return formData
}

export const convertNumberToTime = (time) => {
  if (!time) return '00:00:00'
  const h = Math.floor(time / 3600)
  const m = Math.floor(time / 60)
  const s = Math.round(time % 60)
  const hours = h >= 10 ? h : `0${h}`
  const seconds = s >= 10 ? s : `0${s}`
  const minutes = m >= 10 ? m : `0${m}`

  return `${hours}:${minutes}:${seconds}`
}

export const convertTimeToNumber = (time = '00:00:00') => {
  const arrTime = time.split(':').map((item) => parseInt(item))
  const [hour, minutes, seconds] = arrTime
  return (hour * 3600) + (minutes * 60) + seconds
}

export const handleSearchSelectTree = (inputSearch, treeNode) => {
  if (inputSearch.trim() === '') return true
  return treeNode.title.toLowerCase().indexOf(inputSearch.trim().toLowerCase()) >= 0
}

export const scrollTopDropdown = (isOpen, setCourseOptions, listCourse) => {
  setCourseOptions([])
  setTimeout(() => {
    if (isOpen) {
      setCourseOptions(listCourse)
    } else {
      setCourseOptions([])
    }
  }, 0)
}

export const sortFullParams = (field, order, params, fullParams) => {
  switch (field) {
    // Course Status screen sort
    case 'courseProgress':
      return fullParams = {
        ...fullParams,
        params: {
          ...params,
          sortBy: order ? 'COURSE_PROGRESS' : '',
          sortType: order ? (order === 'ascend' ? 'ASCENDING' : 'DESCENDING') : ''
        }
      }
    case 'actualStartTime':
      return fullParams = {
        ...fullParams,
        params: {
          ...params,
          sortBy: order ? 'ACTUAL_START_TIME' : '',
          sortType: order ? (order === 'ascend' ? 'ASCENDING' : 'DESCENDING') : ''
        }
      }
    case 'actualCompleteTime':
      return fullParams = {
        ...fullParams,
        params: {
          ...params,
          sortBy: order ? 'ACTUAL_COMPLETE_TIME' : '',
          sortType: order ? (order === 'ascend' ? 'ASCENDING' : 'DESCENDING') : ''
        }
      }
    case 'startTime':
      return fullParams = {
        ...fullParams,
        params: {
          ...params,
          sortBy: order ? 'COURSE_START_TIME' : '',
          sortType: order ? (order === 'ascend' ? 'ASCENDING' : 'DESCENDING') : ''
        }
      }
    case 'endTime':
      return fullParams = {
        ...fullParams,
        params: {
          ...params,
          sortBy: order ? 'COURSE_COMPLETE_TIME' : '',
          sortType: order ? (order === 'ascend' ? 'ASCENDING' : 'DESCENDING') : ''
        }
      }

    // Test Result screen sort
    case 'courseName':
      return fullParams = {
        ...fullParams,
        params: {
          ...params,
          sortBy: order ? 'COURSE_NAME' : '',
          sortType: order ? (order === 'ascend' ? 'ASCENDING' : 'DESCENDING') : ''
        }
      }
    case 'userName':
      return fullParams = {
        ...fullParams,
        params: {
          ...params,
          sortBy: order ? 'USER_NAME' : '',
          sortType: order ? (order === 'ascend' ? 'ASCENDING' : 'DESCENDING') : ''
        }
      }
    case 'unitTestName':
      return fullParams = {
        ...fullParams,
        params: {
          ...params,
          sortBy: order ? 'UNIT_NAME' : '',
          sortType: order ? (order === 'ascend' ? 'ASCENDING' : 'DESCENDING') : ''
        }
      }
    case 'email':
      return fullParams = {
        ...fullParams,
        params: {
          ...params,
          sortBy: order ? 'USER_LOGIN_ID' : '',
          sortType: order ? (order === 'ascend' ? 'ASCENDING' : 'DESCENDING') : ''
        }
      }
    case 'unitTestResult':
      return fullParams = {
        ...fullParams,
        params: {
          ...params,
          sortBy: order ? 'RESULT_STATUS' : '',
          sortType: order ? (order === 'ascend' ? 'ASCENDING' : 'DESCENDING') : ''
        }
      }
    case 'highestScore':
      return fullParams = {
        ...fullParams,
        params: {
          ...params,
          sortBy: order ? 'MAX_POINT' : '',
          sortType: order ? (order === 'ascend' ? 'ASCENDING' : 'DESCENDING') : ''
        }
      }

    // Unit Status screen sort
    case 'courseName':
      return fullParams = {
        ...fullParams,
        params: {
          ...params,
          sortBy: order ? 'COURSE_NAME' : '',
          sortType: order ? (order === 'ascend' ? 'ASCENDING' : 'DESCENDING') : ''
        }
      }
    case 'unitName':
      return fullParams = {
        ...fullParams,
        params: {
          ...params,
          sortBy: order ? 'UNIT_NAME' : '',
          sortType: order ? (order === 'ascend' ? 'ASCENDING' : 'DESCENDING') : ''
        }
      }
    case 'actualCompleteTime':
      return fullParams = {
        ...fullParams,
        params: {
          ...params,
          sortBy: order ? 'UNIT_COMPLETE_TIME' : '',
          sortType: order ? (order === 'ascend' ? 'ASCENDING' : 'DESCENDING') : ''
        }
      }
    case 'complete':
      return fullParams = {
        ...fullParams,
        params: {
          ...params,
          sortBy: order ? 'COMPLETE_STATUS' : '',
          sortType: order ? (order === 'ascend' ? 'ASCENDING' : 'DESCENDING') : ''
        }
      }

    // Survey Answer screen sort
    case 'emailSurvey':
      return fullParams = {
        ...fullParams,
        params: {
          ...params,
          sortBy: order ? 'USER_LOGIN_ID' : '',
          isAscending: order ? (order === 'ascend' ? true : false) : '',
        }
      }
    case 'unitSurveyStatus':
      return fullParams = {
        ...fullParams,
        params: {
          ...params,
          sortBy: order ? 'SURVEY_RESULT_STATUS' : '',
          isAscending: order ? (order === 'ascend' ? true : false) : '',
        }
      }
  }
}
