import Post from "../Post"
import {useEffect,useState} from 'react';
export default function IndexPage(){
      const [posts,setPosts] = useState([]);
      useEffect(() =>{
            fetch('https://myblog-api-xjlk.onrender.com/post').then(response =>{
                  //grabing all the posts from the database
                  response.json().then(posts=>{
                        setPosts(posts);
                        
                  });
            });
      },[]);
      return(
            <>
           {posts.length >0 && posts.map((post
           
           ) =>(
             //passing the each post as a properties
             //each post contains the title,summary,file,content
              
              <Post {...post} />
           )) }
           </>

      );
}
