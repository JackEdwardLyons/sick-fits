import gql from 'graphql-tag'

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      name
      id
      price
      description
      photo {
        altText
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`

export const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      id
      price
      description
      photo {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`

export const PRODUCT_COUNT_QUERY = gql`
  query PRODUCT_COUNT_QUERY {
    _allProductsMeta {
      count
    }
  }
`

export const AUTHENTICATED_USER_QUERY = gql`
  query AUTHENTICATED_USER_QUERY {
    authenticatedItem {
      ... on User {
        name
        email
        id
      }
    }
  }
`
