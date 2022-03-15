let elName = document.querySelector('#name');
let elname = document.querySelector('#surname');
let father = document.querySelector('#fathers__name');
let userage = document.querySelector('#age');
var username;
var surname;
var fathername;
var age;
function changer(){
    username =prompt('ismingiz')
    surname =prompt('familyangiz')
    fathername =prompt('Otangizning ismi')
    age =prompt('yoshingiz')
elName.textContent= elName.textContent.replace('#span', username);
elname.textContent= elname.textContent.replace('  ', surname);
father.textContent= father.textContent.replace('   ', fathername);
userage.textContent= userage.textContent.replace('a', yoshingiz);
}
