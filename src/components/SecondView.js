import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';

export default class SecondView extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="container h-100">
                    <div class="row justify-content-center h-100">
                        <div class="col justify-content-center align-self-center text-center">
                            <h1 className="text-left colorHeader">OUR NEW APPROACH</h1>
                            <p className="fichaverde text-left pl-1">We are appealing to the human love of animals by helping contributors pick a tree to support their preferred jungle animals and our communities.</p>
                            <p className="fichaverde text-left pl-1">We will be selling native trees starting as low as $16. Each contribution will help plant a tree that will benefit a specific set of animals, enrich the rainforest, and boost </p>
                            <div className="row text-left pl-5"><button type="button" class="btn colorBotton">VIEW ALL ANIMAL</button></div>
                        </div>
                        <div class="col align-self-center text-center">
                            <Carousel>
                                <Carousel.Item interval={2000}>
                                    <img
                                    className="rounded-circle"
                                    src="./img/animal/Tucan.png"
                                    width="400" height="400"/>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                    className="rounded-circle"
                                    src="./img/animal/Tiger.png"
                                    width="400" height="400"/>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                    className="rounded-circle"
                                    src="./img/animal/Iguana.png"
                                    width="400" height="400"/>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                    className="rounded-circle"
                                    src="./img/animal/Paca.png"
                                    width="400" height="400"/>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                    className="rounded-circle"
                                    src="./img/animal/Sloth.png"
                                    width="400" height="400"/>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
