import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
        impedit suscipit architecto, odio inventore nostrum non neque dicta.
        Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem
        nobis odit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
        impedit suscipit architecto, odio inventore nostrum non neque dicta.
        Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem
        nobis odit.
      </p>
      <Link href='/ninjas/'>See Ninja Listing</Link>
      <Footer />
    </div>
  )
}
