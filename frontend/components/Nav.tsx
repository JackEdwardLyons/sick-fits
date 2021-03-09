import Link from 'next/link'
import { FC } from 'react'

const Nav: FC = () => (
  <nav>
    <Link href="/products">Products</Link>
    <Link href="/sell">Sell</Link>
    <Link href="/orders">Orders</Link>
    <Link href="/account">Account</Link>
  </nav>
)

export default Nav
