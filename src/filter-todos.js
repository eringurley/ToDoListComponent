function filterTodo(todos, filter) {
    const text = filter.text.toLowerCase();
    const completed = filter.completed;
    return todos.filter(todo => {
        const task = todo.task.toLowerCase();
        const isCompleted = todo.completed.toString();
        // const description = todo.description.toLowerCase();
        // const keyword = todo.keyword.toLowerCase();

        const hasText = !text
            || task.includes(text);
        
        const isDone = isCompleted.includes(completed);

        return hasText && isDone;
    });
}

export default filterTodo;