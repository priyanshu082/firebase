import { useForm } from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {addDoc,collection} from "firebase/firestore"
import { auth, db } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"



interface CreateFormData{
    title:string
    description:string
}


export const CreateForm = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

const schema =yup.object().shape({
    title:yup.string().required("Title is must!!!"),
    description:yup.string().required("Decription is must!!!")
})


const {register,handleSubmit, formState:{ errors }}=useForm<CreateFormData>({
    resolver:yupResolver(schema)
})

const postref=collection(db,"posts");


const onCreatePost=async(data:CreateFormData)=>{
     console.log(data)
    await addDoc(postref,{
        title:data.title,
        decription:data.description,
        username:user?.displayName,
        id:user?.uid
    })
    navigate("/")
}
    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder="Title..." {...register("title")} />
            <p style={{color:"red"}}>{errors.title?.message}</p>
            <textarea placeholder="Description..." {...register("description")} />
            <p style={{color:"red"}}>{errors.description?.message}</p>
            <input type="submit"/>
        </form>
    )
}