/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { Menu } from 'antd'

import { Table, Title } from 'Components'
import { COURSE_ICON } from 'Assets'
import { useAuth, useRegistrationCourses } from 'Hooks'
import { Wrapper } from 'Themes/facit'
import tableColumns from './column'
import ConfirmDeleteModal from './components/ConfirmDeleteModal'
import SortModal from './components/SortModal'
import FilterBlock from './components/FilterBlock'
import { RoutesName } from '../routes'

const RegistrationCourseScreen = () => {
  const { t } = useTranslation(['course'])
  const history = useHistory()
  const {
    courses,
    pagination,
    filter,
    categoriesOption,
    loadCoursesAction,
    loadOrderCourseAction,
    deleteCoursesAction,
    selectCourseIdAction,
    isLoading
  } = useRegistrationCourses()
  const { metaData } = useAuth()
  const { total, limit: pageSize, page: currentPage } = pagination
  const { userId, roles } = metaData

  const [rowSelected, setRowSelected] = useState({
    selectedRowKeys: [],
    selectedRows: []
  })

  const [visibleConfirmDelete, setVisibleConfirmDelete] = useState(false)
  const [visibleSortModal, setVisibleSortModal] = useState(false)

  const onSelectChange = (selectedRowKeys, selectedRows) => setRowSelected({
    selectedRowKeys,
    selectedRows
  })

  const handleTableChange = (tablePaging) => {
    loadCoursesAction({
      userId,
      params: {
        page: tablePaging.current,
        limit: tablePaging.pageSize,
        filter
      }
    })
  }

  const handleConfirmDelete = () => {
    deleteCoursesAction({
      data: {
        ids: rowSelected.selectedRowKeys
      },
      pageSize,
      currentPage,
      callback: {
        done: () => {
          setRowSelected({
            selectedRowKeys: [],
            selectedRows: []
          })
        }
      }
    })
    setVisibleConfirmDelete(false)
  }

  const columns = useMemo(
    () => tableColumns({ t, history, pagination, action: { selectCourseIdAction } }).filter((col) => col.rules.includes(roles?.[0])),
    [t, history, pagination, roles]
  )

  const menu = useMemo(() => (
    <Menu>
      <FilterBlock
        t={t}
        loadCoursesAction={loadCoursesAction}
        categoriesOption={categoriesOption}
        setRowSelected={setRowSelected}
      />
    </Menu>
  ), [])

  useEffect(() => {
    if (userId) {
      loadCoursesAction({ params: { userId, page: 1, limit: 20 } })
    }
  }, [userId])

  useEffect(() => {
    loadOrderCourseAction()
  }, [])

  return (
    <Wrapper>
      <Title
        icon={COURSE_ICON}
        title={t('registration_course.management.title')}
        filter={menu}
        currentFilter={filter}
      />
      <Table
        locale={{ emptyText: t('common:empty_data') }}
        rowSelection={{
          selectedRowKeys: rowSelected.selectedRowKeys,
          onChange: onSelectChange,
          preserveSelectedRowKeys: true
        }}
        rowKey={(record) => record.courseId}
        dataSource={courses}
        columns={columns}
        total={total}
        currentPage={currentPage}
        pageSize={pageSize}
        selected={rowSelected.selectedRowKeys.length}
        createText={t('registration_course.management.create_button')}
        orderText={t('common:update_sort_order')}
        onChange={handleTableChange}
        onCreate={() => history.push(RoutesName.CREATE_COURSE)}
        onOrder={() => setVisibleSortModal(true)}
        onDelete={() => setVisibleConfirmDelete(true)}
        loading={isLoading}
      />
      <ConfirmDeleteModal
        t={t}
        isVisible={visibleConfirmDelete}
        onSubmit={handleConfirmDelete}
        setIsVisble={setVisibleConfirmDelete}
        numberOfSelectedRecord={rowSelected.selectedRows.length}
        disabledSubmit={false}
      />

      {visibleSortModal && (
      <SortModal visible={visibleSortModal} onClose={setVisibleSortModal} pageSize={pageSize} currentPage={currentPage} />
      )}
    </Wrapper>
  )
}

export default RegistrationCourseScreen
