import filterToDo from '../src/filter-todos.js';

// //putting function here to import
// function filterTodos(todos, filter) {
//     const text = filter.text.toLowerCase();
//     return todos.filter(task => {
//         const todo = todo.task.toLowerCase();
//         // const description = todo.description.toLowerCase();
//         // const keyword = todo.keyword.toLowerCase();

//         const hasText = !text
//             || task.includes(text);

//         return hasText;
//     });
// }



const test = QUnit.test;

QUnit.module('filter todos');

const todos = [
    {
        'task': 'Homework',
        'description': 'Code, read, repeat.',
        'keyword': 'homework',
    },
    {
        'task': 'Make Lunch',
        'description': 'Four of them.',
        'keyword': 'make-lunch',
    },
    {
        'task': 'Clean House',
        'description': 'Kitchen, laundry, dishes, more laundry, water plants, rinse, repeat.',
        'keyword': 'clean-house',
    },
];


test('filter todos by all', assert => {
    // arrange
    const filter = {
        text: 'Homework'
        // radio-button: '';
    };
    const filtered = filterToDo(todos, filter);
    // act
    // assert
    assert.deepEqual(filtered, [{ 
        'task': 'Homework',
        'description': 'Code, read, repeat.',
        'keyword': 'homework',
    }]);
});

// test('filter todos by all', assert => {
//     // arrange
//     const filter = {
//         text: 'Homework'
//         // radio-button: '';
//     };
//     const filtered = filterToDo(todos, filter);
//     // act
//     // assert
//     assert.deepEqual(filtered, [{ 
//         'task': 'Homework',
//         'description': 'Code, read, repeat.',
//         'keyword': 'homework',
//     }]);
// });


// test('filter todos by all', assert => {
//     // arrange
//     const filter = {
//         text: 'Homework'
//         // radio-button: '';
//     };
//     const filtered = filterToDo(todos, filter);
//     // act
//     // assert
//     assert.deepEqual(filtered, [{ 
//         'task': 'Homework',
//         'description': 'Code, read, repeat.',
//         'keyword': 'homework',
//     }]);
// });