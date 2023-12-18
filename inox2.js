class heroi{
    constructor(nome, idade, tipo){
        this.nome = "jonas";
        this.idade = 25;
        this.tipo = "mago";

    }
atacar(){
 let ataque;
 switch(this.tipo){
   case 'mago':
     ataque = 'usar magia';
     break;
   case 'guerreiro':
     ataque = 'usar espada';
     break;
   case  'monge':
     ataque = 'usar artes marciais';
     break;
   case 'ninja':
     ataque = 'usar shuriken';
     break
   default:
   ataque = 'usou um ataque desconhecido';
     
      } 
   console.log( '0 ${this.tipo} ataque usando ${magia} ');
   }
 }
const heroi1 = new heroi('Jonas', 25, 'mago'); 
heroi1.atacar(); // Output o mago atacou usando magia

const heroi2 = new heroi('Pedro', 30 ,'guerreiro');
heroi2.atacar(); // Output o guerreiro atacou usando usou a espada


const heroi3 = new heroi('Lucia', 40 , 'monge');
heroi3.atacar()// Ooutput o monge atacou usando usou arte marciais

const heroi4 = new heroi4('Maria',20 , 'ninja');
heroi4.ataca(); // Outpul o ninja atacou  usando usou churiken 
