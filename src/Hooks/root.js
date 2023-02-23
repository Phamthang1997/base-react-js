/* eslint-disable no-restricted-globals */
import { useDispatch, useSelector } from 'react-redux'

import {
  toggleSidebar,
  hoverSidebar
} from 'Modules/store/actions'
import {
  makeSelectGlobal
} from 'Modules/store/selectors'

export const useRoot = () => {
  const dispatch = useDispatch()

  const { sidebarCompact, sidebarHover } = useSelector(makeSelectGlobal())

  const toggleSidebarAction = (payload) => dispatch(toggleSidebar(payload))
  const hoverSidebarAction = (payload) => dispatch(hoverSidebar(payload))

  return {
    sidebarCompact,
    sidebarHover,
    toggleSidebarAction,
    hoverSidebarAction
  }
}
