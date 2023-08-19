document.addEventListener('DOMContentLoaded',()=>{
    const note=document.getElementById('demo');
    const but=document.getElementById('check');
    but.addEventListener('click',function(){
        
        if(note.innerHTML=="something"){
            note.innerHTML="hello";
        }else{
            note.innerHTML="something";
        }
    });
    
});
