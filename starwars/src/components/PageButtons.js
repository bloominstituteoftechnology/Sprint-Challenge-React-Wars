import React from 'react';

const PageButtons = ({pageCount, onPageChange, pageNum}) => {
    const renderButtons = () => {
        let buttons = [];
        for(let i = 1; i <= pageCount; i++){
            buttons.push(i)
        }
        return buttons.map(button => 
            <button 
                key={button} 
                name={button} 
                onClick={onPageChange} 
                className={pageNum === button ? 'active-page' : ''}
            >{button}</button>
        );
    }
    return (
        <div className="page-button-container">
            <button name={'<'} onClick={onPageChange} >{'<'}</button>
            {renderButtons()}
            <button name={'>'} onClick={onPageChange} >{'>'}</button>
        </div>
    );
}

export default PageButtons;
