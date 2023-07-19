import { useRef, useState } from 'react';
import classes from './postForm.module.css';
import { useRouter } from 'next/router';
import Spinner from '../icons/spinner'

function PostForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
 
  const categoryInputRef = useRef();
 
 
  const descriptionInputRef = useRef();
  const router = useRouter();
  const [spinner, setSpinner] = useState(false)
//   function showDetailsHandler() {
//     setSpinner(<Spinner />)
//     router.reload();

//   }


  async function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
   
    const enteredCategory = categoryInputRef.current.value;
 
    const enteredDescription = descriptionInputRef.current.value;
    

    const data = {
      title: enteredTitle,
      image: enteredImage,
  
      category:enteredCategory,
     
      description: enteredDescription,
    };

    console.log(data)
    const response = await fetch('http://localhost:3000/api/admin/admin-post',{
        body: JSON.stringify(data),
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        }
      
      })
      let newPostData = await response.json()

        if (!response.ok) {
            throw new Error(newPostData.message || 'something went wrong')
        }

        router.reload()

    

  }

  return (
    <div className={classes.card}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Post Title</label>
          <input type='text' required id='title' ref={titleInputRef} name='title'/>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Post Image</label>
          <input type='url' required id='image' ref={imageInputRef} name='image' />
        </div>
        
        <div className={classes.control}>
          <label htmlFor='category'>Post Category</label>
          <input type='text' required id='category' ref={categoryInputRef} name='category' />
        </div>
        
        <div className={classes.control}>
          <label htmlFor='description'>Post Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
            name='description'
          ></textarea>
        </div>
        
        <div className={classes.actions}>
          <button type='submit'> Add Post {spinner}</button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
