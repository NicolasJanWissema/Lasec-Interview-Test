let tableData = [
    {Name:'Nic', Surname: 'Wissema'},
    {Name:'Nic', Surname: 'Wissema'},
    {Name:'Nic', Surname: 'Wissema'},
    {Name:'Nic', Surname: 'Wissema'}
];

window.onload = ()  => {
    buildTable(tableData);
    document.getElementById("newName").style.display = "none";
}

//Function to build/rebuild table once edited or information addded.
function buildTable(data){
    var table = document.getElementById('tableData');

    table.innerHTML="";
    for(let person of data){
        var row = ` <tr>
                        <td contenteditable="true">${person.Name}</td>
                        <td contenteditable="true">${person.Surname}</td>
                    </tr>`;
        table.innerHTML += row;
    }
}

//Function for clicking button
document.getElementById('addButton').onclick = function(){
    document.getElementById("firstNameInput").value = "";
    document.getElementById("surnameInput").value = "";

    document.getElementById("newName").style.display = "block";
};

document.getElementById('cancelButton').onclick = function(){
    document.getElementById("newName").style.display = "none";
};

document.getElementById('confirmButton').onclick = function(){
    tableData.push({Name: document.getElementById("firstNameInput").value, Surname: document.getElementById("surnameInput").value});
    buildTable(tableData);
    document.getElementById("newName").style.display = "none";
};