import React from 'react'
import '../styling/training.css'
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import {ReactComponent as Logo} from '/assets/arrow-up-right-circle-fill.svg';

function Training() {
  return (
    <div className='Core-training'>
        <section className='intro'> 
            <h1>knowledgeable experts & trainers</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus unde ex atque excepturi assumenda odit inventore. Tempora accusantium, dignissimos expedita facere esse laudantium autem ratione quas illum officiis tenetur voluptatibus.</p>
            <button>View all</button>
        </section>

        <section className='Card-training'>
          <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Far.espacemanager.com%2Fsites%2Fdefault%2Ffiles%2Ffield%2Fimage%2FATFP.png&f=1&nofb=1&ipt=b410fab80b6014ac1a97634b4b67bf7de11a67f058f952fc96f7e234b0aa9626&ipo=images'/>
          <Button>
            {/* <Logo id='12' /> */}
            </Button>
          <a href='https://www.emploi.gov.tn/fr/49/agence-tunisienne-de-la-formation-professionnelle'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
            <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
          </svg></a>
        </section>
        {/* <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>name.Training slice</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card> */}
    </div>
  )
}

export default Training