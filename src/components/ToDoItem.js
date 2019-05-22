import Component from './Component.js';

class ToDoItem extends Component {
    renderTemplate(){
        const text = this.props.todo;
        return /*html*/ `
        <h1 id="header">${text.task}</h1>
    `;
    }
}

export default ToDoItem;