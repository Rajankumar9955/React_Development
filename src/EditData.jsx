import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { message } from "antd";


import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
const EditData=()=>{
    const {myid}=useParams();
    const [myData,setMydata]=useState({});
    const loadData=()=>{
        let url=`http://localhost:3000/books/${myid}`;
        axios.get(url).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setMydata(values=>({...values,[name]:value}))
    }
    const handleSubmit=()=>{
        let url=`http://localhost:3000/books/${myid}`;
        console.log(myData);
        axios.put(url,myData).then((res)=>{
            message.success("Data updated")
        })
    }
    return(
        <>
           <Container>
         <div style={{width:"420px",margin:"auto",marginTop:"40px"}}>
            <div style={{width:"99%",margin:"auto"}}>
                  <div style={{width:"50%",margin:"auto"}}>
                    <h1>Edit Here!!</h1>
                   
                  </div>
            </div>
        </div>
        
         <div style={{width:"400px",margin:"auto",marginTop:"20px"}}>
             <FloatingLabel controlId="floatingInput" label="Book ID(BID)" className="mb-2">
        <Form.Control type="text" name="bookid" value={myData.bookid} onChange={handleInput} />
        </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="BookName" className='mb-2' >
        <Form.Control type="text" name="bookname" value={myData.bookname} onChange={handleInput}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Author" className='mb-2'>
        <Form.Control type="text" name="author" value={myData.author}  onChange={handleInput} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Edition" className='mb-2' >
        <Form.Control type="text" name="edition"value={myData.edition}  onChange={handleInput}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Status" className='mb-2'>
        <Form.Control type="text" name="status" value={myData.status}  onChange={handleInput} />
      </FloatingLabel>
      <div style={{width:"80px",margin:"auto"}}>
        <button onClick={handleSubmit} style={{height:"45px",width:"85px",borderRadius:"20px"}}>Submit</button>
        </div>
             </div>
        </Container>
        </>
    )
}
export default EditData;



