/* ARQ PLANO 27 — interacciones del sitio
 * Menú con composiciones de color, transición entre páginas, textos fijos
 * al hacer scroll (GSAP ScrollTrigger), aparición de imágenes, slider de
 * croquis y fichas de contacto desplegables.
 */

/* ---------- Datos de contacto (editar acá) ---------- */
const ESTUDIO = {
  nombre: 'ARQ PLANO 27',
  lugar: 'Buenos Aires + Rosario',
  firma: 'Estudio de arquitectura<br>dirigido por<br><i>Macarena Echazu</i>',
  telefono: '+54 9 11 0000 0000',
  email: 'hola@arq.plano27.com',
  instagram: '@arq.plano27',
  instagramUrl: 'https://www.instagram.com/arq.plano27/',
  anio: '2026',
};

const H1 = 'font-display text-h1 2xl:text-h1-large';

/* ---------- Copiar al portapapeles ---------- */
function avisar(evento, texto) {
  const aviso = document.createElement('div');
  aviso.className = 'aviso-copiado text-p1';
  aviso.textContent = texto;
  aviso.style.top = `${evento.clientY}px`;
  aviso.style.left = `${evento.clientX + 10}px`;
  document.body.appendChild(aviso);
  requestAnimationFrame(() => { aviso.style.opacity = '1'; });
  setTimeout(() => {
    aviso.style.opacity = '0';
    aviso.addEventListener('transitionend', () => aviso.remove(), { once: true });
  }, 1500);
}

function copiar(evento) {
  evento.stopPropagation();
  const texto = evento.currentTarget.textContent.trim();
  const listo = () => avisar(evento, '¡Copiado!');
  if (navigator.clipboard) {
    navigator.clipboard.writeText(texto).then(listo).catch(() => {});
  } else {
    const campo = document.createElement('textarea');
    campo.value = texto;
    document.body.appendChild(campo);
    campo.select();
    try { document.execCommand('copy'); listo(); } catch (e) { /* sin portapapeles */ }
    campo.remove();
  }
}

/* ---------- Bloques de contacto reutilizables ---------- */
function fichaContacto(columnas = 'grid-cols-6') {
  return `
    <div class="text-p1 grid ${columnas} gap-x-[10px] md:gap-x-15">
      <p class="col-span-3">${ESTUDIO.lugar}</p>
      <p class="col-span-3 mb-[26vh] md:mb-[226px]">${ESTUDIO.firma}</p>
      <p class="col-start-3">T</p>
      <p class="col-span-3 cursor-pointer" data-copiar>${ESTUDIO.telefono}</p>
      <p class="col-start-3">E</p>
      <p class="col-span-3 cursor-pointer" data-copiar>${ESTUDIO.email}</p>
      <p class="col-start-4 mt-5">Instagram <br> <a target="_blank" rel="noopener" href="${ESTUDIO.instagramUrl}">${ESTUDIO.instagram}</a></p>
      <p class="absolute bottom-0 left-0 p-15">Copyright © ${ESTUDIO.anio} <br> ${ESTUDIO.nombre}</p>
    </div>`;
}

function datosMenu() {
  return `
    <div class="col-start-3 col-span-4 grid grid-cols-4 gap-x-15 mt-auto mb-[25%] h-auto">
      <div><p>T</p><p>E</p></div>
      <div class="col-span-3">
        <p class="cursor-pointer" data-copiar>${ESTUDIO.telefono}</p>
        <p class="cursor-pointer" data-copiar>${ESTUDIO.email}</p>
      </div>
      <div class="col-start-2 col-span-3 mt-3">
        <p>Instagram</p>
        <p><a target="_blank" rel="noopener" href="${ESTUDIO.instagramUrl}">${ESTUDIO.instagram}</a></p>
      </div>
    </div>`;
}

const COPYRIGHT = `Copyright © ${ESTUDIO.anio} <br> ${ESTUDIO.nombre}`;
const BOTON_CERRAR = '<button type="button" data-cerrar-contacto class="absolute top-1/2 right-15 font-semibold text-p1">Cerrar [X]</button>';

/* ---------- Composiciones del menú ----------
 * Cada apertura muestra la siguiente composición; el orden se mezcla al azar
 * cada vez que se completa la vuelta.
 */
