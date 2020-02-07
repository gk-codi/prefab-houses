import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Picture extends Component {
    render() {
        return (
            <Carousel showArrows={true} autoPlay={true}  useKeyboardArrows={true} showStatus={true} infiniteLoop={true}>
                <div>
                    <img src="image1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="image2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="image3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="image1.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="image1.jpg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="image1.jpg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
    }
}
export default Picture;