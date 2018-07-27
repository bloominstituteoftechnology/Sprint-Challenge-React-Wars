import React from 'react'; 
import Proptypes from 'prop-types';
import './StarWars.css';


const proptypes = {
    items: Proptypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired, 
    initialPage: Proptypes.number,
    pageSize:Proptypes.number
}

const defaultProps = {
    initialPage: 1,
    pageSize: 10
}

class Pagination extends React.Component {
    constructor(){
        super();
        this.state =  {pager: {}};

    }

    componentWillMount = () => {
        if(this.props.items !== prevProps.items){
            this.setPage(this.props.initialPage);
        }
    }

    setPage = page => {
        let {items, pagesize} = this.props;
        let pager = this.state.pager;

        if (page < 1 || page > pager.totalPages){
            return; 
        }

        pager = this.getPager(items.length, page, pageSize);

        let pageOfItems = items.slice(pager.startIndex, pager.endIndex +1);

        this.setState({pager:pager});

        this.props.onChangePage(pageOfItems); 
    }

    getPage = (totalItems, currentPage, pageSize) => {
        currentPage = currentPage || 1; 

        pageSize = pageSize || 10;

        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage, endPage; 

        if(totalPages <= 10){
            startPage = 1; 
            endPage = totalPages; 
        } else {
            if(currentPage <= 6){
                startPage = 1; 
                endPage = totalPages;
            } else if ( currentPage + 4 >= totalPages){
                startPage = totalPages - 9; 
                endPage = totalPages; 
            } else {
                startPage = currentPage -5; 
                endPage = currentPage + 4; 
            }
        }

        let startIndex = (currentPage -1) * pageSize; 
        let endIndex = Math.min(startIndex + pagesize -1, totalItems - 1);

        let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        return {
            totalItems: totalItems,
            currentPage: currentPage, 
            pageSize: pageSize, 
            totalPages: totalPages, 
            startPage: startPage, 
            endPage: endPage, 
            startIndex: startIndex, 
            endIndex: endIndex, 
            pages: pages
        };
    }

    render () {
        let pager = this.state.pager; 

        if(!pager.pages || pager.pages.length <= 1){
            return null; 
        }

        return (

            <ul className = "pagination">
                <li className={pager.currentPage ===1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(1)}>first</a>
                </li>
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick ={() => this.setPage(pager.currentPage - 1)}>Previous</a>
                </li>
                {pager.pages.map((page, index)=>
                    <li key={index} className={pager.currentPage === page ? 'active' : ''}>
                        <a onClicke = {() => this.setPage(page)}>{page}</a>
                    </li>
                )}
                <li className= {pager.currentPage === pager.totalPages ? 'disabled': ''}>
                    <a onclicke={() => this.setPage(pager.currentPage + 1)}>Next</a>
                </li>
                <li className = {pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
                </li>
            </ul>

        );

    }



}

Pagination.proTypes = proptypes;
Pagination.defaultProps = defaultProps; 
export default Pagination;