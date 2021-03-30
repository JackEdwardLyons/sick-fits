import Link from 'next/link'
import Image from 'next/image'
import ItemStyles from './styles/ItemStyles'
import Title from './styles/Title'
import PriceTag from './styles/PriceTag'
import { ProductType } from '../types/product-types'
import formatMoney from '../lib/formatMoney'
import DeleteProduct from './DeleteProduct'

export default function Products({ product }: { product: ProductType }) {
  return (
    <ItemStyles>
      {product?.photo && (
        <Image
          src={product.photo.image.publicUrlTransformed}
          alt={product.name}
          height={800}
          width={1000}
          layout="responsive"
        />
      )}
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      {/* TODO: Add buttons to edit and delte item */}
      <div className="buttonList">
        <Link
          href={{
            pathname: 'update',
            query: {
              id: product.id,
            },
          }}
        >
          Edit ✏️
        </Link>
        <DeleteProduct id={product.id}>Delete</DeleteProduct>
      </div>
    </ItemStyles>
  )
}
