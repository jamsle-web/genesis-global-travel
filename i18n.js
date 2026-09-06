'use strict';

/*
 * GÉNESIS GLOBAL
 * Sistema de idiomas
 *
 * Idioma inicial: Español
 * Idiomas disponibles: Español, English, Français, Português
 *
 * IMPORTANTE:
 * - No utiliza localStorage para guardar el idioma.
 * - Al volver a cargar la página, comienza en español.
 */

const GENESIS_TRANSLATIONS = {

    es: {
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
            kicker: 'Planifica tu viaje',
            title: 'Cuéntanos <span class="text-gradient">desde dónde y hacia dónde</span>',
            description: 'Completa los datos y nosotros organizamos el resto.',

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
                travelDate: '📅 Fecha aproximada de viaje',
                returnDate: '📅 Fecha de regreso (opcional)',
                adults: '👥 Número de adultos',
                children: '👶 Número de niños',
                travelType: '❤️ Tipo de viaje',
                family: 'Visita familiar',
                personal: 'Viaje personal',
                tourism: 'Turismo',
                other: 'Otro',
                back: '← Atrás',
                continue: 'Continuar →'
            },

            step3: {
                title: '3. Tus datos',
                fullName: '👤 Nombre completo',
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
                title: '4. Revisar solicitud',
                edit: '← Editar',
                send: 'Enviar solicitud →'
            },

            alerts: {
                route: 'Por favor, selecciona el origen y el destino de tu viaje.',
                date: 'Por favor, selecciona una fecha de viaje válida.',
                personalData: 'Por favor, completa tu nombre, WhatsApp y correo electrónico.'
            },

            summary: {
                title: 'Resumen de tu solicitud',
                origin: 'Origen',
                destination: 'Destino',
                travelDate: 'Fecha de viaje',
                returnDate: 'Fecha de regreso',
                adults: 'Adultos',
                children: 'Niños',
                travelType: 'Tipo de viaje',
                name: 'Nombre',
                whatsapp: 'WhatsApp',
                email: 'Correo',
                residence: 'Residencia',
                comments: 'Comentarios',
                notSpecified: 'No especificado'
            },

            status: {
                sending: 'Enviando solicitud...',
                success: '¡Solicitud enviada correctamente!',
                error: 'No pudimos enviar tu solicitud. Inténtalo nuevamente.',
                whatsapp: 'Abrir WhatsApp'
            }
        },

        general: {
            back: '← Atrás',
            continue: 'Continuar →',
            close: 'Cerrar',
            send: 'Enviar',
            yes: 'Sí',
            no: 'No'
        },

        footer: {
            slogan: 'Donde comienzan nuevas oportunidades.',
            description: 'Planificación y acompañamiento de viajes familiares.',
            navigation: 'Navegación',
            faq: 'Preguntas frecuentes',
            contact: 'Contacto',
            privacy: 'Política de privacidad',
            terms: 'Términos y condiciones',
            cookies: 'Política de cookies',
            rights: 'Todos los derechos reservados.'
        },

        language: {
            es: 'Español',
            en: 'English',
            fr: 'Français',
            pt: 'Português'
        }
    },

    en: {
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
            description: 'We plan and coordinate your trip so you can focus on what matters most: <b>being close again to the people you love.</b>',
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
                travelDate: '📅 Approximate travel date',
                returnDate: '📅 Return date (optional)',
                adults: '👥 Number of adults',
                children: '👶 Number of children',
                travelType: '❤️ Type of trip',
                family: 'Family visit',
                personal: 'Personal trip',
                tourism: 'Tourism',
                other: 'Other',
                back: '← Back',
                continue: 'Continue →'
            },

            step3: {
                title: '3. Your information',
                fullName: '👤 Full name',
                namePlaceholder: 'Your full name',
                whatsapp: '📱 WhatsApp',
                whatsappPlaceholder: '+1 809 999 5904',
                email: '📧 Email address',
                emailPlaceholder: 'you@example.com',
                residence: '🌍 Country where you currently live',
                residencePlaceholder: 'E.g.: Brazil, Argentina, Spain...',
                comments: '💬 Additional comments',
                commentsPlaceholder: 'Tell us anything else you may need...',
                back: '← Back',
                summary: 'View summary'
            },

            step4: {
                title: '4. Review request',
                edit: '← Edit',
                send: 'Send request →'
            },

            alerts: {
                route: 'Please select the origin and destination of your trip.',
                date: 'Please select a valid travel date.',
                personalData: 'Please complete your name, WhatsApp number and email address.'
            },

            summary: {
                title: 'Request summary',
                origin: 'Origin',
                destination: 'Destination',
                travelDate: 'Travel date',
                returnDate: 'Return date',
                adults: 'Adults',
                children: 'Children',
                travelType: 'Trip type',
                name: 'Name',
                whatsapp: 'WhatsApp',
                email: 'Email',
                residence: 'Residence',
                comments: 'Comments',
                notSpecified: 'Not specified'
            },

            status: {
                sending: 'Sending request...',
                success: 'Request sent successfully!',
                error: 'We could not send your request. Please try again.',
                whatsapp: 'Open WhatsApp'
            }
        },

        general: {
            back: '← Back',
            continue: 'Continue →',
            close: 'Close',
            send: 'Send',
            yes: 'Yes',
            no: 'No'
        },

        footer: {
            slogan: 'Where new opportunities begin.',
            description: 'Family travel planning and guidance.',
            navigation: 'Navigation',
            faq: 'Frequently asked questions',
            contact: 'Contact',
            privacy: 'Privacy policy',
            terms: 'Terms and conditions',
            cookies: 'Cookie policy',
            rights: 'All rights reserved.'
        },

        language: {
            es: 'Spanish',
            en: 'English',
            fr: 'French',
            pt: 'Portuguese'
        }
    },

    fr: {
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
            eyebrow: '✦ Une nouvelle façon d’organiser votre voyage familial',
            title: 'Les kilomètres ne devraient pas séparer les <span>familles.</span>',
            slogan: '« Là où commencent de nouvelles opportunités. »',
            description: 'Nous planifions et coordonnons votre voyage afin que vous puissiez vous concentrer sur l’essentiel : <b>être à nouveau près de ceux que vous aimez.</b>',
            plan: 'Planifier mon voyage →',
            seeProcess: 'Voir comment ça marche',
            human: 'Assistance humaine',
            clear: 'Processus clair',
            support: 'Accompagnement',
            globe: '🌍 <strong>Faites pivoter</strong> · <strong>Cliquez</strong> sur un pays'
        },

        planner: {
            kicker: 'Planifiez votre voyage',
            title: 'Dites-nous <span class="text-gradient">d’où vous partez et où vous allez</span>',
            description: 'Remplissez les informations et nous nous occupons du reste.',

            step1: {
                title: '1. Itinéraire',
                origin: '🇧🇷 D’où voyagez-vous ?',
                originPlaceholder: 'Ex. : Brésil, Cuba, Espagne...',
                destination: '🇨🇺 Où souhaitez-vous voyager ?',
                destinationPlaceholder: 'Ex. : Cuba, Brésil, Mexique...',
                continue: 'Continuer →',
                tip: '💡 Vous pouvez également cliquer sur un pays du globe pour le sélectionner comme destination.'
            },

            step2: {
                title: '2. Détails du voyage',
                travelDate: '📅 Date approximative du voyage',
                returnDate: '📅 Date de retour (facultative)',
                adults: '👥 Nombre d’adultes',
                children: '👶 Nombre d’enfants',
                travelType: '❤️ Type de voyage',
                family: 'Visite familiale',
                personal: 'Voyage personnel',
                tourism: 'Tourisme',
                other: 'Autre',
                back: '← Retour',
                continue: 'Continuer →'
            },

            step3: {
                title: '3. Vos informations',
                fullName: '👤 Nom complet',
                namePlaceholder: 'Votre nom complet',
                whatsapp: '📱 WhatsApp',
                whatsappPlaceholder: '+33 6 12 34 56 78',
                email: '📧 Adresse e-mail',
                emailPlaceholder: 'vous@exemple.com',
                residence: '🌍 Pays où vous résidez actuellement',
                residencePlaceholder: 'Ex. : Brésil, Argentine, Espagne...',
                comments: '💬 Commentaires supplémentaires',
                commentsPlaceholder: 'Dites-nous ce dont vous avez besoin...',
                back: '← Retour',
                summary: 'Voir le résumé'
            },

            step4: {
                title: '4. Vérifier la demande',
                edit: '← Modifier',
                send: 'Envoyer la demande →'
            },

            alerts: {
                route: 'Veuillez sélectionner l’origine et la destination de votre voyage.',
                date: 'Veuillez sélectionner une date de voyage valide.',
                personalData: 'Veuillez compléter votre nom, votre WhatsApp et votre adresse e-mail.'
            },

            summary: {
                title: 'Résumé de votre demande',
                origin: 'Origine',
                destination: 'Destination',
                travelDate: 'Date du voyage',
                returnDate: 'Date de retour',
                adults: 'Adultes',
                children: 'Enfants',
                travelType: 'Type de voyage',
                name: 'Nom',
                whatsapp: 'WhatsApp',
                email: 'E-mail',
                residence: 'Résidence',
                comments: 'Commentaires',
                notSpecified: 'Non précisé'
            },

            status: {
                sending: 'Envoi de la demande...',
                success: 'Demande envoyée avec succès !',
                error: 'Nous n’avons pas pu envoyer votre demande. Veuillez réessayer.',
                whatsapp: 'Ouvrir WhatsApp'
            }
        },

        general: {
            back: '← Retour',
            continue: 'Continuer →',
            close: 'Fermer',
            send: 'Envoyer',
            yes: 'Oui',
            no: 'Non'
        },

        footer: {
            slogan: 'Là où commencent de nouvelles opportunités.',
            description: 'Planification et accompagnement des voyages familiaux.',
            navigation: 'Navigation',
            faq: 'Questions fréquentes',
            contact: 'Contact',
            privacy: 'Politique de confidentialité',
            terms: 'Conditions générales',
            cookies: 'Politique relative aux cookies',
            rights: 'Tous droits réservés.'
        },

        language: {
            es: 'Espagnol',
            en: 'Anglais',
            fr: 'Français',
            pt: 'Portugais'
        }
    },

    pt: {
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
                travelDate: '📅 Data aproximada da viagem',
                returnDate: '📅 Data de retorno (opcional)',
                adults: '👥 Número de adultos',
                children: '👶 Número de crianças',
                travelType: '❤️ Tipo de viagem',
                family: 'Visita familiar',
                personal: 'Viagem pessoal',
                tourism: 'Turismo',
                other: 'Outro',
                back: '← Voltar',
                continue: 'Continuar →'
            },

            step3: {
                title: '3. Seus dados',
                fullName: '👤 Nome completo',
                namePlaceholder: 'Seu nome completo',
                whatsapp: '📱 WhatsApp',
                whatsappPlaceholder: '+55 11 99999-9999',
                email: '📧 E-mail',
                emailPlaceholder: 'voce@exemplo.com',
                residence: '🌍 País onde você mora atualmente',
                residencePlaceholder: 'Ex.: Brasil, Argentina, Espanha...',
                comments: '💬 Comentários adicionais',
                commentsPlaceholder: 'Conte-nos algo mais de que você precise...',
                back: '← Voltar',
                summary: 'Ver resumo'
            },

            step4: {
                title: '4. Revisar solicitação',
                edit: '← Editar',
                send: 'Enviar solicitação →'
            },

            alerts: {
                route: 'Selecione a origem e o destino da sua viagem.',
                date: 'Selecione uma data de viagem válida.',
                personalData: 'Preencha seu nome, WhatsApp e e-mail.'
            },

            summary: {
                title: 'Resumo da solicitação',
                origin: 'Origem',
                destination: 'Destino',
                travelDate: 'Data da viagem',
                returnDate: 'Data de retorno',
                adults: 'Adultos',
                children: 'Crianças',
                travelType: 'Tipo de viagem',
                name: 'Nome',
                whatsapp: 'WhatsApp',
                email: 'E-mail',
                residence: 'Residência',
                comments: 'Comentários',
                notSpecified: 'Não especificado'
            },

            status: {
                sending: 'Enviando solicitação...',
                success: 'Solicitação enviada com sucesso!',
                error: 'Não foi possível enviar sua solicitação. Tente novamente.',
                whatsapp: 'Abrir WhatsApp'
            }
        },

        general: {
            back: '← Voltar',
            continue: 'Continuar →',
            close: 'Fechar',
            send: 'Enviar',
            yes: 'Sim',
            no: 'Não'
        },

        footer: {
            slogan: 'Onde começam novas oportunidades.',
            description: 'Planejamento e acompanhamento de viagens em família.',
            navigation: 'Navegação',
            faq: 'Perguntas frequentes',
            contact: 'Contato',
            privacy: 'Política de privacidade',
            terms: 'Termos e condições',
            cookies: 'Política de cookies',
            rights: 'Todos os direitos reservados.'
        },

        language: {
            es: 'Espanhol',
            en: 'Inglês',
            fr: 'Francês',
            pt: 'Português'
        }
    }
};


