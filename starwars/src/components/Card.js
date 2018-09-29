import React from 'react'

class Card extends React.Component {
    
    render() {
        return (
            <div className="cta">
                <h1>Welcome to my list</h1>
                <TodoForm clearCompleted={this.clearCompleted} control={this.state.textInput} inputHandler={this.inputHandler} addTodo={this.addTodo} clearField={this.clearField} />
                <TodoList line={this.strike} tasks={this.state.todolists} />
            </div>
        );
    }
}

export default Card