'use strict';

/*
 * =========================================================
 * GÉNESIS GLOBAL
 * SISTEMA MULTILINGÜE
 * =========================================================
 *
 * Idioma por defecto: Español
 *
 * Idiomas:
 * ES = Español
 * EN = English
 * FR = Français
 * PT = Português
 *
 * IMPORTANTE:
 * - NO usamos localStorage para guardar el idioma.
 * - Al recargar la página comienza nuevamente en Español.
 * - El selector de idioma funciona sin modificar la URL.
 * =========================================================
 */


/* =========================================================
   DICCIONARIOS
========================================================= */

const GENESIS_TRANSLATIONS = {

    /* =====================================================
       ESPAÑOL
    ===================================================== */

    es: {

        language: {
            code: 'ES',
            name: 'Español',
            selector: 'Seleccionar idioma'
        },

        nav: {
            home: 'Inicio',
            services: 'Servicios',
            process: 'Cómo funciona',
            about: 'Nosotros',
            faq: 'FAQ',
            otherServices: 'Otros Servicios',
            plan: 'Planificar mi viaje →'
        },

        hero: {
            eyebrow: '✦ Una nueva forma de organizar tu viaje familiar',
            title: 'Los kilómetros no deberían separar a las <span>familias.</span>',
            slogan: '“Donde comienzan nuevas oportunidades.”',
            description: 'Planificamos y coordinamos tu viaje para que puedas concentrarte en lo más importante: <b>volver a estar cerca de quienes amas.</b>',
            plan: 'Planificar mi viaje →',
            seeProcess: 'Ver cómo funciona',
            human: 'Atención humana',
            clear: 'Proceso claro',
            support: 'Acompañamiento',
            globe: '🌍 <strong>Gira</strong> · <strong>Haz clic</strong> en un país'
        },

        planner: {

            kicker: 'Planea tu viaje',

            title: 'Cuéntanos <span class="text-gradient">de dónde vienes y hacia dónde vas</span>',

            description: 'Completa los datos y nosotros nos encargaremos del resto.',

            step1: {
                title: '1. Ruta del viaje',

                origin: '🇧🇷 ¿Desde dónde viajas?',

                originPlaceholder: 'Ej: Brasil, Cuba, España...',

                destination: '🇨🇺 ¿A dónde quieres viajar?',

                destinationPlaceholder: 'Ej: Cuba, Brasil, México...',

                continue: 'Continuar →',

                tip: '💡 También puedes hacer clic en un país del globo para seleccionarlo como destino.'
            },

            step2: {
                title: '2. Detalles del viaje',

                departure: '📅 Fecha aproximada de viaje',

                return: '📅 Fecha de regreso (opcional)',

                adults: '👥 Número de adultos',

                children: '👶 Número de niños',

                type: '❤️ Tipo de viaje',

                typePlaceholder: 'Selecciona una opción',

                family: 'Visita familiar',

                personal: 'Viaje personal',

                tourism: 'Turismo',

                other: 'Otro',

                back: '← Atrás',

                continue: 'Continuar →'
            },

            step3: {

                title: '3. Tus datos',

                name: '👤 Nombre completo',

                namePlaceholder: 'Tu nombre completo',

                whatsapp: '📱 WhatsApp',

                whatsappPlaceholder: '+54 9 11 1234 5678',

                email: '📧 Correo electrónico',

                emailPlaceholder: 'tucorreo@ejemplo.com',

                residence: '🌍 País donde resides actualmente',

                residencePlaceholder: 'Ej: Brasil, Argentina, España...',

                comments: '💬 Comentarios adicionales',

                commentsPlaceholder: 'Cuéntanos algo más que necesites...',

                back: '← Atrás',

                summary: 'Ver resumen'
            },

            step4: {

                title: '4. Revisa tu solicitud',

                edit: '← Editar',

                send: 'Enviar solicitud →'
            },

            alerts: {
                route: 'Por favor, selecciona tu origen y destino.',
                personal: 'Por favor, completa todos los datos personales.',
                success: '✅ ¡Solicitud enviada con éxito!\n\n📧 Se ha enviado un correo a GÉNESIS GLOBAL.\n📱 Se abrirá WhatsApp para contactar al asesor.',
                error: '❌ Hubo un error al enviar la solicitud.\n\nPor favor, intenta de nuevo o contacta directamente por WhatsApp al +1 (809) 999-5904.'
            },

            summary: {
                travelDate: '📅 Fecha de viaje:',
                returnDate: '📅 Regreso:',
                travelers: '👥 Viajeros:',
                adults: 'adultos',
                children: 'niños',
                reason: '❤️ Motivo:',
                name: '👤 Nombre:',
                whatsapp: '📱 WhatsApp:',
                email: '📧 Email:',
                residence: '🌍 Residencia:',
                comments: '💬 Comentarios:',
                unspecified: 'No especificada',
                none: 'Ninguno'
            }
        },

        proof: {
            kicker: 'Nuestro propósito',
            title: 'Conectamos destinos. <span>Reunimos familias.</span>',
            slogan: '“Donde comienzan nuevas oportunidades.”',
            description: 'Una experiencia digital sencilla, atención cercana y coordinación profesional para ayudarte a organizar tu próximo viaje.'
        },

        services: {
            kicker: 'Nuestros servicios',
            title: 'Todo lo que necesitas para <span class="text-gradient">organizar tu viaje.</span>',
            description: 'Soluciones pensadas para acompañarte durante cada etapa.',

            one: {
                title: 'Planificación de viajes',
                description: 'Rutas, fechas, conexiones e itinerarios organizados según tus necesidades.',
                button: 'Planificar ahora →'
            },

            two: {
                title: 'Viajes familiares',
                description: 'Acompañamiento pensado para quienes desean reunirse con sus seres queridos.',
                button: 'Más información →'
            },

            three: {
                title: 'Orientación documental',
                description: 'Información clara sobre documentos, requisitos y pasos que debes considerar.',
                button: 'Consultar →'
            },

            four: {
                title: 'Alojamiento y transporte',
                description: 'Coordinamos opciones de alojamiento y transporte para facilitar tu viaje.',
                button: 'Ver opciones →'
            }
        },

        process: {
            kicker: 'Experiencia del cliente',
            title: 'Simple desde el primer <span class="text-gradient">mensaje.</span>',
            description: 'Diseñamos el proceso para reducir dudas, pasos innecesarios y fricción.',

            one: {
                title: 'Cuéntanos tu situación',
                description: 'Completa una solicitud breve con la información de tu viaje.'
            },

            two: {
                title: 'Analizamos tus opciones',
                description: 'Nuestro equipo revisa tu situación y las alternativas disponibles.'
            },

            three: {
                title: 'Recibes tu propuesta',
                description: 'Te explicamos las opciones, los pasos y la información relevante.'
            },

            four: {
                title: 'Te acompañamos',
                description: 'Coordinamos el proceso y te orientamos durante cada etapa.'
            }
        },

        about: {
            kicker: 'GÉNESIS GLOBAL',
            title: 'Una marca creada para <span class="text-gradient">acercar personas.</span>',
            description: 'Queremos construir una empresa moderna, humana y confiable que facilite la planificación de viajes y ayude a las personas a estar más cerca de quienes aman.',
            slogan: '“Donde comienzan nuevas oportunidades.”',
            trust: 'Confianza',
            transparency: 'Transparencia',
            closeness: 'Cercanía',
            professionalism: 'Profesionalismo'
        },

        faq: {
            kicker: 'Preguntas frecuentes',
            title: 'Claridad antes de <span class="text-gradient">decidir.</span>',

            one: {
                question: '¿GÉNESIS GLOBAL vende visas?',
                answer: 'No. La empresa puede orientar sobre requisitos aplicables y coordinar con profesionales autorizados cuando un caso lo requiera. Las decisiones migratorias corresponden a las autoridades competentes.'
            },

            two: {
                question: '¿Puedo solicitar ayuda para viajar hacia Cuba?',
                answer: 'Sí. El concepto contempla personas que viven en Brasil u otros países y quieren organizar un viaje a Cuba para visitar a sus familiares, sujeto a las normas vigentes.'
            },

            three: {
                question: '¿También se pueden organizar viajes desde Cuba?',
                answer: 'Sí. Puede contemplarse la planificación de viajes desde Cuba hacia Brasil u otros destinos, dependiendo de requisitos y servicios disponibles.'
            },

            four: {
                question: '¿Cómo empiezo?',
                answer: 'Completa el formulario de orientación. Un miembro del equipo podrá revisar tu solicitud y explicarte los próximos pasos.'
            }
        },

        footer: {
            slogan: 'Donde comienzan nuevas oportunidades.',
            statement: 'Conectamos destinos. Reunimos familias.',

            company: 'Empresa',
            about: 'Nosotros',
            services: 'Servicios',
            faq: 'FAQ',

            attention: 'Atención',
            personalized: 'Orientación personalizada',
            whatsapp: 'WhatsApp Business',
            form: 'Formulario de solicitud',

            copyright: '© 2026 GÉNESIS GLOBAL — Donde comienzan nuevas oportunidades.',

            privacy: 'Política de Privacidad',
            terms: 'Términos y Condiciones',
            cookies: 'Política de Cookies'
        }
    },


    /* =====================================================
       ENGLISH
    ===================================================== */

    en: {

        language: {
            code: 'EN',
            name: 'English',
            selector: 'Select language'
        },

        nav: {
            home: 'Home',
            services: 'Services',
            process: 'How it works',
            about: 'About us',
            faq: 'FAQ',
            otherServices: 'Other Services',
            plan: 'Plan my trip →'
        },

        hero: {
            eyebrow: '✦ A new way to organize your family trip',
            title: 'Distance should never separate <span>families.</span>',
            slogan: '“Where new opportunities begin.”',
            description: 'We plan and coordinate your trip so you can focus on what matters most: <b>being close to the people you love again.</b>',
            plan: 'Plan my trip →',
            seeProcess: 'See how it works',
            human: 'Human support',
            clear: 'Clear process',
            support: 'Personal guidance',
            globe: '🌍 <strong>Rotate</strong> · <strong>Click</strong> on a country'
        },

        planner: {

            kicker: 'Plan your trip',

            title: 'Tell us <span class="text-gradient">where you are coming from and where you are going</span>',

            description: 'Complete the information and we will take care of the rest.',

            step1: {
                title: '1. Trip route',

                origin: '🇧🇷 Where are you traveling from?',

                originPlaceholder: 'E.g.: Brazil, Cuba, Spain...',

                destination: '🇨🇺 Where do you want to travel?',

                destinationPlaceholder: 'E.g.: Cuba, Brazil, Mexico...',

                continue: 'Continue →',

                tip: '💡 You can also click on a country on the globe to select it as your destination.'
            },

            step2: {
                title: '2. Trip details',

                departure: '📅 Approximate travel date',

                return: '📅 Return date (optional)',

                adults: '👥 Number of adults',

                children: '👶 Number of children',

                type: '❤️ Type of trip',

                typePlaceholder: 'Select an option',

                family: 'Family visit',

                personal: 'Personal trip',

                tourism: 'Tourism',

                other: 'Other',

                back: '← Back',

                continue: 'Continue →'
            },

            step3: {

                title: '3. Your information',

                name: '👤 Full name',

                namePlaceholder: 'Your full name',

                whatsapp: '📱 WhatsApp',

                whatsappPlaceholder: '+54 9 11 1234 5678',

                email: '📧 Email address',

                emailPlaceholder: 'youremail@example.com',

                residence: '🌍 Country where you currently live',

                residencePlaceholder: 'E.g.: Brazil, Argentina, Spain...',

                comments: '💬 Additional comments',

                commentsPlaceholder: 'Tell us anything else you may need...',

                back: '← Back',

                summary: 'View summary'
            },

            step4: {

                title: '4. Review your request',

                edit: '← Edit',

                send: 'Send request →'
            },

            alerts: {
                route: 'Please select your origin and destination.',
                personal: 'Please complete all personal information.',
                success: '✅ Your request was sent successfully!\n\n📧 An email has been sent to GÉNESIS GLOBAL.\n📱 WhatsApp will open to contact an advisor.',
                error: '❌ There was an error sending your request.\n\nPlease try again or contact us directly on WhatsApp at +1 (809) 999-5904.'
            },

            summary: {
                travelDate: '📅 Travel date:',
                returnDate: '📅 Return:',
                travelers: '👥 Travelers:',
                adults: 'adults',
                children: 'children',
                reason: '❤️ Reason:',
                name: '👤 Name:',
                whatsapp: '📱 WhatsApp:',
                email: '📧 Email:',
                residence: '🌍 Residence:',
                comments: '💬 Comments:',
                unspecified: 'Not specified',
                none: 'None'
            }
        },

        proof: {
            kicker: 'Our purpose',
            title: 'We connect destinations. <span>We bring families together.</span>',
            slogan: '“Where new opportunities begin.”',
            description: 'A simple digital experience, personal support and professional coordination to help you organize your next trip.'
        },

        services: {
            kicker: 'Our services',
            title: 'Everything you need to <span class="text-gradient">organize your trip.</span>',
            description: 'Solutions designed to support you throughout every stage.',

            one: {
                title: 'Trip planning',
                description: 'Routes, dates, connections and itineraries organized according to your needs.',
                button: 'Plan now →'
            },

            two: {
                title: 'Family travel',
                description: 'Personal support for people who want to reunite with their loved ones.',
                button: 'Learn more →'
            },

            three: {
                title: 'Document guidance',
                description: 'Clear information about documents, requirements and important steps to consider.',
                button: 'Ask us →'
            },

            four: {
                title: 'Accommodation & transportation',
                description: 'We coordinate accommodation and transportation options to make your trip easier.',
                button: 'View options →'
            }
        },

        process: {
            kicker: 'Customer experience',
            title: 'Simple from the first <span class="text-gradient">message.</span>',
            description: 'We designed the process to reduce uncertainty, unnecessary steps and friction.',

            one: {
                title: 'Tell us your situation',
                description: 'Complete a short request with your trip information.'
            },

            two: {
                title: 'We analyze your options',
                description: 'Our team reviews your situation and the available alternatives.'
            },

            three: {
                title: 'You receive your proposal',
                description: 'We explain the options, steps and relevant information.'
            },

            four: {
                title: 'We support you',
                description: 'We coordinate the process and guide you throughout each stage.'
            }
        },

        about: {
            kicker: 'GÉNESIS GLOBAL',
            title: 'A brand created to <span class="text-gradient">bring people closer.</span>',
            description: 'We want to build a modern, human and trustworthy company that makes travel planning easier and helps people stay closer to those they love.',
            slogan: '“Where new opportunities begin.”',
            trust: 'Trust',
            transparency: 'Transparency',
            closeness: 'Closeness',
            professionalism: 'Professionalism'
        },

        faq: {
            kicker: 'Frequently asked questions',
            title: 'Clarity before you <span class="text-gradient">decide.</span>',

            one: {
                question: 'Does GÉNESIS GLOBAL sell visas?',
                answer: 'No. The company can provide guidance regarding applicable requirements and coordinate with authorized professionals when necessary. Immigration decisions are made by the competent authorities.'
            },

            two: {
                question: 'Can I request help traveling to Cuba?',
                answer: 'Yes. The concept includes people living in Brazil or other countries who want to organize a trip to Cuba to visit their families, subject to current regulations.'
            },

            three: {
                question: 'Can trips from Cuba also be organized?',
                answer: 'Yes. Travel planning from Cuba to Brazil or other destinations may be considered depending on requirements and available services.'
            },

            four: {
                question: 'How do I get started?',
                answer: 'Complete the guidance form. A member of our team can review your request and explain the next steps.'
            }
        },

        footer: {
            slogan: 'Where new opportunities begin.',
            statement: 'We connect destinations. We bring families together.',

            company: 'Company',
            about: 'About us',
            services: 'Services',
            faq: 'FAQ',

            attention: 'Support',
            personalized: 'Personal guidance',
            whatsapp: 'WhatsApp Business',
            form: 'Request form',

            copyright: '© 2026 GÉNESIS GLOBAL — Where new opportunities begin.',

            privacy: 'Privacy Policy',
            terms: 'Terms & Conditions',
            cookies: 'Cookie Policy'
        }
    },


    /* =====================================================
       FRANÇAIS
    ===================================================== */

    fr: {

        language: {
            code: 'FR',
            name: 'Français',
            selector: 'Choisir la langue'
        },

        nav: {
            home: 'Accueil',
            services: 'Services',
            process: 'Comment ça marche',
            about: 'À propos',
            faq: 'FAQ',
            otherServices: 'Autres services',
            plan: 'Planifier mon voyage →'
        },

        hero: {
            eyebrow: '✦ Une nouvelle façon d’organiser votre voyage en famille',
            title: 'Les kilomètres ne devraient jamais séparer les <span>familles.</span>',
            slogan: '« Là où commencent de nouvelles opportunités. »',
            description: 'Nous planifions et coordonnons votre voyage afin que vous puissiez vous concentrer sur l’essentiel : <b>être à nouveau près de ceux que vous aimez.</b>',
            plan: 'Planifier mon voyage →',
            seeProcess: 'Voir comment ça marche',
            human: 'Accompagnement humain',
            clear: 'Processus clair',
            support: 'Accompagnement personnalisé',
            globe: '🌍 <strong>Faites tourner</strong> · <strong>Cliquez</strong> sur un pays'
        },

        planner: {

            kicker: 'Planifiez votre voyage',

            title: 'Dites-nous <span class="text-gradient">d’où vous venez et où vous allez</span>',

            description: 'Remplissez les informations et nous nous occuperons du reste.',

            step1: {
                title: '1. Itinéraire du voyage',

                origin: '🇧🇷 Depuis où voyagez-vous ?',

                originPlaceholder: 'Ex. : Brésil, Cuba, Espagne...',

                destination: '🇨🇺 Où souhaitez-vous voyager ?',

                destinationPlaceholder: 'Ex. : Cuba, Brésil, Mexique...',

                continue: 'Continuer →',

                tip: '💡 Vous pouvez également cliquer sur un pays du globe pour le sélectionner comme destination.'
            },

            step2: {
                title: '2. Détails du voyage',

                departure: '📅 Date approximative du voyage',

                return: '📅 Date de retour (facultative)',

                adults: '👥 Nombre d’adultes',

                children: '👶 Nombre d’enfants',

                type: '❤️ Type de voyage',

                typePlaceholder: 'Sélectionnez une option',

                family: 'Visite familiale',

                personal: 'Voyage personnel',

                tourism: 'Tourisme',

                other: 'Autre',

                back: '← Retour',

                continue: 'Continuer →'
            },

            step3: {

                title: '3. Vos informations',

                name: '👤 Nom complet',

                namePlaceholder: 'Votre nom complet',

                whatsapp: '📱 WhatsApp',

                whatsappPlaceholder: '+54 9 11 1234 5678',

                email: '📧 Adresse e-mail',

                emailPlaceholder: 'votremail@exemple.com',

                residence: '🌍 Pays où vous résidez actuellement',

                residencePlaceholder: 'Ex. : Brésil, Argentine, Espagne...',

                comments: '💬 Commentaires supplémentaires',

                commentsPlaceholder: 'Dites-nous ce dont vous avez besoin...',

                back: '← Retour',

                summary: 'Voir le résumé'
            },

            step4: {

                title: '4. Vérifiez votre demande',

                edit: '← Modifier',

                send: 'Envoyer la demande →'
            },

            alerts: {
                route: 'Veuillez sélectionner votre origine et votre destination.',
                personal: 'Veuillez compléter toutes vos informations personnelles.',
                success: '✅ Votre demande a été envoyée avec succès !\n\n📧 Un e-mail a été envoyé à GÉNESIS GLOBAL.\n📱 WhatsApp va s’ouvrir pour contacter un conseiller.',
                error: '❌ Une erreur est survenue lors de l’envoi de votre demande.\n\nVeuillez réessayer ou nous contacter directement sur WhatsApp au +1 (809) 999-5904.'
            },

            summary: {
                travelDate: '📅 Date du voyage :',
                returnDate: '📅 Retour :',
                travelers: '👥 Voyageurs :',
                adults: 'adultes',
                children: 'enfants',
                reason: '❤️ Motif :',
                name: '👤 Nom :',
                whatsapp: '📱 WhatsApp :',
                email: '📧 E-mail :',
                residence: '🌍 Résidence :',
                comments: '💬 Commentaires :',
                unspecified: 'Non précisée',
                none: 'Aucun'
            }
        },

        proof: {
            kicker: 'Notre objectif',
            title: 'Nous connectons les destinations. <span>Nous réunissons les familles.</span>',
            slogan: '« Là où commencent de nouvelles opportunités. »',
            description: 'Une expérience numérique simple, un accompagnement humain et une coordination professionnelle pour vous aider à organiser votre prochain voyage.'
        },

        services: {
            kicker: 'Nos services',
            title: 'Tout ce dont vous avez besoin pour <span class="text-gradient">organiser votre voyage.</span>',
            description: 'Des solutions conçues pour vous accompagner à chaque étape.',

            one: {
                title: 'Planification de voyages',
                description: 'Itinéraires, dates, correspondances et programmes organisés selon vos besoins.',
                button: 'Planifier maintenant →'
            },

            two: {
                title: 'Voyages en famille',
                description: 'Un accompagnement pensé pour ceux qui souhaitent retrouver leurs proches.',
                button: 'En savoir plus →'
            },

            three: {
                title: 'Orientation documentaire',
                description: 'Des informations claires sur les documents, les exigences et les étapes importantes.',
                button: 'Consulter →'
            },

            four: {
                title: 'Hébergement et transport',
                description: 'Nous coordonnons des options d’hébergement et de transport pour faciliter votre voyage.',
                button: 'Voir les options →'
            }
        },

        process: {
            kicker: 'Expérience client',
            title: 'Simple dès le premier <span class="text-gradient">message.</span>',
            description: 'Nous avons conçu le processus pour réduire les doutes, les étapes inutiles et les difficultés.',

            one: {
                title: 'Expliquez-nous votre situation',
                description: 'Remplissez une courte demande avec les informations de votre voyage.'
            },

            two: {
                title: 'Nous analysons vos options',
                description: 'Notre équipe examine votre situation et les alternatives disponibles.'
            },

            three: {
                title: 'Vous recevez votre proposition',
                description: 'Nous vous expliquons les options, les étapes et les informations importantes.'
            },

            four: {
                title: 'Nous vous accompagnons',
                description: 'Nous coordonnons le processus et vous guidons à chaque étape.'
            }
        },

        about: {
            kicker: 'GÉNESIS GLOBAL',
            title: 'Une marque créée pour <span class="text-gradient">rapprocher les personnes.</span>',
            description: 'Nous souhaitons construire une entreprise moderne, humaine et fiable qui facilite la planification des voyages et aide les personnes à rester proches de ceux qu’elles aiment.',
            slogan: '« Là où commencent de nouvelles opportunités. »',
            trust: 'Confiance',
            transparency: 'Transparence',
            closeness: 'Proximité',
            professionalism: 'Professionnalisme'
        },

        faq: {
            kicker: 'Questions fréquentes',
            title: 'La clarté avant de <span class="text-gradient">décider.</span>',

            one: {
                question: 'GÉNESIS GLOBAL vend-elle des visas ?',
                answer: 'Non. L’entreprise peut fournir des informations sur les exigences applicables et coordonner avec des professionnels autorisés lorsque cela est nécessaire. Les décisions migratoires relèvent des autorités compétentes.'
            },

            two: {
                question: 'Puis-je demander de l’aide pour voyager vers Cuba ?',
                answer: 'Oui. Le concept comprend les personnes vivant au Brésil ou dans d’autres pays qui souhaitent organiser un voyage à Cuba pour rendre visite à leur famille, sous réserve des réglementations en vigueur.'
            },

            three: {
                question: 'Est-il également possible d’organiser des voyages depuis Cuba ?',
                answer: 'Oui. La planification de voyages depuis Cuba vers le Brésil ou d’autres destinations peut être envisagée selon les exigences et les services disponibles.'
            },

            four: {
                question: 'Comment commencer ?',
                answer: 'Remplissez le formulaire d’orientation. Un membre de notre équipe pourra examiner votre demande et vous expliquer les prochaines étapes.'
            }
        },

        footer: {
            slogan: 'Là où commencent de nouvelles opportunités.',
            statement: 'Nous connectons les destinations. Nous réunissons les familles.',

            company: 'Entreprise',
            about: 'À propos',
            services: 'Services',
            faq: 'FAQ',

            attention: 'Assistance',
            personalized: 'Orientation personnalisée',
            whatsapp: 'WhatsApp Business',
            form: 'Formulaire de demande',

            copyright: '© 2026 GÉNESIS GLOBAL — Là où commencent de nouvelles opportunités.',

            privacy: 'Politique de confidentialité',
            terms: 'Conditions générales',
            cookies: 'Politique relative aux cookies'
        }
    },


    /* =====================================================
       PORTUGUÊS
    ===================================================== */

    pt: {

        language: {
            code: 'PT',
            name: 'Português',
            selector: 'Selecionar idioma'
        },

        nav: {
            home: 'Início',
            services: 'Serviços',
            process: 'Como funciona',
            about: 'Sobre nós',
            faq: 'FAQ',
            otherServices: 'Outros Serviços',
            plan: 'Planejar minha viagem →'
        },

        hero: {
            eyebrow: '✦ Uma nova forma de organizar sua viagem em família',
            title: 'Os quilômetros não deveriam separar as <span>famílias.</span>',
            slogan: '“Onde começam novas oportunidades.”',
            description: 'Planejamos e coordenamos sua viagem para que você possa se concentrar no que realmente importa: <b>estar novamente perto de quem você ama.</b>',
            plan: 'Planejar minha viagem →',
            seeProcess: 'Ver como funciona',
            human: 'Atendimento humano',
            clear: 'Processo claro',
            support: 'Acompanhamento',
            globe: '🌍 <strong>Gire</strong> · <strong>Clique</strong> em um país'
        },

        planner: {

            kicker: 'Planeje sua viagem',

            title: 'Conte-nos <span class="text-gradient">de onde você vem e para onde vai</span>',

            description: 'Preencha os dados e nós cuidaremos do restante.',

            step1: {
                title: '1. Rota da viagem',

                origin: '🇧🇷 De onde você está viajando?',

                originPlaceholder: 'Ex.: Brasil, Cuba, Espanha...',

                destination: '🇨🇺 Para onde você quer viajar?',

                destinationPlaceholder: 'Ex.: Cuba, Brasil, México...',

                continue: 'Continuar →',

                tip: '💡 Você também pode clicar em um país no globo para selecioná-lo como destino.'
            },

            step2: {
                title: '2. Detalhes da viagem',

                departure: '📅 Data aproximada da viagem',

                return: '📅 Data de retorno (opcional)',

                adults: '👥 Número de adultos',

                children: '👶 Número de crianças',

                type: '❤️ Tipo de viagem',

                typePlaceholder: 'Selecione uma opção',

                family: 'Visita familiar',

                personal: 'Viagem pessoal',

                tourism: 'Turismo',

                other: 'Outro',

                back: '← Voltar',

                continue: 'Continuar →'
            },

            step3: {

                title: '3. Seus dados',

                name: '👤 Nome completo',

                namePlaceholder: 'Seu nome completo',

                whatsapp: '📱 WhatsApp',

                whatsappPlaceholder: '+54 9 11 1234 5678',

                email: '📧 E-mail',

                emailPlaceholder: 'seuemail@exemplo.com',

                residence: '🌍 País onde você mora atualmente',

                residencePlaceholder: 'Ex.: Brasil, Argentina, Espanha...',

                comments: '💬 Comentários adicionais',

                commentsPlaceholder: 'Conte-nos algo mais que você precise...',

                back: '← Voltar',

                summary: 'Ver resumo'
            },

            step4: {

                title: '4. Revise sua solicitação',

                edit: '← Editar',

                send: 'Enviar solicitação →'
            },

            alerts: {
                route: 'Por favor, selecione sua origem e destino.',
                personal: 'Por favor, preencha todos os seus dados pessoais.',
                success: '✅ Sua solicitação foi enviada com sucesso!\n\n📧 Um e-mail foi enviado para a GÉNESIS GLOBAL.\n📱 O WhatsApp será aberto para entrar em contato com um consultor.',
                error: '❌ Ocorreu um erro ao enviar sua solicitação.\n\nTente novamente ou entre em contato diretamente pelo WhatsApp: +1 (809) 999-5904.'
            },

            summary: {
                travelDate: '📅 Data da viagem:',
                returnDate: '📅 Retorno:',
                travelers: '👥 Viajantes:',
                adults: 'adultos',
                children: 'crianças',
                reason: '❤️ Motivo:',
                name: '👤 Nome:',
                whatsapp: '📱 WhatsApp:',
                email: '📧 E-mail:',
                residence: '🌍 Residência:',
                comments: '💬 Comentários:',
                unspecified: 'Não especificada',
                none: 'Nenhum'
            }
        },

        proof: {
            kicker: 'Nosso propósito',
            title: 'Conectamos destinos. <span>Reunimos famílias.</span>',
            slogan: '“Onde começam novas oportunidades.”',
            description: 'Uma experiência digital simples, atendimento próximo e coordenação profissional para ajudar você a organizar sua próxima viagem.'
        },

        services: {
            kicker: 'Nossos serviços',
            title: 'Tudo o que você precisa para <span class="text-gradient">organizar sua viagem.</span>',
            description: 'Soluções pensadas para acompanhar você em cada etapa.',

            one: {
                title: 'Planejamento de viagens',
                description: 'Rotas, datas, conexões e itinerários organizados de acordo com suas necessidades.',
                button: 'Planejar agora →'
            },

            two: {
                title: 'Viagens em família',
                description: 'Acompanhamento pensado para quem deseja reencontrar seus entes queridos.',
                button: 'Saiba mais →'
            },

            three: {
                title: 'Orientação documental',
                description: 'Informações claras sobre documentos, requisitos e etapas importantes.',
                button: 'Consultar →'
            },

            four: {
                title: 'Hospedagem e transporte',
                description: 'Coordenamos opções de hospedagem e transporte para facilitar sua viagem.',
                button: 'Ver opções →'
            }
        },

        process: {
            kicker: 'Experiência do cliente',
            title: 'Simples desde a primeira <span class="text-gradient">mensagem.</span>',
            description: 'Criamos o processo para reduzir dúvidas, etapas desnecessárias e dificuldades.',

            one: {
                title: 'Conte-nos sua situação',
                description: 'Preencha uma solicitação breve com as informações da sua viagem.'
            },

            two: {
                title: 'Analisamos suas opções',
                description: 'Nossa equipe analisa sua situação e as alternativas disponíveis.'
            },

            three: {
                title: 'Você recebe sua proposta',
                description: 'Explicamos as opções, os passos e as informações importantes.'
            },

            four: {
                title: 'Acompanhamos você',
                description: 'Coordenamos o processo e orientamos você durante cada etapa.'
            }
        },

        about: {
            kicker: 'GÉNESIS GLOBAL',
            title: 'Uma marca criada para <span class="text-gradient">aproximar pessoas.</span>',
            description: 'Queremos construir uma empresa moderna, humana e confiável que facilite o planejamento de viagens e ajude as pessoas a ficarem mais próximas de quem amam.',
            slogan: '“Onde começam novas oportunidades.”',
            trust: 'Confiança',
            transparency: 'Transparência',
            closeness: 'Proximidade',
            professionalism: 'Profissionalismo'
        },

        faq: {
            kicker: 'Perguntas frequentes',
            title: 'Clareza antes de <span class="text-gradient">decidir.</span>',

            one: {
                question: 'A GÉNESIS GLOBAL vende vistos?',
                answer: 'Não. A empresa pode orientar sobre os requisitos aplicáveis e coordenar com profissionais autorizados quando necessário. As decisões migratórias são de responsabilidade das autoridades competentes.'
            },

            two: {
                question: 'Posso solicitar ajuda para viajar para Cuba?',
                answer: 'Sim. O conceito contempla pessoas que vivem no Brasil ou em outros países e desejam organizar uma viagem a Cuba para visitar seus familiares, de acordo com as normas vigentes.'
            },

            three: {
                question: 'Também é possível organizar viagens a partir de Cuba?',
                answer: 'Sim. O planejamento de viagens de Cuba para o Brasil ou outros destinos pode ser considerado dependendo dos requisitos e serviços disponíveis.'
            },

            four: {
                question: 'Como começo?',
                answer: 'Preencha o formulário de orientação. Um membro da nossa equipe poderá analisar sua solicitação e explicar os próximos passos.'
            }
        },

        footer: {
            slogan: 'Onde começam novas oportunidades.',
            statement: 'Conectamos destinos. Reunimos famílias.',

            company: 'Empresa',
            about: 'Sobre nós',
            services: 'Serviços',
            faq: 'FAQ',

            attention: 'Atendimento',
            personalized: 'Orientação personalizada',
            whatsapp: 'WhatsApp Business',
            form: 'Formulário de solicitação',

            copyright: '© 2026 GÉNESIS GLOBAL — Onde começam novas oportunidades.',

            privacy: 'Política de Privacidade',
            terms: 'Termos e Condições',
            cookies: 'Política de Cookies'
        }
    }

};