const MENUS = [
  // 1 — cuadro ámbar vertical en el centro de "Estudio"
  () => `
    <div class="grid grid-cols-8 md:grid-cols-22 gap-x-[10px] md:gap-x-15" data-composicion="1">
      <a href="proyectos.html" class="bg-ashGrey aspect-square md:aspect-auto group md:h-[38vh] w-[50vw] md:w-[38vh] flex z-[2] transition-all duration-500 relative">
        <p class="${H1} absolute bottom-0 right-0 p-[10px] md:p-15 group-hover:md:italic">Proyectos</p>
      </a>
      <a href="estudio.html" class="bg-brown transition-all duration-500 group w-full md:w-[50vw] absolute top-1/2 md:top-0 md:left-[50vw] h-[50vh] md:h-screen flex z-[2]">
        <p class="${H1} p-[10px] absolute top-0 right-0 md:left-0 md:p-15 group-hover:md:italic">Estudio</p>
        <div data-contacto data-abierto-clase="w-[404px] menu-1-movil" data-cerrado-clase="md:hover:scale-105 w-[119px] md:w-[270px]"
          class="bg-amber cursor-pointer absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 aspect-[7/10] md:hover:scale-105 w-[119px] md:w-[270px] m-auto flex origin-center transition-all duration-500 z-[2]">
          <p data-contacto-titulo class="${H1} p-[10px] md:p-15 vertical-text absolute bottom-0 transition-opacity duration-500">Contacto</p>
          <div data-contacto-contenido class="grid grid-cols-6 gap-x-15 p-15 text-p1 w-full duration-500 delay-500 opacity-0"></div>
        </div>
      </a>
      <a href="index.html" class="bg-brick absolute top-0 left-0 h-[50vh] md:h-screen w-full group md:w-[50vw] flex">
        <p class="${H1} p-[10px] md:p-15 mt-auto transition duration-500 group-hover:md:italic">Inicio</p>
      </a>
    </div>`,
  // 2 — cuadro ladrillo en la esquina de "Inicio"
  () => `
    <div class="grid grid-cols-8 md:grid-cols-22 gap-x-[10px] md:gap-x-15 relative h-screen w-[100vw] bg-airBlue" data-composicion="2">
      <a href="proyectos.html" class="bg-ashGrey h-[50vh] relative w-[50vw] md:w-[38vw] group flex z-[2]">
        <p class="${H1} md:absolute bottom-0 ml-auto right-0 p-[10px] md:p-15 group-hover:md:italic">Proyectos</p>
      </a>
      <a href="estudio.html" class="bg-airBlue w-[25vw] absolute right-0 h-screen flex group z-[2]">
        <p class="${H1} p-[10px] grid grid-cols-2 text-right md:text-left md:p-15 md:mt-0 group-hover:md:italic vertical-text">Estudio</p>
      </a>
      <a href="index.html" class="bg-brown absolute top-0 left-0 h-screen flex transition-all duration-500 group w-[75vw]">
        <p class="${H1} p-[10px] md:p-15 mt-[50vh] md:mt-auto transition-opacity duration-500 group-hover:md:italic">Inicio</p>
        <div data-contacto data-abierto-clase="md:w-[404px] menu-2-movil" data-cerrado-clase="md:hover:scale-[1.03] w-[180px] md:w-[270px]"
          class="bg-brick aspect-square cursor-pointer absolute bottom-0 right-0 transition-all group duration-500 md:hover:scale-[1.03] w-[180px] md:w-[270px] origin-center md:origin-bottom-right">
          <p data-contacto-titulo class="${H1} absolute top-0 left-0 p-[10px] md:p-15 transition-opacity duration-500">Contacto</p>
          <div data-contacto-contenido class="grid grid-cols-2 gap-x-15 p-15 text-p1 duration-500 delay-500 opacity-0"></div>
        </div>
      </a>
    </div>`,
  // 3 — franja ámbar que crece desde abajo
  () => `
    <div class="grid grid-cols-8 md:grid-cols-22 gap-x-[10px] md:gap-x-15 relative h-screen w-[100vw] bg-airBlue overflow-hidden" data-composicion="3">
      <div class="col-span-8 md:col-span-22 flex">
        <a href="proyectos.html" class="bg-ashGrey w-[75vw] h-[50vh] group flex z-20 duration-500 shrink-0">
          <p class="${H1} md:mt-auto ml-auto p-[10px] md:p-15 group-hover:md:italic">Proyectos</p>
        </a>
        <a href="estudio.html" class="bg-fernGreen w-[27vw] h-[50vh] group flex duration-500 md:h-[52vh] shrink-0">
          <p class="${H1} p-[10px] md:p-15 mt-auto md:mt-0 group-hover:md:italic vertical-text">Estudio</p>
        </a>
      </div>
      <a href="index.html" class="bg-airBlue absolute bottom-0 left-0 w-full flex group z-[2] h-[50vh]">
        <p class="${H1} absolute transition group-hover:md:italic p-[10px] md:p-15 duration-500">Inicio</p>
      </a>
      <div data-contacto data-abierto-clase="h-[50vh] w-full md:w-[55vw]" data-cerrado-clase="w-[75vw] md:w-[55vw] h-[12vh] md:hover:h-[14vh]"
        class="bg-amber cursor-pointer group w-[75vw] md:w-[55vw] h-[12vh] md:hover:h-[14vh] absolute bottom-0 right-0 transition-all duration-500 z-[3]">
        <p data-contacto-titulo class="${H1} absolute top-0 left-0 p-[10px] md:p-15 group-hover:italic">Contacto</p>
        <div data-contacto-contenido class="grid grid-cols-12 gap-x-15 p-15 text-p1 relative h-full opacity-0"></div>
      </div>
    </div>`,
  // 4 — franja ladrillo inferior a todo el ancho
  () => `
    <div class="bg-fernGreen grid grid-cols-8 md:grid-cols-22 gap-x-[10px] md:gap-x-15 relative h-screen w-[100vw]" data-composicion="4">
      <a href="estudio.html" class="bg-airBlue w-[50vw] md:w-[32.5vw] group absolute right-0 h-[80vh] flex z-[2]">
        <p class="${H1} p-[10px] md:p-15 vertical-text transition duration-500 group-hover:md:italic">Estudio</p>
      </a>
      <a href="proyectos.html" data-proyectos-4 class="group right-0 bottom-[20vh] md:right-[7.5vw] bg-ashGrey w-[50vw] md:w-[25vw] aspect-[108/100] absolute z-[2] flex transition-all duration-500">
        <p class="${H1} absolute top-0 right-0 p-[10px] md:p-15 group-hover:md:italic">Proyectos</p>
      </a>
      <a href="index.html" class="bg-fernGreen absolute top-0 group left-0 h-[80vh] transition-all duration-500 w-[50vw] md:w-[67.5vw] flex">
        <p class="${H1} p-[10px] md:p-15 transition duration-500 group-hover:md:italic">Inicio</p>
      </a>
      <div data-contacto data-abierto-clase="h-[50vh] md:h-[40vh]" data-cerrado-clase="h-[20vh] hover:h-[22vh]"
        class="bg-brick cursor-pointer w-full h-[20vh] hover:h-[22vh] group transition-all md:duration-500 absolute bottom-0 right-0 flex z-[2]">
        <p data-contacto-titulo class="${H1} p-[10px] md:p-15 md:absolute bottom-0 left-0 transition-opacity duration-500 group-hover:italic">Contacto</p>
        <div data-contacto-contenido class="grid grid-cols-8 md:grid-cols-22 gap-x-[10px] md:gap-x-15 p-15 text-p1 w-full duration-500 delay-500 opacity-0"></div>
      </div>
    </div>`,
];

