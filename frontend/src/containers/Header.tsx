import SearchBar from "@/components/SearchBar";
import { Island_Moments } from "next/font/google";
import Link from 'next/link'

const island_Moments = Island_Moments({ subsets: ["latin"], weight: ["400"] });

const Header = () => {
  return (
    <header>
      <div className="container grid grid-cols-3 gap-2.5">
        <h1 className={`text-5xl ${island_Moments.className}`}>
          <Link href={'/'}>Restaurant</Link>
        </h1>
        <SearchBar />
      </div>
    </header>
  )
}

export default Header