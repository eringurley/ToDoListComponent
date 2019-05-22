import Component from './Component.js';
import ToDoItem from './ImageItem.js';

class ToDoList extends Component {
    render() {

        const list = this.renderDOM();
        const images = this.props.images;
        
        images.forEach(image => {
            const toDoItem = new ToDoItem({ image });
            const toDoItemDOM = toDoItem.render();
            list.appendChild(toDoItemDOM);
        });
                
        return list;
    }
    
    renderTemplate() {
        return /*html*/ `
            <ul id="todos"></ul>
        `;
    }
}

export default ToDoList;