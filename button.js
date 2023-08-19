document.addEventListener('DOMContentLoaded',()=>{
    const note=document.getElementById('demo');
    const but=document.getElementById('check');
    but.addEventListener('click',function(){
        
        if(note.innerHTML=="မဂ်လာပါ"){
            note.innerHTML="hello";
        }else{
            note.innerHTML="မဂ်လာပါ";
        }
    });
    
});
