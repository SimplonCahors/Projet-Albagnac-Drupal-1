if(window.location.href.toString().includes('node/add/dso')) {
    
    document.querySelectorAll('.tabledrag-toggle-weight')
        .forEach( x => {
            console.log(x.style.display)
        x.style.display = none;
    })
}


var isADV = document.querySelector('body').classList.contains('role-ad') 

if (isADV) {

    var links = document.querySelectorAll('[href="/liste"]')
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        if(link.innerHTML == "Mes DSO") link.style.display = "none";

    }
}

if(!isADV) {

    document.querySelector('[href="/admin/people"]').style.display = "none";

}




