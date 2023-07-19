import connectDB from "../../../utils/connectmongo"
import Post from '../../../model/postSchema'

 
async function handler(req, res) {
 
   if (req.method === 'POST') {
       try {
            
           const {title,image, category, description } = req.body
           console.log('Connecting to Mongo')
           await connectDB()
           console.log('Connected to Mongo')
           console.log('Creating document')
          
           const doc = new Post({
                
            title: title,
            image: image,
            category: category,
            description: description,
            
                
           })
           await doc.save()
           console.log(doc)
           res.json({ doc })

       } catch (error) {
           console.log(error)


       }

   }


}

export default handler
