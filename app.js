//Functia 1

    // Declarare variabile pentru functia 1
    var f01input01          = document.getElementById('f01input01');
    var f01input02          = document.getElementById('f01input02');  
    var f01result           = document.getElementById('f01result');
    var div01result         = document.getElementById('div01result');
    var button01function01  = document.getElementById('button-calc-01');
    var buttonreset01       = document.getElementById('button-reset-01');

    // Declarare evenimente pentru functia 1
    button01function01.addEventListener("click", checkValuesfunction01);
    buttonreset01.addEventListener("click", resetFunction01);

    // Declarare functii pentru functia 1
    function checkValuesfunction01(){
        
        //Validare input de la tastatura
        if(isNaN(f01input01.value) || isNaN(f01input02.value)){
            f01result.innerText = "Nu ati introdus numere, ati introdus text!";
            div01result.style.display = "block";
            div01result.style.backgroundColor = "#eeee00";
        }else if(f01input01.value === "" && f01input02.value === ""){
            f01result.innerText = "Va rugam sa introduceti numere in casutele de input";
            div01result.style.display = "block";
            div01result.style.backgroundColor = "#eeee00";
        }else if(f01input01.value === f01input02.value){
            f01result.innerText = "Rezultat: " + " Valorile sunt egale";
            div01result.style.display = "block";
            div01result.style.backgroundColor = "#00e640";
        }else{
            f01result.innerText = "Rezultat: " + " Valorile NU sunt egale";
            div01result.style.display = "block";
            div01result.style.backgroundColor = "#d64541";
        }
    }

    function resetFunction01(){
        f01input01.value = "";
        f01input02.value = "";
        f01result.innerText  = "";
        div01result.style.display = "none";
    }

//Functia 2

    // Declarare variabile pentru functia 2
    var f02input01          = document.getElementById('f02input01');
    var f02input02          = document.getElementById('f02input02');  
    var f02result           = document.getElementById('f02result');
    var div02result         = document.getElementById('div02result');
    var button02function02  = document.getElementById('button-calc-02');
    var buttonreset02       = document.getElementById('button-reset-02');

    // Declarare evenimente pentru functia 2
    button02function02.addEventListener("click", checkValuesfunction02);
    buttonreset02.addEventListener("click", resetFunction02);

    // Declarare functii pentru functia 2
    function checkValuesfunction02(){
        
        //Validare input de la tastatura
        if(isNaN(f02input01.value) || isNaN(f02input02.value)){
            f02result.innerText = "Nu ati introdus numere, ati introdus text!";
            div02result.style.display = "block";
            div02result.style.backgroundColor = "#eeee00";
        }else if(f02input01.value === "" && f02input02.value === ""){
            f02result.innerText = "Va rugam sa introduceti numere in casutele de input";
            div02result.style.display = "block";
            div02result.style.backgroundColor = "#eeee00";
        }else if(f02input01.value > f02input02.value){
            f02result.innerText = "Return = ' 1 ' : " + f02input01.value + " este mai mare decat " + f02input02.value;
            div02result.style.display = "block";
            div02result.style.backgroundColor = "#00e640";
        }else if(f02input01.value < f02input02.value){
            f02result.innerText = "Return = ' -1 ' : " + f02input01.value + " este mai mic decat " + f02input02.value;
            div02result.style.display = "block";
            div02result.style.backgroundColor = "#d64541";
        }else{
            f02result.innerText = "Return = ' 0 ' : " + " numerele " + f02input01.value + " si " + f02input02.value + " sunt egale.";
            div02result.style.display = "block";
            div02result.style.backgroundColor = "#eeee00";
        }
    }

    function resetFunction02(){
        f02input01.value = "";
        f02input02.value = "";
        f02result.innerText  = "";
        div02result.style.display = "none";
    }

//Functia 3

    // Declarare variabile pentru functia 3
    var f03input01          = document.getElementById('f03input01');
    var f03input02          = document.getElementById('f03input02');  
    var f03result           = document.getElementById('f03result');
    var div03result         = document.getElementById('div03result');
    var button03function03  = document.getElementById('button-calc-03');
    var buttonreset03       = document.getElementById('button-reset-03');

    // Declarare evenimente pentru functia 3
    button03function03.addEventListener("click", checkValuesfunction03);
    buttonreset03.addEventListener("click", resetFunction03);

    // Declarare functii pentru functia 3
    function checkValuesfunction03(){
        
        //Validare input de la tastatura
        if(isNaN(f03input01.value) || isNaN(f03input02.value)){
            f03result.innerText = "Nu ati introdus numere, ati introdus text!";
            div03result.style.display = "block";
            div03result.style.backgroundColor = "#eeee00";
        }else if(f03input01.value === "" || f03input02.value === ""){
            f03result.innerText = "Va rugam sa introduceti numere in casutele de input";
            div03result.style.display = "block";
            div03result.style.backgroundColor = "#eeee00";
        }else if(f03input01.value === f03input02.value){
            f03result.innerText = "Numerele " + f03input01.value + " si " + f03input02.value + " sunt egale. ";
            div03result.style.display = "block";
            div03result.style.backgroundColor = "#eeee00";
        }
        else {
            //Verificare maximul numarului
            var maxNumber = Math.max(f03input01.value, f03input02.value);
            f03result.innerText = "Numarul maxim dintre " + f03input01.value + " si " + f03input02.value + " este numarul " + maxNumber;
            div03result.style.display = "block";
            div03result.style.backgroundColor = "#eeee00";
        }

        
    }

    function resetFunction03(){
        f03input01.value = "";
        f03input02.value = "";
        f03result.innerText  = "";
        div03result.style.display = "none";
    }

