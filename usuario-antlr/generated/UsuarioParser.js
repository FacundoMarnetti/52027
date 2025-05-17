// Generated from c:/Users/HP/52027/usuario-antlr/Usuario.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import UsuarioListener from './UsuarioListener.js';
import UsuarioVisitor from './UsuarioVisitor.js';

const serializedATN = [4,1,10,45,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,4,0,14,8,0,11,0,12,0,15,1,0,1,0,1,1,1,1,1,1,1,1,5,1,24,8,1,10,
1,12,1,27,9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,3,3,39,8,3,1,4,1,4,
1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,0,42,0,13,1,0,0,0,2,19,1,0,0,0,4,30,1,0,
0,0,6,38,1,0,0,0,8,40,1,0,0,0,10,42,1,0,0,0,12,14,3,2,1,0,13,12,1,0,0,0,
14,15,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,17,1,0,0,0,17,18,5,0,0,1,18,
1,1,0,0,0,19,20,5,1,0,0,20,21,5,7,0,0,21,25,5,4,0,0,22,24,3,4,2,0,23,22,
1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,28,1,0,0,0,27,25,1,
0,0,0,28,29,5,5,0,0,29,3,1,0,0,0,30,31,5,7,0,0,31,32,5,2,0,0,32,33,3,6,3,
0,33,34,5,3,0,0,34,5,1,0,0,0,35,39,3,8,4,0,36,39,3,10,5,0,37,39,5,6,0,0,
38,35,1,0,0,0,38,36,1,0,0,0,38,37,1,0,0,0,39,7,1,0,0,0,40,41,5,8,0,0,41,
9,1,0,0,0,42,43,5,9,0,0,43,11,1,0,0,0,3,15,25,38];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class UsuarioParser extends antlr4.Parser {

    static grammarFileName = "Usuario.g4";
    static literalNames = [ null, "'usuario'", "'='", "';'", "'{'", "'}'" ];
    static symbolicNames = [ null, "USUARIO", "IGUAL", "PUNTOYCOMA", "LLAVE_ABIERTA", 
                             "LLAVE_CERRADA", "BOOLEANO", "ID", "NUMERO", 
                             "CADENA", "WS" ];
    static ruleNames = [ "programa", "usuario", "atributo", "valor", "numero", 
                         "cadena" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = UsuarioParser.ruleNames;
        this.literalNames = UsuarioParser.literalNames;
        this.symbolicNames = UsuarioParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, UsuarioParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 12;
	            this.usuario();
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 17;
	        this.match(UsuarioParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	usuario() {
	    let localctx = new UsuarioContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, UsuarioParser.RULE_usuario);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.match(UsuarioParser.USUARIO);
	        this.state = 20;
	        this.match(UsuarioParser.ID);
	        this.state = 21;
	        this.match(UsuarioParser.LLAVE_ABIERTA);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 22;
	            this.atributo();
	            this.state = 27;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 28;
	        this.match(UsuarioParser.LLAVE_CERRADA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atributo() {
	    let localctx = new AtributoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, UsuarioParser.RULE_atributo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(UsuarioParser.ID);
	        this.state = 31;
	        this.match(UsuarioParser.IGUAL);
	        this.state = 32;
	        this.valor();
	        this.state = 33;
	        this.match(UsuarioParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, UsuarioParser.RULE_valor);
	    try {
	        this.state = 38;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35;
	            this.numero();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 36;
	            this.cadena();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 37;
	            this.match(UsuarioParser.BOOLEANO);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, UsuarioParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(UsuarioParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, UsuarioParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(UsuarioParser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

UsuarioParser.EOF = antlr4.Token.EOF;
UsuarioParser.USUARIO = 1;
UsuarioParser.IGUAL = 2;
UsuarioParser.PUNTOYCOMA = 3;
UsuarioParser.LLAVE_ABIERTA = 4;
UsuarioParser.LLAVE_CERRADA = 5;
UsuarioParser.BOOLEANO = 6;
UsuarioParser.ID = 7;
UsuarioParser.NUMERO = 8;
UsuarioParser.CADENA = 9;
UsuarioParser.WS = 10;

UsuarioParser.RULE_programa = 0;
UsuarioParser.RULE_usuario = 1;
UsuarioParser.RULE_atributo = 2;
UsuarioParser.RULE_valor = 3;
UsuarioParser.RULE_numero = 4;
UsuarioParser.RULE_cadena = 5;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UsuarioParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(UsuarioParser.EOF, 0);
	};

	usuario = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UsuarioContext);
	    } else {
	        return this.getTypedRuleContext(UsuarioContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof UsuarioListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UsuarioListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof UsuarioVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UsuarioContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UsuarioParser.RULE_usuario;
    }

	USUARIO() {
	    return this.getToken(UsuarioParser.USUARIO, 0);
	};

	ID() {
	    return this.getToken(UsuarioParser.ID, 0);
	};

	LLAVE_ABIERTA() {
	    return this.getToken(UsuarioParser.LLAVE_ABIERTA, 0);
	};

	LLAVE_CERRADA() {
	    return this.getToken(UsuarioParser.LLAVE_CERRADA, 0);
	};

	atributo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtributoContext);
	    } else {
	        return this.getTypedRuleContext(AtributoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof UsuarioListener ) {
	        listener.enterUsuario(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UsuarioListener ) {
	        listener.exitUsuario(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof UsuarioVisitor ) {
	        return visitor.visitUsuario(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AtributoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UsuarioParser.RULE_atributo;
    }

	ID() {
	    return this.getToken(UsuarioParser.ID, 0);
	};

	IGUAL() {
	    return this.getToken(UsuarioParser.IGUAL, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(UsuarioParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UsuarioListener ) {
	        listener.enterAtributo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UsuarioListener ) {
	        listener.exitAtributo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof UsuarioVisitor ) {
	        return visitor.visitAtributo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UsuarioParser.RULE_valor;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	BOOLEANO() {
	    return this.getToken(UsuarioParser.BOOLEANO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UsuarioListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UsuarioListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof UsuarioVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UsuarioParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(UsuarioParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UsuarioListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UsuarioListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof UsuarioVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UsuarioParser.RULE_cadena;
    }

	CADENA() {
	    return this.getToken(UsuarioParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UsuarioListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UsuarioListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof UsuarioVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




UsuarioParser.ProgramaContext = ProgramaContext; 
UsuarioParser.UsuarioContext = UsuarioContext; 
UsuarioParser.AtributoContext = AtributoContext; 
UsuarioParser.ValorContext = ValorContext; 
UsuarioParser.NumeroContext = NumeroContext; 
UsuarioParser.CadenaContext = CadenaContext; 
