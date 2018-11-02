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
        }else if(!isNaN(f08input01.value)){
            div08result.innerText = "Sintagma " + f08input01.value + " nu este string!";
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

//Functia 9

    // Declarare variabile pentru functia 9
    var f09input01          = document.getElementById('f09input01');
    var f09result           = document.getElementById('f09result');
    var div09result         = document.getElementById('div09result');
    var button09function09  = document.getElementById('button-calc-09');
    var buttonreset09       = document.getElementById('button-reset-09');

    // Declarare evenimente pentru functia 9
    button09function09.addEventListener("click", checkValuesfunction09);
    buttonreset09.addEventListener("click", resetFunction09);

    // Declarare functii pentru functia 9
    function checkValuesfunction09(){
        
        //Validare input de la tastatura
        if(isNaN(f09input01.value)){
            div09result.innerText = "Sintagma " + f09input01.value + " este string.";
            div09result.style.display = "block";
            div09result.style.backgroundColor = "#eeee00";
        }else {
            div09result.innerText = "Suma primelor " + f09input01.value + " numere inpare pozitive este "  + produsulNumerelorImpare(f09input01.value);
            div09result.style.display = "block";
            div09result.style.backgroundColor = "#eeee00";
        }
        
    }
    function produsulNumerelorImpare(n){
        var suma  = 1;
        for(var i = 1; i <= 2*n-1; i+=2){
            suma = suma * i;
        }
        return suma;
    }

    function resetFunction09(){
        f09input01.value = "";
        f09result.innerText  = "";
        div09result.style.display = "none";
    }

//Functia 10

    // Declarare variabile pentru functia 10
    var f10input01          = document.getElementById('f10input01');
    var f10input02         = document.getElementById('f10input02');
    var f10result           = document.getElementById('f10result');
    var div10result         = document.getElementById('div10result');
    var button10function10  = document.getElementById('button-calc-10');
    var buttonreset10       = document.getElementById('button-reset-10');

    // Declarare evenimente pentru functia 10
    button10function10.addEventListener("click", checkValuesfunction10);
    buttonreset10.addEventListener("click", resetFunction10);

    // Declarare functii pentru functia 10
    function checkValuesfunction10(){
        var numere = f10input01.value;
        var numereArray = numere.split("");
        var numar = f10input02.value;

        div10result.innerText = verificaIncluderea(numereArray, numar);
        div10result.style.display = "block";
        div10result.style.backgroundColor = "#eeee00";
        
    }
    function verificaIncluderea(x, y){
        if(x.includes(y)){
            return "Numarul " + y + " este inclus in colectia de numere " + x;
        }else {
            return "Numarul " + y + " nu este inclus in colectia de numere " + x;
        }
    }

    function resetFunction10(){
        f10input01.value = "";
        f10result.innerText  = "";
        div10result.style.display = "none";
    }

//Functia 11

    // Declarare variabile pentru functia 11
    var f11input01          = document.getElementById('f11input01');
    var f11result           = document.getElementById('f11result');
    var div11result         = document.getElementById('div11result');
    var button11function11  = document.getElementById('button-calc-11');
    var buttonreset11       = document.getElementById('button-reset-11');

    // Declarare evenimente pentru functia 11
    button11function11.addEventListener("click", checkValuesfunction11);
    buttonreset11.addEventListener("click", resetFunction11);

    // Declarare functii pentru functia 11
    function checkValuesfunction11(){
        var numere = f11input01.value;
        var numereArray = numere.split(" ");
        
        div11result.innerText = Math.max(... numereArray);
        div11result.style.display = "block";
        div11result.style.backgroundColor = "#eeee00";
        
    }


    function resetFunction11(){
        f11input01.value = "";
        f11result.innerText  = "";
        div11result.style.display = "none";
    }
//Functia 12

    // Declarare variabile pentru functia 12
    var f12input01          = document.getElementById('f12input01');
    var f12result           = document.getElementById('f12result');
    var div12result         = document.getElementById('div12result');
    var button12function12  = document.getElementById('button-calc-12');
    var buttonreset12       = document.getElementById('button-reset-12');

    // Declarare evenimente pentru functia 11
    button12function12.addEventListener("click", checkValuesfunction12);
    buttonreset12.addEventListener("click", resetFunction12);

    // Declarare functii pentru functia 12
    function checkValuesfunction12(){
        var numere = f12input01.value;
        var numereArray = numere.split(" ");
        var numarMaxim = Math.max(... numereArray);
        var numarMinim = Math.min(... numereArray);
        var suma = numarMaxim + numarMinim;

        div12result.innerText = suma;
        div12result.style.display = "block";
        div12result.style.backgroundColor = "#eeee00";
        
    }

    function resetFunction12(){
        f12input01.value = "";
        f12result.innerText  = "";
        div12result.style.display = "none";
    }

//Functia 13 - Code editat cu sintaxa incepatori

    // Declarare variabile pentru functia 13
    var f13input01          = document.getElementById('f13input01');
    var f13result           = document.getElementById('f13result');
    var div13result         = document.getElementById('div13result');
    var button13function13  = document.getElementById('button-calc-13');
    var buttonreset13       = document.getElementById('button-reset-13');

    // Declarare evenimente pentru functia 13
    button13function13.addEventListener("click", checkValuesfunction13);
    buttonreset13.addEventListener("click", resetFunction13);

    // Declarare functii pentru functia 13
    function checkValuesfunction13(){
        div13result.innerText = verificareDuplicat(f13input01.value);
        div13result.style.display = "block";
        div13result.style.backgroundColor = "#eeee00";
    }
    //Verificare duplicat
    function verificareDuplicat(arr){
        var rezultat = [];
        for(var i = 0; i < arr.length; i++){
            for(var j = i + 1; j < arr.length; j++){
                if((arr[i] == arr[j]) && i != j){
                    rezultat.push(arr[i]);
                }
            }
        }
        if(rezultat.length == "0"){
            return "Nu aveti caractere duplicat";
        }else {
            return rezultat + " sunt valori duplicat";
        }
    }

    function resetFunction13(){
        f13input01.value = "";
        f13result.innerText  = "";
        div13result.style.display = "none";
    }

//Functia 15

    // Declarare variabile pentru functia 15
    var f15input01          = document.getElementById('f15input01');
    var f15result           = document.getElementById('f15result');
    var div15result         = document.getElementById('div15result');
    var button15function15  = document.getElementById('button-calc-15');
    var buttonreset15       = document.getElementById('button-reset-15');

    // Declarare evenimente pentru functia 13
    button15function15.addEventListener("click", checkValuesfunction15);
    buttonreset15.addEventListener("click", resetFunction15);

    // Declarare functii pentru functia 15
    function checkValuesfunction15(){
        var input = f15input01.value;

        div15result.innerText = verificaPalindrom(input);
        div15result.style.display = "block";
        div15result.style.backgroundColor = "#eeee00";
        
    }

    function verificaPalindrom(input){
        if(input !== ""){
            var inputText = input;
            var splitInput = inputText.split("");
            var reversedInput = splitInput.reverse();
            var joinedInput = reversedInput.join("");
            if(input === joinedInput){
                return "Valoarea " + "\"" + input + "\"" + " este un palindrom. Puteti merge mai departe";
            }else{
                return "Valoarea " + "\"" + input + "\"" + " NU este un palindrom. Nu puteti merge mai departe";
            }
        }
        
    }
    function resetFunction15(){
        f15input01.value = "";
        f15result.innerText  = "";
        div15result.style.display = "none";
    }



