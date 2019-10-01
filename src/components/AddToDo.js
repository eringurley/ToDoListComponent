import Component from './Component.js';

class AddToDo extends Component {

    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newToDo = {
                task: formData.get('title'),
                description: formData.get('description')
            };

            onAdd(newToDo);

            form.reset();
            document.activeElement.blur();  
        });

        return form;
    }
    renderTemplate() {
        return /*html*/`
            <form>
                <label>Task:<input name="title"></label>
                <label>Description:<input name="description"></label>
                <button>Add</button>
            </form>
        `;
    }
}

export default AddToDo;