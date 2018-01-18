import uuidv4 from 'uuid/v4';

export class MyComponent {
    static randomId = uuidv4();
    static component() {
        const element = document.createElement('div');

        element.innerHTML = MyComponent.randomId;

        return element;
    }
}
document.body.appendChild(MyComponent.component());