import Link from 'next/link';
import Image from 'next/image';

export const Headerlogo = () => {
    return (
        <Link href="/">
        <div className='flex items-center hidden lg:flex'>
            <Image src="/logo.svg" alt="Logo" width={28} height={28}/>
            <p className="font-semibold text-white text-2xl ml-2.5">
                Finance
            </p>
        </div>
        </Link>

    )
}