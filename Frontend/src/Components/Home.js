import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styles.css';
import Navbar from './Navbar';

export default function Home() 
{
    return (
      <>
      <Navbar/>
        <div>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1545165311-508ed0c91361?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="beetroot" width="1300px" height="600px"
        />
        <Carousel.Caption>
          <h5  style={{color:"white"}}>Dont judge each day by the harvest you reap but by the seeds that you plant</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.agrivi.com/wp-content/uploads/2014/10/wepik-photo-mode-2022722-16315.jpeg"
          alt="Seeds" width="1300px" height="600px"
        />
        <Carousel.Caption>
          <h5  style={{color:"white"}}>Productive Agricultural land with water on site will be valuable in the future</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1511448799201-28c098eb6004?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="carrot" width="1300px" height="600px"
        />
        <Carousel.Caption>
          <h5  style={{color:"white"}}>
           Creative freedom is huge carrot
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://plus.unsplash.com/premium_photo-1664116928607-896124327b11?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="grass" width="1300px" height="600px"
        />
        <Carousel.Caption>
          <h5  style={{color:"white"}}>
          Agriculture is the most healthful, most useful and most noble employment of man
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1508913826512-066cf8127860?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="red tomato" width="1300px" height="600px"
        />
        <Carousel.Caption>
          <h5  style={{color:"white"}}>
          Eating a tomato is like biting into summer's heart
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1523349122880-44486ffa7b14?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="green tomato" width="1300px" height="600px"
        />
        <Carousel.Caption>
          <h5  style={{color:"white"}}>
          To grow a tomato or a pepper and prepare a meal from your labor and care is primordially satisifying
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>

        </>
    );
}
