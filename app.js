const password_in = document.querySelector('#password');
const length_in = document.querySelector('#length');
const uppercase_in = document.querySelector('#uppercase');
const lowercase_in = document.querySelector('#lowercase');
const numbers_in = document.querySelector('#numbers');
const symbols_in = document.querySelector('#symbols');

const generate_btn = document.querySelector('#generate');
generate_btn.addEventListener('click',GeneratePassword);
const copy_btn = document.querySelector('#copy');
copy_btn.addEventListener('click',CopyPassword);

const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const numbers_chars = "0123456789";
const symbols_chars = "!@#$%^&*()";

function GeneratePassword(){
    let password = "";
    let length = length_in.value;
    let chars = "";

    chars += uppercase_in.checked ? uppercase_chars : "" ;
    chars += lowercase_in.checked ? lowercase_chars : "" ;
    chars += numbers_in.checked ? numbers_chars : "" ;
    chars += symbols_in.checked ? symbols_chars : "" ;

    for (let i = 0; i <= length; i++){
        let rand = Math.floor(Math.random() * chars.length);
        password += chars.substring(rand, rand+1);
    }

    password_in.value = password;
}

async function CopyPassword(){
    if (navigator.clipboard){
        await navigator.clipboard.writeText(password_in.value);

        alert("Şifre başarılı bir şekilde kopyalandı");
    }
}