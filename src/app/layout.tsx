
import { cn } from '../lib/utils'
import { Inter, Geist } from 'next/font/google'
import './globals.css'
import Navbar from '../components/NavBar';
import Providers from '../components/Providers';


const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={cn("light", "font-sans", geist.variable)}>
      <Providers>
        <body
          className={cn(
            'min-h-screen font-sans antialiased grainy',
            inter.className
          )}>
          
          <Navbar/>
          {children}
        </body>
        </Providers>
    </html>
  )
}
