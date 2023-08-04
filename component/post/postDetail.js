 
import TiktokIcon from '../icons/tiktok';
import classes from './postDetail.module.css'
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import WhatsappIcon from '../icons/whatsapp';
 



function PostDetail(props){
  const router = useRouter();
 const{data: session, status}  = useSession()
 let hivepost = props.hivepost
 let userEmail
 if(status==='authenticated'){
  
  userEmail = session.user.username
 }else{
  console.log('out')
  return;
 }


  // creating a share link
  const handleShareClick = async () => {

    if(status==='unauthenticated'){
      router.push('/login')
    }else{
     
  


    if (navigator.share) {
      navigator
        .share({
          url: `http://localhost:3000/post/${props.id}`,
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      console.log('Web Share API not supported.');
    }
    const response = await fetch('http://localhost:3000/api/post/user-post',{
      body: JSON.stringify({userEmail,hivepost}),
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      }
    
    })
    let newPostData = await response.json()

      if (!response.ok) {
          throw new Error(newPostData.message || 'something went wrong')
      }

  }
}

    return(
      <div className={classes.postDetail}>
         <h1>{props.title}</h1>
        <section className={classes.section} >
            <div className={classes.figure}>
           
            <img
        src={props.image}
        alt={props.title}
      />
            </div>
            <div className={classes.details}>
                

                <div className={classes.article}>
                  <h5>Category:</h5>
                  <h6>{props.category}</h6>
                  <hr/>
                    <p>{props.description}</p>
                    <hr/>
                    <h3>Contact Person Link</h3>
                    <p>{props.userlink}</p>
                     
                </div>
                <div className={classes.share}>
                  <h3>Share Post {props.hivepost} Via:</h3>
                  <span onClick={handleShareClick}><WhatsappIcon/></span>
                  <span onClick={handleShareClick}> <TiktokIcon/></span>
                  </div>
                
            </div>

        </section>
        </div>
    )
}

export default PostDetail