import UsuarioVisitor from './generated/UsuarioVisitor.js';

export default class CustomUsuarioVisitor extends UsuarioVisitor {

  visitPrograma(ctx) {
    const usuarios = ctx.usuario();
    return usuarios.map(u => this.visit(u)).join('\n\n');
  }

  visitUsuario(ctx) {
    const nombre = ctx.ID().getText();
    const atributos = ctx.atributo().map(attr => this.visit(attr));
    return `crearUsuario("${nombre}", [\n  ${atributos.join(',\n  ')}\n]);`;
  }

  visitAtributo(ctx) {
    const clave = ctx.ID().getText();
    const valor = this.visit(ctx.valor());
    return `{ clave: "${clave}", valor: ${valor} }`;
  }

  visitValor(ctx) {
  if (ctx.numero()) return this.visit(ctx.numero());
  if (ctx.cadena()) return this.visit(ctx.cadena());
  if (ctx.BOOLEANO()) return ctx.BOOLEANO().getText() === 'verdadero' ? 'true' : 'false';
  return 'null';
}



  visitNumero(ctx) {
    return ctx.NUMERO().getText();
  }

  visitCadena(ctx) {
    return ctx.CADENA().getText();
  }

  visitBooleano(ctx) {
    return ctx.getText() === 'verdadero' ? 'true' : 'false';
  }
}
