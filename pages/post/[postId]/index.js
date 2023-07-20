import PostList from "@/component/post/postList";
import PostDetail from "@/component/post/postDetail";
import { Fragment } from "react"
import Head from "next/head"
import connectDB from "@/utils/connectmongo";
import Post from '../../../model/postSchema'



import classes from './index.module.css'

function PostDetails(props) {



    return (
        <Fragment>
            <Head>
                <title>{props.postData.title}</title>
                <meta name='description' content={props.postData.description} />

            </Head>
            <PostDetail
                title={props.postData.title}
                image={props.postData.image}
                category={props.postData.category}
                description={props.postData.description}
                hivepost={props.postData.hivepost}
                userlink={props.postData.userlink}
                id={props.postData.id}
            />
            <h1 className={classes.otherProd}>Post You May be Instrested in</h1>
            <PostList posts={props.posts} />
        </Fragment>
    )
}

export async function getStaticPaths() {
    await connectDB()
    const posts = await Post.find({}, { _id: 1 })



    return {
        fallback: 'blocking',
        paths: posts.map((post) => ({
            params: { postId: post._id.toString() },
        })),
    }


}

export async function getStaticProps(context) {

    const postId = context.params.postId
    await connectDB()
    const selectedPost = await Post.findOne({
        _id: postId,
    });
    const posts = await Post.find({})



    return {
        props: {
            postData: {
                id: selectedPost._id.toString(),
                title: selectedPost.title,
                category: selectedPost.category,
                image: selectedPost.image,
                hivepost: selectedPost.hivepost,
                userlink: selectedPost.userlink,
                description: selectedPost.description,

            },
            posts: posts.map((post) => ({
                title: post.title,
                category: post.category,
                image: post.image,
                hivepost: post.hivepost,
                userlink: post.userlink,
                description: post.description,

                id: post._id.toString(),
            })),
        },
        revalidate: 1,



    };

}

export default PostDetails