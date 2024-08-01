import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const About=()=>{
    return(
        <>
         <Container>
        <div style={{margin:"auto",marginTop:"40px"}}>
            <div style={{width:"99%",margin:"auto"}}>
                  <div style={{width:"50%",margin:"auto"}}>
                    <h1>Welcome To About Section</h1>
                  </div>
            </div>
        </div>
             <div style={{marginTop:"40px"}}>
             <Row>
                <Col>
                <div >
                    <h1 style={{marginLeft:"120px",color:"red"}}>Book Library</h1>
                </div>
                <div>
                    <img src="public/images/pic2.jpeg" alt="" width="450px" style={{borderRadius:"20px"}}/>
                </div>
                </Col>
                <Col>
                <div >
                    <h1 style={{marginTop:"0px",color:"red",marginLeft:"140px"}}>Instruction</h1>
                    <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia non inventore, cumque repellendus, error in incidunt atque provident commodi eveniet vitae perspiciatis alias dolore doloribus blanditiis quod nam. Voluptas?</p></div>
                    <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus nobis pariatur repudiandae voluptates fuga. Iusto numquam aperiam ipsam? Excepturi ipsam beatae consectetur, sapiente dolorum magnam dolores quas ullam sunt!</p></div>
                    <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab illo nobis iste! Et, at laborum animi a eveniet in vero, facilis doloremque est deleniti quia, ipsum libero ad assumenda ipsa.</p></div>
                </div>
                </Col>
                
            </Row>
             </div>
        </Container>
        </>
    )
}
export default About;