/* Contenido que aparece al desplegar "Contacto" dentro de cada composición */
const CONTENIDO_CONTACTO = {
  1: () => `${BOTON_CERRAR}
      <p class="col-span-3">${ESTUDIO.lugar}</p>
      <p class="col-span-3">${ESTUDIO.firma}</p>
      ${datosMenu()}
      <p class="absolute bottom-0 left-0 p-15">${COPYRIGHT}</p>`,
  2: () => `${BOTON_CERRAR}
      <p>${ESTUDIO.lugar}</p>
      <p>${ESTUDIO.firma}</p>
      <div class="absolute left-[39%] bottom-[16.5%] grid grid-cols-4 gap-x-15 h-auto">
        <div><p>T</p><p>E</p></div>
        <div class="col-span-3">
          <p class="cursor-pointer" data-copiar>${ESTUDIO.telefono}</p>
          <p class="cursor-pointer" data-copiar>${ESTUDIO.email}</p>
        </div>
        <div class="col-start-2 col-span-3 mt-3">
          <p>Instagram</p>
          <p><a target="_blank" rel="noopener" href="${ESTUDIO.instagramUrl}">${ESTUDIO.instagram}</a></p>
        </div>
      </div>
      <p class="absolute bottom-0 left-0 p-15">${COPYRIGHT}</p>`,
  3: () => `${BOTON_CERRAR}
      <p class="col-span-6 md:col-span-3 pt-[46px] md:pt-[54px]">${ESTUDIO.lugar}</p>
      <p class="col-span-6 md:col-span-3 pt-[46px] md:pt-[54px]">${ESTUDIO.firma}</p>
      <div class="col-span-12 md:col-start-7 md:col-span-6 grid grid-cols-6 gap-x-15 mt-auto self-end pb-[40px]">
        <div><p>T</p><p>E</p></div>
        <div class="col-span-5">
          <p class="cursor-pointer" data-copiar>${ESTUDIO.telefono}</p>
          <p class="cursor-pointer" data-copiar>${ESTUDIO.email}</p>
          <p class="mt-3">Instagram</p>
          <p><a target="_blank" rel="noopener" href="${ESTUDIO.instagramUrl}">${ESTUDIO.instagram}</a></p>
        </div>
      </div>
      <p class="absolute bottom-0 left-0 p-15">${COPYRIGHT}</p>`,
  4: () => `${BOTON_CERRAR}
      <p class="col-span-4">${ESTUDIO.lugar}</p>
      <p class="col-span-4">${ESTUDIO.firma}</p>
      <div class="col-span-8 md:col-start-9 md:col-span-6 grid grid-cols-4 gap-x-15 mt-15 md:mt-0">
        <div><p>T</p><p>E</p></div>
        <div class="col-span-3">
          <p class="cursor-pointer" data-copiar>${ESTUDIO.telefono}</p>
          <p class="cursor-pointer" data-copiar>${ESTUDIO.email}</p>
        </div>
        <div class="col-start-2 col-span-3 mt-3">
          <p>Instagram</p>
          <p><a target="_blank" rel="noopener" href="${ESTUDIO.instagramUrl}">${ESTUDIO.instagram}</a></p>
        </div>
      </div>
      <p class="absolute bottom-0 hidden md:block md:right-[34%] pb-[10px] md:p-15">${COPYRIGHT}</p>`,
};

