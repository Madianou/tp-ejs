document.addEventListener('DOMContentLoaded', function() {
    var img = document.getElementById("formule");
    var toggle = document.getElementById("toggle");

    toggle.addEventListener('click',function(){
        if(toggle.checked){
            img.src = "formule_ammortissement.png"
        }else{
            img.src = "formule_basique.png"
        }
    })
})