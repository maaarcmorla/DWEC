// Exercici condicionals
// 1.- Crea un programa que demani a l'usuari que introdueixi una edat i mostri el següent missatge en funció del número introduït:

    var edat = prompt("Introdueix la teva edat");
    if (edat <= 12) {
        console.log("Nen");
    } else if (edat >= 13 && edat <= 26) { // (&& para concatenar operaciones)
        console.log("Jove");
    } else if (edat >= 27 && edat <= 60) {
        console.log("Adult");
    } else {
        console.log("Jubilat");
    }

// Exercici tractament tipus nombres
// 2.- Crea un programa en el qual creis 5 variables numèriques (sencer, decimal, científic, octal i hexadecimal).

    // asginamos las variables
    var sencer
    var decimal
    var cientific
    var octal
    var hexadecimal

    sencer = 1357
    decimal = 135.7
    cientific = 135e7
    octal = 0o1357
    hexadecimal = 0x1357

    alert("Número sencer" + sencer);
    alert("Número decimal" + decimal);
    alert("Número cientific" + cientific);
    alert("Número octal" + octal);
    alert("Número hexadecimal" + hexadecimal);

// Exercici tractament de cadenes
// 3.- Crea un programa en el qual creis 4 variables, 2 cadenes i 2 nombres, amb els següents valors: el teu nom, el teu cognom, la teva edat i el teu any de naixement.

    var nom = prompt("Introdueix el teu nom");
    var cognom = prompt("Introdueix el teu cognom");
    var edat = 20;
    var any = 2003;
    resultat1 = edat+any;

    alert("Aixo es una frase amb 'cometes' simples.");
    alert("Hola, " + nom + "\n" + cognom)
    alert("La suma de "+edat+" i " + any + " es: " + resultat1);
    alert("La suma de totes les variables es: "+resultat1);

// Exercici tractament de comparacions
// 4.- Crea un programa en el qual mostris el resultat de diverses operacions mitjançant alert, mostrant el texte exacte de l'operació realitzada i el seu resultat.
    
    
// Exercicis bucles
// 5.- Escriu un programa que mostri els nombres parells de 2 a 30.


// 6.- Escriu un programa que mostri les potències de 2 fins a 3000.

