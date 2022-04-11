import React from 'react'

export const Form = () => {
  return (
    <form>                   
        <input type="text"  placeholder="name" name='name' />
        <input type="email" placeholder="email" name='email'  />
        <textarea name="message" cols="30" rows="4"   placeholder="message"></textarea>
        <button>Send</button>
    </form>
  )
}
