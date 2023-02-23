/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React from 'react'
import Modal from 'react-modal'
import { Popconfirm, Spin, Button, ConfigProvider } from 'antd'
import { CloseOutlined, EditOutlined } from '@ant-design/icons'

import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const customStyles = {
  overlay: {
    backdropFilter: 'blur(0.5rem)',
    willChange: 'backdrop-filter',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1200
  }
}

const ModalWrapper = styled(Modal)`
  box-sizing: border-box;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: 'tabular-nums';
  line-height: 1.5715,;
  list-style: 'none';
  font-feature-settings: 'tnum', 'tnum';
  pointer-events: none;
  position: relative;
  top: 100px;
  max-width: calc(100vw - 32px);
  margin: 0 auto;
  padding-bottom: 24px;
  width: ${(theme) => {
    switch (theme.size) {
      case 'large':
        return '100%'
      default:
        return '55%'
    }
  }};
  .ant-modal-content {
    border-radius: 1rem;
    max-height: 80vh;
    overflow: ${(theme) => theme.overflow || 'auto'};
  .ant-modal-header {
      height: 70px;
    }
    .ant-modal-body {
      overflow-x: ${(theme) => theme.overflow || 'auto'};
      max-height: calc(80vh - 125px)
    }
    .ant-modal-footer {
      display: flex;
      justify-content: center;
      height: 55px;
      .button__cancel {
        margin-right: 10px;
      }
    }
  }
`

const Error = styled.div`
  background-color: ${({ theme }) => theme.bg_error};
  border: 1px solid ${({ theme }) => theme.bd_error};
  padding: 8px 16px;
`

const ModalComponent = ({
  title,
  visible,
  onCancel,
  children,
  onSubmit,
  disabledSubmit,
  onSubmitText,
  onCancelText,
  type,
  confirm = false,
  cancel = true,
  loadingSubmit = false,
  isLoadingSubmit,
  confirmTitle = 'Are you sure to do this task?',
  isNotFooterButton = false,
  onClose,
  ...rest
}) => {
  const { t } = useTranslation()
  const renderModalBodyBaseOnType = () => {
    switch (type) {
      case 'error':
        return <Error>{children}</Error>
      default:
        return children
    }
  }

  const renderButtonSubmit = () => {
    if (confirm) {
      return (
        <div id="modal-confirm-popup-container">
          <ConfigProvider getPopupContainer={() => document.getElementById('modal-confirm-popup-container')}>
            <Popconfirm title={confirmTitle} onConfirm={() => onSubmit()} okText={onSubmitText} cancelText={t('cancel')}>
              <Button type="primary" htmlType="button" onClick={() => console.log(123)} disabled={disabledSubmit}>{onSubmitText || t('ok')}</Button>
            </Popconfirm>
          </ConfigProvider>
        </div>
      )
    }
    if (loadingSubmit) {
      return (
        <Spin spinning={isLoadingSubmit} wrapperClassName="button">
          <Button
            type="primary"
            htmlType="button"
            disabled={disabledSubmit}
            onClick={() => onSubmit()}
          >
            {onSubmitText || t('ok')}
          </Button>
        </Spin>
      )
    }
    return (
      <Button
        type="primary"
        htmlType="button"
        disabled={disabledSubmit}
        onClick={() => onSubmit()}
      >
        {onSubmitText || t('ok')}
      </Button>
    )
  }

  return (
    <ModalWrapper
      isOpen={visible}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false}
      {...rest}
    >
      <form>
        <div className="ant-modal-content">
          <div className="ant-modal-header">
            <button className="ant-modal-close" onClick={onClose || onCancel} type="button">
              <div className="ant-modal-close-x">
                <div className="anticon anticon-close ant-modal-close-icon">
                  <CloseOutlined />
                </div>
              </div>
            </button>
            {title && (
              <div
                style={{
                  height: 36,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 0,
                  fontSize: 24
                }}
              >
                <EditOutlined />
                <span style={{ fontSize: 24, fontWeight: 700, padding: 0, lineHeight: 1.2, marginTop: 5 }}>
                  &nbsp;
                  {title}
                </span>
              </div>
            )}
          </div>
          <div className="ant-modal-body">{renderModalBodyBaseOnType()}</div>

          {!isNotFooterButton && (
            <div className="ant-modal-footer">
              {cancel && (
              <button type="button" onClick={onCancel} className="ant-btn button__cancel">
                <span>{onCancelText || t('cancel')}</span>
              </button>
              )}
              {renderButtonSubmit()}
            </div>
          )}
        </div>
      </form>
    </ModalWrapper>
  )
}

export default ModalComponent
