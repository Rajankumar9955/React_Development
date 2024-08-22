
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

const Display=()=>{
    const [mydata,setMydata]=useState([]);
    const loadData=()=>{
         let url="http://localhost:3000/books";
         axios.get(url).then((res)=>{
            setMydata(res.data);
         })
    }
    useEffect(()=>{
        loadData()
    },[])   
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.bookid}</td>
                <td>{key.bookname}</td>
                <td>{key.author}</td>
                <td>{key.edition}</td>
                <td>{key.status}</td>
            </tr>
            
            </>
        )
    })
    return(
        <>
         <Container>
        <div style={{margin:"auto",marginTop:"10px"}}>
            <div style={{width:"99%",margin:"auto"}}>
                  <div style={{width:"50%",margin:"auto"}}>
                    <h1 style={{marginTop:"30px"}}>Welcome To Display section</h1>
                  </div>
            </div>
        </div>
             <div>
             <Table striped bordered hover>
      <thead>
        <tr>
        <th>Book ID:</th>
          <th>Book Name</th>
          <th>Author</th>
          <th>Edition</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
               {ans} 
      </tbody>
    </Table>
             </div>
        </Container>
        
        </>
    )
}
export default Display;