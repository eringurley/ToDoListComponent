import Header from './Header.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);
    }

    renderTemplate(){
        return /*html*/`
        <div>
            <main>
                <ul id="todos">
                </ul>
            </main>
        </div>
        `;
    }
}

export default App;