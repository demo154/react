import React,{useState} from 'react';

function PostHooks(){
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [password, setPassword] = useState('')
    const submit = e => {
      e.preventDefault()
      fetch('http://dummy.restapiexample.com/api/v1/create', {
        method: 'POST',
        body: JSON.stringify({ email, comment,password }),
      })
    }
    return(

    <form onSubmit={submit}>
        <label htmlFor="email">Email:-</label><br/> 
      <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
      <label htmlFor="password">Password:-</label><br/>
      <input type="password" name="password" value={password} onChange={e=> setPassword(e.target.value)}/><br/>
      <label htmlFor="comment">Your question or comment:-</label><br/>
      <textarea name="comment" value={comment} onChange={e => setComment(e.target.value)} />
      <br />
      <button type="submit">Send it!</button>
    </form>
    )

}
export default PostHooks;