import Link from 'next/link'
import { Home, Gift, ShoppingBag, HelpCircle } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-2">
        <ul className="flex space-x-6 justify-center">
          <li>
            <Link href="/" className="flex items-center text-gray-700 hover:text-purple-600">
              <Home className="h-5 w-5 mr-2" />
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/giftcards" className="flex items-center text-gray-700 hover:text-purple-600">
              <Gift className="h-5 w-5 mr-2" />
              Gift Cards
            </Link>
          </li>
          <li>
            <Link href="/orders" className="flex items-center text-gray-700 hover:text-purple-600">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Pedidos
            </Link>
          </li>
          <li>
            <Link href="/help" className="flex items-center text-gray-700 hover:text-purple-600">
              <HelpCircle className="h-5 w-5 mr-2" />
              Ayuda
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}