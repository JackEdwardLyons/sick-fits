import Link from 'next/link'
import { FC } from 'react'
import useUser from '../hooks/useUser'
import SignOut from './SignOut'
import NavStyles from './styles/NavStyles'

const Nav: FC = () => {
  const user = useUser()
  console.log({ user })

  return (
    <NavStyles>
      <Link href="/products">Products</Link>

      {!user && <Link href="/signin">Sign in</Link>}

      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <SignOut />
        </>
      )}
    </NavStyles>
  )
}

export default Nav
