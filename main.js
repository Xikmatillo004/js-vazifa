
let userName = document.getElementById('name');
let userSurname = document.getElementById('surname');
let fathers__name = document.getElementById('fathers__name');
let userAge = document.getElementById('age');
let family = document.getElementById('family');
function changer() {
    userName.textContent='';
    userSurname.textContent='';
    fathers__name.textContent='';
    userAge.textContent='';
    family.textContent='';
    let userNameInput = prompt('Ismingizni kirirting: ');
    let userSurnameInput = prompt('Familyangizni kiriting');
    let fathernameInput = prompt('Sharifingizni kiriting');
    let userAgeInput=prompt('yoshingizni kiriting');
    let familyInput=prompt('Oilalimisiz');
    userName.textContent = userName.textContent.replace('', userNameInput);
    userSurname.textContent =userSurname.textContent.replace('', userSurnameInput);
    fathers__name.textContent =fathers__name.textContent.replace('', fathernameInput);
    userAge.textContent=userAge.textContent.replace('', userAgeInput);
    family.textContent=family.textContent.replace('', familyInput);
}
function changer1() {
    userName.textContent='';
    userSurname.textContent='';
    fathers__name.textContent='';
    userAge.textContent='';
    family.textContent='';
    userName.textContent = userName.textContent.replace('', '');
    userSurname.textContent =userSurname.textContent.replace('', '');
    fathers__name.textContent =fathers__name.textContent.replace('', '');
    userAge.textContent=userAge.textContent.replace('', '');
    family.textContent=family.textContent.replace('', '');
}
