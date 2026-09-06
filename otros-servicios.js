'use strict';

/* =========================================================
   GÉNESIS GLOBAL — OTROS SERVICIOS
   WhatsApp + Supabase + Motion
   ========================================================= */


/* =========================================================
   1. CONFIGURACIÓN
   ========================================================= */

const WHATSAPP_NUMBER = '18099995904';


/* =========================================================
   2. SERVICIOS
   ========================================================= */

const services = {
  general: [
    'general',
    'Otros servicios'
  ],

  web: [
    'web',
    'Desarrollo Web'
  ],

  branding: [
    'branding',
    'Branding & Diseño'
  ],

  marketing: [
    'marketing',
    'Marketing Digital'
  ],

  'private-brand': [
    'private-brand',
    'Marcas Privadas'
  ],

  ecommerce: [
    'ecommerce',
    'E-commerce'
  ],

  content: [
    'content',
    'Contenido & Multimedia'
  ],

  ai: [
    'ai',
    'IA & Automatización'
  ],

  consulting: [
    'consulting',
    'Consultoría para Negocios'
  ]
};


/* =========================================================
   3. MENSAJES INTELIGENTES DE WHATSAPP
   ========================================================= */

const messages = {

  general:
    'Hola, GÉNESIS GLOBAL 👋 Me gustaría conocer sus otros servicios. Quiero recibir orientación sobre mi proyecto o negocio. ¿Podrían ayudarme?',

  web:
    'Hola, GÉNESIS GLOBAL 👋 Estoy interesado/a en Desarrollo Web. Quiero crear o mejorar un sitio web para mi proyecto. Me gustaría conocer las opciones, el proceso y el presupuesto.',

  branding:
    'Hola, GÉNESIS GLOBAL 👋 Estoy interesado/a en Branding e Identidad Visual. Quiero trabajar la imagen de mi marca y me gustaría conocer el proceso y las opciones disponibles.',

  marketing:
    'Hola, GÉNESIS GLOBAL 👋 Estoy interesado/a en Marketing Digital. Quiero mejorar la presencia y el crecimiento de mi negocio. Me gustaría conocer cómo pueden ayudarme.',

  'private-brand':
    'Hola, GÉNESIS GLOBAL 👋 Estoy interesado/a en crear una Marca Privada. Tengo una idea o proyecto y me gustaría recibir orientación sobre el proceso y las opciones.',

  ecommerce:
    'Hola, GÉNESIS GLOBAL 👋 Estoy interesado/a en crear una tienda E-commerce. Me gustaría conocer las opciones, el proceso y cómo podemos comenzar.',

  content:
    'Hola, GÉNESIS GLOBAL 👋 Estoy interesado/a en Contenido & Multimedia. Necesito apoyo para crear contenido para mi proyecto o negocio. Me gustaría conocer las opciones.',

  ai:
    'Hola, GÉNESIS GLOBAL 👋 Estoy interesado/a en soluciones de IA y Automatización para mi negocio. Me gustaría conocer qué procesos pueden automatizarse y cómo podemos comenzar.',

  consulting:
    'Hola, GÉNESIS GLOBAL 👋 Estoy interesado/a en Consultoría para Negocios. Me gustaría recibir orientación sobre mi proyecto y conocer cómo pueden ayudarme.'
};


/* =========================================================
   4. GENERAR URL DE WHATSAPP
   ========================================================= */

function buildWhatsAppUrl(type) {

  const message =
    messages[type] || messages.general;

  return (
    'https://wa.me/' +
    WHATSAPP_NUMBER +
    '?text=' +
    encodeURIComponent(message)
  );
}


/* =========================================================
   5. REGISTRAR LEAD EN SUPABASE
   ========================================================= */

async function logLead(type) {

  const supabase =
    window.genesisSupabase;

  const service =
    services[type];

  if (!supabase || !service) {
    return;
  }

  const [
    service_key,
    service_name
  ] = service;

  try {

    const { error } = await supabase
      .from('service_leads')
      .insert({
        service_key,
        service_name,
        source: 'otros-servicios',
        page_url: window.location.href
      });

    if (error) {

      console.warn(
        'GÉNESIS GLOBAL: no se pudo registrar el contacto en Supabase.',
        error.message
      );

    }

  } catch (error) {

    console.warn(
      'GÉNESIS GLOBAL: error inesperado al registrar el contacto.',
      error
    );

  }
}


/* =========================================================
   6. CONFIGURAR WHATSAPP
   ========================================================= */

function setupWhatsAppLinks() {

  const links =
    document.querySelectorAll('[data-whatsapp]');

  links.forEach((link) => {

    const type =
      link.dataset.whatsapp;

    /* -----------------------------------------------------
       VALIDAR SERVICIO
       ----------------------------------------------------- */

    if (!services[type]) {

      console.warn(
        `GÉNESIS GLOBAL: servicio desconocido "${type}".`
      );

      return;
    }


    /* -----------------------------------------------------
       EVITAR DUPLICAR EVENTOS
       ----------------------------------------------------- */

    if (
      link.dataset.genesisWhatsappReady === 'true'
    ) {
      return;
    }

    link.dataset.genesisWhatsappReady = 'true';


    /* -----------------------------------------------------
       CONFIGURAR ENLACE
       ----------------------------------------------------- */

    link.href =
      buildWhatsAppUrl(type);

    link.target =
      '_blank';

    link.rel =
      'noopener noreferrer';


    /* -----------------------------------------------------
       REGISTRAR CONTACTO
       ----------------------------------------------------- */

    link.addEventListener(
      'click',
      () => {

        /*
         * WhatsApp se abre inmediatamente.
         * Supabase registra el contacto
         * de forma independiente.
         */

        void logLead(type);

      }
    );

  });
}


