/* eslint-disable react/prop-types */
import React, { useCallback } from 'react'
import { Form, InputNumber } from 'antd'
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

  .input-number {
	  display: flex;
	  border: 1px solid #d9d9d9;
	  border-radius: 2px;

	  .ant-input-number {
		border: none;
	  }

		.prefix {
			display: flex;
			align-items: center;
			padding: 0 8px;
			background-color: #fafafa;
			border-right: 1px solid #d9d9d9;
		}
  }
`

const WrapperLabel = styled.div`
  width: 100%;
  font-size: 13px;
`

const FormInputNumber = ({ label, name, rules, defaultValue = '', prefix = '￥', wrapperProps, ...rest }) => {
  const { control } = useFormContext()
  const { field: { onChange, value }, fieldState: { error } } = useController({ name, control, rules, defaultValue })

  const handleKeyDown = useCallback((e) => {
    if (!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58)
      || e.keyCode === 8
      || e.keyCode === 190)) {
      e.preventDefault()
    }
  }, [])

  return (
    <WrapperFormItem
      {...wrapperProps}
      label={label && <WrapperLabel>{label}</WrapperLabel>}
      validateStatus={(error) ? 'error' : ''}
      help={error?.message}
    >
      <div className="input-number">
        {prefix && <div className="prefix">{prefix}</div>}
        <InputNumber type="number" onChange={onChange} onKeyDown={handleKeyDown} value={value} {...rest} />
      </div>
    </WrapperFormItem>
  )
}

export default FormInputNumber
