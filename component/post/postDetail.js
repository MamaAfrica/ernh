
import classes from './postDetail.module.css'
import { useRouter } from 'next/router';
 



function PostDetail(props){
  const router = useRouter();
   
    


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
                     
                </div>
               
                 
                
            </div>

        </section>
        </div>
    )
}

export default PostDetail