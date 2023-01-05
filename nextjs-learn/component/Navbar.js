import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Link href='/'><Image src='/prg.png' width={88} height={77} /></Link>
        
        {/* <h1>Events List</h1> */}
      </div>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/events'>Listings</Link>
    </nav>
  )
}

export default Navbar
