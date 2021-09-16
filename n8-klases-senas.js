'use strict'
/*
sukurti klase Zmogus su savybem
vardas
pavarde
gimimoMetai
amzius (get)
pilnas vardas (get/set)
funksionalumas
labas() -> atspausdinti Labas Vardas Pavadre
 
sukurti klase Studentas paveldeta nuo zmogaus
mokykla
kursas
labas() -> atspausdinti Labas Vardas Pavadre, mokausi Mokykla
peritiIKitaKursa(balai) -> balai gali buti (1..100) jei balai < 35 i kita kursa nepereina
 
sukurti ir su sena ir su nauja sintakse
*/

var string = '';

function Zmogus(vardas, pavarde, gimimoMetai) {
        this.vardas = vardas;
        this.pavarde = pavarde;
        this.gimimoMetai = gimimoMetai;
}

Object.defineProperty(Zmogus.prototype, 'amzius', {
    enumerable: true,
    configurable: true,
    get: function() {
        return new Date().getFullYear() - this.gimimoMetai;
    }
});

Object.defineProperty(Zmogus.prototype, 'pilnasVardas', {
    enumerable: true,
    configurable: true,
    get: function() {
        return this.vardas + ' ' + this.pavarde;
    },
    set: function (kas) {
        kas = kas.split(' ');
        this.vardas = kas[0];
        this.pavarde = kas[1];
    }
});

Zmogus.prototype.labas = function() {
    string = "Labas " + this.vardas + ' ' + this.pavarde;
    if (this.constructor.name === 'Zmogus')
        console.log(string);
}



//---------------------------------------------------------------------------------------



function Studentas(vardas, pavarde, gimimoMetai, mokykla, kursas) {
        Zmogus.call(this, vardas, pavarde, gimimoMetai),
        this.mokykla = mokykla,
        this.kursas = kursas
    };



    Studentas.prototype = Object.create(Zmogus.prototype);
    Studentas.prototype.constructor = Studentas;
    // Studentas.prototype.super = Zmogus.prototype;

Studentas.prototype.labas = function () {
    //     super.labas();
    // this.super.labas.call(this);
    string += ', mokausi ' + this.mokykla;
    console.log(string);
    // console.log('Labas ' + this.pilnasVardas + ', mokausi ' + this.mokykla);
}

Studentas.prototype.pereitiIKitaKursa = function(balai) {
    if(balai > 35) {
        console.log(this.vardas + ' i kita kursa pereina');
    } else {
        console.log(this.vardas + ' i kita kursa nepereina');
    }
}


let z1 = new Zmogus('Jonas', 'Jonaitis', '1982')
console.log('\n--------------------- ZMOGUS ---------------------');
console.log('\nZmogus pilnas objektas:');
console.log(z1);
console.log('\nAmzius (get):');
console.log(z1.amzius);
console.log('\nPilnas vardas (get):');
console.log(z1.pilnasVardas);

z1.pilnasVardas = 'Petras Petraitis';
console.log('\nPilnas vardas (set): keiciam i Petras Petraitis');
console.log(z1);
console.log('\nlabas() -> atspausdinti Labas Vardas Pavadre:');
z1.labas();

console.log('\n--------------------- STUDENTAS ---------------------');
console.log('\nStudentas pilnas objektas:');
let s1 = new Studentas('Zigmas', 'Zigmaitis', '1991', 'BIT', 'Pirmas kuras');
console.log(s1);
console.log('\nAmzius (get):');
console.log(s1.amzius);
console.log('\nPilnas vardas (get):');
console.log(s1.pilnasVardas);
console.log('\nlabas() -> atspausdinti Labas Vardas Pavadre, mokausi Mokykla:');
s1.labas();
console.log('\nKai balai < 35:');
s1.pereitiIKitaKursa(12);
console.log('\nKai balai > 35:');
s1.pereitiIKitaKursa(36);

console.log('\n--------------------- PROTOTIPAI ---------------------');
console.log('\n\nZMOGAUS PROTOTIPAS:', Zmogus.prototype);
console.log('STUDENTO PROTOTIPAS:', Studentas.prototype);
console.log('-----------------------');
console.log('ZMOGUS KONSTRUKTORIUS', Zmogus.prototype.constructor);
console.log('STUDENTO KONSTRUKTORIUS', Studentas.prototype.constructor);
console.log('-----------------------');
console.log('Z1 PROTO:', z1.__proto__);
console.log('S1 PROTO:', s1.__proto__);


console.log('\n----------------------------------------');
console.log(
    z1.vardas,'\n',
    z1.pavarde,'\n',
    z1.gimimoMetai,'\n',
    z1.amzius,'\n',
    z1.pilnasVardas
    )
    z1.labas();

    console.log('\n----------------------------------------');

    console.log(
        s1.vardas,'\n',
        s1.pavarde,'\n',
        s1.gimimoMetai,'\n',
        s1.amzius,'\n',
        s1.pilnasVardas,'\n',
        s1.mokykla,'\n',
        s1.kursas
        )
        s1.pereitiIKitaKursa(36);
        s1.labas();

        console.log('\n-----------------------FFF----------------');
        // console.log(Studentas.prototype);
        
        // let v1 = {a:1,b:2};
        // let v2 = v1;
        // let v3 = Object.create(v1);

        // console.log(v1,v2,v3.__proto__); 
        // console.log(Object.keys(v3));
        console.log(Studentas.prototype.__proto__, Studentas.prototype);