function mezclar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function cambiarClases(el, quitar, poner) {
  quitar.split(/\s+/).filter(Boolean).forEach((c) => el.classList.remove(c));
  poner.split(/\s+/).filter(Boolean).forEach((c) => el.classList.add(c));
}

function iniciarMenu() {
  const boton = document.querySelector('[data-boton-menu]');
  const panel = document.querySelector('[data-panel-menu]');
  if (!boton || !panel) return;

  const colorBase = boton.dataset.color || 'bg-airBlue';
  let orden = mezclar(MENUS.map((_, i) => i));
  let indice = 0;
  let abierto = false;

  function pintar() {
    panel.innerHTML = MENUS[orden[indice]]();
    const composicion = panel.firstElementChild;
    const numero = composicion.dataset.composicion;
    const contacto = composicion.querySelector('[data-contacto]');
    const titulo = contacto.querySelector('[data-contacto-titulo]');
    const contenido = contacto.querySelector('[data-contacto-contenido]');
    let desplegado = false;

    function cerrar(e) {
      if (e) { e.stopPropagation(); e.preventDefault(); }
      desplegado = false;
      cambiarClases(contacto, contacto.dataset.abiertoClase, contacto.dataset.cerradoClase);
      titulo.classList.remove('opacity-0');
      contenido.classList.add('opacity-0');
      contenido.innerHTML = '';
      const proyectos = composicion.querySelector('[data-proyectos-4]');
      if (proyectos) proyectos.classList.remove('md:bottom-[40vh]');
    }

    contacto.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (desplegado) return;
      desplegado = true;
      cambiarClases(contacto, contacto.dataset.cerradoClase, contacto.dataset.abiertoClase);
      titulo.classList.add('opacity-0');
      contenido.innerHTML = CONTENIDO_CONTACTO[numero]();
      requestAnimationFrame(() => contenido.classList.remove('opacity-0'));
      contenido.querySelector('[data-cerrar-contacto]').addEventListener('click', cerrar);
      contenido.querySelectorAll('[data-copiar]').forEach((el) => el.addEventListener('click', copiar));
      contenido.querySelectorAll('a').forEach((el) => el.addEventListener('click', (ev) => ev.stopPropagation()));
      const proyectos = composicion.querySelector('[data-proyectos-4]');
      if (proyectos) proyectos.classList.add('md:bottom-[40vh]');
    });
    composicion.addEventListener('click', (e) => { if (desplegado) cerrar(e); });
  }

  boton.addEventListener('click', () => {
    abierto = !abierto;
    if (abierto) {
      indice = (indice + 1) % MENUS.length;
      if (indice === 0) orden = mezclar(orden);
      pintar();
    }
    panel.classList.toggle('scale-0', !abierto);
    panel.classList.toggle('scale-100', abierto);
    boton.classList.toggle(colorBase, !abierto);
    boton.classList.toggle('bg-white', abierto);
    boton.textContent = abierto ? 'Cerrar' : 'Menú';
    boton.setAttribute('aria-expanded', String(abierto));
  });
  pintar();
}

