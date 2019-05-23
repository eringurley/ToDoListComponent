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
        'completed': true,
    },
    {
        'task': 'Make Lunch',
        'description': 'Four of them.',
        'keyword': 'make-lunch',
        'completed': true
    },
    {
        'task': 'Clean House',
        'description': 'Kitchen, laundry, dishes, more laundry, water plants, rinse, repeat.',
        'keyword': 'clean-house',
        'completed': false
    },
];


test('filter todos by all', assert => {
    // arrange
    const filter = {
        text: 'Homework',
        completed: ''
    };
    const filtered = filterToDo(todos, filter);
    // act
    // assert
    assert.deepEqual(filtered, [{ 
        'task': 'Homework',
        'description': 'Code, read, repeat.',
        'keyword': 'homework',
        'completed': true
    }]);
});

test('filter todos by completed', assert => {
    // arrange
    const filter = {
        text: '',
        completed: 'true'
    };
    const filtered = filterToDo(todos, filter);
    // act
    // assert
    assert.deepEqual(filtered, [{
        'task': 'Homework',
        'description': 'Code, read, repeat.',
        'keyword': 'homework',
        'completed': true,
    },
    {
        'task': 'Make Lunch',
        'description': 'Four of them.',
        'keyword': 'make-lunch',
        'completed': true
    }]);
});


test('filter todos by not completed', assert => {
    // arrange
    const filter = {
        text: 'Homework',
        completed: 'false'
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