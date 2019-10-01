import Component from './Component.js';
import Header from './Header.js';
import AddToDo from './AddToDo.js';
import todos from '../../data/todos.js';
import ToDoList from './ToDoList.js';


class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const addToDo = new AddToDo({
            onAdd: (newToDo) => {
                todos.unshift(newToDo);
                toDoList.update({ todos });
            }
        });

        const addToDoDOM = addToDo.render();
        main.appendChild(addToDoDOM);

        const toDoList = new ToDoList({ todos });
        const toDoListDOM = toDoList.render();
        main.appendChild(toDoListDOM);
        return dom;
    }

    renderTemplate(){
        return /*html*/`
        <div>
            <main>
            </main>
        </div>
        `;
    }
}

export default App;