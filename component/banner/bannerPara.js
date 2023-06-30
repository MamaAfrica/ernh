import classes from './bannerPara.module.css'

const BannerPara = () => {
    return (
        <div className={classes.bannerParagraph}>
            <p>Earnhive is an affiliate platform in which people are busily occupied with little task at which they earn after conclusion. </p>

            <div className={classes.btn}>
                <button>Register</button>
            </div>
        </div>

    );
}

export default BannerPara;