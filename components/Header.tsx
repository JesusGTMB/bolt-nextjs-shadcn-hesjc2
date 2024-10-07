"use client"

import Link from 'next/link'
import { ShoppingCart, User, Search } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useCart } from '@/lib/cartContext'
import { useAuth } from '@/lib/authContext'
import { Badge } from './ui/badge'

export default function Header() {
  const { cart } = useCart()
  const { user } = useAuth()

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-600">
          TEKNOSTORE
        </Link>
        <div className="flex-grow mx-4 relative">
          <Input 
            type="text" 
            placeholder="Search Brands, eGift Cards & Games" 
            className="w-full pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <nav>
          <ul className="flex space-x-4 items-center">
            {user ? (
              <li>
                <Button variant="ghost">Mi Cuenta</Button>
              </li>
            ) : (
              <li>
                <Button variant="secondary">Iniciar Sesión</Button>
              </li>
            )}
            <li>
              <Link href="/cart">
                <Button variant="secondary" className="relative">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Carrito
                  {cartItemsCount > 0 && (
                    <Badge variant="destructive" className="absolute -top-2 -right-2 text-xs">
                      {cartItemsCount}
                    </Badge>
                  )}
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}