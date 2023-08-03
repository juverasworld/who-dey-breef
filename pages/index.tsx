import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from "../components/Hero"
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <section>
      <Hero/>
    </section>
  )
}

export default Home
