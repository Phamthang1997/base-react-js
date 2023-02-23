/* eslint-disable react/prop-types */
import React from 'react'
import { Form, AutoComplete, Spin } from 'antd'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useController, useFormContext } from 'react-hook-form'

const WrapperFormItem = styled(Form.Item)`
  height: max-content;
  width: 100%;
  margin-bottom: 10px;

  .ant-input {
    min-height: 38px;
    border-radius: 4px;
  }

  .ant-form-item-label {
    font-size: 14px;
    overflow: unset;
    white-space: unset;
    .ant-form-item-no-colon {
      height: 100%;
    }
  }

  .select__menu {
	  z-index: 10;
  }

  .select__control {
    border: ${({ validateStatus, theme }) => (validateStatus === 'error' ? `1px solid ${theme.error_ant} !important` : '')};
    box-shadow: ${({ validateStatus }) => (validateStatus === 'error' ? 'none' : '')};
  }

  .ant-form-item-children-icon {
    display: none;
  }

  .select__dropdown-indicator {
    color: hsl(0, 0%, 60%);
  }
  
`

const WrapperLabel = styled.div`
  width: 100%;
  font-size: 13px;
`

const FormAutoCompleteV2 = ({ label, name, rules, defaultValue = '', loading = false, wrapperProps, options = [], ...rest }) => {
  const { control } = useFormContext()
  const { field: { onChange, value }, fieldState: { error } } = useController({ name, control, rules, defaultValue })
  const [trans] = useTranslation('common')

  return (
    <WrapperFormItem
      {...wrapperProps}
      label={label && <WrapperLabel>{label}</WrapperLabel>}
      validateStatus={(error) ? 'error' : ''}
      help={error?.message}
    >
      <AutoComplete
        placeholder={trans('select')}
        notFoundContent={loading ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spin /></div> : trans('noOption')}
        options={options}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </WrapperFormItem>
  )
}

export default FormAutoCompleteV2
