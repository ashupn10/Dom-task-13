let form = document.getElementById('form');
let input=form.querySelectorAll('input');
let users=document.getElementById('users');
// let ul=document.getElementById('list');
// console.log(ul);
function myobj(username,email){
    this.username=username;
    this.email=email;
}
// console.log(user);
input[2].addEventListener('click',()=>{
    let username=input[0].value;
    let email=input[1].value;
    // let usernamestring=tooString(username);
    let user=JSON.stringify(new myobj(username,email));
    localStorage.setItem(email,user);
})
for(let i=0;i<localStorage.length;i++){
    let ki=localStorage.key(i);
    let values=localStorage.getItem(ki);
    let value=JSON.parse(values);
    let list=document.createElement('div');
    list.className='list-people';
    let text1=document.createTextNode(`Name: ${value.username}`)
    list.appendChild(text1);
    let btn=document.createElement('button');
    btn.className='Edit';
    btn.textContent='Edit';
    list.appendChild(btn);
    list.appendChild(document.createTextNode(`${value.email}`));
    let dlt=document.createElement('button');
    dlt.textContent='Delete';
    dlt.className='Delete';
    dlt.addEventListener('click',Deleteitem);
    list.appendChild(dlt);
    users.appendChild(list);
    // console.log(list);
}
let edit=document.getElementsByClassName('Edit');
let dlt=document.querySelectorAll('.Delete');
function Deleteitem(e){
    let pre=e.target.previousSibling;
    console.log(pre);
    let key=pre.textContent;
    const element=e.target.parentElement;
    element.remove();
    localStorage.removeItem(key);

}