/* ---------- Transición entre páginas ---------- */
function iniciarTransiciones() {
  const pagina = document.querySelector('.pagina');
  if (!pagina) return;
  requestAnimationFrame(() => pagina.classList.add('visible'));
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) pagina.classList.remove('saliendo');
  });
  document.addEventListener('click', (e) => {
    const enlace = e.target.closest('a[href]');
    if (!enlace || e.defaultPrevented || enlace.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const destino = enlace.getAttribute('href');
    if (!destino || destino.startsWith('#') || /^(https?:|mailto:|tel:)/.test(destino)) return;
    e.preventDefault();
    pagina.classList.add('saliendo');
    setTimeout(() => { window.location.href = destino; }, 400);
  });
}

/* ---------- Aparición de imágenes al hacer scroll ---------- */
function iniciarApariciones() {
  const elementos = document.querySelectorAll('.animado');
  if (!('IntersectionObserver' in window)) {
    elementos.forEach((el) => el.classList.add('en-vista'));
    return;
  }
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      entrada.target.classList.toggle('en-vista', entrada.isIntersecting);
    });
  }, { rootMargin: '-150px 0px -150px 0px' });
  elementos.forEach((el) => observador.observe(el));
}

/* ---------- Slider de croquis (fundido) ---------- */
function iniciarCroquis() {
  document.querySelectorAll('[data-croquis]').forEach((bloque) => {
    const items = bloque.querySelectorAll('[data-croquis-item]');
    const slides = bloque.querySelectorAll('.croquis-slide');
    const activar = (n) => {
      items.forEach((it, i) => it.classList.toggle('font-bold', i === n));
      slides.forEach((sl, i) => sl.classList.toggle('activo', i === n));
    };
    items.forEach((it, i) => {
      it.addEventListener('mouseover', () => activar(i));
      it.addEventListener('click', (e) => {
        if (it.tagName !== 'A') { e.preventDefault(); activar(i); }
      });
    });
    activar(0);
  });
}

/* ---------- Cuadro del pie que se despliega en ficha de contacto ---------- */
function iniciarPie() {
  document.querySelectorAll('[data-pie]').forEach((pie) => {
    const cuadros = pie.querySelectorAll('[data-cuadro]');
    const nombre = pie.querySelector('[data-siguiente-texto]');
    let abierto = false;

    function abrir() {
      abierto = true;
      cuadros.forEach((cuadro) => {
        cambiarClases(cuadro, cuadro.dataset.cerradoClase || '', cuadro.dataset.abiertoClase || '');
        cuadro.classList.add('expandido');
        const contenido = cuadro.querySelector('[data-cuadro-contenido]');
        contenido.innerHTML = fichaContacto() + '<button type="button" data-cerrar-contacto class="absolute top-1/2 right-15 font-semibold text-p1">Cerrar [X]</button>';
        contenido.querySelectorAll('[data-copiar]').forEach((el) => el.addEventListener('click', copiar));
        contenido.querySelectorAll('a').forEach((el) => el.addEventListener('click', (ev) => ev.stopPropagation()));
        requestAnimationFrame(() => contenido.classList.remove('opacity-0'));
      });
    }
    function cerrar() {
      abierto = false;
      cuadros.forEach((cuadro) => {
        cambiarClases(cuadro, cuadro.dataset.abiertoClase || '', cuadro.dataset.cerradoClase || '');
        cuadro.classList.remove('expandido');
        const contenido = cuadro.querySelector('[data-cuadro-contenido]');
        contenido.classList.add('opacity-0');
        contenido.innerHTML = '';
      });
    }
    cuadros.forEach((cuadro) => cuadro.addEventListener('click', (e) => {
      if (abierto) return;
      e.stopPropagation();
      abrir();
    }));
    pie.querySelectorAll('[data-abrir-contacto]').forEach((el) => el.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!abierto) abrir();
    }));
    pie.addEventListener('click', (e) => {
      if (abierto && !e.target.closest('[data-copiar], a')) cerrar();
    });
    if (nombre) {
      const zona = pie.querySelector('[data-siguiente]');
      zona.addEventListener('mouseenter', () => pie.querySelectorAll('[data-siguiente-texto]').forEach((t) => t.classList.add('md:italic')));
      zona.addEventListener('mouseleave', () => pie.querySelectorAll('[data-siguiente-texto]').forEach((t) => t.classList.remove('md:italic')));
    }
  });
  document.querySelectorAll('[data-copiar]').forEach((el) => el.addEventListener('click', copiar));
}

