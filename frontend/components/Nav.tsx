import Link from 'next/link'
import { FC } from 'react'
import NavStyles from './styles/NavStyles'

const Nav: FC = () => (
  <NavStyles>
    <Link href="/products">Products</Link>
    <Link href="/sell">Sell</Link>
    <Link href="/orders">Orders</Link>
    <Link href="/account">Account</Link>
  </NavStyles>
)

export default Nav
