'use client'
import Link from 'next/link'
import { Rammetto_One } from "next/font/google";
export const rammetto = Rammetto_One({
    weight: ["400"],
    subsets: ["latin"],
});

const navigation = [
    { name: 'View Saved Template', href: '/template' },
]

const Header = () => {

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
                <Link href="/" className={rammetto.className}>
                    <span className="text-orange-700">Website Builder</span>
                </Link>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="text-sm font-md rounded-sm py-2 px-4 border-2 uppercase leading-6 text-gray-900">
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Header
