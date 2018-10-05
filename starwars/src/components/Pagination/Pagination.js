

//== Pagination Component ======================================================

//-- Dependencies --------------------------------
import React from 'react';
import './Pagination.css';

//-- Implementation ------------------------------
class Pagination extends React.Component {

    //-- Basic Setup ---------------------------------
    /*constructor(props) {
        super(...arguments);
        this.state = {
            tabs: titles,
            currentTabTitle: titles[0]
        }
    }*/

    //-- Rendering - only render current tab ---------
    render = () => {
        let hidePrevious = '';
        let hideNext = '';
        return (
            <div className="pagination-container">
                <img
                    alt="Previous Page"
                    className={'pagination-nav pagination-nav-previous'+hidePrevious}
                    src={this.props.navImageLeft}
                    onClick={this.props.pagePrevious}
                />
                <img
                    alt="Next Page"
                    className={'pagination-nav pagination-nav-next'+hideNext}
                    src={this.props.navImageRight}
                    onClick={this.props.pageNext}
                />
                <div className="pagination-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

//-- Export --------------------------------------
export default Pagination;
