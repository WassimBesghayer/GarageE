import Card from 'react-bootstrap/Card';

function Explore_Services() {
  return (
    <div style={{display:"flex", justifyContent:"space-around", padding:"20px"}}>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Oil Change</Card.Title>
        <Card.Img src='https://karimotors.wpengine.com/wp-content/uploads/2024/10/Services-Carousel-Block-04-853x1024.jpg'/>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Card.Link href="#">Card Link</Card.Link>
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Brake Change</Card.Title>
        <Card.Img src='https://karimotors.wpengine.com/wp-content/uploads/2024/09/home-1-service-bgimg-2.jpg'/>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>A/C Gaz Change</Card.Title>
        <Card.Img src='https://lemag.gueudet.fr/wp-content/uploads/gueudet/2024/01/Entretenir-ou-reparer-sa-climatisation-de-voiture-e1706626568771.jpg'/>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Diagnostic</Card.Title>
        <Card.Img src='https://www.ecoleauto.com/wp-content/uploads/2023/07/iStock-1350239765.jpg'/>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Wheel Balancing</Card.Title>
        <Card.Img src='https://wordpress-content.vroomly.com/wp-content/uploads/2023/03/iStock-1253197542.jpg'/>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Explore_Services;