/* =========================================================
   ESTADO
========================================================= */

let genesisCurrentLanguage = 'es';


/* =========================================================
   OBTENER TRADUCCIÓN
========================================================= */

function genesisGetTranslation(path, language = genesisCurrentLanguage) {

    const dictionary =
        GENESIS_TRANSLATIONS[language] ||
        GENESIS_TRANSLATIONS.es;

    return path.split('.').reduce((obj, key) => {

        return obj &&
            Object.prototype.hasOwnProperty.call(obj, key)
            ? obj[key]
            : undefined;

    }, dictionary);
}


/* =========================================================
   HELPERS
========================================================= */

function genesisSetText(selector, value) {

    const element = document.querySelector(selector);

    if (!element || value === undefined || value === null) {
        return;
    }

    element.innerHTML = value;
}


function genesisSetPlaceholder(selector, value) {

    const element = document.querySelector(selector);

    if (!element || value === undefined || value === null) {
        return;
    }

    element.setAttribute('placeholder', value);
}


function genesisSetTextAll(selector, values) {

    const elements = document.querySelectorAll(selector);

    if (!elements.length || !Array.isArray(values)) {
        return;
    }

    elements.forEach((element, index) => {

        if (values[index] !== undefined) {
            element.innerHTML = values[index];
        }

    });
}


