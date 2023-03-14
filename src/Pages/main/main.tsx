import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Post } from "./posts";

export interface Post {
    id: string,
    username: string,
    userId: string,
    description: string,
    title: string,
}


export const Main = () => {
    const [postsLists, setPostsLists] = useState<Post[] | null>(null)
    const postref = collection(db, "posts");

    const getPosts = async () => {
        const data = await getDocs(postref);
        setPostsLists(
            data.docs.map((doc) => ({...doc.data(), id: doc.id })) as Post[]
        );
    }


useEffect(()=>{
    getPosts()
},[]);

return(
    <div>
        {postsLists?.map((post)=>(
            <Post post={post}/>
        ))}
    </div>
)
    
}