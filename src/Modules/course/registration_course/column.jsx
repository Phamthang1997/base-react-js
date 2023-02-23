import React from 'react'
import { EditOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Tooltip, Button } from 'antd'

import { USER_ROLE } from 'Constants/auth'
import { formatMoney, formatOption } from 'Utils'
import { PAID_COURSE_OPTION_TEXT } from 'Constants/course'
import { Action } from 'Themes/facit'
import { RoutesName } from '../routes'

export default ({ t, history, pagination, action: { selectCourseIdAction } }) => [
  {
    title: 'No.',
    dataIndex: 'courseId',
    key: 'courseId',
    render: (text, record, index) => (
      <div>{(pagination.page - 1) * pagination.limit + index + 1}</div>
    ),
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  },
  {
    title: t('registration_course.management.course_name'),
    dataIndex: 'courseName',
    key: 'courseName',
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  },
  {
    title: t('registration_course.management.course_category_name'),
    dataIndex: 'courseCategoryName',
    key: 'courseCategoryName',
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  },
  {
    title: t('registration_course.management.course_type'),
    dataIndex: 'typeCourse',
    key: 'typeCourse',
    width: 100,
    render: (text) => t(formatOption(text, PAID_COURSE_OPTION_TEXT)),
    rules: [USER_ROLE.NISSHOKEN_ADMIN]
  },
  {
    title: t('registration_course.management.price'),
    dataIndex: 'price',
    key: 'price',
    align: 'right',
    render: (text) => formatMoney(text),
    rules: [USER_ROLE.NISSHOKEN_ADMIN]
  },
  {
    title: t('registration_course.management.owner'),
    dataIndex: 'owner',
    key: 'owner',
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN]
  },
  {
    title: t('registration_course.management.action'),
    key: '',
    dataIndex: '',
    width: 100,
    render: (record) => (
      <Action>
        <Tooltip title={t('common:tooltip:edit')}>
          <Button
            className="action-button"
            icon={<EditOutlined />}
            onClick={() => history.push(`${RoutesName.EDIT_COURSE}/${record.courseId}`)}
          />
        </Tooltip>
        <Tooltip title={t('common:tooltip:unit_setting')}>
          <Button
            className="action-button"
            icon={<UnorderedListOutlined />}
            onClick={() => {
              const selectCourseId = {
                data: record,
                value: record.courseName,
                label: record.courseName
              }
              selectCourseIdAction(selectCourseId)
              history.push(RoutesName.UNIT_SETTINGS)
            }}
          />
        </Tooltip>
      </Action>
    ),
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  }
]
