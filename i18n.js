/* ============================================================
   GÉNESIS GLOBAL — SISTEMA DE IDIOMAS
   ES = Español
   EN = English
   FR = Français
   PT = Português

   IMPORTANTE:
   - Español es siempre el idioma inicial.
   - NO usamos localStorage.
   - El idioma solo permanece mientras la página está abierta.
   - Al volver a cargar/visitar el sitio, comienza en español.
   ============================================================ */

(function () {
    'use strict';

    const LANGUAGES = {
        es: 'ES',
        en: 'EN',
        fr: 'FR',
        pt: 'PT'
    };

    let currentLanguage = 'es';

    /* ============================================================
       TRADUCCIONES
       ============================================================ */

    const translations = {

        /* =========================
           ESPAÑOL
           ========================= */
        es: {

            nav: {
                home: 'Inicio',
                services: 'Servicios',
                process: 'Cómo funciona',
                about: 'Nosotros',
                faq: 'FAQ',
                other: 'Otros Servicios',
                plan: 'Planificar mi viaje →'
            },

            hero: {
                eyebrow: '✦ Una nueva forma de organizar tu viaje familiar',
                title: 'Los kilómetros no deberían separar a las <span>familias.</span>',
                slogan: '“Donde comienzan nuevas oportunidades.”',
                description: 'Planificamos y coordinamos tu viaje para que puedas concentrarte en lo más importante: <b>volver a estar cerca de quienes amas.</b>',
                plan: 'Planificar mi viaje →',
                process: 'Ver cómo funciona',
                trust1: 'Atención humana',
                trust2: 'Proceso claro',
                trust3: 'Acompañamiento',
                globe: '🌍 <strong>Gira</strong> · <strong>Haz clic</strong> en un país'
            },

            planner: {
                kicker: 'Planifica tu viaje',
                title: 'Cuéntanos <span class="text-gradient">desde dónde y hacia dónde</span>',
                description: 'Completa los datos y nosotros organizamos el resto.',

                originLabel: '🇧🇷 ¿Desde dónde viajas?',
                originPlaceholder: 'Ej: Brasil, Cuba, España...',

                destinationLabel: '🇨🇺 ¿A dónde quieres viajar?',
                destinationPlaceholder: 'Ej: Cuba, Brasil, México...',

                continue: 'Continuar →',

                hint: '💡 También puedes hacer clic en un país del globo para seleccionarlo como destino.',

                dateDeparture: '📅 Fecha aproximada de viaje',
                dateReturn: '📅 Fecha de regreso (opcional)',
                adults: '👥 Número de adultos',
                children: '👶 Número de niños',
                tripType: '❤️ Tipo de viaje',

                familyVisit: 'Visita familiar',
                personal: 'Viaje personal',
                tourism: 'Turismo',
                other: 'Otro',

                back: '← Atrás',

                fullName: '👤 Nombre completo',
                fullNamePlaceholder: 'Tu nombre completo',

                whatsapp: '📱 WhatsApp',
                whatsappPlaceholder: '+54 9 11 1234 5678',

                email: '📧 Correo electrónico',
                emailPlaceholder: 'tucorreo@ejemplo.com',

                residence: '🌍 País donde resides actualmente',
                residencePlaceholder: 'Ej: Brasil, Argentina, España...',

                comments: '💬 Comentarios adicionales',
                commentsPlaceholder: 'Cuéntanos algo más que necesites...',

                summary: 'Ver resumen',
                edit: '← Editar',
                send: 'Enviar solicitud →',

                summaryDate: '📅 Fecha viaje:',
                summaryReturn: '📅 Regreso:',
                summaryTravelers: '👥 Viajeros:',
                summaryReason: '❤️ Motivo:',
                summaryName: '👤 Nombre:',
                summaryWhatsapp: '📱 WhatsApp:',
                summaryEmail: '📧 Email:',
                summaryResidence: '🌍 Residencia:',
                summaryComments: '💬 Comentarios:',
                unspecified: 'No especificada',
                adultsText: 'adultos',
                childrenText: 'niños',
                none: 'Ninguno'
            },

            proof: {
                kicker: 'Nuestro propósito',
                title: 'Conectamos destinos. <span class="text-gradient">Reunimos familias.</span>',
                slogan: '“Donde comienzan nuevas oportunidades.”',
                description: 'Una experiencia digital sencilla, atención cercana y coordinación profesional para ayudarte a organizar tu próximo viaje.'
            },

            services: {
                kicker: 'Servicios',
                title: 'Todo lo esencial, <span class="text-gradient">en un solo lugar.</span>',
                description: 'Empezamos con servicios claros y humanos, diseñados para reducir la incertidumbre y simplificar cada etapa.',

                s1Title: 'Planificación de viajes',
                s1Text: 'Rutas, fechas, conexiones e itinerarios organizados según tu situación.',
                s2Title: 'Viajes familiares',
                s2Text: 'Acompañamiento pensado para quienes quieren volver a encontrarse con los suyos.',
                s3Title: 'Orientación documental',
                s3Text: 'Información clara sobre requisitos aplicables y coordinación con profesionales autorizados.',
                s4Title: 'Alojamiento y transporte',
                s4Text: 'Coordinamos opciones complementarias para que tengas un viaje más sencillo.',

                plan: 'Planificar ahora →'
            },

            process: {
                kicker: 'Experiencia del cliente',
                title: 'Simple desde el primer <span class="text-gradient">mensaje.</span>',
                description: 'Diseñamos el proceso para reducir dudas, pasos innecesarios y fricción.',

                p1Title: 'Cuéntanos tu situación',
                p1Text: 'Completa una solicitud breve y dinos desde dónde viajas, hacia dónde quieres ir y qué necesitas.',

                p2Title: 'Analizamos tus opciones',
                p2Text: 'Nuestro equipo revisa rutas, servicios y requisitos aplicables.',

                p3Title: 'Recibes tu propuesta',
                p3Text: 'Te explicamos opciones, costes y próximos pasos antes de continuar.',

                p4Title: 'Te acompañamos',
                p4Text: 'Coordinamos el proceso contratado y mantenemos la comunicación contigo.'
            },

            about: {
                kicker: 'GÉNESIS GLOBAL',
                title: 'Una marca creada para <span class="text-gradient">acercar personas.</span>',
                description: 'Queremos construir una empresa moderna, humana y transparente. Nuestra tecnología debe facilitar el trabajo del equipo y, sobre todo, hacer que el cliente entienda qué ocurre en cada etapa.',
                slogan: '“Donde comienzan nuevas oportunidades.”',
                trust1: 'Confianza',
                trust2: 'Transparencia',
                trust3: 'Cercanía',
                trust4: 'Profesionalismo'
            },

            faq: {
                kicker: 'Preguntas frecuentes',
                title: 'Claridad antes de <span class="text-gradient">decidir.</span>',

                q1: '¿GÉNESIS GLOBAL vende visas?',
                a1: 'No. La empresa puede orientar sobre requisitos aplicables y coordinar con profesionales autorizados cuando un caso lo requiera. Las decisiones migratorias corresponden a las autoridades competentes.',

                q2: '¿Puedo solicitar ayuda para viajar hacia Cuba?',
                a2: 'Sí. El concepto contempla personas que viven en Brasil u otros países y quieren organizar un viaje a Cuba para visitar a sus familiares, sujeto a las normas vigentes.',

                q3: '¿También se pueden organizar viajes desde Cuba?',
                a3: 'Sí. Puede contemplarse la planificación de viajes desde Cuba hacia Brasil u otros destinos, dependiendo de requisitos y servicios disponibles.',

                q4: '¿Cómo empiezo?',
                a4: 'Completa el formulario de orientación. Un miembro del equipo podrá revisar tu solicitud y explicarte los próximos pasos.'
            },

            footer: {
                slogan: 'Donde comienzan nuevas oportunidades.',
                description: 'Conectamos destinos. Reunimos familias.',

                company: 'Empresa',
                attention: 'Atención',

                about: 'Nosotros',
                services: 'Servicios',

                personalized: 'Orientación personalizada',
                whatsapp: 'WhatsApp Business',
                form: 'Formulario de solicitud',

                privacy: 'Política de Privacidad',
                terms: 'Términos y Condiciones',
                cookies: 'Política de Cookies',

                copyright: '© 2026 GÉNESIS GLOBAL — Donde comienzan nuevas oportunidades.'
            },

            alerts: {
                originDestination: 'Por favor, selecciona tu origen y destino.',
                personalData: 'Por favor, completa todos los datos personales.',
                required: '⚠️ Por favor, completa todos los datos requeridos.',
                saving: 'Guardando solicitud...',
                sending: 'Enviando solicitud...',
                success: '✅ ¡Solicitud enviada correctamente!\n\nTu solicitud fue registrada y nuestro equipo recibirá la información.\n\nAhora se abrirá WhatsApp para continuar la atención.',
                error: '❌ No pudimos completar la solicitud.\n\nPor favor, inténtalo nuevamente o contáctanos directamente por WhatsApp al +1 (809) 999-5904.',
                supabase: 'La conexión con Supabase no está disponible.',
                emailjs: 'EmailJS no está disponible.'
            },

            policies: {
                privacy: {
                    title: 'Política de Privacidad',
                    intro: 'En <strong>GÉNESIS GLOBAL</strong> nos tomamos muy en serio la privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información personal.',
                    h1: '1. Información que recopilamos',
                    p1: 'Recopilamos la información que nos proporcionas voluntariamente al completar el formulario: nombre, origen, destino y mensaje. También podemos recopilar datos de uso anónimos a través de cookies.',
                    h2: '2. Uso de la información',
                    p2: 'Utilizamos tu información para evaluar tu solicitud, coordinar la atención y mejorar nuestros servicios. No compartimos tus datos con terceros sin tu consentimiento.',
                    h3: '3. Seguridad',
                    p3: 'Implementamos medidas de seguridad técnicas y organizativas para proteger tu información. Sin embargo, ningún sistema es 100% seguro.',
                    h4: '4. Tus derechos',
                    p4: 'Puedes solicitar acceso, rectificación o eliminación de tus datos enviando un correo a <span style="color:#66e6c4;">privacidad@genesistriplea.com</span>.'
                },

                terms: {
                    title: 'Términos y Condiciones',
                    intro: 'Al utilizar nuestro sitio web y servicios, aceptas los siguientes términos.',
                    h1: '1. Servicios ofrecidos',
                    p1: 'GÉNESIS GLOBAL ofrece planificación y coordinación de viajes familiares, orientación documental y acompañamiento personalizado. No vendemos visas ni gestionamos trámites migratorios directamente.',
                    h2: '2. Responsabilidad',
                    p2: 'No nos responsabilizamos de errores u omisiones en los contenidos. Las decisiones migratorias son competencia de las autoridades.',
                    h3: '3. Propiedad intelectual',
                    p3: 'Todo el contenido es propiedad de GÉNESIS GLOBAL y está protegido por las leyes de propiedad intelectual.'
                },

                cookies: {
                    title: 'Política de Cookies',
                    intro: 'Utilizamos cookies para mejorar tu experiencia. Esta política explica qué son y cómo las usamos.',
                    h1: '1. ¿Qué son las cookies?',
                    p1: 'Son pequeños archivos de texto que se almacenan en tu dispositivo para recordar preferencias y analizar el tráfico.',
                    h2: '2. Cookies que utilizamos',
                    technical: '<strong>Técnicas:</strong> necesarias para el funcionamiento básico.',
                    analytics: '<strong>Análisis:</strong> usamos Google Analytics de forma anónima.',
                    preferences: '<strong>Preferencias:</strong> recuerdan tu configuración.',
                    h3: '3. Gestión de cookies',
                    p3: 'Puedes aceptar o rechazar las cookies desde la configuración de tu navegador.'
                },

                updated: 'Última actualización: 18 de agosto de 2026'
            }
        },


        /* =========================
           ENGLISH
           ========================= */
        en: {

            nav: {
                home: 'Home',
                services: 'Services',
                process: 'How it works',
                about: 'About us',
                faq: 'FAQ',
                other: 'Other Services',
                plan: 'Plan my trip →'
            },

            hero: {
                eyebrow: '✦ A new way to organize your family trip',
                title: 'Distance should never separate <span>families.</span>',
                slogan: '“Where new opportunities begin.”',
                description: 'We plan and coordinate your trip so you can focus on what matters most: <b>being close to the people you love again.</b>',
                plan: 'Plan my trip →',
                process: 'See how it works',
                trust1: 'Human support',
                trust2: 'Clear process',
                trust3: 'Guidance',
                globe: '🌍 <strong>Rotate</strong> · <strong>Click</strong> on a country'
            },

            planner: {
                kicker: 'Plan your trip',
                title: 'Tell us <span class="text-gradient">where you are coming from and where you are going</span>',
                description: 'Complete the information and we will organize the rest.',

                originLabel: '🇧🇷 Where are you traveling from?',
                originPlaceholder: 'E.g.: Brazil, Cuba, Spain...',

                destinationLabel: '🇨🇺 Where do you want to travel?',
                destinationPlaceholder: 'E.g.: Cuba, Brazil, Mexico...',

                continue: 'Continue →',
                hint: '💡 You can also click on a country on the globe to select it as your destination.',

                dateDeparture: '📅 Approximate travel date',
                dateReturn: '📅 Return date (optional)',
                adults: '👥 Number of adults',
                children: '👶 Number of children',
                tripType: '❤️ Type of trip',

                familyVisit: 'Family visit',
                personal: 'Personal trip',
                tourism: 'Tourism',
                other: 'Other',

                back: '← Back',

                fullName: '👤 Full name',
                fullNamePlaceholder: 'Your full name',

                whatsapp: '📱 WhatsApp',
                whatsappPlaceholder: '+54 9 11 1234 5678',

                email: '📧 Email address',
                emailPlaceholder: 'you@example.com',

                residence: '🌍 Country where you currently live',
                residencePlaceholder: 'E.g.: Brazil, Argentina, Spain...',

                comments: '💬 Additional comments',
                commentsPlaceholder: 'Tell us anything else you may need...',

                summary: 'View summary',
                edit: '← Edit',
                send: 'Send request →',

                summaryDate: '📅 Travel date:',
                summaryReturn: '📅 Return:',
                summaryTravelers: '👥 Travelers:',
                summaryReason: '❤️ Reason:',
                summaryName: '👤 Name:',
                summaryWhatsapp: '📱 WhatsApp:',
                summaryEmail: '📧 Email:',
                summaryResidence: '🌍 Residence:',
                summaryComments: '💬 Comments:',
                unspecified: 'Not specified',
                adultsText: 'adults',
                childrenText: 'children',
                none: 'None'
            },

            proof: {
                kicker: 'Our purpose',
                title: 'We connect destinations. <span class="text-gradient">We reunite families.</span>',
                slogan: '“Where new opportunities begin.”',
                description: 'A simple digital experience, personal attention and professional coordination to help you organize your next trip.'
            },

            services: {
                kicker: 'Services',
                title: 'Everything essential, <span class="text-gradient">in one place.</span>',
                description: 'We start with clear, human services designed to reduce uncertainty and simplify every stage.',

                s1Title: 'Travel planning',
                s1Text: 'Routes, dates, connections and itineraries organized according to your situation.',
                s2Title: 'Family travel',
                s2Text: 'Support designed for people who want to reunite with their loved ones.',
                s3Title: 'Document guidance',
                s3Text: 'Clear information about applicable requirements and coordination with authorized professionals.',
                s4Title: 'Accommodation and transportation',
                s4Text: 'We coordinate complementary options to make your trip easier.',

                plan: 'Plan now →'
            },

            process: {
                kicker: 'Customer experience',
                title: 'Simple from the first <span class="text-gradient">message.</span>',
                description: 'We designed the process to reduce questions, unnecessary steps and friction.',

                p1Title: 'Tell us your situation',
                p1Text: 'Complete a short request and tell us where you are traveling from, where you want to go and what you need.',

                p2Title: 'We analyze your options',
                p2Text: 'Our team reviews routes, services and applicable requirements.',

                p3Title: 'Receive your proposal',
                p3Text: 'We explain options, costs and next steps before moving forward.',

                p4Title: 'We accompany you',
                p4Text: 'We coordinate the contracted process and stay in communication with you.'
            },

            about: {
                kicker: 'GÉNESIS GLOBAL',
                title: 'A brand created to <span class="text-gradient">bring people closer.</span>',
                description: 'We want to build a modern, human and transparent company. Our technology should make the team’s work easier and, above all, help clients understand what happens at every stage.',
                slogan: '“Where new opportunities begin.”',
                trust1: 'Trust',
                trust2: 'Transparency',
                trust3: 'Closeness',
                trust4: 'Professionalism'
            },

            faq: {
                kicker: 'Frequently asked questions',
                title: 'Clarity before you <span class="text-gradient">decide.</span>',

                q1: 'Does GÉNESIS GLOBAL sell visas?',
                a1: 'No. The company can provide guidance regarding applicable requirements and coordinate with authorized professionals when necessary. Immigration decisions belong to the competent authorities.',

                q2: 'Can I request help traveling to Cuba?',
                a2: 'Yes. The concept includes people living in Brazil or other countries who want to organize a trip to Cuba to visit their families, subject to current regulations.',

                q3: 'Can trips also be organized from Cuba?',
                a3: 'Yes. Travel planning from Cuba to Brazil or other destinations may be considered, depending on requirements and available services.',

                q4: 'How do I get started?',
                a4: 'Complete the guidance form. A team member can review your request and explain the next steps.'
            },

            footer: {
                slogan: 'Where new opportunities begin.',
                description: 'We connect destinations. We reunite families.',
                company: 'Company',
                attention: 'Support',
                about: 'About us',
                services: 'Services',
                personalized: 'Personalized guidance',
                whatsapp: 'WhatsApp Business',
                form: 'Request form',
                privacy: 'Privacy Policy',
                terms: 'Terms and Conditions',
                cookies: 'Cookie Policy',
                copyright: '© 2026 GÉNESIS GLOBAL — Where new opportunities begin.'
            },

            alerts: {
                originDestination: 'Please select your origin and destination.',
                personalData: 'Please complete all personal information.',
                required: '⚠️ Please complete all required information.',
                saving: 'Saving request...',
                sending: 'Sending request...',
                success: '✅ Request sent successfully!\n\nYour request has been registered and our team will receive the information.\n\nWhatsApp will now open to continue the conversation.',
                error: '❌ We could not complete your request.\n\nPlease try again or contact us directly on WhatsApp at +1 (809) 999-5904.',
                supabase: 'The connection to Supabase is not available.',
                emailjs: 'EmailJS is not available.'
            }
        },


        /* =========================
           FRANÇAIS
           ========================= */
        fr: {

            nav: {
                home: 'Accueil',
                services: 'Services',
                process: 'Comment ça marche',
                about: 'À propos',
                faq: 'FAQ',
                other: 'Autres services',
                plan: 'Planifier mon voyage →'
            },

            hero: {
                eyebrow: '✦ Une nouvelle façon d’organiser votre voyage en famille',
                title: 'Les kilomètres ne devraient pas séparer les <span>familles.</span>',
                slogan: '« Là où commencent de nouvelles opportunités. »',
                description: 'Nous planifions et coordonnons votre voyage afin que vous puissiez vous concentrer sur l’essentiel : <b>être à nouveau proche de ceux que vous aimez.</b>',
                plan: 'Planifier mon voyage →',
                process: 'Voir comment ça marche',
                trust1: 'Assistance humaine',
                trust2: 'Processus clair',
                trust3: 'Accompagnement',
                globe: '🌍 <strong>Faites tourner</strong> · <strong>Cliquez</strong> sur un pays'
            },

            planner: {
                kicker: 'Planifiez votre voyage',
                title: 'Dites-nous <span class="text-gradient">d’où vous partez et où vous allez</span>',
                description: 'Remplissez les informations et nous nous occupons du reste.',

                originLabel: '🇧🇷 D’où voyagez-vous ?',
                originPlaceholder: 'Ex. : Brésil, Cuba, Espagne...',

                destinationLabel: '🇨🇺 Où souhaitez-vous voyager ?',
                destinationPlaceholder: 'Ex. : Cuba, Brésil, Mexique...',

                continue: 'Continuer →',
                hint: '💡 Vous pouvez également cliquer sur un pays du globe pour le sélectionner comme destination.',

                dateDeparture: '📅 Date approximative du voyage',
                dateReturn: '📅 Date de retour (facultative)',
                adults: '👥 Nombre d’adultes',
                children: '👶 Nombre d’enfants',
                tripType: '❤️ Type de voyage',

                familyVisit: 'Visite familiale',
                personal: 'Voyage personnel',
                tourism: 'Tourisme',
                other: 'Autre',

                back: '← Retour',

                fullName: '👤 Nom complet',
                fullNamePlaceholder: 'Votre nom complet',

                whatsapp: '📱 WhatsApp',
                whatsappPlaceholder: '+54 9 11 1234 5678',

                email: '📧 Adresse e-mail',
                emailPlaceholder: 'votre@email.com',

                residence: '🌍 Pays où vous résidez actuellement',
                residencePlaceholder: 'Ex. : Brésil, Argentine, Espagne...',

                comments: '💬 Commentaires supplémentaires',
                commentsPlaceholder: 'Dites-nous ce dont vous avez besoin...',

                summary: 'Voir le résumé',
                edit: '← Modifier',
                send: 'Envoyer la demande →',

                summaryDate: '📅 Date du voyage :',
                summaryReturn: '📅 Retour :',
                summaryTravelers: '👥 Voyageurs :',
                summaryReason: '❤️ Motif :',
                summaryName: '👤 Nom :',
                summaryWhatsapp: '📱 WhatsApp :',
                summaryEmail: '📧 E-mail :',
                summaryResidence: '🌍 Résidence :',
                summaryComments: '💬 Commentaires :',
                unspecified: 'Non précisée',
                adultsText: 'adultes',
                childrenText: 'enfants',
                none: 'Aucun'
            },

            proof: {
                kicker: 'Notre objectif',
                title: 'Nous connectons les destinations. <span class="text-gradient">Nous réunissons les familles.</span>',
                slogan: '« Là où commencent de nouvelles opportunités. »',
                description: 'Une expérience numérique simple, une attention personnalisée et une coordination professionnelle pour vous aider à organiser votre prochain voyage.'
            },

            services: {
                kicker: 'Services',
                title: 'Tout ce qui est essentiel, <span class="text-gradient">en un seul endroit.</span>',
                description: 'Nous commençons avec des services clairs et humains conçus pour réduire l’incertitude et simplifier chaque étape.',

                s1Title: 'Planification de voyages',
                s1Text: 'Itinéraires, dates, correspondances et programmes organisés selon votre situation.',
                s2Title: 'Voyages en famille',
                s2Text: 'Un accompagnement pensé pour ceux qui souhaitent retrouver leurs proches.',
                s3Title: 'Orientation documentaire',
                s3Text: 'Des informations claires sur les exigences applicables et une coordination avec des professionnels autorisés.',
                s4Title: 'Hébergement et transport',
                s4Text: 'Nous coordonnons des options complémentaires pour simplifier votre voyage.',

                plan: 'Planifier maintenant →'
            },

            process: {
                kicker: 'Expérience client',
                title: 'Simple dès le premier <span class="text-gradient">message.</span>',
                description: 'Nous avons conçu le processus pour réduire les questions, les étapes inutiles et les difficultés.',

                p1Title: 'Expliquez-nous votre situation',
                p1Text: 'Remplissez une courte demande et indiquez-nous d’où vous partez, où vous souhaitez aller et ce dont vous avez besoin.',

                p2Title: 'Nous analysons vos options',
                p2Text: 'Notre équipe examine les itinéraires, les services et les exigences applicables.',

                p3Title: 'Recevez votre proposition',
                p3Text: 'Nous vous expliquons les options, les coûts et les prochaines étapes avant de continuer.',

                p4Title: 'Nous vous accompagnons',
                p4Text: 'Nous coordonnons le processus choisi et restons en communication avec vous.'
            },

            about: {
                kicker: 'GÉNESIS GLOBAL',
                title: 'Une marque créée pour <span class="text-gradient">rapprocher les personnes.</span>',
                description: 'Nous voulons construire une entreprise moderne, humaine et transparente. Notre technologie doit faciliter le travail de l’équipe et surtout permettre au client de comprendre ce qui se passe à chaque étape.',
                slogan: '« Là où commencent de nouvelles opportunités. »',
                trust1: 'Confiance',
                trust2: 'Transparence',
                trust3: 'Proximité',
                trust4: 'Professionnalisme'
            },

            faq: {
                kicker: 'Questions fréquentes',
                title: 'De la clarté avant de <span class="text-gradient">décider.</span>',

                q1: 'GÉNESIS GLOBAL vend-elle des visas ?',
                a1: 'Non. L’entreprise peut fournir des informations sur les exigences applicables et coordonner avec des professionnels autorisés lorsque cela est nécessaire. Les décisions migratoires relèvent des autorités compétentes.',

                q2: 'Puis-je demander de l’aide pour voyager à Cuba ?',
                a2: 'Oui. Le concept comprend les personnes vivant au Brésil ou dans d’autres pays qui souhaitent organiser un voyage à Cuba pour rendre visite à leur famille, sous réserve des réglementations en vigueur.',

                q3: 'Peut-on également organiser des voyages depuis Cuba ?',
                a3: 'Oui. La planification de voyages depuis Cuba vers le Brésil ou d’autres destinations peut être envisagée selon les exigences et les services disponibles.',

                q4: 'Comment commencer ?',
                a4: 'Remplissez le formulaire d’orientation. Un membre de l’équipe pourra examiner votre demande et vous expliquer les prochaines étapes.'
            },

            footer: {
                slogan: 'Là où commencent de nouvelles opportunités.',
                description: 'Nous connectons les destinations. Nous réunissons les familles.',
                company: 'Entreprise',
                attention: 'Assistance',
                about: 'À propos',
                services: 'Services',
                personalized: 'Orientation personnalisée',
                whatsapp: 'WhatsApp Business',
                form: 'Formulaire de demande',
                privacy: 'Politique de confidentialité',
                terms: 'Conditions générales',
                cookies: 'Politique des cookies',
                copyright: '© 2026 GÉNESIS GLOBAL — Là où commencent de nouvelles opportunités.'
            },

            alerts: {
                originDestination: 'Veuillez sélectionner votre origine et votre destination.',
                personalData: 'Veuillez compléter toutes les informations personnelles.',
                required: '⚠️ Veuillez compléter toutes les informations obligatoires.',
                saving: 'Enregistrement de la demande...',
                sending: 'Envoi de la demande...',
                success: '✅ Demande envoyée avec succès !\n\nVotre demande a été enregistrée et notre équipe recevra les informations.\n\nWhatsApp va maintenant s’ouvrir pour poursuivre la conversation.',
                error: '❌ Nous n’avons pas pu traiter votre demande.\n\nVeuillez réessayer ou nous contacter directement sur WhatsApp au +1 (809) 999-5904.',
                supabase: 'La connexion à Supabase n’est pas disponible.',
                emailjs: 'EmailJS n’est pas disponible.'
            }
        },


        /* =========================
           PORTUGUÊS
           ========================= */
        pt: {

            nav: {
                home: 'Início',
                services: 'Serviços',
                process: 'Como funciona',
                about: 'Sobre nós',
                faq: 'FAQ',
                other: 'Outros Serviços',
                plan: 'Planejar minha viagem →'
            },

            hero: {
                eyebrow: '✦ Uma nova forma de organizar sua viagem em família',
                title: 'Os quilômetros não deveriam separar as <span>famílias.</span>',
                slogan: '“Onde começam novas oportunidades.”',
                description: 'Planejamos e coordenamos sua viagem para que você possa se concentrar no que realmente importa: <b>estar novamente perto de quem você ama.</b>',
                plan: 'Planejar minha viagem →',
                process: 'Veja como funciona',
                trust1: 'Atendimento humano',
                trust2: 'Processo claro',
                trust3: 'Acompanhamento',
                globe: '🌍 <strong>Gire</strong> · <strong>Clique</strong> em um país'
            },

            planner: {
                kicker: 'Planeje sua viagem',
                title: 'Conte-nos <span class="text-gradient">de onde você vem e para onde vai</span>',
                description: 'Preencha os dados e nós organizaremos o restante.',

                originLabel: '🇧🇷 De onde você está viajando?',
                originPlaceholder: 'Ex.: Brasil, Cuba, Espanha...',

                destinationLabel: '🇨🇺 Para onde você quer viajar?',
                destinationPlaceholder: 'Ex.: Cuba, Brasil, México...',

                continue: 'Continuar →',
                hint: '💡 Você também pode clicar em um país no globo para selecioná-lo como destino.',

                dateDeparture: '📅 Data aproximada da viagem',
                dateReturn: '📅 Data de retorno (opcional)',
                adults: '👥 Número de adultos',
                children: '👶 Número de crianças',
                tripType: '❤️ Tipo de viagem',

                familyVisit: 'Visita familiar',
                personal: 'Viagem pessoal',
                tourism: 'Turismo',
                other: 'Outro',

                back: '← Voltar',

                fullName: '👤 Nome completo',
                fullNamePlaceholder: 'Seu nome completo',

                whatsapp: '📱 WhatsApp',
                whatsappPlaceholder: '+54 9 11 1234 5678',

                email: '📧 E-mail',
                emailPlaceholder: 'seu@email.com',

                residence: '🌍 País onde você reside atualmente',
                residencePlaceholder: 'Ex.: Brasil, Argentina, Espanha...',

                comments: '💬 Comentários adicionais',
                commentsPlaceholder: 'Conte-nos algo mais de que você precise...',

                summary: 'Ver resumo',
                edit: '← Editar',
                send: 'Enviar solicitação →',

                summaryDate: '📅 Data da viagem:',
                summaryReturn: '📅 Retorno:',
                summaryTravelers: '👥 Viajantes:',
                summaryReason: '❤️ Motivo:',
                summaryName: '👤 Nome:',
                summaryWhatsapp: '📱 WhatsApp:',
                summaryEmail: '📧 E-mail:',
                summaryResidence: '🌍 Residência:',
                summaryComments: '💬 Comentários:',
                unspecified: 'Não especificada',
                adultsText: 'adultos',
                childrenText: 'crianças',
                none: 'Nenhum'
            },

            proof: {
                kicker: 'Nosso propósito',
                title: 'Conectamos destinos. <span class="text-gradient">Reunimos famílias.</span>',
                slogan: '“Onde começam novas oportunidades.”',
                description: 'Uma experiência digital simples, atendimento próximo e coordenação profissional para ajudar você a organizar sua próxima viagem.'
            },

            services: {
                kicker: 'Serviços',
                title: 'Tudo o que é essencial, <span class="text-gradient">em um só lugar.</span>',
                description: 'Começamos com serviços claros e humanos, projetados para reduzir a incerteza e simplificar cada etapa.',

                s1Title: 'Planejamento de viagens',
                s1Text: 'Rotas, datas, conexões e itinerários organizados de acordo com sua situação.',
                s2Title: 'Viagens em família',
                s2Text: 'Acompanhamento pensado para quem deseja reencontrar seus familiares.',
                s3Title: 'Orientação documental',
                s3Text: 'Informações claras sobre os requisitos aplicáveis e coordenação com profissionais autorizados.',
                s4Title: 'Hospedagem e transporte',
                s4Text: 'Coordenamos opções complementares para tornar sua viagem mais simples.',

                plan: 'Planejar agora →'
            },

            process: {
                kicker: 'Experiência do cliente',
                title: 'Simples desde a primeira <span class="text-gradient">mensagem.</span>',
                description: 'Projetamos o processo para reduzir dúvidas, etapas desnecessárias e dificuldades.',

                p1Title: 'Conte-nos sua situação',
                p1Text: 'Preencha uma solicitação breve e informe de onde você viaja, para onde deseja ir e do que precisa.',

                p2Title: 'Analisamos suas opções',
                p2Text: 'Nossa equipe analisa rotas, serviços e requisitos aplicáveis.',

                p3Title: 'Você recebe sua proposta',
                p3Text: 'Explicamos opções, custos e próximos passos antes de continuar.',

                p4Title: 'Acompanhamos você',
                p4Text: 'Coordenamos o processo contratado e mantemos a comunicação com você.'
            },

            about: {
                kicker: 'GÉNESIS GLOBAL',
                title: 'Uma marca criada para <span class="text-gradient">aproximar pessoas.</span>',
                description: 'Queremos construir uma empresa moderna, humana e transparente. Nossa tecnologia deve facilitar o trabalho da equipe e, acima de tudo, fazer com que o cliente entenda o que acontece em cada etapa.',
                slogan: '“Onde começam novas oportunidades.”',
                trust1: 'Confiança',
                trust2: 'Transparência',
                trust3: 'Proximidade',
                trust4: 'Profissionalismo'
            },

            faq: {
                kicker: 'Perguntas frequentes',
                title: 'Clareza antes de <span class="text-gradient">decidir.</span>',

                q1: 'A GÉNESIS GLOBAL vende vistos?',
                a1: 'Não. A empresa pode orientar sobre os requisitos aplicáveis e coordenar com profissionais autorizados quando necessário. As decisões migratórias são de responsabilidade das autoridades competentes.',

                q2: 'Posso solicitar ajuda para viajar para Cuba?',
                a2: 'Sim. O conceito contempla pessoas que vivem no Brasil ou em outros países e desejam organizar uma viagem a Cuba para visitar seus familiares, sujeita às normas vigentes.',

                q3: 'Também é possível organizar viagens saindo de Cuba?',
                a3: 'Sim. O planejamento de viagens de Cuba para o Brasil ou outros destinos pode ser considerado, dependendo dos requisitos e serviços disponíveis.',

                q4: 'Como começo?',
                a4: 'Preencha o formulário de orientação. Um membro da equipe poderá analisar sua solicitação e explicar os próximos passos.'
            },

            footer: {
                slogan: 'Onde começam novas oportunidades.',
                description: 'Conectamos destinos. Reunimos famílias.',
                company: 'Empresa',
                attention: 'Atendimento',
                about: 'Sobre nós',
                services: 'Serviços',
                personalized: 'Orientação personalizada',
                whatsapp: 'WhatsApp Business',
                form: 'Formulário de solicitação',
                privacy: 'Política de Privacidade',
                terms: 'Termos e Condições',
                cookies: 'Política de Cookies',
                copyright: '© 2026 GÉNESIS GLOBAL — Onde começam novas oportunidades.'
            },

            alerts: {
                originDestination: 'Por favor, selecione sua origem e seu destino.',
                personalData: 'Por favor, preencha todos os dados pessoais.',
                required: '⚠️ Por favor, preencha todos os dados obrigatórios.',
                saving: 'Salvando solicitação...',
                sending: 'Enviando solicitação...',
                success: '✅ Solicitação enviada com sucesso!\n\nSua solicitação foi registrada e nossa equipe receberá as informações.\n\nO WhatsApp será aberto agora para continuar o atendimento.',
                error: '❌ Não foi possível concluir sua solicitação.\n\nTente novamente ou entre em contato conosco diretamente pelo WhatsApp +1 (809) 999-5904.',
                supabase: 'A conexão com o Supabase não está disponível.',
                emailjs: 'O EmailJS não está disponível.'
            }
        }
    };


    /* ============================================================
       FUNCIÓN PARA OBTENER TRADUCCIONES
       ============================================================ */

    function get(path) {
        const parts = path.split('.');
        let value = translations[currentLanguage];

        for (const part of parts) {
            if (value && Object.prototype.hasOwnProperty.call(value, part)) {
                value = value[part];
            } else {
                return '';
            }
        }

        return value;
    }


    /* ============================================================
       CAMBIAR CONTENIDO
       ============================================================ */

    function setHTML(selector, value) {
        const element = document.querySelector(selector);

        if (element && value !== undefined) {
            element.innerHTML = value;
        }
    }

   function setText(selector, text) {
    const element = document.querySelector(selector);

    if (!element) {
        return;
    }

    element.textContent = text;
}
    }


    /* ============================================================
       APLICAR IDIOMA
       ============================================================ */

    function applyGenesisLanguage(language) {

        if (!translations[language]) {
            language = 'es';
        }

        currentLanguage = language;

        const t = translations[language];

        /* =========================
           HTML LANG
           ========================= */

        document.documentElement.lang = language;


        /* =========================
           NAVBAR
           ========================= */

        setText('.links button:nth-child(1)', t.nav.home);
        setText('.links button:nth-child(2)', t.nav.services);
        setText('.links button:nth-child(3)', t.nav.process);
        setText('.links button:nth-child(4)', t.nav.about);
        setText('.links button:nth-child(5)', t.nav.faq);
        setText('.links button:nth-child(6)', t.nav.other);
        setText('.links .cta', t.nav.plan);


        /* =========================
           HERO
           ========================= */

        setText('.hero .eyebrow', t.hero.eyebrow);
        setHTML('.hero h1', t.hero.title);
        setText('.hero .slogan', t.hero.slogan);
        setHTML('.hero-copy > p', t.hero.description);

        setText('.hero .actions .primary', t.hero.plan);
        setText('.hero .actions .secondary', t.hero.process);

        const trust = document.querySelectorAll('.hero .trust span');

        if (trust[0]) trust[0].textContent = t.hero.trust1;
        if (trust[1]) trust[1].textContent = t.hero.trust2;
        if (trust[2]) trust[2].textContent = t.hero.trust3;

        setHTML('.globe-label', t.hero.globe);


        /* =========================
           PLANNER
           ========================= */

        setText('#planner .kicker', t.planner.kicker);
        setHTML('#planner .section-title', t.planner.title);

        const plannerDescription = document.querySelector(
            '#planner .head > p'
        );

        if (plannerDescription) {
            plannerDescription.textContent = t.planner.description;
        }


        /* STEP 1 */

        const labelsStep1 = document.querySelectorAll(
            '#step1 .search-field label'
        );

        if (labelsStep1[0]) {
            labelsStep1[0].textContent = t.planner.originLabel;
        }

        if (labelsStep1[1]) {
            labelsStep1[1].textContent = t.planner.destinationLabel;
        }

        setPlaceholder(
            '#origenInput',
            t.planner.originPlaceholder
        );

        setPlaceholder(
            '#destinoInput',
            t.planner.destinationPlaceholder
        );

        setText(
            '#step1 .btn-continuar',
            t.planner.continue
        );

        const plannerHint = document.querySelector(
            '#step1 > div:last-child'
        );

        if (plannerHint) {
            plannerHint.textContent = t.planner.hint;
        }


        /* STEP 2 */

        const step2Labels = document.querySelectorAll(
            '#step2 .detail-field label'
        );

        if (step2Labels[0]) step2Labels[0].textContent = t.planner.dateDeparture;
        if (step2Labels[1]) step2Labels[1].textContent = t.planner.dateReturn;
        if (step2Labels[2]) step2Labels[2].textContent = t.planner.adults;
        if (step2Labels[3]) step2Labels[3].textContent = t.planner.children;
        if (step2Labels[4]) step2Labels[4].textContent = t.planner.tripType;

        const tripOptions = document.querySelectorAll(
            '#tipoViaje option'
        );

        if (tripOptions[0]) tripOptions[0].textContent = t.planner.familyVisit;
        if (tripOptions[1]) tripOptions[1].textContent = t.planner.personal;
        if (tripOptions[2]) tripOptions[2].textContent = t.planner.tourism;
        if (tripOptions[3]) tripOptions[3].textContent = t.planner.other;

        setText('#step2 .secondary', t.planner.back);
        setText('#step2 .primary', t.planner.continue);


        /* STEP 3 */

        const step3Labels = document.querySelectorAll(
            '#step3 .detail-field label'
        );

        if (step3Labels[0]) step3Labels[0].textContent = t.planner.fullName;
        if (step3Labels[1]) step3Labels[1].textContent = t.planner.whatsapp;
        if (step3Labels[2]) step3Labels[2].textContent = t.planner.email;
        if (step3Labels[3]) step3Labels[3].textContent = t.planner.residence;
        if (step3Labels[4]) step3Labels[4].textContent = t.planner.comments;

        setPlaceholder(
            '#nombre',
            t.planner.fullNamePlaceholder
        );

        setPlaceholder(
            '#whatsapp',
            t.planner.whatsappPlaceholder
        );

        setPlaceholder(
            '#email',
            t.planner.emailPlaceholder
        );

        setPlaceholder(
            '#residencia',
            t.planner.residencePlaceholder
        );

        setPlaceholder(
            '#comentarios',
            t.planner.commentsPlaceholder
        );

        const step3Buttons = document.querySelectorAll(
            '#step3 button'
        );

        if (step3Buttons[0]) {
            step3Buttons[0].textContent = t.planner.back;
        }

        if (step3Buttons[1]) {
            step3Buttons[1].textContent = t.planner.summary;
        }


        /* STEP 4 */

        const step4Buttons = document.querySelectorAll(
            '#step4 button'
        );

        if (step4Buttons[0]) {
            step4Buttons[0].textContent = t.planner.edit;
        }

        if (step4Buttons[1] && !step4Buttons[1].disabled) {
            step4Buttons[1].textContent = t.planner.send;
        }


        /* =========================
           PROOF
           ========================= */

        const proof = document.querySelector('.proof');

        if (proof) {
            setText('.proof .kicker', t.proof.kicker);
            setHTML('.proof h2', t.proof.title);

            const proofSlogan = proof.querySelector(
                'div[style*="color:#82a9ff"]'
            );

            if (proofSlogan) {
                proofSlogan.textContent = t.proof.slogan;
            }

            const proofParagraph = proof.querySelector('.proof-card > p');

            if (proofParagraph) {
                proofParagraph.textContent = t.proof.description;
            }
        }


        /* =========================
           SERVICES
           ========================= */

        const services = document.querySelector('#servicios');

        if (services) {

            setText(
                '#servicios .kicker',
                t.services.kicker
            );

            setHTML(
                '#servicios .section-title',
                t.services.title
            );

            setText(
                '#servicios .head > p',
                t.services.description
            );

            const cards = document.querySelectorAll(
                '#servicios .card'
            );

            if (cards[0]) {
                setText('h3', t.services.s1Title, cards[0]);
            }

            if (cards[1]) {
                setText('h3', t.services.s2Title, cards[1]);
            }

            if (cards[2]) {
                setText('h3', t.services.s3Title, cards[2]);
            }

            if (cards[3]) {
                setText('h3', t.services.s4Title, cards[3]);
            }

            cards.forEach(card => {
                const button = card.querySelector('.link');

                if (button) {
                    button.textContent = t.services.plan;
                }
            });

            if (cards[0]) {
                const p = cards[0].querySelector('p');
                if (p) p.textContent = t.services.s1Text;
            }

            if (cards[1]) {
                const p = cards[1].querySelector('p');
                if (p) p.textContent = t.services.s2Text;
            }

            if (cards[2]) {
                const p = cards[2].querySelector('p');
                if (p) p.textContent = t.services.s3Text;
            }

            if (cards[3]) {
                const p = cards[3].querySelector('p');
                if (p) p.textContent = t.services.s4Text;
            }
        }


        /* =========================
           PROCESS
           ========================= */

        setText(
            '#proceso .kicker',
            t.process.kicker
        );

        setHTML(
            '#proceso .section-title',
            t.process.title
        );

        setText(
            '#proceso .head > p',
            t.process.description
        );

        const steps = document.querySelectorAll(
            '#proceso .step'
        );

        const processData = [
            [t.process.p1Title, t.process.p1Text],
            [t.process.p2Title, t.process.p2Text],
            [t.process.p3Title, t.process.p3Text],
            [t.process.p4Title, t.process.p4Text]
        ];

        steps.forEach((step, index) => {

            if (!processData[index]) return;

            const title = step.querySelector('h3');
            const text = step.querySelector('p');

            if (title) title.textContent = processData[index][0];
            if (text) text.textContent = processData[index][1];

        });


        /* =========================
           ABOUT
           ========================= */

        setText(
            '#nosotros .kicker',
            t.about.kicker
        );

        setHTML(
            '#nosotros .section-title',
            t.about.title
        );

        const aboutParagraph = document.querySelector(
            '#nosotros .about p'
        );

        if (aboutParagraph) {
            aboutParagraph.textContent = t.about.description;
        }

        const aboutSlogan = document.querySelector(
            '#nosotros .about div[style*="color:#82a9ff"]'
        );

        if (aboutSlogan) {
            aboutSlogan.textContent = t.about.slogan;
        }

        const pills = document.querySelectorAll(
            '#nosotros .pill'
        );

        if (pills[0]) pills[0].textContent = t.about.trust1;
        if (pills[1]) pills[1].textContent = t.about.trust2;
        if (pills[2]) pills[2].textContent = t.about.trust3;
        if (pills[3]) pills[3].textContent = t.about.trust4;


        /* =========================
           FAQ
           ========================= */

        setText(
            '#faq .kicker',
            t.faq.kicker
        );

        setHTML(
            '#faq .section-title',
            t.faq.title
        );

        const faqRows = document.querySelectorAll(
            '#faq .faq-row'
        );

        const faqData = [
            [t.faq.q1, t.faq.a1],
            [t.faq.q2, t.faq.a2],
            [t.faq.q3, t.faq.a3],
            [t.faq.q4, t.faq.a4]
        ];

        faqRows.forEach((row, index) => {

            if (!faqData[index]) return;

            const question = row.querySelector('.faq-q');
            const answer = row.querySelector('.faq-a');

            if (question) {
                const arrow = question.querySelector('span:last-child');

                question.innerHTML =
                    faqData[index][0] +
                    (arrow ? ' <span>⌄</span>' : '');
            }

            if (answer) {
                answer.textContent = faqData[index][1];
            }

        });


        /* =========================
           FOOTER
           ========================= */

        const footer = document.querySelector('.footer');

        if (footer) {

            const footerBrandSmall = footer.querySelector(
                '.brand small'
            );

            if (footerBrandSmall) {
                footerBrandSmall.textContent = t.footer.slogan;
            }

            const footerDescription = footer.querySelector(
                '.footer-grid > div:first-child p'
            );

            if (footerDescription) {
                footerDescription.textContent = t.footer.description;
            }

            const footerColumns = footer.querySelectorAll(
                '.footer-grid > div'
            );

            if (footerColumns[1]) {

                const h4 = footerColumns[1].querySelector('h4');
                const buttons = footerColumns[1].querySelectorAll('button');

                if (h4) h4.textContent = t.footer.company;

                if (buttons[0]) buttons[0].textContent = t.footer.about;
                if (buttons[1]) buttons[1].textContent = t.footer.services;
                if (buttons[2]) buttons[2].textContent = t.faq.kicker.replace('Preguntas frecuentes', 'FAQ');
            }

            if (footerColumns[2]) {

                const h4 = footerColumns[2].querySelector('h4');
                const spans = footerColumns[2].querySelectorAll('span');
                const whatsapp = footerColumns[2].querySelector('.whatsapp-link');

                if (h4) h4.textContent = t.footer.attention;

                if (spans[0]) spans[0].textContent = t.footer.personalized;
                if (whatsapp) whatsapp.textContent = t.footer.whatsapp;
                if (spans[1]) spans[1].textContent = t.footer.form;
            }

            const copy = footer.querySelector('.copy');

            if (copy) {

                const spans = copy.querySelectorAll(':scope > span');

                if (spans[0]) {
                    spans[0].textContent = t.footer.copyright;
                }

                const links = copy.querySelectorAll('a');

                if (links[0]) links[0].textContent = t.footer.privacy;
                if (links[1]) links[1].textContent = t.footer.terms;
                if (links[2]) links[2].textContent = t.footer.cookies;
            }
        }


        /* =========================
           SELECTOR DE IDIOMA
           ========================= */

        const currentCode = document.getElementById(
            'languageCurrentCode'
        );

        if (currentCode) {
            currentCode.textContent = LANGUAGES[language];
        }

        document
            .querySelectorAll('.language-option')
            .forEach(option => {

                const isActive =
                    option.dataset.language === language;

                option.classList.toggle(
                    'active',
                    isActive
                );

                option.setAttribute(
                    'aria-selected',
                    isActive ? 'true' : 'false'
                );
            });


        /* =========================
           TÍTULO DEL DOCUMENTO
           ========================= */

        document.title =
            language === 'es'
                ? 'GÉNESIS GLOBAL — Donde comienzan nuevas oportunidades.'
                : language === 'en'
                    ? 'GÉNESIS GLOBAL — Where new opportunities begin.'
                    : language === 'fr'
                        ? 'GÉNESIS GLOBAL — Là où commencent de nouvelles opportunités.'
                        : 'GÉNESIS GLOBAL — Onde começam novas oportunidades.';


        console.log(
            `🌐 GÉNESIS GLOBAL — Idioma cambiado a: ${LANGUAGES[language]}`
        );
    }


    /* ============================================================
       SELECTOR
       ============================================================ */

    function setupLanguageSelector() {

        const switcher = document.getElementById(
            'languageSwitcher'
        );

        const currentButton = document.getElementById(
            'languageCurrent'
        );

        const menu = document.getElementById(
            'languageMenu'
        );

        if (!switcher || !currentButton || !menu) {
            console.error(
                '❌ No se encontró el selector de idiomas.'
            );
            return;
        }


        /* ABRIR / CERRAR */

        currentButton.addEventListener('click', function (event) {

            event.stopPropagation();

            const isOpen =
                switcher.classList.toggle('open');

            currentButton.setAttribute(
                'aria-expanded',
                isOpen ? 'true' : 'false'
            );
        });


        /* SELECCIONAR IDIOMA */

        menu.querySelectorAll('.language-option')
            .forEach(option => {

                option.addEventListener('click', function (event) {

                    event.stopPropagation();

                    const language =
                        this.dataset.language;

                    if (!translations[language]) {
                        return;
                    }

                    applyGenesisLanguage(language);

                    switcher.classList.remove('open');

                    currentButton.setAttribute(
                        'aria-expanded',
                        'false'
                    );
                });

            });


        /* CERRAR AL HACER CLICK FUERA */

        document.addEventListener('click', function (event) {

            if (!switcher.contains(event.target)) {

                switcher.classList.remove('open');

                currentButton.setAttribute(
                    'aria-expanded',
                    'false'
                );
            }

        });


        /* ESC */

        document.addEventListener('keydown', function (event) {

            if (event.key === 'Escape') {

                switcher.classList.remove('open');

                currentButton.setAttribute(
                    'aria-expanded',
                    'false'
                );
            }

        });

    }


    /* ============================================================
       API GLOBAL
       ============================================================ */

    window.GenesisI18n = {

        setLanguage: function (language) {
            applyGenesisLanguage(language);
        },

        getLanguage: function () {
            return currentLanguage;
        },

        translate: function (path) {
            return get(path);
        }

    };


    /* ============================================================
       INICIO
       ============================================================ */

    function initializeGenesisI18n() {

        /*
         * MUY IMPORTANTE:
         * Siempre empezamos en español.
         *
         * NO localStorage.
         * NO cookies.
         * NO idioma del navegador.
         */

        currentLanguage = 'es';

        setupLanguageSelector();

        applyGenesisLanguage('es');

        console.log(
            '✅ GÉNESIS GLOBAL — Sistema de idiomas iniciado en Español'
        );
    }


    if (document.readyState === 'loading') {

        document.addEventListener(
            'DOMContentLoaded',
            initializeGenesisI18n
        );

    } else {

        initializeGenesisI18n();

    }

})();
