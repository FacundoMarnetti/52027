grammar Usuario;

programa: usuario+ EOF;

usuario: USUARIO ID LLAVE_ABIERTA atributo* LLAVE_CERRADA;

atributo: ID IGUAL valor PUNTOYCOMA;

valor: numero
     | cadena
     | BOOLEANO
     ;

numero: NUMERO;
cadena: CADENA;

// Tokens léxicos
USUARIO: 'usuario';
IGUAL: '=';
PUNTOYCOMA: ';';
LLAVE_ABIERTA: '{';
LLAVE_CERRADA: '}';
BOOLEANO: 'verdadero' | 'falso';

ID: LETRA (LETRA | DIGITO | '_')*;
NUMERO: '-'? DIGITO+;
CADENA: '"' (~["\r\n])* '"';

fragment LETRA: [a-zA-Z];
fragment DIGITO: [0-9];

WS: [ \t\r\n]+ -> skip;
