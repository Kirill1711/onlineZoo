document.body.addEventListener('click', (e) => {
if (e.target.classList.contains('delite-button')) {
let id = e.target.dataset.id;
if (id) {
fetch('/php/delcontacts.php', {
method: 'POST',
headers: {'Content-Type': 'application/x-www-form-urlencoded'},
body: 'id=' + encodeURIComponent(id)
})
.then(res => res.json())
.then(data => {
console.log(data);
if (data.success) {
const row = e.target.closest('tr');
if (row) row.remove();
} else {
console.error('Ошибка удаления:', data.message);
}
})
.catch(error => {
console.error('Ошибка запроса:', error);
});
}
}
});

function choseNumber() {
let numberBlock = document.querySelector('.number-block');
document.querySelector('button').addEventListener('click', async () => {
if (numberBlock && numberBlock.value === 'aa') {
await getFiles();
} else {
if (numberBlock) numberBlock.value = '';
}
});
}

function clearAll() {
document.querySelector('.container').innerHTML = '';
}

function createTable(files) {
let table = document.createElement('table');
let thead = document.createElement('thead');
let tr = document.createElement('tr');
document.querySelector('.container').appendChild(table);
table.appendChild(thead);
thead.appendChild(tr);

const headers = ['ID', 'Name', 'Email', 'Text', 'Create at', 'Delite'];
for (let i = 0; i < headers.length; i++) {
let th = document.createElement('th');
th.textContent = headers[i];
tr.appendChild(th);
}

let tbody = document.createElement('tbody');
table.appendChild(tbody);

for(let i = 0; i < files.length; i++) {
let tr = document.createElement('tr');
tr.dataset.id = files[i].id;
tbody.appendChild(tr);

let td = document.createElement('td');
td.textContent = files[i].id;
tr.appendChild(td);

td = document.createElement('td');
td.textContent = files[i].name;
tr.appendChild(td);

td = document.createElement('td');
td.textContent = files[i].email;
tr.appendChild(td);

td = document.createElement('td');
td.textContent = files[i].text;
tr.appendChild(td);

td = document.createElement('td');
td.textContent = files[i].created_at;
tr.appendChild(td);

td = document.createElement('td');
td.innerHTML = '<button data-id=' + files[i].id + ' class="delite-button">Delite</button>';
tr.appendChild(td);
}
}

async function getFiles() {
try {
const response = await fetch('/php/blocknote.php');
const result = await response.json();

if (!result.success) {
console.error('Ошибка от сервера:', result.message);
return [];
}

const files = result.data;
clearAll();
createTable(files);
return files;
} catch (error) {
console.error('Ошибка:', error);
return [];
}
}


choseNumber();
