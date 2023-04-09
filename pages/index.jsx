import Head from 'next/head'
import Header from '@/components/layout/Header'
import Home from "./home"
import Input from '@/components/form/Input'
import Reservation from '@/components/Reservation'

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>React Food Ordering</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        
      </Head>
      <Header />
      <Home />
      <Reservation />
    </div>
  )
}
