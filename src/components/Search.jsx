


// import axios from 'axios';
// import { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
//  import Table from 'react-bootstrap/Table';
// const Search=()=>{
//     const [input, setInput]=useState("");
//     const [mydata,setMydata]=useState([]);
//     const mysearch=()=>{
//         let url=`http://localhost:3000/books/?bookname=${rollno}`;
//         axios.get(url).then((res)=>{
//             setMydata(res.data);
//         })
//     }
//  const and=mydata.map((key)=>{
//     return(
//         <>
//          <tr>
//          <tr>
//                  <td>{key.bookid}</td>
//                 <td>{key.bookname}</td>
//                  <td>{key.author}</td>
//                  <td>{key.edition}</td>
//                 <td>{key.status}</td>
//             </tr>
//          </tr>
//         </>
//     )
//  })
//     return(
//         <>
//            <Container>
//         <div style={{margin:"auto",marginTop:"10px"}}>
//             <div style={{width:"99%",margin:"auto"}}>
//                   <div style={{width:"50%",margin:"auto"}}>
//                     <h1>Welcome To Search section</h1>
//                   </div>
//             </div>
//         </div>
//         <div>
//         <FloatingLabel controlId="floatingInput" label="BookName" className='mb-3' >
//         <Form.Control type="text" name="bookname" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
//         <button onClick={mysearch}>Search</button>
//       </FloatingLabel>
//         </div>
//         <Table striped bordered hover>
//       <thead>
//          <tr>
//            <th>ROLLNO:</th>
//           <th>Name</th>
//              <th>CITY</th>
//            <th>FEES</th>
//            <th>FEES</th>
//          </tr>
//        </thead>
//        <tbody>
//                 {and} 
//       </tbody>
//      </Table>
//         </Container>
        
//         </>
//     )
// }
// export default Search;




import Container from 'react-bootstrap/Container';
import { useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
const Search=()=>{
    const [rollno,setRollno]=useState("");
    const [mydata,setData]=useState([])
    const mySearch=()=>{
        let url=`http://localhost:3000/books/?bookname=${rollno}`
        axios.get(url).then((res)=>{
            setData(res.data);
        });
    }
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
        <div style={{margin:"auto",marginTop:"20px"}}>
             <div style={{width:"99%",margin:"auto"}}>
                   <div style={{width:"50%",margin:"auto"}}>
                     <h1>Welcome To Search section</h1>
                     Enter book Name:<input type="text" value={rollno} onChange={(e)=>{setRollno(e.target.value)}}/>

                     <button onClick={mySearch}>Search</button>
                   </div>
             </div>
         </div>
        
        <hr />
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Book ID</th>
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
    </Container>
        </>
    )
}
export default Search;