import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import Header from './Header';

export default class FirstView extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block w-100"
                        src="./img/banner/Slider-1---Background.jpg"
                        />
                        <Carousel.Caption>
                        <h3>HELPING WILDLIFE THRIVE BY PLANTING NATIVE TREES IN PANAMA</h3>
                        <div>
                            <div className="row justify-content-center">
                                <div className="col-sm-2">
                                    <h2 className="text-center">502</h2>
                                    <p className="parrafosBold text-center">IN DANGERED SPECIES</p>
                                </div>
                                <div className="col-sm-2">
                                    <h2 className="text-center">29 M</h2>
                                    <p className="parrafosBold text-center">LOST ACRES OF TREES</p>
                                </div>
                                <div className="col-sm-2">
                                    <h2 className="text-center">120</h2>
                                    <p className="parrafosBold text-center">EXTINCT SPECIES</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <button type="button" class="btn btn-success">PLANT A NATIVE TREE</button>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block w-100"
                        src="./img/banner/Slider-2---Background.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-left">FIGHT CLIMATE CHANGE</h3>
                            <p className="ficha parrafosBold text-left">Clamatechange isan existaht</p>
                            <div className="row text-left"><button type="button" class="btn btn-success">PLANT A NATIVE TREE</button></div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./img/banner/Slider-3---Background.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-right">TACKLING THE NATURE CRISIS</h3>
                            <div className="movermas">
                                <p className="ficha text-right">By restoring</p>
                                <p className="ficha text-right">Noasting header</p>
                            </div>
                            <div className="row justify-content-end"><button type="button" class="btn btn-success">PLANT A NATIVE TREE</button></div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </React.Fragment>
        )
    }
}