//Functia 4

    // Declarare variabile pentru functia 4
    var f04input01          = document.getElementById('f04input01');
    var f04input02          = document.getElementById('f04input02');  
    var f04result           = document.getElementById('f04result');
    var div04result         = document.getElementById('div04result');
    var button04function04  = document.getElementById('button-calc-04');
    var buttonreset04       = document.getElementById('button-reset-04');

    // Declarare evenimente pentru functia 4
    button04function04.addEventListener("click", checkValuesfunction04);
    buttonreset04.addEventListener("click", resetFunction04);

    // Declarare functii pentru functia 4
    function checkValuesfunction04(){
        
        //Validare input de la tastatura
        if(isNaN(f04input01.value) || isNaN(f04input02.value)){
            f04result.innerText = "Nu ati introdus numere, ati introdus text!";
            div04result.style.display = "block";
            div04result.style.backgroundColor = "#eeee00";
        }else if(f04input01.value === "" || f04input02.value === ""){
            f04result.innerText = "Va rugam sa introduceti numere in casutele de input";
            div04result.style.display = "block";
            div04result.style.backgroundColor = "#eeee00";
        }else if(f04input01.value === f04input02.value){
            f04result.innerText = "Numerele " + f04input01.value + " si " + f04input02.value + " sunt egale. ";
            div04result.style.display = "block";
            div04result.style.backgroundColor = "#eeee00";
        }
        else {
            //Verificare maximul numarului
            var minNumber = Math.min(f04input01.value, f04input02.value);
            f04result.innerText = "Numarul minim dintre " + f04input01.value + " si " + f04input02.value + " este numarul " + minNumber;
            div04result.style.display = "block";
            div04result.style.backgroundColor = "#eeee00";
        }

        
    }

    function resetFunction04(){
        f04input01.value = "";
        f04input02.value = "";
        f04result.innerText  = "";
        div04result.style.display = "none";
    }

//Functia 5

    // Declarare variabile pentru functia 5
    var f05input01          = document.getElementById('f05input01');
    var f05result           = document.getElementById('f05result');
    var div05result         = document.getElementById('div05result');
    var button05function05  = document.getElementById('button-calc-05');
    var buttonreset05       = document.getElementById('button-reset-05');

    // Declarare evenimente pentru functia 5
    button05function05.addEventListener("click", checkValuesfunction05);
    buttonreset05.addEventListener("click", resetFunction05);

    // Declarare functii pentru functia 5
    function checkValuesfunction05(){
        
        //Validare input de la tastatura
        if(isNaN(f05input01.value)){
            f05result.innerText = "Nu ati introdus numere, ati introdus text!";
            div05result.style.display = "block";
            div05result.style.backgroundColor = "#eeee00";
        }else if(f05input01.value === ""){
            f05result.innerText = "Va rugam sa introduceti numere in casutele de input";
            div05result.style.display = "block";
            div05result.style.backgroundColor = "#eeee00";
        }else if(f05input01.value < 0){
            f05result.innerText = "Nu poate returna intrucat nu este numar pozitiv";
            div05result.style.display = "block";
            div05result.style.backgroundColor = "#eeee00";
        }else {
            var sumaNumerelor = 0;
            for(var i = 0; i<=f05input01.value; i++){
                sumaNumerelor += i;
                f05result.innerText = sumaNumerelor;
                div05result.style.display = "block";
                div05result.style.backgroundColor = "#eeee00";
            }
        }
    }

    function resetFunction05(){
        f05input01.value = "";
        f05result.innerText  = "";
        div05result.style.display = "none";
    }

