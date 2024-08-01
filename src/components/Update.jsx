

import axios from "axios";
import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import dltimg from "../images/dltimg.jpeg"
import edt from "../images/edt.png"
import { useNavigate } from "react-router-dom";
const Update=()=>{
    const [myData,setMydata]=useState([])
    const loadData=()=>{
        let url="http://localhost:3000/books";
        axios.get(url).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[])

    const mydel=(myid)=>{
        let url=`http://localhost:3000/books/${myid}`;
        axios.delete(url).then((res)=>{
            alert("recond Delete");
            loadData();
        })

    }
    const myNav=useNavigate() //for edition
    const MyEdit=(myid)=>{
        myNav(`/myedit/${myid}`)
    }
    let ans=myData.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.bookid}</td>
                <td>{key.bookname}</td>
                <td>{key.author}</td>
                <td>{key.edition}</td>
                <td>{key.status}</td>
                <td>
                    <a href="#">
                        <img src={dltimg} alt=""width="30" height="30" onClick={()=>{mydel(key.id)}} />
                    </a>
                    ...............
                    <a href="#">
                        <img src={edt} alt="" width="30" height="30" onClick={()=>{MyEdit(key.id)}} />
                    </a>
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
           
        <Container>
        <div style={{margin:"auto",marginTop:"40px"}}>
            <div style={{width:"99%",margin:"auto"}}>
                  <div style={{width:"50%",margin:"auto"}}>
                    <h1>Welcome To Update Section</h1>
                  </div>
            </div>
        </div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Book ID:</th>
          <th>Book Name</th>
          <th>Author</th>
          <th>Edition</th>
          <th>Status</th>
          <th>Delete | Update</th>
        </tr>
      </thead>
      <tbody>
               {ans} 
      </tbody>
    </Table>
        </Container>
        </>
    )
}
export default Update;