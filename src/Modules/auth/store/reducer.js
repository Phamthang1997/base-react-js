import { createReducer, updateObject, REQUEST, SUCCESS, FAILURE } from 'Stores'
import { LOAD_PROFILE } from './constants'

export const initialState = {
  isLoading: false,
  error: null,
  authenticated: null,
  metaData: {},
  profile: {},
  isSubmitting: false
}

function loadProfile(state) {
  return updateObject(state, {
    isLoading: true
  })
}

function profileLoaded(state, { payload }) {
  const { profile, metaData } = payload
  return updateObject(state, {
    isLoading: false,
    authenticated: true,
    metaData,
    profile
  })
}

function profileLoadingError(state, { error }) {
  return updateObject(state, {
    error,
    isLoading: false,
    authenticated: false
  })
}

// Slice reducer
export default createReducer(initialState, {
  [REQUEST(LOAD_PROFILE)]: loadProfile,
  [SUCCESS(LOAD_PROFILE)]: profileLoaded,
  [FAILURE(LOAD_PROFILE)]: profileLoadingError
})
