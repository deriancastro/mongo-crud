import Proptypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components/macro'

CardApp.propTypes = {
  text: Proptypes.node,
  role: Proptypes.string,
}

export default function CardApp({ text }) {
  return (
    <Card role="card" color="steelblue">
      {text}
    </Card>
  )
}

const Card = styled.section`
  padding: 20px;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  background: rgb(244, 233, 122);
  color: ${props => props.color};
`
