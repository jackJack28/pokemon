import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemon = [
    {id: 1,
    nome: 'Bulbasaur',
    foto: "../../assets/foto pokemon/bulbasaur.png",
    tipo: ['Erba', 'Veleno'],
    numero: '0001',
    altezza: '0,7',
    categoria: 'Seme',
    colori: ['verde', 'rosso'], //Questi sono i colori di rappresentanza del singolo pokemon
    peso: '6,9',
    abilitaSpeciale: ['Erbaiuto'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '3'},
            ],
    debolezze: ['Fuoco', 'Psico', 'Volante', 'Ghiaccio'],
    evoluzioni: [
                  {nome: 'Bulbasaur',
                  foto: "../../assets/foto pokemon/bulbasaur.png",
                  numero: '0001',
                  tipo: ['Erba', 'Veleno']},

                  {nome: 'Ivysaur',
                  foto: "../../assets/foto pokemon/ivysaur.png",
                  numero: '0002',
                  tipo: ['Erba', 'Veleno']},

                  {nome: 'Venusaur',
                  foto: "../../assets/foto pokemon/venusaur.png",
                  numero: '0003',
                  tipo: ['Erba', 'Veleno']},
                ],
    descrizione: "Fin dalla nascita questo Pokémon ha sulla schiena un seme che cresce lentamente."},

    {id: 2,
    nome: 'Ivysaur',
    foto: "../../assets/foto pokemon/ivysaur.png",
    tipo: ['Erba', 'Veleno'],
    numero: '0002',
    altezza: '1,0',
    categoria: 'Seme',
    colori: ['verde', 'rosso'],
    peso: '13,0',
    abilitaSpeciale: ['Erbaiuto'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '4'},
            ],
    debolezze: ['Fuoco', 'Psico', 'Volante', 'Ghiaccio'],
    evoluzioni: [
                  {nome: 'Bulbasaur',
                  foto: "../../assets/foto pokemon/bulbasaur.png",
                  numero: '0001',
                  tipo: ['Erba', 'Veleno']},

                  {nome: 'Ivysaur',
                  foto: "../../assets/foto pokemon/ivysaur.png",
                  numero: '0002',
                  tipo: ['Erba', 'Veleno']},

                  {nome: 'Venusaur',
                  foto: "../../assets/foto pokemon/venusaur.png",
                  numero: '0003',
                  tipo: ['Erba', 'Veleno']},
                ],
    descrizione: "Il bulbo sulla schiena è cresciuto così tanto da impedirgli di alzarsi in piedi sulle zampe posteriori."},

    {id: 3,
    nome: 'Venusaur',
    foto: "../../assets/foto pokemon/venusaur.png",
    tipo: ['Erba', 'Veleno'],
    numero: '0003',
    altezza: '2,0',
    categoria: 'Seme',
    colori: ['verde', 'rosso'],
    peso: '100,0',
    abilitaSpeciale: ['Erbaiuto'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '6'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '6'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '5'},
            ],
    debolezze: ['Fuoco', 'Psico', 'Volante', 'Ghiaccio'],
    evoluzioni: [
                  {nome: 'Bulbasaur',
                  foto: "../../assets/foto pokemon/bulbasaur.png",
                  numero: '0001',
                  tipo: ['Erba', 'Veleno']},

                  {nome: 'Ivysaur',
                  foto: "../../assets/foto pokemon/ivysaur.png",
                  numero: '0002',
                  tipo: ['Erba', 'Veleno']},

                  {nome: 'Venusaur',
                  foto: "../../assets/foto pokemon/venusaur.png",
                  numero: '0003',
                  tipo: ['Erba', 'Veleno']},
                ],
    descrizione: "Il fiore sboccia assorbendo energia solare. Si muove continuamente in cerca di luce."},

    {id: 4,
    nome: 'Charmander',
    foto: "../../assets/foto pokemon/charmander.png",
    tipo: ['Fuoco',],
    numero: '0004',
    altezza: '0,6',
    categoria: 'Lucertola',
    colori: ['verde', 'rosso'],
    peso: '8,5',
    abilitaSpeciale: ['Aiutofuoco'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '4'},
            ],
    debolezze: ['Acqua', 'Terra', 'Roccia',],
    evoluzioni: [
                  {nome: 'Charmander',
                  foto: "../../assets/foto pokemon/charmander.png",
                  numero: '0004',
                  tipo: ['Fuoco',]},

                  {nome: 'Charmeleon',
                  foto: "../../assets/foto pokemon/charmeleon.png",
                  numero: '0005',
                  tipo: ['Fuoco',]},

                  {nome: 'Charizard',
                  foto: "../../assets/foto pokemon/charizard.png",
                  numero: '0006',
                  tipo: ['Fuoco', 'Volante']},
                ],
    descrizione: "Ama le cose calde. Si dice che quando piove gli esca vapore dalla punta della coda."},

    {id: 5,
    nome: 'Charmeleon',
    foto: "../../assets/foto pokemon/charmeleon.png",
    tipo: ['Fuoco',],
    numero: '0005',
    altezza: '1,1',
    categoria: 'Fiamma',
    colori: ['verde', 'rosso'],
    peso: '19,0',
    abilitaSpeciale: ['Aiutofuoco'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '5'},
            ],
    debolezze: ['Acqua', 'Terra', 'Roccia',],
    evoluzioni: [
                  {nome: 'Charmander',
                  foto: "../../assets/foto pokemon/charmander.png",
                  numero: '0004',
                  tipo: ['Fuoco',]},

                  {nome: 'Charmeleon',
                  foto: "../../assets/foto pokemon/charmeleon.png",
                  numero: '0005',
                  tipo: ['Fuoco',]},

                  {nome: 'Charizard',
                  foto: "../../assets/foto pokemon/charizard.png",
                  numero: '0006',
                  tipo: ['Fuoco', 'Volante']},
                ],
    descrizione: "Ha un'indole feroce. Usa la coda fiammeggiante come una frusta e lacera l'avversario con gli artigli affilati."},

    {id: 6,
    nome: 'Charizard',
    foto: "../../assets/foto pokemon/charizard.png",
    tipo: ['Fuoco', 'Volante'],
    numero: '0006',
    altezza: '1,7',
    categoria: 'Fiamma',
    colori: ['verde', 'rosso'],
    peso: '90,5',
    abilitaSpeciale: ['Aiutofuoco'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '7'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '6'},
            ],
    debolezze: ['Acqua', 'Elettro', 'Roccia',],
    evoluzioni: [
                  {nome: 'Charmander',
                  foto: "../../assets/foto pokemon/charmander.png",
                  numero: '0004',
                  tipo: ['Fuoco',]},

                  {nome: 'Charmeleon',
                  foto: "../../assets/foto pokemon/charmeleon.png",
                  numero: '0005',
                  tipo: ['Fuoco',]},

                  {nome: 'Charizard',
                  foto: "../../assets/foto pokemon/charizard.png",
                  numero: '0006',
                  tipo: ['Fuoco', 'Volante']},
                ],
    descrizione: "Si dice che la fiamma di Charizard abbia una temperatura tanto più alta quanto più dure sono le lotte che ha affrontato."},

    {id: 7,
    nome: 'Squirtle',
    foto: "../../assets/foto pokemon/squirtle.png",
    tipo: ['Acqua',],
    numero: '0007',
    altezza: '0,5',
    categoria: 'Tartaghina',
    colori: ['verde', 'rosso'],
    peso: '8,5',
    abilitaSpeciale: ['Acquaiuto'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '3'},
            ],
    debolezze: ['Erba', 'Elettro',],
    evoluzioni: [
                  {nome: 'Squirtle',
                  foto: "../../assets/foto pokemon/squirtle.png",
                  numero: '0007',
                  tipo: ['Acqua',]},

                  {nome: 'Wartotle',
                  foto: "../../assets/foto pokemon/wartotle.png",
                  numero: '0008',
                  tipo: ['Acqua',]},

                  {nome: 'Blastoise',
                  foto: "../../assets/foto pokemon/blastoise.png",
                  numero: '0009',
                  tipo: ['Acqua',]},
                ],
    descrizione: "Quando ritrae il lungo collo dentro la corazza sputa un vigoroso getto d'acqua."},

    {id: 8,
    nome: 'Wartotle',
    foto: "../../assets/foto pokemon/wartotle.png",
    tipo: ['Acqua',],
    numero: '0008',
    altezza: '1,0',
    categoria: 'Tartaruga',
    colori: ['verde', 'rosso'],
    peso: '22,5',
    abilitaSpeciale: ['Acquaiuto'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '4'},
            ],
    debolezze: ['Erba', 'Elettro',],
    evoluzioni: [
                  {nome: 'Squirtle',
                  foto: "../../assets/foto pokemon/squirtle.png",
                  numero: '0007',
                  tipo: ['Acqua',]},

                  {nome: 'Wartotle',
                  foto: "../../assets/foto pokemon/wartotle.png",
                  numero: '0008',
                  tipo: ['Acqua',]},

                  {nome: 'Blastoise',
                  foto: "../../assets/foto pokemon/blastoise.png",
                  numero: '0009',
                  tipo: ['Acqua',]},
                ],
    descrizione: "È considerato un simbolo di longevita. Se c'è del muschio sul suo guscio, significa che è molto anziano."},

    {id: 9,
    nome: 'Blastoise',
    foto: "../../assets/foto pokemon/blastoise.png",
    tipo: ['Acqua',],
    numero: '0009',
    altezza: '1,6',
    categoria: 'Crostaceo',
    colori: ['verde', 'rosso'],
    peso: '85,5',
    abilitaSpeciale: ['Acquaiuto'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '6'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '7'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '5'},
            ],
    debolezze: ['Erba', 'Elettro',],
    evoluzioni: [
                  {nome: 'Squirtle',
                  foto: "../../assets/foto pokemon/squirtle.png",
                  numero: '0007',
                  tipo: ['Acqua',]},

                  {nome: 'Wartotle',
                  foto: "../../assets/foto pokemon/wartotle.png",
                  numero: '0008',
                  tipo: ['Acqua',]},

                  {nome: 'Blastoise',
                  foto: "../../assets/foto pokemon/blastoise.png",
                  numero: '0009',
                  tipo: ['Acqua',]},
                ],
    descrizione: "Mette K.O. gli avversari schiacciandoli sotto il corpo possente. Se è in difficolta, può ritirarsi nella corazza."},

    {id: 10,
    nome: 'Caterpie',
    foto: "../../assets/foto pokemon/caterpie.png",
    tipo: ['Coleottero',],
    numero: '0010',
    altezza: '0,3',
    categoria: 'Baco',
    colori: ['verde', 'rosso'],
    peso: '2,9',
    abilitaSpeciale: ['Polvoscudo'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '2'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '2'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '2'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '3'},
            ],
    debolezze: ['Fuoco', 'Volante', 'Roccia'],
    evoluzioni: [
                  {nome: 'Caterpie',
                  foto: "../../assets/foto pokemon/caterpie.png",
                  numero: '0010',
                  tipo: ['Coleottero',]},

                  {nome: 'Metapod',
                  foto: "../../assets/foto pokemon/metapod.png",
                  numero: '0011',
                  tipo: ['Coleottero',]},

                  {nome: 'Butterfree',
                  foto: "../../assets/foto pokemon/butterfree.png",
                  numero: '0012',
                  tipo: ['Coleottero','Volante']},
                ],
    descrizione: "Per proteggersi emette un puzzo terribile dalle antenne sul capo, con cui tiene lontani i nemici."},

    {id: 11,
    nome: 'Metapod',
    foto: "../../assets/foto pokemon/metapod.png",
    tipo: ['Coleottero',],
    numero: '0011',
    altezza: '0,7',
    categoria: 'Bozzolo',
    colori: ['verde', 'rosso'],
    peso: '9,9',
    abilitaSpeciale: ['Muta'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '2'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '2'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '2'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '2'},
            ],
    debolezze: ['Fuoco', 'Volante', 'Roccia'],
    evoluzioni: [
                  {nome: 'Caterpie',
                  foto: "../../assets/foto pokemon/caterpie.png",
                  numero: '0010',
                  tipo: ['Coleottero',]},

                  {nome: 'Metapod',
                  foto: "../../assets/foto pokemon/metapod.png",
                  numero: '0011',
                  tipo: ['Coleottero',]},

                  {nome: 'Butterfree',
                  foto: "../../assets/foto pokemon/butterfree.png",
                  numero: '0012',
                  tipo: ['Coleottero','Volante']},
                ],
    descrizione: "In attesa di evolversi, l'unica cosa che può fare è indurire la sua corazza, quindi rimane immobile per evitare di essere attaccato."},

    {id: 12,
    nome: 'Butterfree',
    foto: "../../assets/foto pokemon/butterfree.png",
    tipo: ['Coleottero', 'Volante'],
    numero: '0012',
    altezza: '1,1',
    categoria: 'Farfalla',
    colori: ['verde', 'rosso'],
    peso: '32,0',
    abilitaSpeciale: ['Insettocchi'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '6'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '5'},
            ],
    debolezze: ['Fuoco', 'Volante', 'Elettro', 'Ghiaccio', 'Roccia'],
    evoluzioni: [
                  {nome: 'Caterpie',
                  foto: "../../assets/foto pokemon/caterpie.png",
                  numero: '0010',
                  tipo: ['Coleottero',]},

                  {nome: 'Metapod',
                  foto: "../../assets/foto pokemon/metapod.png",
                  numero: '0011',
                  tipo: ['Coleottero',]},

                  {nome: 'Butterfree',
                  foto: "../../assets/foto pokemon/butterfree.png",
                  numero: '0012',
                  tipo: ['Coleottero','Volante']},
                ],
    descrizione: "Adora il nettare dei fiori e riesce a localizzare i campi in cui si trova anche solo una minima quantita di polline."},

    {id: 13,
    nome: 'Poliwag',
    foto: "../../assets/foto pokemon/poliwag.png",
    tipo: ['Acqua'],
    numero: '0013',
    altezza: '0,6',
    categoria: 'Girino',
    colori: ['verde', 'rosso'],
    peso: '12,4',
    abilitaSpeciale: ['Umidità', 'Assorbacqua'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '6'},
            ],
    debolezze: ['Erba', 'Elettro'],
    evoluzioni: [
                  {nome: 'Poliwag',
                  foto: "../../assets/foto pokemon/poliwag.png",
                  numero: '0013',
                  tipo: ['Acqua']},

                  {nome: 'Poliwhirl',
                  foto: "../../assets/foto pokemon/poliwhirl.png",
                  numero: '0014',
                  tipo: ['Acqua']},

                  {nome: 'Poliwrath',
                  foto: "../../assets/foto pokemon/poliwrath.png",
                  numero: '0015',
                  tipo: ['Acqua', 'Lotta']},
                ],
    descrizione: "È più portato per il nuoto che per la corsa. Il motivo spiraliforme sul ventre è parte dei suoi organi interni visibili in trasparenza."},

    {id: 14,
    nome: 'Poliwhirl',
    foto: "../../assets/foto pokemon/poliwhirl.png",
    tipo: ['Acqua'],
    numero: '0014',
    altezza: '1,0',
    categoria: 'Girino',
    colori: ['verde', 'rosso'],
    peso: '20,0',
    abilitaSpeciale: ['Umidità', 'Assorbacqua'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '4'},
  
              {nomeAbilita: 'Attacco',
              punteggioAbilita: '4'},
  
              {nomeAbilita: 'Difesa',
              punteggioAbilita: '4'},
  
              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '3'},
  
              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '3'},
  
              {nomeAbilita: 'Velocita',
              punteggioAbilita: '6'},
            ],
    debolezze: ['Erba', 'Elettro'],
    evoluzioni: [
                  {nome: 'Poliwag',
                  foto: "../../assets/foto pokemon/poliwag.png",
                  numero: '0013',
                  tipo: ['Acqua']},
  
                  {nome: 'Poliwhirl',
                  foto: "../../assets/foto pokemon/poliwhirl.png",
                  numero: '0014',
                  tipo: ['Acqua']},
  
                  {nome: 'Poliwrath',
                  foto: "../../assets/foto pokemon/poliwrath.png",
                  numero: '0015',
                  tipo: ['Acqua', 'Lotta']},
                ],
    descrizione: "Chi fissa a lungo il disegno spiraliforme sul ventre si assopisce, tant’è che Poliwhirl lo utilizza al posto della ninnananna per far dormire i piccoli."},

    {id: 15,
    nome: 'Poliwrath',
    foto: "../../assets/foto pokemon/poliwrath.png",
    tipo: ['Acqua', 'Lotta'],
    numero: '0015',
    altezza: '1,3',
    categoria: 'Girino',
    colori: ['verde', 'rosso'],
    peso: '54,0',
    abilitaSpeciale: ['Umidità', 'Assorbacqua'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '6'},
    
              {nomeAbilita: 'Attacco',
              punteggioAbilita: '6'},
    
              {nomeAbilita: 'Difesa',
              punteggioAbilita: '6'},
    
              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '5'},
    
              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '6'},
    
              {nomeAbilita: 'Velocita',
              punteggioAbilita: '5'},
            ],
    debolezze: ['Folletto', 'Erba', 'Volante', 'Psico', 'Elettro'],
    evoluzioni: [
                  {nome: 'Poliwag',
                  foto: "../../assets/foto pokemon/poliwag.png",
                  numero: '0013',
                  tipo: ['Acqua']},
    
                  {nome: 'Poliwhirl',
                  foto: "../../assets/foto pokemon/poliwhirl.png",
                  numero: '0014',
                  tipo: ['Acqua']},
    
                  {nome: 'Poliwrath',
                  foto: "../../assets/foto pokemon/poliwrath.png",
                  numero: '0015',
                  tipo: ['Acqua', 'Lotta']},
                ],
    descrizione: "Il suo corpo è un ammasso di muscoli. Nuota anche nei mari più freddi frantumando il ghiaccio fluttuante con le braccia vigorose per farsi strada."},
  
    {id: 16,
    nome: 'Pidgey',
    foto: "../../assets/foto pokemon/pidgey.png",
    tipo: ['Normale', 'Volante'],
    numero: '0016',
    altezza: '0,3',
    categoria: 'Uccellino',
    colori: ['verde', 'rosso'],
    peso: '1,8',
    abilitaSpeciale: ['Sguardofermo', 'Intricopiedi'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '4'},
            ],
    debolezze: ['Elettro', 'Ghiaccio', 'Roccia'],
    evoluzioni: [
                  {nome: 'Pidgey',
                  foto: "../../assets/foto pokemon/pidgey.png",
                  numero: '0016',
                  tipo: ['Normale', 'Volante']},

                  {nome: 'Pidgeotto',
                  foto: "../../assets/foto pokemon/pidgeotto.png",
                  numero: '0017',
                  tipo: ['Normale', 'Volante']},

                  {nome: 'Pidgeot',
                  foto: "../../assets/foto pokemon/pidgeot.png",
                  numero: '0018',
                  tipo: ['Normale','Volante']},
                ],
    descrizione: "Di indole docile, preferisce gettare sabbia verso il nemico per proteggersi piuttosto che attaccaro."},

    {id: 17,
    nome: 'Pidgeotto',
    foto: "../../assets/foto pokemon/pidgeotto.png",
    tipo: ['Normale', 'Volante'],
    numero: '0017',
    altezza: '1,1',
    categoria: 'Uccello',
    colori: ['verde', 'rosso'],
    peso: '30,0',
    abilitaSpeciale: ['Sguardofermo', 'Intricopiedi'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '5'},
            ],
    debolezze: ['Elettro', 'Ghiaccio', 'Roccia'],
    evoluzioni: [
                  {nome: 'Pidgey',
                  foto: "../../assets/foto pokemon/pidgey.png",
                  numero: '0016',
                  tipo: ['Normale', 'Volante']},

                  {nome: 'Pidgeotto',
                  foto: "../../assets/foto pokemon/pidgeotto.png",
                  numero: '0017',
                  tipo: ['Normale', 'Volante']},

                  {nome: 'Pidgeot',
                  foto: "../../assets/foto pokemon/pidgeot.png",
                  numero: '0018',
                  tipo: ['Normale','Volante']},
                ],
    descrizione: "Un Pokémon pieno di vitalita che vola instacabile sul suo territorio in cerca di prede."},

    {id: 18,
    nome: 'Pidgeot',
    foto: "../../assets/foto pokemon/pidgeot.png",
    tipo: ['Normale', 'Volante'],
    numero: '0018',
    altezza: '1,5',
    categoria: 'Uccello',
    colori: ['verde', 'rosso'],
    peso: '39,5',
    abilitaSpeciale: ['Sguardofermo', 'Intricopiedi'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '6'},
            ],
    debolezze: ['Elettro', 'Ghiaccio', 'Roccia'],
    evoluzioni: [
                  {nome: 'Pidgey',
                  foto: "../../assets/foto pokemon/pidgey.png",
                  numero: '0016',
                  tipo: ['Normale', 'Volante']},

                  {nome: 'Pidgeotto',
                  foto: "../../assets/foto pokemon/pidgeotto.png",
                  numero: '0017',
                  tipo: ['Normale', 'Volante']},

                  {nome: 'Pidgeot',
                  foto: "../../assets/foto pokemon/pidgeot.png",
                  numero: '0018',
                  tipo: ['Normale','Volante']},
                ],
    descrizione: "Può volare a una velocita di Mach 2 in cerca di prede. I suoi artigli sono armi micidiali."},

    {id: 19,
    nome: 'Rattata',
    foto: "../../assets/foto pokemon/rattata.png",
    tipo: ['Normale',],
    numero: '0019',
    altezza: '0,3',
    categoria: 'Topo',
    colori: ['verde', 'rosso'],
    peso: '3,5',
    abilitaSpeciale: ['Fugafacile', 'Dentistretti'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '2'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '2'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '5'},
            ],
    debolezze: ['Lotta'],
    evoluzioni: [
                  {nome: 'Rattata',
                  foto: "../../assets/foto pokemon/rattata.png",
                  numero: '0019',
                  tipo: ['Normale',]},

                  {nome: 'Raticate',
                  foto: "../../assets/foto pokemon/raticate.png",
                  numero: '0020',
                  tipo: ['Normale',]},
                ],
    descrizione: "Con i suoi incisivi rode qualsiasi cosa. Se se ne avvista uno, è probabile che in zona vivano almeno 40 esemplari."},

    {id: 20,
    nome: 'Raticate',
    foto: "../../assets/foto pokemon/raticate.png",
    tipo: ['Normale',],
    numero: '0020',
    altezza: '0,7',
    categoria: 'Topo',
    colori: ['verde', 'rosso'],
    peso: '18,5',
    abilitaSpeciale: ['Fugafacile', 'Dentistretti'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '6'},
            ],
    debolezze: ['Lotta'],
    evoluzioni: [
                  {nome: 'Rattata',
                  foto: "../../assets/foto pokemon/rattata.png",
                  numero: '0019',
                  tipo: ['Normale',]},

                  {nome: 'Raticate',
                  foto: "../../assets/foto pokemon/raticate.png",
                  numero: '0020',
                  tipo: ['Normale',]},
                ],
    descrizione: "Dispone di zampe posteriori palmate che gli permettono di nuotare nei fiumi in cerca di prede."},

    {id: 21,
    nome: 'Spearow',
    foto: "../../assets/foto pokemon/spearow.png",
    tipo: ['Normale','Volante'],
    numero: '0021',
    altezza: '0,3',
    categoria: 'Uccellino',
    colori: ['verde', 'rosso'],
    peso: '2,0',
    abilitaSpeciale: ['Sguardofermo'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '2'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '2'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '2'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '5'},
            ],
    debolezze: ['Elettro', 'Ghiaccio', 'Roccia'],
    evoluzioni: [
                  {nome: 'Spearow',
                  foto: "../../assets/foto pokemon/spearow.png",
                  numero: '0021',
                  tipo: ['Normale','Volante']},

                  {nome: 'Fearow',
                  foto: "../../assets/foto pokemon/fearow.png",
                  numero: '0022',
                  tipo: ['Normale', 'Volante']},
                ],
    descrizione: "Incapace di raggiungere alte quote, sorvola il suo territorio a gran velocita per proteggerlo."},

    {id: 22,
    nome: 'Fearow',
    foto: "../../assets/foto pokemon/fearow.png",
    tipo: ['Normale','Volante'],
    numero: '0022',
    altezza: '1,2',
    categoria: 'Becco',
    colori: ['verde', 'rosso'],
    peso: '38,0',
    abilitaSpeciale: ['Sguardofermo'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '6'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '6'},
            ],
    debolezze: ['Elettro', 'Ghiaccio', 'Roccia'],
    evoluzioni: [
                  {nome: 'Spearow',
                  foto: "../../assets/foto pokemon/spearow.png",
                  numero: '0021',
                  tipo: ['Normale','Volante']},

                  {nome: 'Fearow',
                  foto: "../../assets/foto pokemon/fearow.png",
                  numero: '0022',
                  tipo: ['Normale', 'Volante']},
                ],
    descrizione: "Questo Pokémon molto antico vola in alto nel cielo al minimo accenno di pericolo."},

    {id: 23,
    nome: 'Ekans',
    foto: "../../assets/foto pokemon/ekans.png",
    tipo: ['Veleno'],
    numero: '0023',
    altezza: '2,0',
    categoria: 'Serpente',
    colori: ['verde', 'rosso'],
    peso: '6,9',
    abilitaSpeciale: ['Muta', 'Prepotenza'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '4'},
            ],
    debolezze: ['Psico', 'Terra'],
    evoluzioni: [
                  {nome: 'Ekans',
                  foto: "../../assets/foto pokemon/ekans.png",
                  numero: '0023',
                  tipo: ['Veleno']},

                  {nome: 'Arbok',
                  foto: "../../assets/foto pokemon/arbok.png",
                  numero: '0024',
                  tipo: ['Veleno']},
                ],
    descrizione: "Si allunga sempre di più con l'eta. La notte si avvolge attorno a qualche ramo per dormire."},

    {id: 24,
    nome: 'Arbok',
    foto: "../../assets/foto pokemon/arbok.png",
    tipo: ['Veleno'],
    numero: '0024',
    altezza: '3,5',
    categoria: 'Cobra',
    colori: ['verde', 'rosso'],
    peso: '65,0',
    abilitaSpeciale: ['Muta', 'Prepotenza'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '6'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '5'},
            ],
    debolezze: ['Psico', 'Terra'],
    evoluzioni: [
                  {nome: 'Ekans',
                  foto: "../../assets/foto pokemon/ekans.png",
                  numero: '0023',
                  tipo: ['Veleno']},

                  {nome: 'Arbok',
                  foto: "../../assets/foto pokemon/arbok.png",
                  numero: '0024',
                  tipo: ['Veleno']},
                ],
    descrizione: "Gli spaventosi disegni che ha sulla pancia sono oggetto di studio. Ne sono state scoperte sei diverse variazioni."},

    {id: 25,
    nome: 'Pikachu',
    foto: "../../assets/foto pokemon/pikachu.png",
    tipo: ['Elettro'],
    numero: '0025',
    altezza: '0,4',
    categoria: 'Topo',
    colori: ['verde', 'rosso'],
    peso: '6,0',
    abilitaSpeciale: ['Statico'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '6'},
            ],
    debolezze: ['Terra'],
    evoluzioni: [
                  {nome: 'Pichu',
                  foto: "../../assets/foto pokemon/pichu.png",
                  numero: '0172',
                  tipo: ['Elettro']},

                  {nome: 'Pikachu',
                  foto: "../../assets/foto pokemon/pikachu.png",
                  numero: '0025',
                  tipo: ['Elettro']},

                  {nome: 'Raichu',
                  foto: "../../assets/foto pokemon/raichu.png",
                  numero: '0026',
                  tipo: ['Elettro']},
                ],
    descrizione: "Quando si arrabbia, libera subito l'energia accumulata nelle sacche delle guance."},

    {id: 26,
    nome: 'Raichu',
    foto: "../../assets/foto pokemon/raichu.png",
    tipo: ['Elettro'],
    numero: '0026',
    altezza: '0,8',
    categoria: 'Topo',
    colori: ['verde', 'rosso'],
    peso: '30,0',
    abilitaSpeciale: ['Statico'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '6'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '4'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '6'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '5'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '7'},
            ],
    debolezze: ['Terra'],
    evoluzioni: [
                  {nome: 'Pichu',
                  foto: "../../assets/foto pokemon/pichu.png",
                  numero: '0172',
                  tipo: ['Elettro']},

                  {nome: 'Pikachu',
                  foto: "../../assets/foto pokemon/pikachu.png",
                  numero: '0025',
                  tipo: ['Elettro']},

                  {nome: 'Raichu',
                  foto: "../../assets/foto pokemon/raichu.png",
                  numero: '0026',
                  tipo: ['Elettro']},
                ],
    descrizione: "La sua coda scarica elettricita a terra, proteggendolo dalle scosse elettriche."},

    {id: 27,
    nome: 'Pichu',
    foto: "../../assets/foto pokemon/pichu.png",
    tipo: ['Elettro'],
    numero: '0172',
    altezza: '0,3',
    categoria: 'Topino',
    colori: ['verde', 'rosso'],
    peso: '2,0',
    abilitaSpeciale: ['Statico'],
    abilita: [
              {nomeAbilita: 'PS',
              punteggioAbilita: '2'},

              {nomeAbilita: 'Attacco',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Difesa',
              punteggioAbilita: '1'},

              {nomeAbilita: 'Attacco Speciale',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Difesa Speciale',
              punteggioAbilita: '3'},

              {nomeAbilita: 'Velocita',
              punteggioAbilita: '4'},
            ],
    debolezze: ['Terra'],
    evoluzioni: [
                  {nome: 'Pichu',
                  foto: "../../assets/foto pokemon/pichu.png",
                  numero: '0172',
                  tipo: ['Elettro']},

                  {nome: 'Pikachu',
                  foto: "../../assets/foto pokemon/pikachu.png",
                  numero: '0025',
                  tipo: ['Elettro']},

                  {nome: 'Raichu',
                  foto: "../../assets/foto pokemon/raichu.png",
                  numero: '0026',
                  tipo: ['Elettro']},
                ],
    descrizione: "Non è ancora bravo a immagazzinare elettricità. Basta un minimo spavento per fargliela perdere immediatamente."},
  ];

  

  constructor() { }
  
  getPokemon(id:number){
    return this.pokemon[id]
  }
}
