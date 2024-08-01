import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Contact=()=>{
    return(
        <>
        <Container>
        <div style={{margin:"auto",marginTop:"40px"}}>
            <div style={{width:"99%",margin:"auto"}}>
                  <div style={{width:"50%",margin:"auto"}}>
                    <h1>Welcome To Contact Section</h1>
                  </div>
            </div>
        </div>
             <div style={{marginTop:"40px"}}>
             <Row>
                <Col>
                <div >
                    <h1 style={{marginLeft:"120px",color:"black",fontSize:"35px",marginTop:"10px"}}>Contact Us</h1>
                </div>
                <div style={{marginLeft:"10px",fontSize:"40px"}}>
                    <div style={{marginTop:"30px"}}><a href="#">Krajan92946@gmail.com</a></div>
                    <div> Call:-9955236973</div>
                    <div>Instagram:-mr_malhotra</div>
                </div>
                </Col>
                <Col>
                <div >
                    <h1 style={{marginTop:"0px",color:"teal",marginLeft:"140px"}}>Reach-out</h1>
                    <div><p style={{fontSize:"30px"}}>Location 1:- Bhopal, Santi-niketan, Lig 140</p></div>
                    <div><p style={{fontSize:"30px"}}>Location 1:- Delhi, sector-c, L-10, South-Delhi</p></div>
                    <div><p style={{fontSize:"30px"}}>Location 1:-Indore,bharti-niketan,Lig 14, Near Railways Station</p></div>
                </div>
                </Col>
                
            </Row>
             </div>
        </Container>
        
        </>
    )
}
export default Contact;