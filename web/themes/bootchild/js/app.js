var isADV = document.querySelector('body').classList.contains('role-ad') 

if (isADV) {

document.querySelector('[href="/liste"]').style.display = "none";
}

if(!isADV) {

document.querySelector('[href="/admin/people"]').style.display = "none";

}


