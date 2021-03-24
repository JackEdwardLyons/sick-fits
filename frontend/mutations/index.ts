import gql from 'graphql-tag'

export const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        # create a photo in cloudinary storage
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`

export const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
    }
  }
`

export const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`
