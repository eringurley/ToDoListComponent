import ToDoItem from '../src/components/ToDoItem.js';
const test = QUnit.test;
QUnit.module('ToDoItem');

test('todo item template', assert => {
    //arrange
    const todo = {
        task: 'Homework',
        label: 'Homework',
        completed: true
    };

    const expected = /*html*/ `
    <li>
        <label>
            <input type="checkbox" checked/>
            Homework
        </label>
    `;
    //act
    const toDoItem = new ToDoItem({ todo });
    const html = toDoItem.renderTemplate();
    //assert
    assert.htmlEqual(html, expected);
});