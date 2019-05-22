import Component from './Component.js';

class ToDoItem extends Component {
    renderTemplate(){
        const todo = this.props.todo;
        let checked = '';

        if(todo.completed) {
            checked = 'checked';
        }

        return /*html*/ `
        <li>
            <label>
            <input type="checkbox" ${checked}>
            <h1 id="header">${todo.title}</h1>
            </label>
    `;
    }
}

export default ToDoItem;