function filterTodo(todos, filter) {
    const text = filter.text.toLowerCase();
    return todos.filter(todo => {
        const task = todo.task.toLowerCase();
        // const description = todo.description.toLowerCase();
        // const keyword = todo.keyword.toLowerCase();

        const hasText = !text
            || task.includes(text);

        return hasText;
    });
}

export default filterTodo;