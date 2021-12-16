import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  //Decimal
  //Sintaxis {{valorpi | number:N1.N2-N3}}
  //N1= 1 Cantidad de numeros enteros
  //N2 = 0 Cantidad minima de numeros decimales
  //N3 = 3 Cantidad maxima de numeros decimales
  valorE:number=0.141592;

  //Percent
  //Sintaxis {{ myNum |percent: '(string con 3 valores numericos)
  //N1.N2-N3' }}
  //N1 = 1 --> Cantidad de numeros enteros (valor por defecto)
  //N2 = 0 --> Cantidad minima de numeros decimales (valor por defecto)
  //N3 = 0 --> Cantidad maxima de numeros decimales(Valor por defecto)
  myNum = 0.336;

  //Currency
  //Sintaxis {{myVarianle | currency: 'currencyCharacter':'symbol/code':N1.N2-N3}}
  salary = 45345.5;

  //JSON
  personaje={
    name:"Erik",
    alias:"Erikaso",
    song:"Singing in the Rain",
    skils:['eidetic memory','makes people nervous'],
    youtubeChannel:"Fun With Flags",
    adress:{
      street: "Elm Street",
      number: 4,
      city:"Madrid"
    }
  }

  promiseValue = new Promise((resolve,reject) =>{
    setTimeout(()=>{
      resolve("Hola Rolando");
    },3000)
  });

  fechaActual = new Date();



  name: string = "miniscula en MAYUSCULA";
  name2: string = "MAYUSCULA EN minuscula"
  constructor() { }

  ngOnInit(): void {
  }

}
