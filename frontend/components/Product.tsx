import Link from 'next/link'
import Image from 'next/image'
import ItemStyles from './styles/ItemStyles'
import Title from './styles/Title'
import PriceTag from './styles/PriceTag'
import { ProductType } from '../types/product-types'
import formatMoney from '../lib/formatMoney'

export default function Product({ product }: { product: ProductType }) {
  return (
    <ItemStyles>
      <Image
        src={product.photo.image.publicUrlTransformed}
        alt={product.photo.altText}
        height={800}
        width={1000}
        layout="responsive"
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      {/* TODO: Add buttons to edit and delte item */}
    </ItemStyles>
  )
}
