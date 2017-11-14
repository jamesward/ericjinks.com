import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import _format from 'date-fns/format'

import { Title, Flex, BackgroundImage } from './common'
import { color } from '../globalStyles'

export default ({ to, title, image, brightness, date, excerpt, bordered }) => (
  <CardWrap to={to} bordered={bordered}>
    <BackgroundImage
      className='CardBackgroundImage'
      image={image}
      opacity={brightness}
    />
    <CardInner className='CardInner' column alignStart justifyCenter>
      <Title className='CardTitle'>
        <div className='background' />
        <span className='animate-translate'>{title}</span>
      </Title>
      {date && <Meta>{_format(new Date(date), 'MMMM Do, YYYY')}</Meta>}
      {excerpt && <Excerpt>{excerpt}</Excerpt>}
    </CardInner>
  </CardWrap>
)

const transition = `
  transition: all .1s ease-out;
`
const CardWrap = styled(Link)`
  position: relative;
  display: block;
  mix-blend-mode: lighten;
  text-decoration: none;
  overflow: hidden;
  padding: ${props => (props.bordered ? '3.5rem 2rem' : '12.5rem 0')};
  border: ${props =>
    props.bordered ? `1px solid ${color.secondary}` : 'none'};

  .CardBackgroundImage {
    filter: saturate(30%);
    transition: filter 0.1s ease-out;
  }

  &:hover,
  &:focus {
    text-decoration: none;
  }
`
const CardInner = styled(Flex)`
  position: relative;
  background: ${color.black};
  max-height: 80vh;
  opacity: 0.9;
  mix-blend-mode: lighten;
  ${transition};

  ${Title} {
    margin: 0;
  }
`
const Meta = styled.h3`
  font-weight: 200;
  margin-bottom: 1rem;
`
const Excerpt = styled.div``
