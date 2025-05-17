# Proyecto ANTLR: Analizador para Usuarios

## Descripción

Este proyecto implementa un analizador léxico y sintáctico para un lenguaje simple de definición de usuarios usando ANTLR4 y JavaScript.

Permite analizar archivos que definen usuarios con atributos, validar su sintaxis y generar código JavaScript como salida, mediante el uso de un Visitor personalizado.

---

## Estructura del proyecto

- `usuario-antlr/` : Contiene todo el código fuente del analizador, la gramática, los archivos generados por ANTLR y la configuración de ejecución.
- `README.md` : Instrucciones de uso del proyecto.
- `Reglas.pdf` : Documento con las pautas y reglas de la tarea.
- `Input_correcto_1.txt` y `Input_correcto_2.txt` : Entradas válidas que deben procesarse correctamente.
- `Input_incorrecto_1.txt` y `Input_incorrecto_2.txt` : Entradas que deben ser rechazadas por el analizador.

---

## Requisitos

- Node.js (v16 o superior)
- Java (solo si se desea modificar la gramática y regenerar los archivos con ANTLR)

---

## Instalación

1. Clona este repertorio: git clone https://github.com/FacundoMarnetti/52027.git
2. Abrir una terminal: cd 52027/usuario-antlr
3. Ejecutar: code .
4. Se abrirá el proyecto en visual studio

# USO

1. Colocar la entrada a analizar en usuario-antlr/input.txt.
2. Abrir una terminal dentro de la carpeta usuario-antlr/.
3. Ejecutar el programa con: npm start

- El programa mostrará:
 - Tabla de tokens generados.
 - Árbol sintáctico en texto.
 - Código JavaScript generado usando Visitor.


# Visualización del árbol (Parse Tree)

Para visualizar gráficamente el árbol de análisis sintáctico:

1. Abrir Usuario.g4 en Visual Studio Code.
2. Asegurarse de tener instalado el plugin ANTLR4 grammar syntax support.
3. Ejecutar el Debug configurado en .vscode/launch.json.
4. El árbol se mostrará visualmente a la derecha o en una nueva pestaña.

