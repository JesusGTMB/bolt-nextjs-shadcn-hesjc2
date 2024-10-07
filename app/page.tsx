import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function Home() {
  const giftCards = [
    { id: "netflix-col-20000", name: "Netflix Colombia", price: 20000, currency: "COP", image: "/images/netflix-colombia.jpg" },
    { id: "netflix-usa-20", name: "Netflix USA", price: 20, currency: "USD", image: "/images/netflix-usa.jpg" },
    { id: "spotify-col-30000", name: "Spotify Colombia", price: 30000, currency: "COP", image: "/images/spotify-colombia.jpg" },
    { id: "amazon-usa-50", name: "Amazon USA", price: 50, currency: "USD", image: "/images/amazon-usa.jpg" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Bienvenido a Tekno Store Ve</h1>
      <p className="text-xl text-center mb-12">Tu destino para Gift Cards Internacionales</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {giftCards.map((giftCard) => (
          <Link href={`/giftcards/${giftCard.currency === 'USD' ? 'usa' : 'colombia'}/${giftCard.id}`} key={giftCard.id}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{giftCard.name}</CardTitle>
                <CardDescription>{giftCard.price} {giftCard.currency}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image 
                  src={giftCard.image} 
                  alt={giftCard.name} 
                  width={200} 
                  height={120} 
                  className="rounded-md"
                />
              </CardContent>
              <CardFooter>
                <Button className="w-full">Ver Detalles</Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}