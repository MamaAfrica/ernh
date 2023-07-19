import classes from './postList.module.css'
import PostItem from './postItem'

function PostList(props){
return(
    <ul className={classes.list}>
        {props.posts.map((post)=>(
            <PostItem 
            key={post.id}
            id={post.id}
            title={post.title}
            image={post.image}
            category= {post.category}

            description={post.description}
            
            />
        ))}
    </ul>
)
}

export default PostList