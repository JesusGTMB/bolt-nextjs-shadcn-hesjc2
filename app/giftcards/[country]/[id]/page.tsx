"use client"

import { useParams } from 'next/navigation'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/lib/cartContext"
import { useToast } from "@/hooks/use-toast"
import Image from 'next/image'

const giftCards = {
  'usa': [
    { id: 'netflix-usa-20', name: 'Netflix USA', price: 20, currency: 'USD', image: '/images/netflix-usa.jpg' },
    { id: 'netflix-usa-30', name: 'Netflix USA', price: 30, currency: 'USD', image: '/images/netflix-usa.jpg' },
    { id: 'netflix-usa-50', name: 'Netflix USA', price: 50, currency: 'USD', image: '/images/netflix-usa.jpg' },
  ],
  'colombia': [
    { id: 'netflix-col-20000', name: 'Netflix Colombia', price: 20000, currency: 'COP', image: '/images/netflix-colombia.jpg' },
    { id: 'netflix-col-30000', name: 'Netflix Colombia', price: 30000, currency: 'COP', image: '/images/netflix-colombia.jpg' },
    { id: 'netflix-col-50000', name: 'Netflix Colombia', price: 50000, currency: 'COP', image: '/images/netflix-colombia.jpg' },
  ],
}

export default function GiftCardPage() {
  const params = useParams()
  const { country, id } = params
  const { addToCart } = useCart()
  const { toast } = useToast()

  const giftCard = giftCards[country as keyof typeof giftCards]?.find(card => card.id === id)

  const [selectedAmount, setSelectedAmount] = useState(giftCard?.price.toString() || '')

  if (!giftCard) {
    return <div>Gift Card not found</div>
  }

  const handleAddToCart = () => {
    addToCart({
      id: giftCard.id,
      name: giftCard.name,
      price: parseInt(selectedAmount),
      quantity: 1,
    })
    toast({
      title: "Producto agregado",
      description: `${giftCard.name} ${selectedAmount} ${giftCard.currency} ha sido agregado al carrito.`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image 
            src={giftCard.image} 
            alt={giftCard.name} 
            width={500} 
            height={300} 
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{giftCard.name}</h1>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Seleccionar Monto</h2>
            <Select value={selectedAmount} onValueChange={setSelectedAmount}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona un monto" />
              </SelectTrigger>
              <SelectContent>
                {giftCards[country as keyof typeof giftCards].map((card) => (
                  <SelectItem key={card.id} value={card.price.toString()}>
                    {card.price} {card.currency}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <p className="text-2xl font-bold mb-6">
            Precio Estimado: {parseInt(selectedAmount).toLocaleString()} {giftCard.currency}
          </p>
          <Button onClick={handleAddToCart} className="w-full">Agregar al Carrito</Button>
        </div>
      </div>
    </div>
  )
}