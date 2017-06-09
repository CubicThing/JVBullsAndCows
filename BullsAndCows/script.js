



function correct(one,two,three,four){
    
    var valide = false;
    if (one.length == 1 && two.length == 1 && three.length == 1 && four.length == 1){
        if(one == two || one == three || one==four || two == three || two == four || three == four){
            
            alert("Veuillez n'entrer que des chiffres différents.");
            
        }
        
        
    }else{
        
        alert("Veuillez n'entrer qu'un seul chiffre.");
        valide = false;
    }
    
    return valide;
    
    
}

    function bullcow(){
         
        document.getElementsById("input1").value = "merde";
         
    }