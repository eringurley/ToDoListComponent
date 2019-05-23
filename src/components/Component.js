import htmlToDOM from '../html-to-dom.js';
//have three radio buttons-one is all, true, and false when you get the word all none of your dodos are gonna have all, if the filter.completed is string 'all' then set the filter 
class Component {
    constructor(props) {
        this.props = props;
    }
    
    render() {
        return this.renderDOM();
    }

    renderDOM() {
        const html = this.renderTemplate();
        const dom = htmlToDOM(html);
        this.rootElement = dom;
        return dom;
    }

    update(props) {
        // update the props:
        Object.keys(props).forEach(key => {
            this.props[key] = props[key];
        });
        const oldRoot = this.rootElement;
        const newDOM = this.render();
        oldRoot.replaceWith(newDOM);
    }
}

export default Component;