/* eslint-disable react/prop-types */
import React, { useCallback } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Row, Col } from 'antd'

import { FormTreeSelect, FormSelect, FormInput, HeaderSearch } from 'Components'
import { OWNER_OPTION } from 'Constants/course'
import { useRoles } from 'Hooks/auth'
import { Wrapper } from './styled'

const FilterBlock = ({ t, loadCoursesAction, categoriesOption, setRowSelected }) => {
  const form = useForm()
  const { handleSubmit, reset } = form
  const { isSuperAdmin } = useRoles()

  const onSubmit = useCallback((data) => {
    const { courseCategory, courseName, owner } = data
    loadCoursesAction({
      params: {
        filter: {
          courseCategory: courseCategory?.label,
          courseName: courseName.trim(),
          owner: owner?.value
        },
        page: 1,
        limit: 20
      }
    })
    setRowSelected({
      selectedRowKeys: [],
      selectedRows: []
    })
  }, [])

  const handleCancel = useCallback(() => {
    reset({
      courseName: '',
      courseCategory: null,
      owner: null
    })
    loadCoursesAction({})
  }, [])

  return (
    <FormProvider {...form}>
      <Wrapper>
        <HeaderSearch onCancel={handleCancel} onSubmit={handleSubmit(onSubmit)}>
          <Row className="form-group" gutter={24}>
            <Col span={24}>
              <FormTreeSelect
                t={t}
                name="courseCategory"
                valueKey="courseCategoryId"
                labelKey="courseCategoryName"
                options={categoriesOption}
                label={t('registration_course.management.course_category_name')}
                wrapperProps={{
                  colon: false
                }}
              />
            </Col>
            <Col span={12} />
          </Row>
          <Row className="form-group" gutter={24}>
            <Col span={24}>
              <FormInput
                name="courseName"
                label={t('registration_course.management.course_name')}
                wrapperProps={{
                  colon: false
                }}
              />
            </Col>
            {isSuperAdmin && (
            <Col span={24}>
              <FormSelect
                t={t}
                name="owner"
                options={OWNER_OPTION}
                label={t('registration_course.management.owner')}
                wrapperProps={{
                  colon: false
                }}
              />
            </Col>
            )}
          </Row>
        </HeaderSearch>
      </Wrapper>
    </FormProvider>
  )
}

export default FilterBlock
