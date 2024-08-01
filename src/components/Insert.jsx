

import axios from 'axios';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
const Insert=()=>{
    const [cnt,setCnt]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setCnt(values=>({...values,[name]:value}))
        console.log(cnt);
    }
    const handleSubmit=()=>{
        let url="http://localhost:3000/books";
        axios.post(url,cnt).then((res)=>{
            alert("Data is save")
        })
    }
    return(
        <>
         <Container>
         <div style={{margin:"auto",marginTop:"40px"}}>
            <div style={{width:"99%",margin:"auto"}}>
                  <div style={{width:"50%",margin:"auto"}}>
                    <h1>Welcome To Insert Section</h1>
                  </div>
            </div>
        </div>
             <div style={{width:"400px",margin:"auto",marginTop:"20px"}}>
             <FloatingLabel controlId="floatingInput" label="Book ID(BID)" className="mb-2">
        <Form.Control type="text" name="bookid" value={cnt.bookid} onChange={handleInput} />
        </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="BookName" className='mb-2' >
        <Form.Control type="text" name="bookname" value={cnt.bookname} onChange={handleInput}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Author" className='mb-2'>
        <Form.Control type="text" name="author" value={cnt.author}  onChange={handleInput} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Edition" className='mb-2' >
        <Form.Control type="text" name="edition"value={cnt.edition}  onChange={handleInput}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Status" className='mb-2'>
        <Form.Control type="text" name="status" value={cnt.status}  onChange={handleInput} />
      </FloatingLabel>
      <div style={{width:"80px",margin:"auto"}}>
        <button onClick={handleSubmit} style={{height:"45px",width:"85px",borderRadius:"20px",hover:"red"}}>Submit</button>
        </div>
             </div>
        </Container>
        
        </>
    )
}
export default Insert;