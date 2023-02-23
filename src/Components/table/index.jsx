/* eslint-disable react/prop-types */
import React, { useMemo } from 'react'
import { Table, Button, Space, Dropdown, Menu, Pagination, ConfigProvider } from 'antd'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { PlusOutlined, OrderedListOutlined, ClearOutlined } from '@ant-design/icons'

import { MORE_HORIZONTAL_ICON } from 'Assets'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.white};
  height: ${({ height }) => height};
  border-radius: 1.75rem;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 5%);
  margin: 1rem 0;
  .table-head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    .table-head-left {
      .content {
        display: flex;
        align-items: center;
        svg.svg-icon--material {
          stroke: #4e68f9;
        }
        .title {
          font-size: 1rem;
        }
        .record-counting {
          font-weight: 500;
          margin-left: .5rem;
          font-size: .6rem;
          opacity: .5;
        }
      }
    }
    .table-head-right {
      .create {
        color: #46bcaa;
        background-color: #edf8f7;
        border: 1px solid #edf8f7;
        font-weight: 500;
        font-size: 1rem;
        border-radius: .75rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        &:hover {
          color: #fff;
          background-color: #46bcaa;
          border-color: #46bcaa;
        }
      }
      .order {
        color: #4d69fa;
        background-color: #edf0ff;
        border: 1px solid #edf0ff;
        font-weight: 500;
        font-size: 1rem;
        border-radius: .75rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        &:hover {
          color: #fff;
          background-color: #4d69fa;
          border-color: #4d69fa;
        }
      }
      .more {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #e7eef8;
        border-color: #e7eef8;
        border-radius: .75rem;
        &:hover {
          color: #1f2128;
          background-color: #ebf1f9;
          border-color: #e9f0f9;
        }
        svg {
          width: 15px;
          height: 15px;
        }
      }
    }
  }

  .table-foot {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    .table-foot-left {
      .info {
        font-size: .75rem;
        font-weight: 300;
      }
    }
    .table-foot-right {
      .ant-pagination {
        .ant-pagination-item {
          margin-right: 0;
          background-color: #e9ecef;;
          border-color: #e9ecef;
          border-radius: 0;
          font-size: .75rem;
          &>a:hover {
            color: #564aa9;
            background-color: #e5e9ed;
          }
        }
        .ant-pagination-prev {
          margin-right: 0;
          background-color: #e9ecef;
          border-color: #e9ecef;
          border-top-left-radius: 1rem;
          border-top-right-radius: 0;
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 0;
          &:hover {
            background-color: #e9ecef;
          }
          button {
            justify-content: center;
            align-items: center;
            background-color: transparent;
            border: none;
            border-radius: 0;
            & svg {
              width: 8px;
              height: 8px;
            }
            &:not(:disabled):hover {
              svg {
                fill: #564aa9;
              }
            }
          }
        }
        .ant-pagination-next {
          margin-right: 0;
          background-color: #e9ecef;
          border-color: #e9ecef;
          border-top-left-radius: 0;
          border-top-right-radius: 1rem;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 1rem;
          &:hover {
            background-color: #e9ecef;
          }
          button {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: transparent;
            border: none;
            border-radius: 0;
            & svg {
              width: 8px;
              height: 8px;
            }
            &:not(:disabled):hover {
              svg {
                fill: #564aa9;
              }
            }
          }
        }
        .ant-pagination-item-active {
          background-color: #6c5dd3;
          border-color: #6c5dd3;
          z-index: 3;
          &>a {
            color: #fff;
            &:hover {
              background-color: #6c5dd3;
              border-color: #6c5dd3;
              color: #fff;
            }
          }
        }
      }
    }
  }
`

const TableStyle = styled(Table)`
  overflow: auto;
  height: 100%;
  .ant-pagination {
    display: flex;
    justify-content: center;
  }

  .ant-table {
    border-radius: .75rem;

    .ant-table-content {
      border-radius: .75rem;
    }
  }
`

const TableComponent = ({
  dataSource,
  columns,
  currentPage,
  total = 0,
  selected,
  pageSizeOptions,
  pageSize = 20,
  pagination = true,
  breadcrumb,
  action = [],
  createText,
  orderText,
  onChange,
  onCreate,
  onOrder,
  onDelete,
  height = 'auto',
  ...rest
}) => {
  const { t } = useTranslation(['common'])

  const moreMenu = useMemo(() => (
    <Menu style={{ width: '95%' }}>
      <Menu.Item key="1" onClick={onDelete} disabled={selected === 0}>
        <ClearOutlined />
        <span style={{ marginRight: '.5rem' }}>&nbsp;{t('delete_all')}</span>
      </Menu.Item>
      {action.map(({ text, icon, click }, index) => (
        <Menu.Item key={index + 2} onClick={click}>
          {icon}
          <span style={{ marginRight: '.5rem' }}>&nbsp;{text}</span>
        </Menu.Item>
      ))}
    </Menu>
  ), [selected, action])

  const rangeInfo = useMemo(() => {
    const start = currentPage * pageSize - pageSize + 1
    const end = start + pageSize - 1
    return t('range_info', { start: start || 0, end: end || 0, total })
  }, [t, total, pageSize, currentPage])

  return (
    <Wrapper height={height}>
      <div className="table-head">
        <div className="table-head-left">
          <div className="content">
            <strong className="title">
              <span>&nbsp;{t('list')}</span>
              <small className="record-counting"><b>Item: {selected > 0 && `${selected} /`} {total}</b></small>
            </strong>
          </div>
        </div>
        <div className="table-head-right">
          <Space>
            {createText && <Button icon={<PlusOutlined />} className="create" onClick={onCreate}>{createText}</Button>}
            {orderText && <Button icon={<OrderedListOutlined />} className="order" onClick={onOrder}>{orderText}</Button>}
            {(onDelete || action.length > 0) && (
            <div id="table-more-popup-container">
              <ConfigProvider getPopupContainer={() => document.getElementById('table-more-popup-container')}>
                <Dropdown overlay={moreMenu} trigger={['click']}>
                  <Button className="ant-dropdown-link more" icon={<MORE_HORIZONTAL_ICON className="svg-icon--material" />} onClick={(e) => e.preventDefault()} />
                </Dropdown>
              </ConfigProvider>
            </div>
            )}
          </Space>
        </div>
      </div>
      {breadcrumb}
      <TableStyle
        scroll={{ x: '100%' }}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        onChange={onChange}
        {...rest}
      />
      {pagination && (
      <div className="table-foot">
        <div className="table-foot-left">
          <div className="info">{rangeInfo}</div>
        </div>
        <div className="table-foot-right">
          <Pagination
            hideOnSinglePage={false}
            defaultCurrent={1}
            current={currentPage}
            pageSize={pageSize}
            total={total}
            pageSizeOptions={pageSizeOptions}
            onChange={(current, size) => onChange({ current, pageSize: size })}
            onShowSizeChange={(current, size) => onChange({ current, pageSize: size })}
            showSizeChanger
            locale={{ items_per_page: `/ ${t('page')}` }}
            {...pagination}
          />
        </div>
      </div>
      )}
    </Wrapper>
  )
}
export default TableComponent
