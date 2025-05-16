import antlr4 from 'antlr4';
import fs from 'fs';
import UsuarioLexer from './generated/UsuarioLexer.js';
import UsuarioParser from './generated/UsuarioParser.js';
import CustomUsuarioVisitor from './CustomUsuarioVisitor.mjs';

// Leer input.txt
let input;
try {
  input = fs.readFileSync('input.txt', 'utf8');
} catch (err) {
  console.error("❌ No se encontró input.txt");
  process.exit(1);
}

// Crear lexer y token stream
const chars = new antlr4.InputStream(input);
const lexer = new UsuarioLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
tokens.fill();
const tokenList = [...tokens.tokens]; // ✅ Esta lista mantiene los tokens aunque el parser los use

console.log("📋 Tabla de tokens:");
console.log(`Cantidad de tokens encontrados: ${tokenList.length}`);
console.log('N°\tLexema\t\t\tToken');
tokenList.forEach((token, idx) => {
  const tipo = UsuarioLexer.symbolicNames[token.type] || `'${token.text}'`;
  const texto = token.text.replace(/\r?\n/g, '\\n');
  console.log(`${idx + 1}\t${texto.padEnd(16)}\t${tipo}`);
});

// Crear parser y analizar
const parser = new UsuarioParser(tokens);
parser.buildParseTrees = true;
const tree = parser.programa();

// Mostrar árbol
console.log('\n🌳 Árbol de análisis sintáctico:');
console.log(tree.toStringTree(parser.ruleNames));

// Aplicar visitor para generar salida
const visitor = new CustomUsuarioVisitor();
const salida = visitor.visit(tree);

// Mostrar código generado
console.log('\n🧠 Código generado:\n');
console.log(salida);
