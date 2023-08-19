import Image from "next/image";
 

const Logo = () => {
    return ( 
      <Image
      src='/logo-removebg-preview.png'
      alt="logo"
      width={180}
      height = {70}
      />

    
     );
}
 
export default Logo;