/* =========================================================
   APLICAR IDIOMA
========================================================= */

function applyGenesisLanguage(language) {

    /*
     * Solo aceptamos idiomas disponibles.
     */

    if (!GENESIS_TRANSLATIONS[language]) {
        language = 'es';
    }

    genesisCurrentLanguage = language;

    const t = GENESIS_TRANSLATIONS[language];


    /* =====================================================
       HTML LANG
    ===================================================== */

    document.documentElement.lang = language;


    /* =====================================================
       TITLE
    ===================================================== */

    document.title =
        language === 'es'
            ? 'GÉNESIS GLOBAL — Donde comienzan nuevas oportunidades.'
            : language === 'en'
                ? 'GÉNESIS GLOBAL — Where new opportunities begin.'
                : language === 'fr'
                    ? 'GÉNESIS GLOBAL — Là où commencent de nouvelles opportunités.'
                    : 'GÉNESIS GLOBAL — Onde começam novas oportunidades.';


    /* =====================================================
       NAVBAR
    ===================================================== */

    const navButtons =
        document.querySelectorAll('#links > button');

    if (navButtons.length >= 7) {

        navButtons[0].innerHTML = t.nav.home;
        navButtons[1].innerHTML = t.nav.services;
        navButtons[2].innerHTML = t.nav.process;
        navButtons[3].innerHTML = t.nav.about;
        navButtons[4].innerHTML = t.nav.faq;
        navButtons[5].innerHTML = t.nav.otherServices;
        navButtons[6].innerHTML = t.nav.plan;

    }


    /* =====================================================
       BRAND
    ===================================================== */

    document
        .querySelectorAll('.brand small')
        .forEach(element => {

            element.textContent = t.footer.slogan;

        });


    /* =====================================================
       HERO
    ===================================================== */

    genesisSetText('.hero .eyebrow', t.hero.eyebrow);

    genesisSetText('.hero h1', t.hero.title);

    genesisSetText('.hero .slogan', t.hero.slogan);

    genesisSetText('.hero-copy > p', t.hero.description);


    const heroButtons =
        document.querySelectorAll('.hero-copy .actions button');

    if (heroButtons.length >= 2) {

        heroButtons[0].innerHTML = t.hero.plan;

        heroButtons[1].innerHTML = t.hero.seeProcess;

    }


    const trustItems =
        document.querySelectorAll('.hero-copy .trust span');

    if (trustItems.length >= 3) {

        trustItems[0].textContent = t.hero.human;
        trustItems[1].textContent = t.hero.clear;
        trustItems[2].textContent = t.hero.support;

    }


    genesisSetText('#globe-container .globe-label', t.hero.globe);


    /* =====================================================
       PLANNER — HEADER
    ===================================================== */

    genesisSetText('.planner-section .kicker', t.planner.kicker);

    genesisSetText('.planner-section .section-title', t.planner.title);

    genesisSetText('.planner-section > .planner-card > p', t.planner.description);


    /* =====================================================
       PLANNER — STEP 1
    ===================================================== */

    const step1 = document.getElementById('step1');

    if (step1) {

        const labels = step1.querySelectorAll('label');

        if (labels.length >= 2) {

            labels[0].innerHTML = t.planner.step1.origin;
            labels[1].innerHTML = t.planner.step1.destination;

        }

        genesisSetPlaceholder(
            '#origenInput',
            t.planner.step1.originPlaceholder
        );

        genesisSetPlaceholder(
            '#destinoInput',
            t.planner.step1.destinationPlaceholder
        );

        const button =
            step1.querySelector('.btn-continuar');

        if (button) {
            button.innerHTML = t.planner.step1.continue;
        }

        const tip =
            step1.querySelector('.tip');

        if (tip) {
            tip.innerHTML = t.planner.step1.tip;
        }

    }


    /* =====================================================
       PLANNER — STEP 2
    ===================================================== */

    const step2 = document.getElementById('step2');

    if (step2) {

        const labels = step2.querySelectorAll('label');

        if (labels.length >= 5) {

            labels[0].innerHTML = t.planner.step2.departure;
            labels[1].innerHTML = t.planner.step2.return;
            labels[2].innerHTML = t.planner.step2.adults;
            labels[3].innerHTML = t.planner.step2.children;
            labels[4].innerHTML = t.planner.step2.type;

        }

        const select =
            document.getElementById('tipoViaje');

        if (select) {

            const options = select.querySelectorAll('option');

            if (options.length >= 5) {

                options[0].textContent =
                    t.planner.step2.typePlaceholder;

                options[1].textContent =
                    t.planner.step2.family;

                options[2].textContent =
                    t.planner.step2.personal;

                options[3].textContent =
                    t.planner.step2.tourism;

                options[4].textContent =
                    t.planner.step2.other;

            }

        }

        const buttons =
            step2.querySelectorAll('button');

        buttons.forEach(button => {

            if (
                button.classList.contains('btn-back') ||
                button.classList.contains('back')
            ) {
                button.innerHTML =
                    t.planner.step2.back;
            }

            if (
                button.classList.contains('btn-continuar') ||
                button.classList.contains('continue')
            ) {
                button.innerHTML =
                    t.planner.step2.continue;
            }

        });

    }


    /* =====================================================
       PLANNER — STEP 3
    ===================================================== */

    const step3 = document.getElementById('step3');

    if (step3) {

        const labels = step3.querySelectorAll('label');

        if (labels.length >= 5) {

            labels[0].innerHTML = t.planner.step3.name;
            labels[1].innerHTML = t.planner.step3.whatsapp;
            labels[2].innerHTML = t.planner.step3.email;
            labels[3].innerHTML = t.planner.step3.residence;
            labels[4].innerHTML = t.planner.step3.comments;

        }

        genesisSetPlaceholder(
            '#nombre',
            t.planner.step3.namePlaceholder
        );

        genesisSetPlaceholder(
            '#whatsapp',
            t.planner.step3.whatsappPlaceholder
        );

        genesisSetPlaceholder(
            '#email',
            t.planner.step3.emailPlaceholder
        );

        genesisSetPlaceholder(
            '#residencia',
            t.planner.step3.residencePlaceholder
        );

        genesisSetPlaceholder(
            '#comentarios',
            t.planner.step3.commentsPlaceholder
        );

        const buttons =
            step3.querySelectorAll('button');

        buttons.forEach(button => {

            const text =
                button.textContent.trim().toLowerCase();

            if (
                text.includes('atrás') ||
                text.includes('back') ||
                text.includes('retour') ||
                text.includes('voltar')
            ) {
                button.innerHTML =
                    t.planner.step3.back;
            }

            if (
                text.includes('resumen') ||
                text.includes('summary') ||
                text.includes('résumé') ||
                text.includes('resumo')
            ) {
                button.innerHTML =
                    t.planner.step3.summary;
            }

        });

    }


    /* =====================================================
       PLANNER — STEP 4
    ===================================================== */

    const step4 = document.getElementById('step4');

    if (step4) {

        const title =
            step4.querySelector('h3, h2, .step-title');

        if (title) {
            title.innerHTML = t.planner.step4.title;
        }

        const buttons =
            step4.querySelectorAll('button');

        buttons.forEach(button => {

            const text =
                button.textContent.trim().toLowerCase();

            if (
                text.includes('editar') ||
                text.includes('edit') ||
                text.includes('modifier') ||
                text.includes('editar')
            ) {
                button.innerHTML =
                    t.planner.step4.edit;
            }

            if (
                text.includes('enviar') ||
                text.includes('send') ||
                text.includes('envoyer')
            ) {
                button.innerHTML =
                    t.planner.step4.send;
            }

        });

    }


    /* =====================================================
       PROOF / PURPOSE
    ===================================================== */

    const proof =
        document.querySelector('.proof-card');

    if (proof) {

        const kicker =
            proof.querySelector('.kicker');

        const title =
            proof.querySelector('h2');

        const slogan =
            proof.querySelector('.slogan');

        const paragraph =
            proof.querySelector('p');

        if (kicker) {
            kicker.innerHTML = t.proof.kicker;
        }

        if (title) {
            title.innerHTML = t.proof.title;
        }

        if (slogan) {
            slogan.innerHTML = t.proof.slogan;
        }

        if (paragraph) {
            paragraph.innerHTML = t.proof.description;
        }

    }


    /* =====================================================
       SERVICES
    ===================================================== */

    const servicesSection =
        document.getElementById('servicios');

    if (servicesSection) {

        const kicker =
            servicesSection.querySelector('.kicker');

        const title =
            servicesSection.querySelector('h2');

        const description =
            servicesSection.querySelector('.head p');

        if (kicker) {
            kicker.innerHTML = t.services.kicker;
        }

        if (title) {
            title.innerHTML = t.services.title;
        }

        if (description) {
            description.innerHTML = t.services.description;
        }

        const cards =
            servicesSection.querySelectorAll('.card');

        const serviceData = [
            t.services.one,
            t.services.two,
            t.services.three,
            t.services.four
        ];

        cards.forEach((card, index) => {

            const data = serviceData[index];

            if (!data) {
                return;
            }

            const titleElement =
                card.querySelector('h3');

            const paragraph =
                card.querySelector('p');

            const button =
                card.querySelector('.link');

            if (titleElement) {
                titleElement.innerHTML = data.title;
            }

            if (paragraph) {
                paragraph.innerHTML = data.description;
            }

            if (button) {
                button.innerHTML = data.button;
            }

        });

    }


    /* =====================================================
       PROCESS
    ===================================================== */

    const processSection =
        document.getElementById('proceso');

    if (processSection) {

        const kicker =
            processSection.querySelector('.kicker');

        const title =
            processSection.querySelector('h2');

        const description =
            processSection.querySelector('.head p');

        if (kicker) {
            kicker.innerHTML = t.process.kicker;
        }

        if (title) {
            title.innerHTML = t.process.title;
        }

        if (description) {
            description.innerHTML = t.process.description;
        }

        const steps =
            processSection.querySelectorAll('.step');

        const processData = [
            t.process.one,
            t.process.two,
            t.process.three,
            t.process.four
        ];

        steps.forEach((step, index) => {

            const data = processData[index];

            if (!data) {
                return;
            }

            const titleElement =
                step.querySelector('h3');

            const paragraph =
                step.querySelector('p');

            if (titleElement) {
                titleElement.innerHTML = data.title;
            }

            if (paragraph) {
                paragraph.innerHTML = data.description;
            }

        });

    }


    /* =====================================================
       ABOUT / NOSOTROS
    ===================================================== */

    const about =
        document.getElementById('nosotros');

    if (about) {

        const kicker =
            about.querySelector('.kicker');

        const title =
            about.querySelector('h2');

        const paragraphs =
            about.querySelectorAll('p');

        const slogan =
            about.querySelector('.about > div:last-child');

        if (kicker) {
            kicker.innerHTML = t.about.kicker;
        }

        if (title) {
            title.innerHTML = t.about.title;
        }

        if (paragraphs.length) {
            paragraphs[paragraphs.length - 1].innerHTML =
                t.about.description;
        }

        const pills =
            about.querySelectorAll('.pill');

        if (pills.length >= 4) {

            pills[0].textContent =
                t.about.trust;

            pills[1].textContent =
                t.about.transparency;

            pills[2].textContent =
                t.about.closeness;

            pills[3].textContent =
                t.about.professionalism;

        }

    }


    /* =====================================================
       FAQ
    ===================================================== */

    const faqSection =
        document.getElementById('faq');

    if (faqSection) {

        const kicker =
            faqSection.querySelector('.kicker');

        const title =
            faqSection.querySelector('h2');

        if (kicker) {
            kicker.innerHTML = t.faq.kicker;
        }

        if (title) {
            title.innerHTML = t.faq.title;
        }

        const rows =
            faqSection.querySelectorAll('.faq-row');

        const faqData = [
            t.faq.one,
            t.faq.two,
            t.faq.three,
            t.faq.four
        ];

        rows.forEach((row, index) => {

            const data = faqData[index];

            if (!data) {
                return;
            }

            const question =
                row.querySelector('.faq-q');

            const answer =
                row.querySelector('.faq-a');

            if (question) {

                const arrow =
                    question.querySelector('span');

                question.innerHTML =
                    data.question + ' ';

                if (arrow) {
                    question.appendChild(arrow);
                } else {
                    question.insertAdjacentHTML(
                        'beforeend',
                        '<span>⌄</span>'
                    );
                }

            }

            if (answer) {
                answer.innerHTML = data.answer;
            }

        });

    }


    /* =====================================================
       FOOTER
    ===================================================== */

    const footer =
        document.querySelector('.footer');

    if (footer) {

        const footerParagraph =
            footer.querySelector(
                '.footer-grid > div:first-child p'
            );

        if (footerParagraph) {
            footerParagraph.innerHTML =
                t.footer.statement;
        }

        const footerColumns =
            footer.querySelectorAll('.footer-grid > div');

        if (footerColumns.length >= 3) {

            const companyTitle =
                footerColumns[1].querySelector('h4');

            const attentionTitle =
                footerColumns[2].querySelector('h4');

            if (companyTitle) {
                companyTitle.innerHTML =
                    t.footer.company;
            }

            if (attentionTitle) {
                attentionTitle.innerHTML =
                    t.footer.attention;
            }

            const companyButtons =
                footerColumns[1].querySelectorAll('button');

            if (companyButtons.length >= 3) {

                companyButtons[0].innerHTML =
                    t.footer.about;

                companyButtons[1].innerHTML =
                    t.footer.services;

                companyButtons[2].innerHTML =
                    t.footer.faq;

            }

            const attentionItems =
                footerColumns[2].children;

            Array.from(attentionItems).forEach(element => {

                if (
                    element.tagName === 'SPAN' &&
                    element.textContent.includes('Orientación')
                ) {
                    element.textContent =
                        t.footer.personalized;
                }

                if (
                    element.tagName === 'SPAN' &&
                    element.textContent.includes('Formulario')
                ) {
                    element.textContent =
                        t.footer.form;
                }

            });

        }

        const copy =
            footer.querySelector('.copy');

        if (copy) {

            const copySpans =
                copy.querySelectorAll('span');

            if (copySpans.length >= 1) {
                copySpans[0].textContent =
                    t.footer.copyright;
            }

            const policyLinks =
                copy.querySelectorAll('a');

            if (policyLinks.length >= 3) {

                policyLinks[0].textContent =
                    t.footer.privacy;

                policyLinks[1].textContent =
                    t.footer.terms;

                policyLinks[2].textContent =
                    t.footer.cookies;

            }

        }

    }


    /* =====================================================
       SELECTOR DE IDIOMA
    ===================================================== */

    const currentCode =
        document.getElementById('languageCurrentCode');

    if (currentCode) {
        currentCode.textContent =
            t.language.code;
    }


    const currentButton =
        document.getElementById('languageCurrent');

    if (currentButton) {

        currentButton.setAttribute(
            'aria-label',
            t.language.selector
        );

    }


    document
        .querySelectorAll('.language-option')
        .forEach(option => {

            option.classList.toggle(
                'active',
                option.dataset.language === language
            );

            option.setAttribute(
                'aria-selected',
                String(option.dataset.language === language)
            );

        });


    /*
     * =====================================================
     * FIN DE applyGenesisLanguage()
     * =====================================================
     */

}


