import React, { Component } from 'react'
import { Pagination } from "react-bootstrap";
import FirstView from './FirstView';
import SecondView from './SecondView';
import ReactPageScroller from "react-page-scroller";

export default class AllView extends Component {

    constructor(props) {
        super(props);
        this.state = { currentPage: null };
    }

    handlePageChange = number => {
        
        if (number == 1) {
            number = 2;
        }
        this.setState({ currentPage: number});
    };

    getPagesNumbers = () => {
        const pageNumbers = [];
        
        let par = false;
        let res = 0;
        let text = 0;
        let arbol = 0;
        for (let i = 1; i <= 3; i++) {
            par = (i%2) ? false : true;

            // saltar numeracion
            if (par == false && i !== 1) {
                arbol += 1;
            }

            text = (par) ? "|" : i - arbol;
        
            if (i !== 10) {
                pageNumbers.push(
                    <Pagination.Item key={i} eventKey={i} onSelect={this.handlePageChange} active={i === this.state.currentPage + 1}>
                        {text}
                    </Pagination.Item>,
                );
            }
        }
    
        return [...pageNumbers];
    };

    render() {

        const pagesNumbers = this.getPagesNumbers();

        return (
            <React.Fragment>
                <ReactPageScroller
                    pageOnChange={this.handlePageChange}
                    customPageNumber={this.state.currentPage}
                    >
                    <FirstView />
                    <SecondView />
                </ReactPageScroller>
                <Pagination className="pager-page">
                    {pagesNumbers}
                </Pagination>
            </React.Fragment>
        )
    }
}