/* ---------- Textos fijos al hacer scroll (ScrollTrigger) ---------- */
function fijar(trigger, start, endTrigger, end) {
  const el = document.querySelector(trigger);
  if (!el) return;
  ScrollTrigger.create({
    trigger: el, start, endTrigger, end,
    pin: true, pinSpacing: false, toggleActions: 'play none none reset',
  });
}

function aparecerEnPie(selectores, disparador) {
  if (!document.querySelector(disparador)) return;
  gsap.fromTo(selectores, { opacity: 0 }, {
    scrollTrigger: { trigger: disparador, start: 'top top+=100px', end: 'bottom top', toggleActions: 'play none none reverse' },
    duration: 0.75, opacity: 1, ease: 'none',
  });
}

const ESCENAS = {
  inicio() {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1536px)', () => {
      fijar('.arquitectura', 'top top', '.cabecera', 'bottom 365px');
      fijar('.parte-1', 'bottom bottom', '.cabecera', 'bottom bottom');
    });
    mm.add('(max-width: 1535px)', () => {
      fijar('.parte-1', 'bottom bottom', '.cabecera', 'bottom bottom');
      fijar('.arquitectura', 'top top', '.cabecera', 'bottom 300px');
    });
    aparecerEnPie('.marca-pie, .mas-pie, .arquitectura-pie, .interiores-pie', '.seccion-pie');
  },
  estudio() {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      fijar('.marca', 'top top+=calc(50vh - 50px)', '.fondo', 'bottom 52%');
      fijar('.arquitectura', 'top top', '.fondo', 'bottom 315px');
      fijar('.mas', 'bottom bottom', '.fondo', 'bottom bottom');
      fijar('.interiores', 'bottom bottom', '.fondo', 'bottom bottom');
    });
    mm.add('(max-width: 767px)', () => {
      fijar('.arquitectura', 'top top', '.fondo', 'bottom 50%-=110px');
      fijar('.marca', 'top top-=calc(30vh - 50px)', '.fondo', 'bottom 50%');
      fijar('.mas-movil', 'bottom bottom', '.fondo', 'bottom bottom');
      fijar('.interiores-movil', 'bottom bottom', '.fondo', 'bottom bottom');
    });
    aparecerEnPie('.marca-pie, .mas-pie, .arquitectura-pie, .interiores-pie', '.seccion-pie');
  },
  proyectos() {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      fijar('.arquitectura-escritorio', 'top 15px', '.imagenes', 'top 300px');
      fijar('.mas-escritorio', 'top 15px', '.imagenes', 'top 300px');
    });
    mm.add('(max-width: 767px)', () => {
      fijar('.interiores', 'top top+=30px', '.arquitectura-movil', 'top 250px');
      fijar('.marca', 'top top+=calc(50vh - 50px)', '.imagenes', 'top 50%+=5px');
    });
    aparecerEnPie('.marca-pie, .mas-pie, .arquitectura-pie, .interiores-pie', '.seccion-pie');
  },
  proyecto() {
    fijar('.titulo-uno', 'top 50%', '.titulo-dos', 'top 55%');
    aparecerEnPie('.marca-pie, .siguiente-pie, .proyecto-pie', '.seccion-pie');
  },
};

function iniciarEscenas() {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  const escena = ESCENAS[document.body.dataset.pagina];
  if (escena) escena();
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

document.addEventListener('DOMContentLoaded', () => {
  iniciarMenu();
  iniciarTransiciones();
  iniciarApariciones();
  iniciarCroquis();
  iniciarPie();
  iniciarEscenas();
});
