"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gift } from "lucide-react"
import { useCart } from "@/lib/cartContext"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

type GiftCard = {
  id: string;
  name: string;
  price: number;
  description: string;
}

type GiftCardCarouselProps = {
  giftCards: GiftCard[];
}

export default function GiftCardCarousel({ giftCards }: GiftCardCarouselProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddToCart = (giftCard: GiftCard) => {
    addToCart(giftCard);
    toast({
      title: "Producto agregado",
      description: `${giftCard.name} ${giftCard.description} ha sido agregado al carrito.`,
    });
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % giftCards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + giftCards.length) % giftCards.length);
  };

  return (
    <div className="relative">
      <Button 
        variant="outline" 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
        onClick={prevCard}
      >
        &#8249;
      </Button>
      <Button 
        variant="outline" 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
        onClick={nextCard}
      >
        &#8250;
      </Button>
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {giftCards.map((giftCard) => (
            <div key={giftCard.id} className="w-full flex-shrink-0">
              <Card className="m-2">
                <CardHeader>
                  <CardTitle>{giftCard.name}</CardTitle>
                  <CardDescription>{giftCard.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Gift className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-center">Accede a series y películas exclusivas</p>
                  <p className="text-center font-bold mt-2">
                    Precio: {giftCard.price.toLocaleString()} {giftCard.id.startsWith('col') ? 'COP' : 'USD'}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button onClick={() => handleAddToCart(giftCard)}>Agregar al carrito</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}