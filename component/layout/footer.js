import classes from './footer.module.css'
import Logo from './logo';
import Link from 'next/link';
import FacebookIcon from '../icons/facebook';
import InstagramIcon from '../icons/instagram';
 import TiktokIcon from '../icons/tiktok';
import TwitterIcon from '../icons/twitter';
 
  
 

const Footer = () => {
    return ( 
        <div className={classes.section}>
              <div className={classes.hr}></div>
        <div className={classes.footer}>
            <div className={classes.menu}>
            <ul>
                                    <li><Link href='/'>Home</Link></li>
                                    <li><Link href='/about'>About</Link></li>
                                    <div>
                                        <li><Link href='/activation-code'>Get Coupon Code</Link></li>
                                    </div>
                                    <div>
                                        <li><Link href='/coupon-checker'>Check Code</Link></li>
                                    </div>
                                    <div>
                                        <li><Link href='/how-it-works'>How it works</Link></li>
                                    </div>
                                    <div>
                                        <li><Link href='/top-earners'>Top Earners</Link></li>
                                    </div>

                                    <li><Link href='/advert'>Hive Advert</Link></li>
                                    <li><Link href='/contact'>Contact</Link></li>
                                     
                                            <div>
                                                <li><Link href='/tandc'>Terms and Conditions</Link></li>
                                            </div>
                                            <div>
                                                <li><Link href='/privacy'>Privacy Policy</Link></li>
                                            </div>

  
                                    <li><Link href='/freelancing'>Freelancing</Link></li>



                                </ul>
                 
            </div>
            <div className={classes.icons}>
                <p className={classes.rof}>Reach Out & Folow Us:</p>
         
         <span><Link href="https://www.facebook.com/groups/1022672361973643/?ref=share_group_link" target='_blank'><FacebookIcon/></Link> </span> 
         <span><Link href="https://instagram.com/earnhivetech?igshid=ZGUzMzM3NWJiOQ=="target='_blank'><InstagramIcon/></Link> </span> 
       
         <span><Link href='https://twitter.com/EarnHiveTech?t=iPkSmAjGvY37ipKd3JVpbg&s=09' target='_blank'><TwitterIcon/></Link></span> 
         <span><Link href='http://www.tiktok.com/@earnhive'target='_blank'><TiktokIcon/></Link></span> 
         
          
          
            </div>
            <div className={classes.logo}>
            <Logo/>
            </div>
        </div>
        <p style={{color:'gold',textAlign:'center'}}>Copyright@EarnHive </p>
      
        </div>
     );
}
 
export default Footer;