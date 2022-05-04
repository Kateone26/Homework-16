// function getusers(){
//     let request = new XMLHttpRequest();
//     request.addEventListener('load', render);
//     request.addEventListener('error', errorrender);
//     request.open('GET', 'https://reqres.in/api/users?page=2');
//     request.send();
// }

// function render(){
//     let response = this.responseText;
//     let responsedata = JSON.parse(response);

//     let ul = document.createElement('ul');

//     responsedata.data.forEach(item=>{
//         let li = document.createElement('li');
//         li.textContent = item.email;
//         ul.appendChild(li);
//         li.classList.add('li-item');

//         let 
//     })
//     document.getElementById('email-div').appendChild(ul);
//     console.log(responsedata);
// }

// function errorrender(){
//     let p = document.createElement('p');
//     p.textContent = 'ERROR';

//     document.getElementById('email-div').appendChild(p);
// }



// getusers()










let currentpage = 1;
let totalpages;


function getusers(page){
    let request = new XMLHttpRequest();
    request.addEventListener('load', render);
    request.addEventListener('error', errorrender);
    request.open('GET', 'https://reqres.in/api/users?page=' + page);
    request.send();
}

function render(){
    let response = this.responseText;
    let responsedata = JSON.parse(response);

    var fragment = document.createDocumentFragment();

    responsedata.data.forEach(item=>{
        let li = document.createElement('li');
        let pemail = document.createElement('p');
        pemail.textContent = item.email;
        let userimg = document.createElement('img');
        userimg.src = item.avatar;
        userimg.classList.add('image-block');

        li.appendChild(userimg);
        li.appendChild(pemail);
        fragment.appendChild(li);

    })
    document.getElementById('ul-list').innerHTML = ' ';
    document.getElementById('ul-list').appendChild(fragment);

    totalpages = responsedata.total_pages;
}

function errorrender(){
    if (error == 404){
        let p = document.createElement('p');
        p.textContent = 'ERROR';
        document.getElementById('email-div').appendChild(p);
    }else{
        console.log('page not found');
    }
}




document.getElementById('loadprev').addEventListener('click', function(){
    if (currentpage == 1){
        return;
    }
    currentpage -=1
    getusers(currentpage);
})

document.getElementById('loadnext').addEventListener('click', function(){
    if (currentpage == totalpages){
        return;
    }
    currentpage +=1

    getusers(currentpage);
})



getusers(currentpage);