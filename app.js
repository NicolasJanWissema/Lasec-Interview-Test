let tableData = [
    {ID:'1', Name:'Nic', Surname: 'Wissema'},
    {ID:'1', Name:'Nic', Surname: 'Wissema'},
    {ID:'1', Name:'Nic', Surname: 'Wissema'},
    {ID:'1', Name:'Nic', Surname: 'Wissema'}
];

window.onload = ()  => {
    buildTable(tableData);
}

//Function to build/rebuild table once edited or information addded.
function buildTable(data){
    var table = document.getElementById('tableData');

    table.innerHTML="";
    for(let person of data){
        var row = ` <tr>
                        <td>${person.ID}</td>
                        <td contenteditable="true">${person.Name}</td>
                        <td contenteditable="true">${person.Surname}</td>
                    </tr>`;
        table.innerHTML += row;
    }
}

//Function for clicking button
document.getElementById('addButton').onclick = function(){
    buildTable(tableData);
    console.log('button clicked?');
};