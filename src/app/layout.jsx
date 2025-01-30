import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Foter from "../components/Foter";
import CartProvider from "../contexts/CartContext";

 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
  
         <CartProvider>
        <Header/>
        {children}
         <Foter/>
         </CartProvider>

      </body>
    </html>
  );
}
