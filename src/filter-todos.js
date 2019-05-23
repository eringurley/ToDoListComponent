function filterTodo(todos, filter) {
    const text = filter.text.toLowerCase();
    const completed = filter.completed;
    return todos.filter(todo => {
        const task = todo.task.toLowerCase();
        const isCompleted = todo.completed.toString();
        const notCompleted = todo.completed.toString();

        const hasText = !text
            || task.includes(text);
        
        let isDone = isCompleted.includes(completed);
        let notDone = notCompleted.includes(notCompleted);

        return hasText && isDone && notDone;
    });
}

export default filterTodo;

// if completed === 'all' the set is done to true