"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift } from "lucide-react"
import { useCart } from "@/lib/cartContext"
import { useToast } from "@/hooks/use-toast"

export default function ColombianGiftCards() {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const giftCards = [
    { id: "col-20000", name: "Gift Card Netflix Colombia 20.000 COP", price: 20000, description: "Disfruta del contenido colombiano" },
    { id: "col-30000", name: "Gift Card Netflix Colombia 30.000 COP", price: 30000, description: "Más tiempo de entretenimiento" },
    { id: "col-40000", name: "Gift Card Netflix Colombia 40.000 COP", price: 40000, description: "La mejor opción para maratones" },
    { id: "col-50000", name: "Gift Card Netflix Colombia 50.000 COP", price: 50000, description: "Para los amantes de las series" },
    { id: "col-60000", name: "Gift Card Netflix Colombia 60.000 COP", price: 60000, description: "Experiencia premium de streaming" },
  ];

  const handleAddToCart = (giftCard) => {
    addToCart(giftCard);
    toast({
      title: "Producto agregado",
      description: `${giftCard.name} ha sido agregado al carrito.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Gift Cards de Netflix Colombia</h1>
      <p className="text-xl text-center mb-12">Elige la opción perfecta para ti</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {giftCards.map((giftCard) => (
          <Card key={giftCard.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{giftCard.name}</CardTitle>
              <CardDescription>{giftCard.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <Gift className="w-16 h-16 mx-auto mb-4" />
              <p className="text-center">Accede a series y películas exclusivas de Colombia</p>
              <p className="text-center font-bold mt-2">Precio: {giftCard.price.toLocaleString()} COP</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button onClick={() => handleAddToCart(giftCard)}>Agregar al carrito</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}