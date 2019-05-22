import Component from './Component.js';

class ToDoItem extends Component {
    renderTemplate(){
        const todo = this.props.todo;
        return /*html*/ `
        <h1 id="header">${todo.title}</h1>
    `;
    }
}

export default ToDoItem;