/* eslint-disable react/prop-types */
import React, { useCallback } from 'react'
import { Form, Upload, notification } from 'antd'
import { useController, useFormContext } from 'react-hook-form'
import styled from 'styled-components'
import { InboxOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { getS3PresinedUrl } from 'APIs'
import axios from 'axios'
import { mapMimeToExt } from 'Constants'

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
  }
`

const WrapperLabel = styled.div`
  width: 100%;
  font-size: 13px;
`

const FormUploadDD = ({ label, name, rules, defaultValue = '', checkExist, accept, wrapperProps, onUpload, ...rest }) => {
  const [trans] = useTranslation('common', 'error_message')
  const { control, setValue, setError, clearErrors } = useFormContext()
  const { field: { onChange }, fieldState: { error } } = useController({ name, control, rules, defaultValue })

  const acceptType = accept || [
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.ms-powerpoint',
    'video/mp4',
    'video/webm',
    'video/quicktime'
  ]

  const uploadFile = useCallback(async (options) => {
    clearErrors(name)
    const { onSuccess, onError, file } = options

    const fileType = mapMimeToExt[file.type]
    const fileList = [{ fileName: file.name, fileType }]
    const config = {
      headers: { 'content-type': file.type }
    }
    try {
      // check fileType
      if (!acceptType.includes(file.type)) {
        setError(name, {
          type: 'manual',
          message: trans('error_message:validation.incorrect_file_type_upload_2', { fileName: file.name })
        })
        throw new Error(trans('error_message:validation.incorrect_file_type_upload_2'))
      }

      // check file exist
      const { data: isExist } = await checkExist(file.name)
      if (isExist) {
        notification.error({
          message: trans('error'),
          description: trans('error_message:FILE_NAME_EXIST'),
          duration: 2
        })
        throw new Error(trans('error_message:FILE_NAME_EXIST'))
      } else {
        const { data } = await getS3PresinedUrl({ fileList })
        await axios.put(data[0].preSignedURL, file, config)
        onChange(data[0].url)
        setValue('filename', file.name)
        setValue('size', file.size)
        setValue('fileType', fileType)
        onSuccess('Ok')
      }
    } catch (err) {
      onError({ err })
    }
  }, [])

  return (
    <WrapperFormItem
      {...wrapperProps}
      label={label && <WrapperLabel>{label}</WrapperLabel>}
      help={error?.message}
      validateStatus={error ? 'error' : ''}
    >
      <Upload.Dragger
        accept={acceptType.join()}
        customRequest={onUpload || uploadFile}
        onRemove={() => {
          onChange('')
          setValue('filename', '')
          setValue('size', '')
          setValue('fileType', '')
          clearErrors(name)
        }}
        {...rest}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-hint">
          {trans('drag_upload_hint')}
        </p>
      </Upload.Dragger>
    </WrapperFormItem>
  )
}

export default FormUploadDD
