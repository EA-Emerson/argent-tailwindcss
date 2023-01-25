var menu=document.querySelector('.menulogoimg')
menu.addEventListener('click', function(e){
    e.preventDefault()
    
    var ul=document.querySelector('.hidden_ul')
    if (ul.style.display=='none') {
        ul.style.display='block';
        menu.style.display='none'

    }
    else{
        ul.style.display='none';
    }
    ul.addEventListener('click', function(a){
        // a.preventDefault()
        var close=document.querySelector('#nav_close')
        close.addEventListener('click', function(c){
        if(ul.style.display=='block'){
            menu.style.display='block';
            ul.style.display='none'
        }
        else{
            ul.style.display='none'
        }
        })

    })

})


// Patricia code 
/**
 * var menu = document.querySelector('.menulogoimg');
var mini_nav = document.querySelector('.smallnav');
mini_nav.style.display = 'none';
console.log(2 + 2);

menu.addEventListener('click', function(e){
    e.preventDefault();

    
    if(mini_nav.style.display == 'none'){
        mini_nav.style.display = 'block';
        menu.src = ('img/menu close.png');
    }
    else{
        mini_nav.style.display = 'none';
        menu.src = ('img/menu-button-of-three-horizontal-lines.png');
    }
})
 */