/* =========================================================
   API GLOBAL
========================================================= */

window.genesisI18n = {

    get(path) {
        return genesisGetTranslation(path);
    },

    getLanguage() {
        return genesisCurrentLanguage;
    },

    setLanguage(language) {
        applyGenesisLanguage(language);
    },

    translations: GENESIS_TRANSLATIONS

};


/* =========================================================
   FUNCIÓN GLOBAL
========================================================= */

window.translatePage = function(language) {

    applyGenesisLanguage(language);

};


/* =========================================================
   SELECTOR — ABRIR / CERRAR
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    const switcher =
        document.getElementById('languageSwitcher');

    const currentButton =
        document.getElementById('languageCurrent');

    if (!switcher || !currentButton) {
        return;
    }


    /* -----------------------------------------------------
       ABRIR / CERRAR AL HACER CLICK
    ----------------------------------------------------- */

    currentButton.addEventListener('click', event => {

        event.stopPropagation();

        const isOpen =
            switcher.classList.toggle('open');

        currentButton.setAttribute(
            'aria-expanded',
            String(isOpen)
        );

    });


    /* -----------------------------------------------------
       CAMBIAR IDIOMA
    ----------------------------------------------------- */

    document
        .querySelectorAll('.language-option')
        .forEach(option => {

            option.addEventListener('click', event => {

                event.stopPropagation();

                const language =
                    option.dataset.language;

                if (
                    language &&
                    GENESIS_TRANSLATIONS[language]
                ) {

                    applyGenesisLanguage(language);

                }

                switcher.classList.remove('open');

                currentButton.setAttribute(
                    'aria-expanded',
                    'false'
                );

            });

        });


    /* -----------------------------------------------------
       CERRAR AL HACER CLICK FUERA
    ----------------------------------------------------- */

    document.addEventListener('click', event => {

        if (!switcher.contains(event.target)) {

            switcher.classList.remove('open');

            currentButton.setAttribute(
                'aria-expanded',
                'false'
            );

        }

    });


    /* -----------------------------------------------------
       CERRAR CON ESC
    ----------------------------------------------------- */

    document.addEventListener('keydown', event => {

        if (event.key === 'Escape') {

            switcher.classList.remove('open');

            currentButton.setAttribute(
                'aria-expanded',
                'false'
            );

        }

    });

});


/* =========================================================
   INICIO
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    /*
     * SIEMPRE iniciamos en español.
     *
     * NO localStorage.
     * NO sessionStorage.
     * NO idioma guardado.
     */

    applyGenesisLanguage('es');

});
