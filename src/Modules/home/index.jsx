/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'

import { E_LEARNING_LOGO } from 'Assets'
import { Wrapper } from './styled'

const HomeScreen = () => (
  <Wrapper id="intro">
    <div className="row h-fluid-min-100 intro-0-2-5">
      <div className="col-lg-6 col-12 introImageWrapper-0-2-6">
        <div className="introImage-0-2-7" />
      </div>
      <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center introContentWrapper-0-2-8">
        <div>
          <h1 className="display-1 mb-4">Welcome to <img src={E_LEARNING_LOGO} alt="logo" /></h1>
          <p className="display-6 mb-4">Everything is thought to make it easy.</p>
          <p className="h2 mb-5">Take your coffee and <span className="text-info">focus on your business.</span></p>
        </div>
      </div>
    </div>
    <div className="animation-0-2-9">
      <div
        className="item-0-2-10 item1-0-2-11"
      />
      <div
        className="item-0-2-10 item2-0-2-12"
      />
      <div
        className="item-0-2-10 item3-0-2-13"
      />
      <div className="item-0-2-10 item4-0-2-14" />
      <div
        className="item-0-2-10 item5-0-2-15"
      />
      <div className="item-0-2-10 item6-0-2-16" />
      <div
        className="item-0-2-10 item7-0-2-17"
      />
      <div
        className="item-0-2-10 item8-0-2-18"
      />
      <div
        className="item-0-2-10 item9-0-2-19"
      />
      <div
        className="item-0-2-10 item10-0-2-20"
      />
      <div
        className="item-0-2-10 item11-0-2-21"
      />
      <div
        className="item-0-2-10 item12-0-2-22"
      />
      <div
        className="item-0-2-10 item13-0-2-23"
      />
      <div
        className="item-0-2-10 item14-0-2-24"
      />
    </div>
  </Wrapper>
)

export default HomeScreen
