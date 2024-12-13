


var siteName = document.getElementById('sitename'); 
var url = document.getElementById('siteurl');
var tableBody=document.getElementById('tableBody');
var closebtn=document.querySelector('#closebtn')
var books;
var alert1=document.querySelector('#alert');

if(localStorage.getItem('bookmarks')!=null){
    books=JSON.parse(localStorage.getItem('bookmarks'));
    display(books);
}else{
    books=[];
}

function Add(){
    if(siteName.classList.contains('is-valid')&&url.classList.contains('is-valid')){
        var link={
            name:siteName.value,
            linktovisit:url.value
        }
        for(var i=0;i<books.length;i++){
            if(books[i].linktovisit==link.linktovisit ||books[i].name==link.name ){
                alert1.classList.remove('d-none');
                return 0;
            }
        }
        books.push(link);
        localStorage.setItem('bookmarks',JSON.stringify(books));
        display(books);
        clear();
    }else{
        alert1.classList.remove('d-none');
    }
}

function display(arr){
    var container=``;    
    for(var i=0; i<arr.length;i++){
        container+=`
        <tr class="text-center">
        <th class="pt-3">${i+1}</th>
        <td class="pt-3">${arr[i].name}</td>
        <td>
            <button class="btn btn-success px-3" id="visitbtn">
            <i class="fa-solid fa-eye pe-2"></i>  
            <a href=${'https://' + arr[i].linktovisit} class="text-decoration-none text-light">Visit</a>
            </button>
        </td>
        <td>
            <button class="btn btn-danger px-3" onclick="deleteurl(${i})" id="deletebtn">
                <i class="fa-solid fa-trash-can pe-2"></i>
                Delete
            </button>
        </td>
      </tr>
        `
    }
    tableBody.innerHTML=container;
}
function deleteurl(x){
    books.splice(x,1);
    localStorage.setItem('bookmarks',JSON.stringify(books));
    display(books);
}
function clear(){
    siteName.value=null;
    url.value=null;
}

closebtn.addEventListener('click',function(e){
    alert1.classList.add('d-none');
})


// function validateForUrlName(element){
//     let regex= /^\w{3,10}\s?\w{0,10}$/
//     if(regex.test(element.value)){
//         element.classList.remove('is-invalid');
//         element.classList.add('is-valid');
//     }else{
//         element.classList.remove('is-valid');
//         element.classList.add('is-invalid');
//     }
// }
// function validateForUrl(element){
//     let regex=/^[w]{1,3}.\w{0,10}.com$/;
//     if(regex.test(element.value)){
//         element.classList.remove('is-invalid');
//         element.classList.add('is-valid');
//     }else{
//         element.classList.remove('is-valid');
//         element.classList.add('is-invalid');
//     }
// }

function validation(element){
    let regex = {
        sitename:/^\w{3,10}\s?\w{0,10}$/,
        siteurl:/^[w]{1,3}.\w{0,10}.com$/
    } 
    if(regex[element.id].test(element.value)){ 
        element.classList.remove('is-invalid');
        element.classList.add('is-valid');
    }else{
        element.classList.remove('is-valid');
        element.classList.add('is-invalid');
    }
}










