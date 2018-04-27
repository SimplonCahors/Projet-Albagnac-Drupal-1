console.log('bonjour')

if(window.location.href.toString().includes('node/add/dso')) {
    
    document.querySelectorAll('.tabledrag-toggle-weight')
        .forEach( x => {
            console.log(x.style.display)
        x.style.display = none;
    })
}


var isADV = document.querySelector('body').classList.contains('role-ad') 

if (isADV) {

    document.querySelector('[href="/liste"]').style.display = "none";
}

if(!isADV) {

    document.querySelector('[href="/admin/people"]').style.display = "none";

}




