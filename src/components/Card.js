import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Title, Flex, BackgroundImage } from './common'
import { color } from '../globalStyles'

const transition = `
  transition: all .1s ease-out;
`

const CardWrap = styled(Link)`
  position: relative;
  display: block;
  mix-blend-mode: lighten;
  text-decoration: none;
  overflow: hidden;

  .CardBackgroundImage {
    filter: saturate(30%);
    transition: filter .1s ease-out;
  }

  &:hover,
  &:focus {
    text-decoration: none;

    .CardBackgroundImage {
      filter: saturate(70%);
    }

    .CardInner {
      opacity: 1;
    }
  }
`

const CardInner = styled(Flex)`
  position: relative;
  background: ${color.black};
  height: 30rem;
  max-height: 80vh;
  opacity: 0.9;
  mix-blend-mode: lighten;
  ${transition};
`

export default class Card extends Component {
  constructor (props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  componentDidMount () {

  }

  handleMouseMove (e) {
    console.log(e)
  }

  render () {
    const { to, title, image, globalX, globalY } = this.props
    return (
      <CardWrap to={to}>
        <BackgroundImage
          style={{
            transform: `scale(1.1) translate(${-globalX * 5}px, ${-globalY * 5}px)`
          }}
          className='CardBackgroundImage'
          image={image}
        />
        <CardInner className='CardInner' alignCenter justifyStart>
          <Title className='CardTitle'>
            {title}
          </Title>
        </CardInner>
      </CardWrap>
    )
  }
}