/* =========================================================
   UTILIDADES
========================================================= */

let genesisCurrentLanguage = 'es';

function genesisGetTranslation(path, language = genesisCurrentLanguage) {
    const dictionary = GENESIS_TRANSLATIONS[language] || GENESIS_TRANSLATIONS.es;

    return path.split('.').reduce((obj, key) => {
        return obj && Object.prototype.hasOwnProperty.call(obj, key)
            ? obj[key]
            : undefined;
    }, dictionary);
}

function genesisSetText(selector, value) {
    const element = document.querySelector(selector);

    if (!element || value === undefined || value === null) return;

    element.innerHTML = value;
}

function genesisSetPlaceholder(selector, value) {
    const element = document.querySelector(selector);

    if (!element || value === undefined || value === null) return;

    element.setAttribute('placeholder', value);
}


/* =========================================================
   APLICAR TRADUCCIONES
========================================================= */

function applyGenesisLanguage(language) {

    if (!GENESIS_TRANSLATIONS[language]) {
        language = 'es';
    }

    genesisCurrentLanguage = language;

    document.documentElement.lang = language;

    /*
     * NAVBAR
     */
    genesisSetText('#links button:nth-child(1)', genesisGetTranslation('nav.home'));
    genesisSetText('#links button:nth-child(2)', genesisGetTranslation('nav.services'));
    genesisSetText('#links button:nth-child(3)', genesisGetTranslation('nav.process'));
    genesisSetText('#links button:nth-child(4)', genesisGetTranslation('nav.about'));
    genesisSetText('#links button:nth-child(5)', genesisGetTranslation('nav.faq'));
    genesisSetText('#links button:nth-child(6)', genesisGetTranslation('nav.otherServices'));
    genesisSetText('#links button.cta', genesisGetTranslation('nav.plan'));

    /*
     * HERO
     */
    genesisSetText('.hero .eyebrow', genesisGetTranslation('hero.eyebrow'));
    genesisSetText('.hero h1', genesisGetTranslation('hero.title'));
    genesisSetText('.hero .slogan', genesisGetTranslation('hero.slogan'));
    genesisSetText('.hero p', genesisGetTranslation('hero.description'));

    /*
     * Botones principales del hero
     */
    const heroButtons = document.querySelectorAll('.hero a, .hero button');

    heroButtons.forEach(button => {
        const text = button.textContent.trim();

        if (
            text.includes('Planificar') ||
            text.includes('Plan my') ||
            text.includes('Planifier') ||
            text.includes('Planejar')
        ) {
            button.innerHTML = genesisGetTranslation('hero.plan');
        }

        if (
            text.includes('Ver cómo') ||
            text.includes('See how') ||
            text.includes('Voir comment') ||
            text.includes('Ver como')
        ) {
            button.innerHTML = genesisGetTranslation('hero.seeProcess');
        }
    });

    /*
     * ELEMENTOS DE CONFIANZA
     */
    const trustElements = document.querySelectorAll('.trust-item');

    if (trustElements.length >= 3) {
        trustElements[0].textContent = genesisGetTranslation('hero.human');
        trustElements[1].textContent = genesisGetTranslation('hero.clear');
        trustElements[2].textContent = genesisGetTranslation('hero.support');
    }

    /*
     * PLANNER
     */
    const planner = document.querySelector('#planner');

    if (planner) {

        const kicker = planner.querySelector('.section-kicker, .kicker');
        if (kicker) {
            kicker.textContent = genesisGetTranslation('planner.kicker');
        }

        const title = planner.querySelector('h2');
        if (title) {
            title.innerHTML = genesisGetTranslation('planner.title');
        }

        const description = planner.querySelector('p');
        if (description) {
            description.textContent = genesisGetTranslation('planner.description');
        }

        /*
         * STEP 1
         */
        const step1 = document.querySelector('#xxyrx7');

        if (step1) {

            const labels = step1.querySelectorAll('label');

            if (labels[0]) {
                labels[0].textContent = genesisGetTranslation('planner.step1.origin');
            }

            if (labels[1]) {
                labels[1].textContent = genesisGetTranslation('planner.step1.destination');
            }

            genesisSetPlaceholder(
                '#origenInput',
                genesisGetTranslation('planner.step1.originPlaceholder')
            );

            genesisSetPlaceholder(
                '#destinoInput',
                genesisGetTranslation('planner.step1.destinationPlaceholder')
            );

            const button = step1.querySelector('.btn-continuar');

            if (button) {
                button.textContent = genesisGetTranslation('planner.step1.continue');
            }

            const tip = step1.querySelector('.planner-tip, .tip, .hint');

            if (tip) {
                tip.innerHTML = genesisGetTranslation('planner.step1.tip');
            }
        }

        /*
         * STEP 2
         */
        const step2 = document.querySelector('#1zqffm');

        if (step2) {

            const labels = step2.querySelectorAll('label');

            if (labels[0]) {
                labels[0].textContent = genesisGetTranslation('planner.step2.travelDate');
            }

            if (labels[1]) {
                labels[1].textContent = genesisGetTranslation('planner.step2.returnDate');
            }

            if (labels[2]) {
                labels[2].textContent = genesisGetTranslation('planner.step2.adults');
            }

            if (labels[3]) {
                labels[3].textContent = genesisGetTranslation('planner.step2.children');
            }

            if (labels[4]) {
                labels[4].textContent = genesisGetTranslation('planner.step2.travelType');
            }

            const select = document.querySelector('#tipoViaje');

            if (select) {

                const options = select.querySelectorAll('option');

                const optionTexts = [
                    genesisGetTranslation('planner.step2.family'),
                    genesisGetTranslation('planner.step2.personal'),
                    genesisGetTranslation('planner.step2.tourism'),
                    genesisGetTranslation('planner.step2.other')
                ];

                options.forEach((option, index) => {
                    if (optionTexts[index]) {
                        option.textContent = optionTexts[index];
                    }
                });
            }

            const buttons = step2.querySelectorAll('button');

            buttons.forEach(button => {

                if (
                    button.textContent.includes('Atrás') ||
                    button.textContent.includes('Back') ||
                    button.textContent.includes('Retour') ||
                    button.textContent.includes('Voltar')
                ) {
                    button.textContent = genesisGetTranslation('planner.step2.back');
                } else {
                    button.textContent = genesisGetTranslation('planner.step2.continue');
                }

            });
        }

        /*
         * STEP 3
         */
        const step3 = document.querySelector('#rd8rqi');

        if (step3) {

            const labels = step3.querySelectorAll('label');

            if (labels[0]) labels[0].textContent = genesisGetTranslation('planner.step3.fullName');
            if (labels[1]) labels[1].textContent = genesisGetTranslation('planner.step3.whatsapp');
            if (labels[2]) labels[2].textContent = genesisGetTranslation('planner.step3.email');
            if (labels[3]) labels[3].textContent = genesisGetTranslation('planner.step3.residence');
            if (labels[4]) labels[4].textContent = genesisGetTranslation('planner.step3.comments');

            genesisSetPlaceholder(
                '#nombre',
                genesisGetTranslation('planner.step3.namePlaceholder')
            );

            genesisSetPlaceholder(
                '#whatsapp',
                genesisGetTranslation('planner.step3.whatsappPlaceholder')
            );

            genesisSetPlaceholder(
                '#email',
                genesisGetTranslation('planner.step3.emailPlaceholder')
            );

            genesisSetPlaceholder(
                '#residencia',
                genesisGetTranslation('planner.step3.residencePlaceholder')
            );

            genesisSetPlaceholder(
                '#comentarios',
                genesisGetTranslation('planner.step3.commentsPlaceholder')
            );

            const buttons = step3.querySelectorAll('button');

            buttons.forEach(button => {

                if (
                    button.textContent.includes('Atrás') ||
                    button.textContent.includes('Back') ||
                    button.textContent.includes('Retour') ||
                    button.textContent.includes('Voltar')
                ) {
                    button.textContent = genesisGetTranslation('planner.step3.back');
                } else {
                    button.textContent = genesisGetTranslation('planner.step3.summary');
                }

            });
        }

        /*
         * STEP 4
         */
        const step4 = document.querySelector('#0l3k4k');

        if (step4) {

            const buttons = step4.querySelectorAll('button');

            buttons.forEach(button => {

                if (
                    button.textContent.includes('Editar') ||
                    button.textContent.includes('Edit') ||
                    button.textContent.includes('Modifier') ||
                    button.textContent.includes('Editar')
                ) {
                    button.textContent = genesisGetTranslation('planner.step4.edit');
                } else {
                    button.textContent = genesisGetTranslation('planner.step4.send');
                }

            });
        }
    }

    /*
     * FOOTER
     */
    const footer = document.querySelector('footer');

    if (footer) {

        const footerDescription = footer.querySelector('p');

        if (footerDescription) {
            footerDescription.textContent =
                genesisGetTranslation('footer.description');
        }

        const privacy = footer.querySelector('[onclick*="privacy"]');
        const terms = footer.querySelector('[onclick*="terms"]');
        const cookies = footer.querySelector('[onclick*="cookie"]');

        if (privacy) privacy.textContent = genesisGetTranslation('footer.privacy');
        if (terms) terms.textContent = genesisGetTranslation('footer.terms');
        if (cookies) cookies.textContent = genesisGetTranslation('footer.cookies');
    }

    /*
     * TITLE + META
     */
    const pageTitles = {
        es: 'GÉNESIS GLOBAL — Donde comienzan nuevas oportunidades.',
        en: 'GÉNESIS GLOBAL — Where new opportunities begin.',
        fr: 'GÉNESIS GLOBAL — Là où commencent de nouvelles opportunités.',
        pt: 'GÉNESIS GLOBAL — Onde começam novas oportunidades.'
    };

    const descriptions = {
        es: 'Planificación y acompañamiento de viajes familiares.',
        en: 'Family travel planning and guidance.',
        fr: 'Planification et accompagnement des voyages familiaux.',
        pt: 'Planejamento e acompanhamento de viagens em família.'
    };

    document.title = pageTitles[language];

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
        metaDescription.setAttribute('content', descriptions[language]);
    }

    /*
     * Actualizar selector de idioma
     */
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.classList.toggle(
            'active',
            button.dataset.lang === language
        );
    });

    console.log(`GÉNESIS GLOBAL: idioma cambiado a ${language}`);
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


/*
 * Función global para que los botones existentes
 * puedan llamar translatePage('en'), etc.
 */
window.translatePage = function(language) {
    applyGenesisLanguage(language);
};


/* =========================================================
   INICIO
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    /*
     * SIEMPRE comenzamos en español.
     * No usamos localStorage.
     */
    applyGenesisLanguage('es');

});
