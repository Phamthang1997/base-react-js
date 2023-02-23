/* eslint-disable no-unused-vars */
import React from 'react'

import { useTranslation } from 'react-i18next'

import { Wrapper } from './styled'

const CourseScreen = () => {
  const { t } = useTranslation(['course'])

  return (
    <Wrapper>
      Top page
    </Wrapper>
  )
}

export default CourseScreen
