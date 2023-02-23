/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react'
import { Form, DatePicker, ConfigProvider } from 'antd'
import { useController, useFormContext } from 'react-hook-form'
import styled from 'styled-components'

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

  // wrap button outside to fix auto close calendar when click outside input
  button#popup-container {
	  border: none;
	  padding: 0;
	  background-color: transparent;
    width: 100%;
    .ant-picker {
      width: 100%;
    }
  }
`

const WrapperLabel = styled.div`
  width: 100%;
  font-size: 13px;
`

const FormDatePicker = ({
  label,
  name,
  rules,
  defaultValue = '',
  wrapperProps,
  wrapperStyles,
  forceError,
  hideError,
  useDate,
  ...rest
}) => {
  const { control } = useFormContext()
  const {
    field: { onChange, value },
    fieldState: { error }
  } = useController({ name, control, rules, defaultValue })

  const valueProps = useMemo(() => (useDate ? { value } : {}), [value])

  return (
    <WrapperFormItem
      {...wrapperProps}
      label={label && <WrapperLabel>{label}</WrapperLabel>}
      help={!hideError && error?.message}
      validateStatus={error || forceError ? 'error' : ''}
      style={wrapperStyles}
    >
      <button id="popup-container" type="button" onMouseDown={(e) => e.preventDefault()}>
        <ConfigProvider getPopupContainer={() => document.getElementById('popup-container')}>
          <DatePicker
            onChange={(date, dateString) => (useDate ? onChange(date) : onChange(dateString))}
            allowClear
            inputReadOnly
            {...rest}
            {...valueProps}
          />
        </ConfigProvider>
      </button>
    </WrapperFormItem>
  )
}

export default FormDatePicker
