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
        console.log(number);
        this.setState({ currentPage: number });
    };

    getPagesNumbers = () => {
        const pageNumbers = [];
    
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(
            <Pagination.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange} active={i === this.state.currentPage + 1}>
              {i}
            </Pagination.Item>,
          );
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
                <Pagination className="pager-page verticalpagin">
                    {pagesNumbers}
                </Pagination>
            </React.Fragment>
        )
    }
}
