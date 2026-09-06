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
   3. MENSAJES DE WHATSAPP
   ========================================================= */

const messages = {

  general:
    'Hola, GÉNESIS GLOBAL. Me gustaría conocer más sobre sus otros servicios para mi proyecto o negocio.',

  web:
    'Hola, GÉNESIS GLOBAL. Estoy interesado/a en Desarrollo Web. Me gustaría hablar sobre mi proyecto.',

  branding:
    'Hola, GÉNESIS GLOBAL. Estoy interesado/a en Branding e Identidad Visual. Me gustaría hablar sobre mi marca.',

  marketing:
    'Hola, GÉNESIS GLOBAL. Estoy interesado/a en Marketing Digital. Me gustaría conocer cómo pueden ayudar a crecer mi negocio.',

  'private-brand':
    'Hola, GÉNESIS GLOBAL. Estoy interesado/a en crear una Marca Privada. Me gustaría conversar sobre mi idea.',

  ecommerce:
    'Hola, GÉNESIS GLOBAL. Estoy interesado/a en crear una tienda E-commerce. Me gustaría conocer las opciones.',

  content:
    'Hola, GÉNESIS GLOBAL. Estoy interesado/a en Contenido & Multimedia. Me gustaría hablar sobre lo que necesito para mi negocio.',

  ai:
    'Hola, GÉNESIS GLOBAL. Estoy interesado/a en soluciones de IA y Automatización para mi negocio. Me gustaría conocer más.',

  consulting:
    'Hola, GÉNESIS GLOBAL. Estoy interesado/a en Consultoría para Negocios. Me gustaría conversar sobre mi proyecto.'
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
        error
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

    if (!services[type]) {
      console.warn(
        `GÉNESIS GLOBAL: servicio desconocido "${type}".`
      );

      return;
    }

    link.href =
      buildWhatsAppUrl(type);

    link.target = '_blank';

    link.rel =
      'noopener noreferrer';

    link.addEventListener('click', () => {

      void logLead(type);

    });

  });
}


/* =========================================================
   7. NAVEGACIÓN FLUIDA
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

  if (!explore || !servicesSection) {
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

        block: 'start'
      });

    }
  );
}


/* =========================================================
   8. AÑO AUTOMÁTICO DEL FOOTER
   ========================================================= */

function setupCurrentYear() {

  const year =
    document.getElementById('year');

  if (year) {
    year.textContent =
      new Date().getFullYear();
  }
}


/* =========================================================
   9. MOTION
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

    /*
     * Si Motion falla, quitamos el estado de
     * preparación para que ningún elemento
     * quede oculto.
     */

    document.body.classList.remove(
      'motion-ready'
    );
  }
}


/* =========================================================
   10. INICIALIZACIÓN
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
