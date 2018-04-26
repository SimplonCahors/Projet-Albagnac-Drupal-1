if(window.location.href.toString().includes('node/add')) {
    
    document.querySelectorAll('.tabledrag-toggle-weight').forEach( x => {x.style.display = NavigationEvent})
}

// 


var isADV = document.querySelector('body').classList.contains('role-ad') 

if (isADV) {

    document.querySelector('[href="/liste"]').style.display = "none";
}

if(!isADV) {

    document.querySelector('[href="/admin/people"]').style.display = "none";

}



