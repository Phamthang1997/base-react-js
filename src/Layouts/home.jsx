/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { Header, SiderBar, Footer } from 'Components'
import { useRoot } from 'Hooks'

const Wrapper = styled.div`
  overflow: auto;
  padding-left: ${({ sidebarCompact }) => (sidebarCompact ? '4rem' : '14rem')};
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.bg_primary_light};
  height: 100%;
`
const Main = styled.main`
  display: flex;
  width: 100%;
  padding: 0;
  background: ${({ theme }) => theme.bg_primary_light};
  justify-content: center;
`
const Content = styled.div`
  width: 100%;
  overflow: hidden;
  /* position: relative; */
`

const HomeLayout = ({ children }) => {
  const { sidebarCompact } = useRoot()
  return (
    <Wrapper sidebarCompact={sidebarCompact}>
      <Header />
      <Main>
        <SiderBar />
        <Content>
          {children}
        </Content>
      </Main>
      <Footer />
    </Wrapper>
  )
}

export default HomeLayout
