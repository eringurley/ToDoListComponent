import ToDoItem from '../src/components/ToDoItem.js';
const test = QUnit.test;
QUnit.module('ToDoItem');

test('todo item template', assert => {
    //arrange
    const todo = {
        task: 'Homework',
        label: 'homework',
        completed: true
    };

    const expected = /*html*/ `
     <h1 id="header">Homework</h1>
    `;
    //act
    const toDoItem = new ToDoItem({ todo });
    const html = toDoItem.renderTemplate();
    //assert
    assert.htmlEqual(html, expected);
});