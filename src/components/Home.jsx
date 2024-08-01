import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
const Home=()=>{
    return(
       <>
       <div>
        <Container>
         <Carousel>
      <Carousel.Item>
        <img src="public/images/pic3.jpeg " width="100%" height="519px"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src="public/images/pic2.jpeg" alt=""  width="100%" height="519px" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="public/images/pic1.webp"  width="100%" alt="" height="519px" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
    </div>
       </>
    )
}
export default Home;