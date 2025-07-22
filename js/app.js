function loadData2()
{
    const url='https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
}

function loadUser(){
    // console.log('Load user');
    const url='https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(response => response.json())
    .then(data => printData(data));


}

//print data
function printData(data)
{
    const ul=document.getElementById('users-list');
    for(const user of data)
    {
        const name=user.name;
        const li=document.createElement('li');
        
       li.innerHTML=`ID: ${user.id} <br>
       Name: ${user.name}<br>
       Username: ${user.username}<br>
       Email: ${user.email}<br>
       Address: ${user.address}<br>
       Phone: ${user.phone}<br>
       Website: ${user.website}<br>
       Company: ${user.company}<br> <br>
       
       `
        ul.appendChild(li);

    }
    
}