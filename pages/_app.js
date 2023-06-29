import '@/styles/globals.css'
import Head from 'next/head'
import Layout from '@/component/layout/layout' 
import { SessionProvider } from "next-auth/react"
 
 
 
 

export default function App({ Component, pageProps:{session,...pageProps},}) {
  return (
   
    <SessionProvider session={session}>
     <Layout>
     <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <meta
          name='description'
          content='Earnhive is an affiliate platform in which people are busily occupied with little task at which they earn
          after conclusion. The main motive of earnhive is to create a financial freedom in the affiliate market. Just
          as the word “HIVE” means, a place where people are actively busy!'
        />
        <link rel="shortcut icon" href="siteid.png" type="image/x-icon"></link>
      </Head>
    <Component {...pageProps} />
    </Layout>
    </SessionProvider>
 
   
  )

}
