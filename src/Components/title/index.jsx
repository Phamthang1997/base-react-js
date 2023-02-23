/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Dropdown, ConfigProvider } from 'antd'
import { FilterOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

import Breadcrumb from 'Components/breadcrumb'
import { BackButton } from 'Themes/facit'
import { camel2Text } from 'Utils'

export const TitleWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  border-radius: .75rem;
  min-height: 3rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  .icon {
    stroke: ${({ theme }) => theme.text_primary};
    margin-right: .5rem;
    font-size: 1.5rem;
  }
  .title {
    font-size: 1.5rem;
  }
  .left {
    display: flex;
    align-items: center;
    .action {
      margin-right: 1rem;
    }
    .separator {
      height: 2rem;
      border-left: 1px solid #adb5bd;
      margin-right: .75rem;
    }
  }

  .right {
    display: flex;
    align-items: center;
    .filter-tag {
      margin-right: .75rem;
      color: #4d67f6;
      background-color: #eceffd;
      border-color: #f0effb;
      text-align: center;
      vertical-align: middle;
      border: 1px solid transparent;
      padding: 0.25rem .75rem;
      border-radius: 1rem;
    }
    .separator {
      height: 2rem;
      border-left: 1px solid #adb5bd;
      margin-right: .75rem;
    }
    .filter {
      color: #6c5dd3;
      background-color: #f0effb;
      border-color: #f0effb;
      display: inline-block;
      font-weight: 600;
      line-height: 1;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      user-select: none;
      border: 1px solid transparent;
      padding: 0.5rem .75rem;
      font-size: .8rem;
      border-radius: .75rem;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      &:hover {
        color: #fff;
        background-color: #6c5dd3;
        border-color: #6c5dd3;
      }
    }
  }
`

const Title = ({ icon, title, filter, currentFilter = {}, breadcrumb, backRoute, backRouteText = 'back_to_list' }) => {
  const [trans] = useTranslation('common')
  const ComponentIcon = icon
  const renderCurrentFilterTag = useMemo(() => Object.keys(currentFilter).reduce((result, key) => {
    if (currentFilter[key]) {
      result.push(
        <small className="filter-tag">
          <strong>{camel2Text(key)}:</strong><span>&nbsp;{currentFilter[key]}</span>
        </small>
      )
    }
    return result
  }, []), [currentFilter])

  return (
    <TitleWrapper>
      <div className="left">
        {(breadcrumb || backRoute) && (
          <>
            <div className="action">
              {breadcrumb && <Breadcrumb data={breadcrumb} onSelectItem={(item) => console.log(item)} />}
              {backRoute && (
              <BackButton to={backRoute}>
                <ArrowLeftOutlined />
                <span>{trans(backRouteText)}</span>
              </BackButton>
              )}
            </div>
            <div className="separator" />
          </>
        )}
        <div className="title-wrap">
          {icon && <ComponentIcon className="icon" />}
          <span className="title">{title}</span>
        </div>
      </div>
      <div className="right">
        {filter && (
          <>
            {renderCurrentFilterTag}
            <div className="separator" />
            <div id="filter-popup-container" style={{ position: 'relative' }}>
              <ConfigProvider getPopupContainer={() => document.getElementById('filter-popup-container')}>
                <Dropdown overlay={filter} trigger={['click']}>
                  <a href className="ant-dropdown-link filter" onClick={(e) => e.preventDefault()}>
                    <FilterOutlined />
                    <span>&nbsp;{trans('filter')}</span>
                  </a>
                </Dropdown>
              </ConfigProvider>
            </div>
          </>
        )}
      </div>
    </TitleWrapper>
  )
}

export default Title
