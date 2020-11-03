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
                        <div className="movermasIz">
                            <h3 className="headerTitle">HELPING WILDLIFE THRIVE BY PLANTING NATIVE TREES IN</h3>
                        </div>
                        <div>
                            <div className="row justify-content-end">
                                <div className="col-sm-2">
                                    <h2 className="text-center numberFont">502</h2>
                                    <p className="primer text-center">IN DANGERED SPECIES</p>
                                </div>
                                <div className="col-sm-2">
                                    <h2 className="text-center numberFont">29M</h2>
                                    <p className="primer text-center">LOST ACRES OF TREES</p>
                                </div>
                                <div className="col-sm-2">
                                    <h2 className="text-center numberFont">120</h2>
                                    <p className="primer text-center">EXTINCT SPECIES</p>
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
                            <h3 className="text-left headerTitle">FIGHT CLIMATE CHANGE</h3>
                            <div className="movermasIz">
                                <p className="ficha parrafosBold text-left pl-1">Climate change is an existential threat. As individuals, we can feel overwhelmed. You can make a difference by planting trees.</p>
                            </div>
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
                            <h3 className="text-right headerTitle">TACKLING THE NATURE CRISIS</h3>
                            <div className="movermas">
                                <p className="ficha text-right parrafosBold">By restoring precious habitats & planting new native forest, we extend & create wildlife havens. </p>
                                <p className="ficha text-right parrafosBold">Boosting biodiversity is a pragmatics and effective strategy to mitigate climate change.</p>
                            </div>
                            <div className="row justify-content-end"><button type="button" class="btn btn-success">PLANT A NATIVE TREE</button></div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </React.Fragment>
        )
    }
}
