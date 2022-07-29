console.log('Start web page')


function toggleMenu(){
    // const allMenuItems = document.querySelectorAll('.menu-item');

    // allMenuItems.forEach(item=>{
    //    const oldClasses = item.getAttribute('class');
    //    if(oldClasses.indexOf('hide')>-1){
    //     item.setAttribute('class',oldClasses.split('hide').join(''))
    //    }else{
    //     item.setAttribute('class',oldClasses + ' hide')
    //    }
    // })

    const menuDiv = document.getElementById('menu-items');
    const oldClasses = menuDiv.getAttribute('class');
    if(oldClasses.indexOf('hide')>-1){
        menuDiv.setAttribute('class','animated')
    }else{
        menuDiv.setAttribute('class','hiding');
        setTimeout(function(){
            menuDiv.setAttribute('class','hide')
        },300)
    }
}

function  scrollToEl(elementId){
    const el = document.getElementById(elementId);
    scrollTo({top:el.offsetTop-100, behavior:'smooth'})
}