import Component from './Component.js';

class Filter extends Component {


    render() {
        const dom = this.renderDOM();
        const form = dom.querySelector('form');

        form.addEventListener('input', () => {
            const checkedRadio = form.elements['radio-button'].value;
            const textInput = form.elements['task'].value;
            this.props.onFilter({
                text: textInput, 
                completed: checkedRadio
            });
        });
        return dom;
    }

    renderTemplate() {
        return /*html*/ `
        <section>
            <form>
                <span class="search">👓</span>
                <input id="text" name="task" placeholder="type here">
                <input name="radio-button" type="checkbox" value="true">
                <input name="radio-button" type="checkbox" value="false">
                <input name="radio-button" type="checkbox" value="all">
            </form>
        </section>
        `;
    }
}

export default Filter;


// id name type placeholder 

// const radioResult = form.elements ['radioFilter'].value

// const form = DOM.querySelectorAll('form')
// text and radio 
// will need radio value 
// form has to be wrapped in a parent element like a HTMLTableSectionElement
// const formResult = form.elements[formResult].value