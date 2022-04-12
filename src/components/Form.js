import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'


const ErrorMessage = styled.p` 
    font-size:1.1rem;
    margin:1rem ;
    color:red ;
    text-transform:uppercase;
    text-align:left ;
`

export const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState:{ errors }
    } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault()
        setIsSubmitted(true)
        console.log("Message submited: " + JSON.stringify(data));
        e.target.reset();
    }

    useEffect(() => {
        if (isSubmitted) {
        navigate('/thankyou');
        }
    });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input 
            name='name'
            type="text" 
            placeholder="name" 
            {...register('name', { required: true })}
         />
         {errors.name && <ErrorMessage>name is required.</ErrorMessage>}
        <input 
            type="email" 
            placeholder="email" 
            name='email' 
            {...register(
                "email",
                {
                  required: "Email is Required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",   
                  },
                },
                { required: true }
              )}
         />
         {errors.email && ( <ErrorMessage>{errors.email.message}</ErrorMessage> ) }
         <input 
            name='subject'
            type="text" 
            placeholder="subject" 
            {...register('subject', { required: true })}
         />
         {errors.subject && <ErrorMessage>subject is required.</ErrorMessage>}
          
        <textarea 
            name="message" 
            cols="30" 
            rows="4"   
            placeholder="message"
            {...register("message", { required: true })}
        >
        </textarea>
        {errors.name && errors.message.type === "required" && (
                        <ErrorMessage>Message is required</ErrorMessage>
                    )}
        <button>Send</button>
    </form>
  )
}
