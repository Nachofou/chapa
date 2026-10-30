# ARQ PLANO 27 — sitio base

Sitio estático (HTML + Tailwind compilado + JS propio). Reproduce los colores, las tipografías, la grilla, el menú, las transiciones y las animaciones de referencia. Los textos y las imágenes son de ejemplo y hay que reemplazarlos.

## Páginas

| Archivo | Página |
| --- | --- |
| `index.html` | Inicio |
| `estudio.html` | Estudio (servicios, premios, publicaciones, bio) |
| `proyectos.html` | Listado de proyectos |
| `proyecto-*.html` | Fichas de proyecto (4) |

## Qué editar

- **Datos de contacto del menú y de las fichas desplegables**: objeto `ESTUDIO` al principio de `js/main.js`. Los textos fijos del pie y de la cabecera de cada página están en el HTML.
- **Imágenes**: todas están en `img/` como placeholders SVG que indican la proporción (5:7, 7:5, 3:2…). Reemplazá cada `src` por la foto real y respetá la proporción indicada. Los croquis (`croquis-*.svg`, `planta-1.svg`) se ven mejor como dibujos de línea sobre fondo transparente o blanco, porque usan `mix-blend-multiply`.
- **Colores**: `tailwind.config.js` → `theme.extend.colors` (`ashGrey`, `amber`, `airBlue`, `fernGreen`, `brick`, `brown`).
- **Tipografías**: variables `--fuente-display` y `--fuente-texto` en `src/estilos.css` y el `<link>` de Google Fonts en cada HTML. Ahora se usan Jost (titulares) e Inter Tight (texto), alternativas libres a las fuentes de referencia (The Future y Neue Haas Unica), que son comerciales y no se incluyen.
- **Cursor sobre imágenes**: clase `.cursor-marca` en `src/estilos.css` (hoy muestra un 📐).

## Compilar el CSS

Después de cambiar clases en el HTML/JS o en `src/estilos.css`:

```bash
npm install
npm run build   # o npm run dev para recompilar al guardar
```

## Ver el sitio localmente

```bash
python3 -m http.server 8000
```

y abrir <http://localhost:8000/index.html>.

## Animaciones

- Fundido de entrada y salida entre páginas.
- Menú: panel que escala desde la esquina superior derecha (300 ms) con 4 composiciones de bloques de color que se alternan al azar en cada apertura; "Contacto" se despliega con los datos.
- Nombres de la cabecera fijos al hacer scroll (GSAP ScrollTrigger, desde cdnjs).
- Imágenes que aparecen con fundido al entrar en pantalla.
- Croquis que cambian con fundido al pasar por la lista de proyectos.
- Cuadro de color en el pie que se expande a ficha de contacto; las palabras del pie aparecen al llegar al final.
- Clic en teléfono o email: se copia al portapapeles.
