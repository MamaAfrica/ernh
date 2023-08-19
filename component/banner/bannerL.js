 
import classes from './bannerL.module.css'
import BannerHeader from "./bannerHeader";
import BannerPara from "./bannerPara";
 
const BannerL = () => {
    return ( 
        <div className={classes.banner}>
            <div className={classes.bannerSection}>
            <BannerHeader/>
            <BannerPara/>
           

            </div>
             
        </div>
     );
}
 
export default BannerL;