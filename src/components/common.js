import styled from 'styled-components'
import { color } from '../globalStyles'

export const PageWrap = styled.div`
  padding: 10vh 0;
`

export const Section = styled.section`
  width: 100%;
  padding: ${props => {
    if (props.thick) return '10rem 0'
    if (props.thin) return '2.5rem 0'
    return '5rem 0'
  }};
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1111px;
  width: 90vw;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  justify-content: ${props => {
    if (props.justifyCenter) return 'center'
    if (props.justifyEnd) return 'flex-end'
    if (props.justifyBetween) return 'space-between'
    if (props.justifyAround) return 'space-around'
    return 'flex-start'
  }};
  align-items: ${props => {
    if (props.alignStart) return 'flex-start'
    if (props.alignEnd) return 'flex-end'
    if (props.alignStretch) return 'stretch'
    return 'center'
  }};
  height: ${props => props.fill ? '100%' : 'auto'};
  width: ${props => props.fill ? '100%' : 'auto'};
`

export const Col = styled.div`
  width: 100%;
  flex: 1 1 auto;
`

export const Tip = styled.span`
  border-bottom: 1px dotted currentColor;
`

export const H1 = styled.h1`
  font-weight: 300;
  color: ${color.primary};
`
