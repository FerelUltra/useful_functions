const createLi = (value) => {
    const li = document.createElement('li');
    li.textContent = value;

    return li;
}

const createList = (obj) => {
    const ul = document.createElement('ul');

    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            ul.appendChild(createList(obj[key]));
        } else {
            ul.appendChild(createLi(obj[key]));
        }
    }
    return ul;

}

document.querySelector('body').appendChild(createList(obj));
