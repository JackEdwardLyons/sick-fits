import styled from 'styled-components'

export const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`
