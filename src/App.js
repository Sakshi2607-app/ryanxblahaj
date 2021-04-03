
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import {Card,Carousel,Col, Container, Row, Table} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
       <Navbar bg="dark" variant="dark" className="my-nav">
    <Navbar.Brand href="#home">
      Sakshi's Amazing Website :)
    </Navbar.Brand>
  </Navbar>
  <Container> 
  <Carousel className="gallery">
  <Carousel.Item>
    <img src="https://th.bing.com/th/id/OIP.numFSqwaShiDBi8uI3ihqgHaNK?pid=ImgDet&rs=1"></img>
    <Carousel.Caption>
      <h3>BLAHAJ</h3>
      <p>This is BLAHAJ</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src="https://s1.stickers.cloud/packs/e18fd1c2-1d63-407d-b608-4e746dc23de6/png/fb191e87-5644-4e03-8580-c9741085b9c0.png"></img>
    <Carousel.Caption>
      <h3>BLAHAJ</h3>
      <p>This is BLAHAJ</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src="https://i.redd.it/s60m610wyui41.jpg"></img>
    <Carousel.Caption>
      <h3>BLAHAJ</h3>
      <p>This is BLAHAJ</p>
    </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <Row>
   <Col xs={12} md={8}>
   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
   <h1>LHD Share Top 3 Guilds</h1>
   <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Guild Name</th>
      <th>Points</th>
      <th>Members</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>🦈 BLAHAJGang 🦈</td>
      <td>11,817</td>
      <td>325</td>
    </tr>
    <tr>
      <td>2</td>
      <td>EddieHub</td>
      <td>6,641</td>
      <td>279</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Developer Student Community</td>
      <td>5,381</td>
      <td>251</td>
    </tr>
  </tbody>
</Table>
   </Col>
   <Col xs={12} md={4}><Card style={{ width: '18rem' }}>
  <Card className="ikea-ad">
    <Card.Body>
    <Card.Title>Buy a BLAHAJ</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">They are the best</Card.Subtitle>
    <img src="https://www.ikea.com/sg/en/images/products/blahaj-soft-toy-shark__0710175_pe727378_s5.jpg?f=s"></img>
    <Card.Text>
      Ryan Swift is a huge fan of BLAHAJ and
      he really gonna sad if you dont buy one
      Also, I;m on 23 at leaderboard :)
    </Card.Text>
    <Card.Link href="https://hackp.ac/blahaj">Buy an IKEA</Card.Link>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
    <Card.Title>Local Hack Day</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Earn yourself the points</Card.Subtitle>
    <Card.Link href="https://lhd.mlh.io">Register</Card.Link>
    
    </Card.Body>
  </Card>
</Card></Col>
   </Row>
  </Container>
    </div>
  );
}

export default App;
