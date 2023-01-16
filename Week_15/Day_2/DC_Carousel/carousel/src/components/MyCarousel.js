import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './MyCarousel.css'

class MyCarousel extends Component {
    render() {
        return (
            <Carousel useKeyboardArrows={true} width={'100%'}>
              <div>
                    <img src="./img/hongkong.jpg" />
                    <p className="legend">Hong-Kong</p>
                </div>
                <div>
                    <img src="./img/macao.webp" />
                    <p className="legend">Macao</p>
                </div> 
                <div>
                    <img src="./img/japan.webp" />
                    <p className='legend'>Japan</p>
                </div>
                <div>
                    <img src="./img/vegas.webp" />
                    <p className='legend'>Las Vegas</p>
                </div>
            </Carousel>
        )
    }
}

export default MyCarousel