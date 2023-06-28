import Button from "../button";
import classes from './bannerL.module.css'
import BannerHeader from "./bannerHeader";
import BannerPara from "./bannerPara";
import BannerProduct from "./bannerProduct";
const BannerL = () => {
    return ( 
        <div className={classes.banner}>
            <div className={classes.bannerSection}>
            <BannerHeader/>
            <BannerPara/>
            <Button/>

            </div>
            <div className={classes.bannerImage}>
                <figure>
                    <BannerProduct/>
                </figure>
            </div>
        </div>
     );
}
 
export default BannerL;