/* =========================================================
   7. API INTERNA DE WHATSAPP
   ========================================================= */

window.genesisWhatsApp = {

  buildUrl: buildWhatsAppUrl,

  open: (type) => {

    if (!services[type]) {

      console.warn(
        `GÉNESIS GLOBAL: no se puede abrir WhatsApp para "${type}".`
      );

      return;
    }

    window.open(
      buildWhatsAppUrl(type),
      '_blank',
      'noopener,noreferrer'
    );

    void logLead(type);
  },

  logLead

};


/* =========================================================
   8. NAVEGACIÓN FLUIDA
   ========================================================= */

function setupSmoothNavigation() {

  const explore =
    document.getElementById(
      'explore-services'
    );

  const servicesSection =
    document.getElementById(
      'servicios'
    );

  if (
    !explore ||
    !servicesSection
  ) {
    return;
  }

  explore.addEventListener(
    'click',
    (event) => {

      event.preventDefault();

      const reducedMotion =
        window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;

      servicesSection.scrollIntoView({

        behavior:
          reducedMotion
            ? 'auto'
            : 'smooth',

        block:
          'start'

      });

    }
  );
}


/* =========================================================
   9. AÑO AUTOMÁTICO DEL FOOTER
   ========================================================= */

function setupCurrentYear() {

  const year =
    document.getElementById(
      'year'
    );

  if (year) {

    year.textContent =
      new Date().getFullYear();

  }
}


/* =========================================================
   10. MOTION
   ========================================================= */

async function loadMotion() {

  const reducedMotion =
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

  if (reducedMotion) {

    document.body.classList.remove(
      'motion-ready'
    );

    return;
  }

  try {

    const {
      animate,
      inView
    } = await import(
      'https://cdn.jsdelivr.net/npm/motion@13.1.0/+esm'
    );


    /* -----------------------------------------------------
       HERO
       ----------------------------------------------------- */

    const hero =
      document.querySelector(
        '[data-motion="hero"]'
      );

    if (hero) {

      const heroCopy =
        hero.querySelector(
          '.hero-copy'
        );

      const heroOrbit =
        hero.querySelector(
          '.hero-orbit'
        );


      if (heroCopy) {

        animate(
          heroCopy,

          {
            opacity: [0, 1],
            y: [30, 0]
          },

          {
            duration: 0.7,
            ease: 'easeOut'
          }
        );

      }


      if (heroOrbit) {

        animate(
          heroOrbit,

          {
            opacity: [0, 1],
            scale: [0.92, 1],
            rotate: [-4, 0]
          },

          {
            duration: 1,
            ease: 'easeOut',
            delay: 0.12
          }
        );

      }

    }


    /* -----------------------------------------------------
       SECTION HEADINGS
       ----------------------------------------------------- */

    inView(
      '.section-heading',

      (element) => {

        animate(
          element,

          {
            opacity: [0, 1],
            y: [28, 0]
          },

          {
            duration: 0.65,
            ease: 'easeOut'
          }
        );

      },

      {
        amount: 0.25
      }
    );


    /* -----------------------------------------------------
       SERVICE CARDS
       ----------------------------------------------------- */

    inView(
      '.service-card',

      (element) => {

        const number =
          element.querySelector(
            '.service-number'
          );

        const value =
          Number(
            number?.textContent || 1
          );

        const delay =
          Math.min(
            value * 0.035,
            0.28
          );

        animate(
          element,

          {
            opacity: [0, 1],
            y: [35, 0],
            scale: [0.98, 1]
          },

          {
            duration: 0.55,
            ease: 'easeOut',
            delay
          }
        );

      },

      {
        amount: 0.15
      }
    );


    /* -----------------------------------------------------
       PROCESS
       ----------------------------------------------------- */

    inView(
      '.process-card',

      (element) => {

        animate(
          element,

          {
            opacity: [0, 1],
            y: [30, 0]
          },

          {
            duration: 0.65,
            ease: 'easeOut'
          }
        );

      },

      {
        amount: 0.2
      }
    );


    /* -----------------------------------------------------
       CTA
       ----------------------------------------------------- */

    inView(
      '.cta-card',

      (element) => {

        animate(
          element,

          {
            opacity: [0, 1],
            y: [30, 0]
          },

          {
            duration: 0.65,
            ease: 'easeOut'
          }
        );

      },

      {
        amount: 0.25
      }
    );


    /* -----------------------------------------------------
       SERVICE CARD HOVER
       ----------------------------------------------------- */

    document
      .querySelectorAll('.service-card')
      .forEach((card) => {

        card.addEventListener(
          'mouseenter',
          () => {

            animate(
              card,

              {
                y: -6
              },

              {
                duration: 0.2
              }
            );

          }
        );


        card.addEventListener(
          'mouseleave',
          () => {

            animate(
              card,

              {
                y: 0
              },

              {
                duration: 0.25
              }
            );

          }
        );

      });

  } catch (error) {

    console.warn(
      'Motion no pudo cargarse; se mantiene una experiencia funcional.',
      error
    );

    document.body.classList.remove(
      'motion-ready'
    );

  }
}


/* =========================================================
   11. INICIALIZACIÓN
   ========================================================= */

document.addEventListener(
  'DOMContentLoaded',
  () => {

    document.body.classList.add(
      'motion-ready'
    );

    setupWhatsAppLinks();

    setupSmoothNavigation();

    setupCurrentYear();

    void loadMotion();

  }
);
