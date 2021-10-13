const store = window.localStorage;
let activeListItems = new Set([]);

const input = document.querySelector('input');
const button = document.querySelector('#add');
const list = document.querySelector('.list');
const save = document.querySelector('#save');
const load = document.querySelector('#load');
const clearList = document.querySelector('#clear-list');
const clearStore = document.querySelector('#clear-store');
const errors = document.querySelector('#error-disp');

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}

function displayError(error) {
    const newError = document.createElement('p');
    newError.textContent = error;
    errors.appendChild(newError);
    errors.classList.remove('hide');
}

function hideError() {
    errors.classList.add('hide');
    removeAllChildNodes(errors);
}

function createItem(item) {
    if (activeListItems.has(item)) {
        displayError('Item \'' + item + '\' already exists in list.');
        return;
    }
    else {
        hideError();
    }
    const newListItem = document.createElement('li');
    const newDelButton =  document.createElement('button');
    newListItem.textContent = item;
    newDelButton.textContent = '❌';
    newListItem.appendChild(newDelButton);
    list.appendChild(newListItem);

    newDelButton.addEventListener('click', function() {
        newListItem.remove();
        activeListItems.delete(item);
    });

    activeListItems.add(item);
}

function clearInput() {
    input.value = '';
    input.focus();
}

function loadItems() {
    if (confirm('Load saved data? Any changes will be overwritten.')) {
        activeListItems.clear();
        removeAllChildNodes(list);
        for (i=0; i < store.length; i++) {
            let newItem = store.getItem(i.toString());
            createItem(newItem);
        }
    }
}

function saveItems() {
    store.clear();
    let toSaveList = Array.from(activeListItems);
    for (i=0; i < toSaveList.length; i++) {
        store.setItem(i.toString(), toSaveList[i]);
    }
}

button.addEventListener('click', function() {
    if (input.value != '') {
        createItem(input.value);
        clearInput();
    }
});

save.addEventListener('click', saveItems);
load.addEventListener('click', loadItems);

clearList.addEventListener('click', function() {
    removeAllChildNodes(list);
    activeListItems.clear();
});

clearStore.addEventListener('click', function() {
    if (confirm('Clear saved data?')) {
        store.clear();
    }
});

loadItems();
