let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');

let viewersData = [
    {"id":8286,"status":false,"banned":false,"joined_at":" 3-11-20 06:04 AM EST","entered_at":null,"left_at":" 3-11-20 06:20 AM EST","name":"abhi1","last_name":"","email":null,"country":null,"city":null},
    {"id":8287,"status":true,"banned":true,"joined_at":" 3-11-20 06:22 AM EST","entered_at":null,"left_at":" 3-11-20 06:31 AM EST","name":"Abhi2","last_name":"","email":null,"country":null,"city":null},
    {"id":8288,"status":true,"banned":false,"joined_at":" 3-11-20 06:24 AM EST","entered_at":null,"left_at":" 3-11-20 06:31 AM EST","name":"abhi4","last_name":"","email":null,"country":null,"city":null},
    {"id":8289,"status":true,"banned":false,"joined_at":" 3-11-20 06:28 AM EST","entered_at":null,"left_at":" 3-11-20 06:28 AM EST","name":"abhi5","last_name":"","email":null,"country":null,"city":null},
    {"id":8290,"status":true,"banned":false,"joined_at":" 3-11-20 06:30 AM EST","entered_at":null,"left_at":" 3-11-20 06:30 AM EST","name":"Abhi6","last_name":"","email":null,"country":null,"city":null}
  ]

let headers = ['name', 'email', 'country'];

btnGet.addEventListener('click', ()=> {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    viewersData.forEach(viewer => {
        let row = document.createElement('tr');
 
        Object.values(viewer).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
 
        table.appendChild(row);
    });

    myTable.appendChild(table);
});