import PostList from "@/component/post/postList"
import Post from "../model/postSchema"
import connectDB from "@/utils/connectmongo"
 


function Avert(props) {
    return (
        <div style={{marginTop:'70px'}}>
            <PostList posts={props.posts} />
        </div>
    )
}
export async function getStaticProps() {
    await connectDB()
    const posts = await Post.find({})
    console.log(posts)

    return {
        props: {
            posts: posts.map((post) => ({
                title: post.title,

                category: post.category,
                image: post.image,
                hivepost: post.hivepost,
                description: post.description,
                userlink: post.userlink,
                id: post._id.toString(),
            })),
            revalidate: 1,
        }
    }
}

export default Avert