import { Poppins,Nunito,PlusJakartaSans} from "next/font/google";
import './globals.css'

const Poppin=Poppins({
  subsets:["devanagari","latin","latin-ext"],
  weight: ["100","200","300","400","500","600","800","900"],
  variable:"--font-poppins"
})
const Nuni=Nunito({
  subsets:["latin"],
  weight:["200","300","400","500","600","700","800","900","1000"],
  variable:"--font-Nunito",
})


export default function RootLayout({ children }) {
  return (   
    <html lang="en" className={`${Poppin.variable} ${Nuni.variable}`} >
      <body >{children}</body>
    </html>
  );
}
