"use client"

import { useCart } from '@/lib/cartContext'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Carrito de Compras</h1>
        <p>Tu carrito está vacío.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Carrito de Compras</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b pb-2">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: {item.price.toLocaleString()} COP</p>
            </div>
            <Button variant="destructive" size="icon" onClick={() => removeFromCart(item.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <p className="text-xl font-bold">Total: {total.toLocaleString()} COP</p>
        <div className="mt-4 space-x-4">
          <Button onClick={() => alert('Procesando pago...')}>Proceder al pago</Button>
          <Button variant="outline" onClick={clearCart}>Vaciar carrito</Button>
        </div>
      </div>
    </div>
  )
}