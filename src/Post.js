import {format} from "date-fns";
import { Link } from "react-router-dom";
export default function Post({_id,author,title,summary,cover,content,createdAt}){
    return(
      //_id->the object id of the post documents not the users id
      //cover will be like => 'uploads/siddhu.jpg' but it will not work if is given only as cover in src
      //Instead we serve the static files from the uploads folder in the server using the middleware
      <div className="post">
      <div className="image">

        <Link to={`/post/${_id}`}>
        
           <img src={'https://myblog-api-xjlk.onrender.com/'+cover} alt="tt"/>
           
        </Link>


      </div>
      
       <div className="text">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
          </Link>
          <p className="info">
          <span className="author">{author?.username}</span>
          <time>{format(new Date(createdAt),'MMM d,yyyy HH:mm')}</time>
           </p>
           <p className="summary">{summary}</p>
        </div>
        
    </div>
    );  
}
