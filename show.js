function show(shown, element) { 
    var a = document.querySelectorAll('#container > div'); // get all children within container 
    for (var i = 0; i<a.length; i++){ // loop over the elements     
        a[i].style.display='none';      
    }
    document.getElementById(shown).style.display='table';   
    var a = document.querySelectorAll('ul.top li'); // get all children within container        
    for (var i = 0; i<a.length; i++){ // loop over the elements 
        console.log(a[i]);  
        a[i].style. backgroundColor='#888888';
    }   
    element.style.backgroundColor='#2E6098';
    return false;
}   
