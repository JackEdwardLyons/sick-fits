export type SingleProductProps = {
  query: {
    id: string
  }
}

type CloudinaryImage_File = {
  id: string
  path: string
  filename: string
  originalFilename: string
  mimetype: string
  encoding: string
  publicUrl: string
  publicUrlTransformed: string
}

export type ProductImageType = {
  id: string
  image: CloudinaryImage_File
  altText: string
  product: ProductType
}

export type ProductType = {
  id: string
  name: string
  description: string
  photo: ProductImageType
  status: string
  price: number
}
