import { useForm } from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

interface CreateFormData{
    title:string
    description:string
}

export const CreateForm = () => {
const schema =yup.object().shape({
    title:yup.string().required("Title is must!!!"),
    description:yup.string().required("Decription is must!!!")
})

const {register,handleSubmit, formState:{ errors }}=useForm<CreateFormData>({
    resolver:yupResolver(schema)
})

const onCreatePost=(data:CreateFormData)=>{
    console.log(data)
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