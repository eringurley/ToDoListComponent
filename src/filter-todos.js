function filterTodo(todos, filter) {
    const text = filter.text.toLowerCase();
    const completed = filter.completed.toString();
    return todos.filter(todo => {
        const task = todo.task.toLowerCase();
        const isCompleted = todo.completed.toString();

        const hasText = !text
            || task.includes(text);
        
        let isDone = isCompleted.includes(completed);
        if(completed === 'all') {
            isDone = true;
        }

        return hasText && isDone;
    });
}

export default filterTodo;

// if completed === 'all' the set is done to true