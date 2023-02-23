import styled from 'styled-components'
import { Divider as DividerAntd } from 'antd'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  min-height: calc(100vh - 5.4rem - 39px);
  display: flex;
  width: 100%;
  padding: 0 1rem;
  flex-direction: column;
  overflow: auto;
  color: ${({ theme }) => theme.text_primary};

  .anticon-search {
    margin-right: 0;
  }

  .form-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background-color: ${({ theme }) => theme.white};
    border-radius: 0.75rem;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 5%);

    form {
      width: 70%;
    }

    .form-action-group {
      margin: 1rem 0;
      text-align: center;
    }
  }
`

// column table
export const Action = styled.div`
  display: flex;
  justify-content: space-around;

  .action-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e7eef8;
    border-color: #e7eef8;
    border-radius: .75rem;
    &:hover {
      color: #fff;
      background-color: #1f2128;
      border-color: #1f2128;
    }
    svg {
      width: 12px;
      height: 12px;
    }
  }
`

// detail screen
export const Block = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: .75rem;
  margin: 1rem 0;
  padding: 1rem;
  .block-head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
`

export const Table = styled.table`
  width: 70%;
  margin: 2rem auto;
  box-shadow: 0 .8rem 3rem rgba(0,0,0,.075);
`

export const TBody = styled.tbody`
`

export const Tr = styled.tr`
`

export const Th = styled.td`
  background-color: #d3dafe;
  border: none;
  width: 200px;
  padding: 1rem;
  font-weight: 600;
  border-radius: .75rem 0;
`

export const Td = styled.td`
  background-color: #e7eef8;
  border: none;
  padding: 1rem;
  white-space: pre-wrap;
  word-break: break-all;
  word-wrap: break-word; 
  border-radius: .75rem 0;
`
// detail screen

// create/edit divider
export const Divider = styled(DividerAntd)`
  height: 2px;
  padding: 0;
  margin : 0;
`
// create/edit RightWrapper
export const Right = styled.div`
  display: flex;
  width: 70%;
  padding: 16px;
  flex-direction: column;

  .ant-form-item {
    margin-bottom: 0;
  }

  &.form-editor-content-question {
    .ant-row {
      margin-bottom: 0 !important;
    }
    p {
      margin-bottom: 0;
    }
  }
`

// back to home page
export const BackButton = styled(Link)`
  color: #4d69fa;
  & svg {
    margin-right: .5rem;
  }
  &:hover {
    color: #4d69fa;
    background-color: #edf0ff;
    padding: .4rem .85rem;
    border-radius: .75rem;
  }
`
