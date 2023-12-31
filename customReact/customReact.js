function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('herf',reactElement.props.herf);
    domElement.setAttribute('target',reactElement.props.target);
    container.appendChild(domElement);
}
const reactElement = {
    type: 'a',
    props:{
        herf: 'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit google'
}
const mainContainer = document.getElementById('root');
customRender(reactElement /*what to inject */, mainContainer/*where to inject*/)