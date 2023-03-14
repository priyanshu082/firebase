import { addDoc, collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/firebase";
import { Post as IPost } from "./main"

interface Props {
    post: IPost
}

export const Post = (props: Props) => {
    const { post } = props;
    const [user] = useAuthState(auth)
    
    const [likeAmount , setLikeAmount]=useState<number| null>(null)

    const likesRef = collection(db, "likes");

    const likesDoc = query(likesRef, where("postId", "==", post.id))

    const getLikes = async () => {
        const data = await getDocs(likesDoc)
        setLikeAmount(data.docs.length)
    }

    useEffect(() => {
        getLikes();
    },
        []
    )
    const addLike = async () => {
        await addDoc(likesRef, { userId: user?.uid, postId: post.id })
    }


    return (
        <div>
            <div className="title">
                <h1>{post.title}</h1>
            </div>
            <div className="body">
                <p>{post.description}</p>
            </div>
            <div className="footer">
                <p>@{post.username}</p>
                <button onClick={addLike}>&#128077;</button>
                {likeAmount && <p>Likes:{likeAmount}</p>}
            </div>
        </div>
    )
}