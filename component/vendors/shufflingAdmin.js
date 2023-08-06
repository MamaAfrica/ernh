import classes from './shufflingAdmin.module.css'
import WhatsappIcon from '../icons/whatsapp'
import { useRouter } from 'next/router'
import Link from 'next/link'

function ShufflingAdmin() {
const router = useRouter()
let quickloaded = classes.quickloaded
let ajahOne = classes.ajahOne
let ajahTwo = classes.ajahTwo
let ajahThree = classes.ajahThree
let digitalOne = classes.digitalOne
let digitalTwo = classes.digitalTwo
let digitalThree = classes.digitalThree
const adminOne = [quickloaded ]
const adminTwo = [ ajahOne,ajahTwo,ajahThree]
const adminThree = [ digitalOne,digitalTwo,digitalThree]

let refreOne;
let refreTwo;
let refreThree;
function changeAdmin(){
const random = Math.floor(Math.random()*3)
if(random===0){
    refreOne = adminOne[0]
    refreTwo = adminOne[0]
    refreThree = adminOne[0]
}else if(random===1){
    refreOne = adminTwo[0]
    refreTwo = adminTwo[1]
    refreThree = adminTwo[2]
}else if(random ===2){
    refreOne = adminThree[0]
    refreTwo = adminThree[1]
    refreThree = adminThree[2]
}
}
changeAdmin()
    return (
        <div className={classes.admin}>
            <h2>Kindly Remit Old Codes Sold to Request Again</h2>
            <p>Contact any of the following Admins to Make Payment</p>
            <div className={refreOne}>
                <WhatsappIcon />
                <h5>Quickloaded Assistant </h5>
                <p><Link hrefLang='https://wa.link/iljqs0'>https://wa.link/iljqs0</Link> </p>
            </div>
            <div className={refreTwo}>
                <WhatsappIcon />
                <h5>Ajah's Media</h5>
                <p><Link href='https://wa.link/1zlrg0'>https://wa.link/1zlrg0</Link> </p>
            </div>
            <div className={refreThree}>
                <WhatsappIcon />
                <h5>Digital Bigsteve  </h5>
                <p><Link href="https://wa.link/8o36fy">https://wa.link/8o36fy</Link> </p>
            </div>
        </div>
    )
}

export default ShufflingAdmin