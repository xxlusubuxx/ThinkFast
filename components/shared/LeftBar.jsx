import {leftMenu} from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

export function LeftBar() {
    return (
    <div className='sidemenu'>
        <div>this is left side bar</div>
        {leftMenu.map((link) => (
            <Link 
                href={link.link}
                key={link.label}
                className = {`leftsidebar_${link.label}`}
            >   
                <p>{link.label}</p>
            </Link>
        ))}
    </div>)
}