//Functia 6

    // Declarare variabile pentru functia 6
    var f06input01          = document.getElementById('f06input01');
    var f06result           = document.getElementById('f06result');
    var div06result         = document.getElementById('div06result');
    var button06function06  = document.getElementById('button-calc-06');
    var buttonreset06       = document.getElementById('button-reset-06');

    // Declarare evenimente pentru functia 6
    button06function06.addEventListener("click", checkValuesfunction06);
    buttonreset06.addEventListener("click", resetFunction06);

    // Declarare functii pentru functia 6
    function checkValuesfunction06(){
        
        //Validare input de la tastatura
        if(isNaN(f06input01.value)){
            f06result.innerText = "Nu ati introdus numere, ati introdus text!";
            div06result.style.display = "block";
            div06result.style.backgroundColor = "#eeee00";
        }else if(f06input01.value === ""){
            f06result.innerText = "Va rugam sa introduceti numere in casutele de input";
            div06result.style.display = "block";
            div06result.style.backgroundColor = "#eeee00";
        }else if(f06input01.value < 0){
            f06result.innerText = "Nu poate returna intrucat nu este numar pozitiv";
            div06result.style.display = "block";
            div06result.style.backgroundColor = "#eeee00";
        }else {
            f06result.innerText = estePrim(f06input01.value);
            div06result.style.display = "block";
            div06result.style.backgroundColor = "#eeee00";
        }
    }

    function estePrim(n){
        for(var i=2; i<n; i++){
            if(n%i === 0){
                return n + " Nu este prim";
            }
        }
        return n + " Este prim";
    }

    function resetFunction06(){
        f06input01.value = "";
        f06result.innerText  = "";
        div06result.style.display = "none";
    }

//Functia 7

    // Declarare variabile pentru functia 7
    var f07input01          = document.getElementById('f07input01');
    var f07result           = document.getElementById('f07result');
    var div07result         = document.getElementById('div07result');
    var button07function07  = document.getElementById('button-calc-07');
    var buttonreset07       = document.getElementById('button-reset-07');

    // Declarare evenimente pentru functia 7
    button07function07.addEventListener("click", checkValuesfunction07);
    buttonreset07.addEventListener("click", resetFunction07);

    // Declarare functii pentru functia 7
    function checkValuesfunction07(){
        
        //Validare input de la tastatura
        if(isNaN(f07input01.value)){
            f07result.innerText = "Nu ati introdus numere, ati introdus text!";
            div07result.style.display = "block";
            div07result.style.backgroundColor = "#eeee00";
        }else if(f07input01.value === ""){
            f07result.innerText = "Va rugam sa introduceti numere in casutele de input";
            div07result.style.display = "block";
            div07result.style.backgroundColor = "#eeee00";
        }else if(f07input01.value < 0){
            f07result.innerText = "Nu poate returna intrucat nu este numar pozitiv";
            div07result.style.display = "block";
            div07result.style.backgroundColor = "#eeee00";
        }else {
            f07result.innerText = sumPrimeNumbers(f07input01.value);
            div07result.style.display = "block";
            div07result.style.backgroundColor = "#eeee00";
        }
    }

    function sumPrimeNumbers(n) {
        //Initializare array numere fara valori
        var numere = [];

        //Identificare numere prime 
        for (var i = 2; numere.length < n; i++) {
            for (var count = 2; count < i; count++) {
                var divisorFound = false;
                if (i % count === 0) {
                    divisorFound = true;
                    break;
                }
            }
            if (divisorFound == false) {
                //Adaugare numere in array daca sunt prime
                numere.push(i);
            }
        }
        var sumaNumerelorPrimePare = 0;
        for (i = 0; i <numere.length; i++){
            sumaNumerelorPrimePare += numere[i];
        }
        return sumaNumerelorPrimePare;
    }


    function resetFunction07(){
        f07input01.value = "";
        f07result.innerText  = "";
        div07result.style.display = "none";
    }

//Functia 8

    // Declarare variabile pentru functia 8
    var f08input01          = document.getElementById('f08input01');
    var f08result           = document.getElementById('f08result');
    var div08result         = document.getElementById('div08result');
    var button08function08  = document.getElementById('button-calc-08');
    var buttonreset08       = document.getElementById('button-reset-08');

    // Declarare evenimente pentru functia 7
    button08function08.addEventListener("click", checkValuesfunction08);
    buttonreset08.addEventListener("click", resetFunction08);

    // Declarare functii pentru functia 8
    function checkValuesfunction08(){
        
        //Validare input de la tastatura
        if(isNaN(f08input01.value)){
            div08result.innerText = reverseInput(f08input01.value);
            div08result.style.display = "block";
            div08result.style.backgroundColor = "#eeee00";
        }
        
    }
    function reverseInput(text){
        // Sparge array-ul din input
        var splitText = text.split("");

        // Intoarce textul split-uit
        var reverseText = splitText.reverse();
        
        // Leaga literele intoarse
        var joinedText = reverseText.join("");

        // Returneaza textul intors
        return joinedText;
    }
    function resetFunction08(){
        f08input01.value = "";
        f08result.innerText  = "";
        div08result.style.display = "none";
    }



