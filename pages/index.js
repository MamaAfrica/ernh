import {Fragment} from 'react'
import Head from 'next/head'
import BannerL from '@/component/banner/bannerL';
 
 
 

const HomePage = () => {
  return ( 
  
    <Fragment>
      <Head>
        <title>EarnHive | Beyound Wealth Creation</title>
        <meta 
        name='description'
        content='Earnhive is an affiliate platform in which people are busily occupied with little task at which they earn
        after conclusion. The main motive of earnhive is to create a financial freedom in the affiliate market. Just
        as the word “HIVE” means, a place where people are actively busy'
        />
      </Head>
     <BannerL/>
      
   
    </Fragment>
    
    
   
   );
}
 
export default HomePage;