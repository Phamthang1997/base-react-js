/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Form, Space, Button } from 'antd'

const Header = styled.section`
  width: 100%;
  padding: 16px;
`

const Footer = styled(Space)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`

const CancelButton = styled(Button)`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.bg_primary};
  color: ${({ theme }) => theme.bg_primary};
  font-weight: 600;
  font-size: .75rem;
  padding: .4rem 1.75rem;
  height: auto;
  border-radius: .75rem;
  &:hover,
  &:focus {
    background-color: #f0f0fb;
    border: 1px solid ${({ theme }) => theme.bg_primary};
    color: ${({ theme }) => theme.bg_primary};
  }
`

const SubmitButton = styled(Button)`
  background: ${({ theme }) => theme.bg_primary};
  border: 1px solid ${({ theme }) => theme.bg_primary};
  color: ${({ theme }) => theme.white};
  font-weight: 600;
  font-size: .75rem;
  padding: .4rem 1.75rem;
  height: auto;
  border-radius: .75rem;
  &:hover,
  &:focus {
    background-color: #5d4eb3;
    border-color: #5d4eb3;
    color: ${({ theme }) => theme.white};
  }
`

const HeaderSearch = ({ children, onCancel, onSubmit, className = '' }) => {
  const { t } = useTranslation('common')

  return (
    <Header className={className}>
      <Form layout="vertical">
        {children}
        <Footer>
          {onCancel && (
          <CancelButton backgroundcolor="white" onClick={onCancel}>{t('reset_filter')}</CancelButton>
          )}
          {onSubmit && <SubmitButton htmlType="submit" onClick={onSubmit}>{t('filter')}</SubmitButton>}
        </Footer>
      </Form>
    </Header>
  )
}

HeaderSearch.propTypes = {
  onSubmit: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  onCancel: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
}

export default HeaderSearch
