(function () {
    "use strict";

    const translations = {
        es: {
            nav: {
                inicio: "Inicio",
                servicios: "Servicios",
                proceso: "Cómo funciona",
                nosotros: "Nosotros",
                faq: "FAQ",
                otros: "Otros Servicios",
                planificar: "Planificar mi viaje →"
            },

            hero: {
                eyebrow: "✦ Una nueva forma de organizar tu viaje familiar",
                title: 'Los kilómetros no deberían separar a las <span>familias.</span>',
                slogan: "“Donde comienzan nuevas oportunidades.”",
                description: 'Planificamos y coordinamos tu viaje para que puedas concentrarte en lo más importante: <b>volver a estar cerca de quienes amas.</b>',
                primary: "Planificar mi viaje →",
                secondary: "Ver cómo funciona",
                trust1: "Atención humana",
                trust2: "Proceso claro",
                trust3: "Acompañamiento",
                globe: "🌍 <strong>Gira</strong> · <strong>Haz clic</strong> en un país"
            },

            planner: {
                kicker: "Planifica tu viaje",
                title: 'Cuéntanos <span class="text-gradient">desde dónde y hacia dónde</span>',
                description: "Completa los datos y nosotros organizamos el resto.",

                origin: "🇧🇷 ¿Desde dónde viajas?",
                destination: "🇨🇺 ¿A dónde quieres viajar?",
                originPlaceholder: "Ej: Brasil, Cuba, España...",
                destinationPlaceholder: "Ej: Cuba, Brasil, México...",
                continue: "Continuar →",
                globeHint: "💡 También puedes hacer clic en un país del globo para seleccionarlo como destino.",

                travelDate: "📅 Fecha aproximada de viaje",
                returnDate: "📅 Fecha de regreso (opcional)",
                adults: "👥 Número de adultos",
                children: "👶 Número de niños",
                travelType: "❤️ Tipo de viaje",

                familyVisit: "Visita familiar",
                personal: "Viaje personal",
                tourism: "Turismo",
                other: "Otro",

                back: "← Atrás",
                name: "👤 Nombre completo",
                namePlaceholder: "Tu nombre completo",
                whatsapp: "📱 WhatsApp",
                whatsappPlaceholder: "+54 9 11 1234 5678",
                email: "📧 Correo electrónico",
                emailPlaceholder: "tucorreo@ejemplo.com",
                residence: "🌍 País donde resides actualmente",
                residencePlaceholder: "Ej: Brasil, Argentina, España...",
                comments: "💬 Comentarios adicionales",
                commentsPlaceholder: "Cuéntanos algo más que necesites...",
                summary: "Ver resumen",
                edit: "← Editar",
                send: "Enviar solicitud →"
            },

            proof: {
                kicker: "Nuestro propósito",
                title: 'Conectamos destinos. <span class="text-gradient">Reunimos familias.</span>',
                slogan: "“Donde comienzan nuevas oportunidades.”",
                description: "Una experiencia digital sencilla, atención cercana y coordinación profesional para ayudarte a organizar tu próximo viaje."
            },

            services: {
                kicker: "Servicios",
                title: 'Todo lo esencial, <span class="text-gradient">en un solo lugar.</span>',
                description: "Empezamos con servicios claros y humanos, diseñados para reducir la incertidumbre y simplificar cada etapa.",

                one: "Planificación de viajes",
                oneText: "Rutas, fechas, conexiones e itinerarios organizados según tu situación.",
                two: "Viajes familiares",
                twoText: "Acompañamiento pensado para quienes quieren volver a encontrarse con los suyos.",
                three: "Orientación documental",
                threeText: "Información clara sobre requisitos aplicables y coordinación con profesionales autorizados.",
                four: "Alojamiento y transporte",
                fourText: "Coordinamos opciones complementarias para que tengas un viaje más sencillo.",
                planNow: "Planificar ahora →"
            },

            process: {
                kicker: "Experiencia del cliente",
                title: 'Simple desde el primer <span class="text-gradient">mensaje.</span>',
                description: "Diseñamos el proceso para reducir dudas, pasos innecesarios y fricción.",

                one: "Cuéntanos tu situación",
                oneText: "Completa una solicitud breve y dinos desde dónde viajas, hacia dónde quieres ir y qué necesitas.",
                two: "Analizamos tus opciones",
                twoText: "Nuestro equipo revisa rutas, servicios y requisitos aplicables.",
                three: "Recibes tu propuesta",
                threeText: "Te explicamos opciones, costes y próximos pasos antes de continuar.",
                four: "Te acompañamos",
                fourText: "Coordinamos el proceso contratado y mantenemos la comunicación contigo."
            },

            about: {
                kicker: "GÉNESIS GLOBAL",
                title: 'Una marca creada para <span class="text-gradient">acercar personas.</span>',
                description: "Queremos construir una empresa moderna, humana y transparente. Nuestra tecnología debe facilitar el trabajo del equipo y, sobre todo, hacer que el cliente entienda qué ocurre en cada etapa.",
                trust: "Confianza",
                transparency: "Transparencia",
                closeness: "Cercanía",
                professionalism: "Profesionalismo"
            },

            faq: {
                kicker: "Preguntas frecuentes",
                title: 'Claridad antes de <span class="text-gradient">decidir.</span>',
                q1: "¿GÉNESIS GLOBAL vende visas?",
                a1: "No. La empresa puede orientar sobre requisitos aplicables y coordinar con profesionales autorizados cuando un caso lo requiera. Las decisiones migratorias corresponden a las autoridades competentes.",
                q2: "¿Puedo solicitar ayuda para viajar hacia Cuba?",
                a2: "Sí. El concepto contempla personas que viven en Brasil u otros países y quieren organizar un viaje a Cuba para visitar a sus familiares, sujeto a las normas vigentes.",
                q3: "¿También se pueden organizar viajes desde Cuba?",
                a3: "Sí. Puede contemplarse la planificación de viajes desde Cuba hacia Brasil u otros destinos, dependiendo de requisitos y servicios disponibles.",
                q4: "¿Cómo empiezo?",
                a4: "Completa el formulario de orientación. Un miembro del equipo podrá revisar tu solicitud y explicarte los próximos pasos."
            },

            footer: {
                slogan: "Donde comienzan nuevas oportunidades.",
                description: "Conectamos destinos. Reunimos familias.",
                company: "Empresa",
                attention: "Atención",
                personalized: "Orientación personalizada",
                whatsapp: "WhatsApp Business",
                request: "Formulario de solicitud",
                privacy: "Política de Privacidad",
                terms: "Términos y Condiciones",
                cookies: "Política de Cookies"
            }
        },

        en: {
            nav: {
                inicio: "Home",
                servicios: "Services",
                proceso: "How it works",
                nosotros: "About us",
                faq: "FAQ",
                otros: "Other Services",
                planificar: "Plan my trip →"
            },

            hero: {
                eyebrow: "✦ A new way to organize your family trip",
                title: 'Miles should not separate <span>families.</span>',
                slogan: "“Where new opportunities begin.”",
                description: 'We plan and coordinate your trip so you can focus on what matters most: <b>being close again to those you love.</b>',
                primary: "Plan my trip →",
                secondary: "See how it works",
                trust1: "Human support",
                trust2: "Clear process",
                trust3: "Personal assistance",
                globe: "🌍 <strong>Rotate</strong> · <strong>Click</strong> on a country"
            },

            planner: {
                kicker: "Plan your trip",
                title: 'Tell us <span class="text-gradient">where you are traveling from and to</span>',
                description: "Complete the information and we will organize the rest.",

                origin: "🇧🇷 Where are you traveling from?",
                destination: "🇨🇺 Where do you want to travel?",
                originPlaceholder: "E.g.: Brazil, Cuba, Spain...",
                destinationPlaceholder: "E.g.: Cuba, Brazil, Mexico...",
                continue: "Continue →",
                globeHint: "💡 You can also click on a country on the globe to select it as your destination.",

                travelDate: "📅 Approximate travel date",
                returnDate: "📅 Return date (optional)",
                adults: "👥 Number of adults",
                children: "👶 Number of children",
                travelType: "❤️ Type of trip",

                familyVisit: "Family visit",
                personal: "Personal trip",
                tourism: "Tourism",
                other: "Other",

                back: "← Back",
                name: "👤 Full name",
                namePlaceholder: "Your full name",
                whatsapp: "📱 WhatsApp",
                whatsappPlaceholder: "+54 9 11 1234 5678",
                email: "📧 Email address",
                emailPlaceholder: "you@example.com",
                residence: "🌍 Country where you currently live",
                residencePlaceholder: "E.g.: Brazil, Argentina, Spain...",
                comments: "💬 Additional comments",
                commentsPlaceholder: "Tell us anything else you may need...",
                summary: "View summary",
                edit: "← Edit",
                send: "Send request →"
            },

            proof: {
                kicker: "Our purpose",
                title: 'We connect destinations. <span class="text-gradient">We bring families together.</span>',
                slogan: "“Where new opportunities begin.”",
                description: "A simple digital experience, personal attention and professional coordination to help you organize your next trip."
            },

            services: {
                kicker: "Services",
                title: 'Everything essential, <span class="text-gradient">in one place.</span>',
                description: "We start with clear, human services designed to reduce uncertainty and simplify every stage.",

                one: "Travel planning",
                oneText: "Routes, dates, connections and itineraries organized according to your situation.",
                two: "Family trips",
                twoText: "Support designed for those who want to reunite with their loved ones.",
                three: "Document guidance",
                threeText: "Clear information about applicable requirements and coordination with authorized professionals.",
                four: "Accommodation and transportation",
                fourText: "We coordinate complementary options to make your trip easier.",
                planNow: "Plan now →"
            },

            process: {
                kicker: "Customer experience",
                title: 'Simple from the first <span class="text-gradient">message.</span>',
                description: "We designed the process to reduce questions, unnecessary steps and friction.",

                one: "Tell us about your situation",
                oneText: "Complete a short request and tell us where you are traveling from, where you want to go and what you need.",
                two: "We analyze your options",
                twoText: "Our team reviews routes, services and applicable requirements.",
                three: "You receive your proposal",
                threeText: "We explain options, costs and next steps before you continue.",
                four: "We support you",
                fourText: "We coordinate the contracted process and keep in touch with you."
            },

            about: {
                kicker: "GÉNESIS GLOBAL",
                title: 'A brand created to <span class="text-gradient">bring people closer.</span>',
                description: "We want to build a modern, human and transparent company. Our technology should make our team's work easier and, above all, help customers understand what happens at every stage.",
                trust: "Trust",
                transparency: "Transparency",
                closeness: "Closeness",
                professionalism: "Professionalism"
            },

            faq: {
                kicker: "Frequently asked questions",
                title: 'Clarity before you <span class="text-gradient">decide.</span>',
                q1: "Does GÉNESIS GLOBAL sell visas?",
                a1: "No. The company can provide guidance on applicable requirements and coordinate with authorized professionals when necessary. Immigration decisions are made by the competent authorities.",
                q2: "Can I request help traveling to Cuba?",
                a2: "Yes. The concept includes people living in Brazil or other countries who want to organize a trip to Cuba to visit their families, subject to current regulations.",
                q3: "Can trips from Cuba also be organized?",
                a3: "Yes. Travel planning from Cuba to Brazil or other destinations may be considered depending on requirements and available services.",
                q4: "How do I get started?",
                a4: "Complete the guidance form. A team member can review your request and explain the next steps."
            },

            footer: {
                slogan: "Where new opportunities begin.",
                description: "We connect destinations. We bring families together.",
                company: "Company",
                attention: "Support",
                personalized: "Personalized guidance",
                whatsapp: "WhatsApp Business",
                request: "Request form",
                privacy: "Privacy Policy",
                terms: "Terms and Conditions",
                cookies: "Cookie Policy"
            }
        },

        fr: {
            nav: {
                inicio: "Accueil",
                servicios: "Services",
                proceso: "Comment ça marche",
                nosotros: "À propos",
                faq: "FAQ",
                otros: "Autres services",
                planificar: "Planifier mon voyage →"
            },

            hero: {
                eyebrow: "✦ Une nouvelle façon d'organiser votre voyage familial",
                title: 'Les kilomètres ne devraient pas séparer les <span>familles.</span>',
                slogan: "« Là où commencent de nouvelles opportunités. »",
                description: 'Nous planifions et coordonnons votre voyage afin que vous puissiez vous concentrer sur l’essentiel : <b>être à nouveau proche de ceux que vous aimez.</b>',
                primary: "Planifier mon voyage →",
                secondary: "Voir comment ça marche",
                trust1: "Attention humaine",
                trust2: "Processus clair",
                trust3: "Accompagnement",
                globe: "🌍 <strong>Tournez</strong> · <strong>Cliquez</strong> sur un pays"
            },

            planner: {
                kicker: "Planifiez votre voyage",
                title: 'Dites-nous <span class="text-gradient">d’où vous partez et où vous allez</span>',
                description: "Complétez les informations et nous nous occupons du reste.",

                origin: "🇧🇷 D’où voyagez-vous ?",
                destination: "🇨🇺 Où souhaitez-vous voyager ?",
                originPlaceholder: "Ex. : Brésil, Cuba, Espagne...",
                destinationPlaceholder: "Ex. : Cuba, Brésil, Mexique...",
                continue: "Continuer →",
                globeHint: "💡 Vous pouvez également cliquer sur un pays du globe pour le sélectionner comme destination.",

                travelDate: "📅 Date approximative du voyage",
                returnDate: "📅 Date de retour (facultative)",
                adults: "👥 Nombre d’adultes",
                children: "👶 Nombre d’enfants",
                travelType: "❤️ Type de voyage",

                familyVisit: "Visite familiale",
                personal: "Voyage personnel",
                tourism: "Tourisme",
                other: "Autre",

                back: "← Retour",
                name: "👤 Nom complet",
                namePlaceholder: "Votre nom complet",
                whatsapp: "📱 WhatsApp",
                whatsappPlaceholder: "+54 9 11 1234 5678",
                email: "📧 Adresse e-mail",
                emailPlaceholder: "vous@exemple.com",
                residence: "🌍 Pays où vous résidez actuellement",
                residencePlaceholder: "Ex. : Brésil, Argentine, Espagne...",
                comments: "💬 Commentaires supplémentaires",
                commentsPlaceholder: "Dites-nous ce dont vous avez besoin...",
                summary: "Voir le résumé",
                edit: "← Modifier",
                send: "Envoyer la demande →"
            },

            proof: {
                kicker: "Notre objectif",
                title: 'Nous connectons les destinations. <span class="text-gradient">Nous réunissons les familles.</span>',
                slogan: "« Là où commencent de nouvelles opportunités. »",
                description: "Une expérience numérique simple, une attention personnalisée et une coordination professionnelle pour vous aider à organiser votre prochain voyage."
            },

            services: {
                kicker: "Services",
                title: 'Tout l’essentiel, <span class="text-gradient">au même endroit.</span>',
                description: "Nous commençons avec des services clairs et humains conçus pour réduire l’incertitude et simplifier chaque étape.",

                one: "Planification de voyages",
                oneText: "Itinéraires, dates, connexions et parcours organisés selon votre situation.",
                two: "Voyages familiaux",
                twoText: "Un accompagnement pensé pour ceux qui souhaitent retrouver leurs proches.",
                three: "Orientation documentaire",
                threeText: "Informations claires sur les exigences applicables et coordination avec des professionnels autorisés.",
                four: "Hébergement et transport",
                fourText: "Nous coordonnons des options complémentaires pour faciliter votre voyage.",
                planNow: "Planifier maintenant →"
            },

            process: {
                kicker: "Expérience client",
                title: 'Simple dès le premier <span class="text-gradient">message.</span>',
                description: "Nous avons conçu le processus pour réduire les questions, les étapes inutiles et les difficultés.",

                one: "Parlez-nous de votre situation",
                oneText: "Remplissez une courte demande et indiquez-nous d’où vous partez, où vous souhaitez aller et ce dont vous avez besoin.",
                two: "Nous analysons vos options",
                twoText: "Notre équipe examine les itinéraires, les services et les exigences applicables.",
                three: "Vous recevez votre proposition",
                threeText: "Nous vous expliquons les options, les coûts et les prochaines étapes avant de continuer.",
                four: "Nous vous accompagnons",
                fourText: "Nous coordonnons le processus contracté et restons en communication avec vous."
            },

            about: {
                kicker: "GÉNESIS GLOBAL",
                title: 'Une marque créée pour <span class="text-gradient">rapprocher les personnes.</span>',
                description: "Nous voulons construire une entreprise moderne, humaine et transparente. Notre technologie doit faciliter le travail de l’équipe et surtout permettre au client de comprendre ce qui se passe à chaque étape.",
                trust: "Confiance",
                transparency: "Transparence",
                closeness: "Proximité",
                professionalism: "Professionnalisme"
            },

            faq: {
                kicker: "Questions fréquentes",
                title: 'La clarté avant de <span class="text-gradient">décider.</span>',
                q1: "GÉNESIS GLOBAL vend-elle des visas ?",
                a1: "Non. L’entreprise peut fournir des informations sur les exigences applicables et coordonner avec des professionnels autorisés lorsque cela est nécessaire. Les décisions migratoires relèvent des autorités compétentes.",
                q2: "Puis-je demander de l’aide pour voyager à Cuba ?",
                a2: "Oui. Le concept comprend les personnes vivant au Brésil ou dans d’autres pays qui souhaitent organiser un voyage à Cuba pour rendre visite à leur famille, sous réserve des règles en vigueur.",
                q3: "Peut-on également organiser des voyages depuis Cuba ?",
                a3: "Oui. La planification de voyages depuis Cuba vers le Brésil ou d’autres destinations peut être envisagée selon les exigences et les services disponibles.",
                q4: "Comment commencer ?",
                a4: "Remplissez le formulaire d’orientation. Un membre de l’équipe pourra examiner votre demande et vous expliquer les prochaines étapes."
            },

            footer: {
                slogan: "Là où commencent de nouvelles opportunités.",
                description: "Nous connectons les destinations. Nous réunissons les familles.",
                company: "Entreprise",
                attention: "Assistance",
                personalized: "Orientation personnalisée",
                whatsapp: "WhatsApp Business",
                request: "Formulaire de demande",
                privacy: "Politique de confidentialité",
                terms: "Conditions générales",
                cookies: "Politique relative aux cookies"
            }
        },

        pt: {
            nav: {
                inicio: "Início",
                servicios: "Serviços",
                proceso: "Como funciona",
                nosotros: "Sobre nós",
                faq: "FAQ",
                otros: "Outros Serviços",
                planificar: "Planejar minha viagem →"
            },

            hero: {
                eyebrow: "✦ Uma nova forma de organizar sua viagem em família",
                title: 'Os quilômetros não deveriam separar as <span>famílias.</span>',
                slogan: "“Onde começam novas oportunidades.”",
                description: 'Planejamos e coordenamos sua viagem para que você possa se concentrar no que realmente importa: <b>estar novamente perto de quem você ama.</b>',
                primary: "Planejar minha viagem →",
                secondary: "Ver como funciona",
                trust1: "Atendimento humano",
                trust2: "Processo claro",
                trust3: "Acompanhamento",
                globe: "🌍 <strong>Gire</strong> · <strong>Clique</strong> em um país"
            },

            planner: {
                kicker: "Planeje sua viagem",
                title: 'Conte-nos <span class="text-gradient">de onde e para onde você vai</span>',
                description: "Preencha os dados e nós organizaremos o restante.",

                origin: "🇧🇷 De onde você está viajando?",
                destination: "🇨🇺 Para onde você quer viajar?",
                originPlaceholder: "Ex.: Brasil, Cuba, Espanha...",
                destinationPlaceholder: "Ex.: Cuba, Brasil, México...",
                continue: "Continuar →",
                globeHint: "💡 Você também pode clicar em um país do globo para selecioná-lo como destino.",

                travelDate: "📅 Data aproximada da viagem",
                returnDate: "📅 Data de retorno (opcional)",
                adults: "👥 Número de adultos",
                children: "👶 Número de crianças",
                travelType: "❤️ Tipo de viagem",

                familyVisit: "Visita familiar",
                personal: "Viagem pessoal",
                tourism: "Turismo",
                other: "Outro",

                back: "← Voltar",
                name: "👤 Nome completo",
                namePlaceholder: "Seu nome completo",
                whatsapp: "📱 WhatsApp",
                whatsappPlaceholder: "+54 9 11 1234 5678",
                email: "📧 E-mail",
                emailPlaceholder: "seuemail@exemplo.com",
                residence: "🌍 País onde você reside atualmente",
                residencePlaceholder: "Ex.: Brasil, Argentina, Espanha...",
                comments: "💬 Comentários adicionais",
                commentsPlaceholder: "Conte-nos algo mais que você precisa...",
                summary: "Ver resumo",
                edit: "← Editar",
                send: "Enviar solicitação →"
            },

            proof: {
                kicker: "Nosso propósito",
                title: 'Conectamos destinos. <span class="text-gradient">Reunimos famílias.</span>',
                slogan: "“Onde começam novas oportunidades.”",
                description: "Uma experiência digital simples, atendimento próximo e coordenação profissional para ajudar você a organizar sua próxima viagem."
            },

            services: {
                kicker: "Serviços",
                title: 'Tudo o que é essencial, <span class="text-gradient">em um só lugar.</span>',
                description: "Começamos com serviços claros e humanos, projetados para reduzir a incerteza e simplificar cada etapa.",

                one: "Planejamento de viagens",
                oneText: "Rotas, datas, conexões e itinerários organizados de acordo com sua situação.",
                two: "Viagens em família",
                twoText: "Acompanhamento pensado para quem deseja reencontrar seus familiares.",
                three: "Orientação documental",
                threeText: "Informações claras sobre os requisitos aplicáveis e coordenação com profissionais autorizados.",
                four: "Hospedagem e transporte",
                fourText: "Coordenamos opções complementares para tornar sua viagem mais simples.",
                planNow: "Planejar agora →"
            },

            process: {
                kicker: "Experiência do cliente",
                title: 'Simples desde a primeira <span class="text-gradient">mensagem.</span>',
                description: "Projetamos o processo para reduzir dúvidas, etapas desnecessárias e dificuldades.",

                one: "Conte-nos sua situação",
                oneText: "Preencha uma solicitação breve e diga de onde você viaja, para onde deseja ir e do que precisa.",
                two: "Analisamos suas opções",
                twoText: "Nossa equipe analisa rotas, serviços e requisitos aplicáveis.",
                three: "Você recebe sua proposta",
                threeText: "Explicamos opções, custos e próximos passos antes de continuar.",
                four: "Acompanhamos você",
                fourText: "Coordenamos o processo contratado e mantemos a comunicação com você."
            },

            about: {
                kicker: "GÉNESIS GLOBAL",
                title: 'Uma marca criada para <span class="text-gradient">aproximar pessoas.</span>',
                description: "Queremos construir uma empresa moderna, humana e transparente. Nossa tecnologia deve facilitar o trabalho da equipe e, acima de tudo, ajudar o cliente a entender o que acontece em cada etapa.",
                trust: "Confiança",
                transparency: "Transparência",
                closeness: "Proximidade",
                professionalism: "Profissionalismo"
            },

            faq: {
                kicker: "Perguntas frequentes",
                title: 'Clareza antes de <span class="text-gradient">decidir.</span>',
                q1: "A GÉNESIS GLOBAL vende vistos?",
                a1: "Não. A empresa pode orientar sobre os requisitos aplicáveis e coordenar com profissionais autorizados quando necessário. As decisões migratórias cabem às autoridades competentes.",
                q2: "Posso solicitar ajuda para viajar para Cuba?",
                a2: "Sim. O conceito inclui pessoas que vivem no Brasil ou em outros países e desejam organizar uma viagem a Cuba para visitar seus familiares, de acordo com as normas vigentes.",
                q3: "Também é possível organizar viagens saindo de Cuba?",
                a3: "Sim. O planejamento de viagens de Cuba para o Brasil ou outros destinos pode ser considerado dependendo dos requisitos e serviços disponíveis.",
                q4: "Como começo?",
                a4: "Preencha o formulário de orientação. Um membro da equipe poderá analisar sua solicitação e explicar os próximos passos."
            },

            footer: {
                slogan: "Onde começam novas oportunidades.",
                description: "Conectamos destinos. Reunimos famílias.",
                company: "Empresa",
                attention: "Atendimento",
                personalized: "Orientação personalizada",
                whatsapp: "WhatsApp Business",
                request: "Formulário de solicitação",
                privacy: "Política de Privacidade",
                terms: "Termos e Condições",
                cookies: "Política de Cookies"
            }
        }
    };

    let currentLanguage = "es";

    function getText(path) {
        const parts = path.split(".");
        let value = translations[currentLanguage];

        for (const part of parts) {
            if (value && Object.prototype.hasOwnProperty.call(value, part)) {
                value = value[part];
            } else {
                return "";
            }
        }

        return value;
    }

    function setText(selector, text, html = false) {
        const element = document.querySelector(selector);

        if (!element) {
            return;
        }

        if (html) {
            element.innerHTML = text;
        } else {
            element.textContent = text;
        }
    }

    function setAll(selector, text, html = false) {
        document.querySelectorAll(selector).forEach(function (element) {
            if (html) {
                element.innerHTML = text;
            } else {
                element.textContent = text;
            }
        });
    }

    function setPlaceholder(selector, text) {
        const element = document.querySelector(selector);

        if (element) {
            element.placeholder = text;
        }
    }

    function applyLanguage(language) {
        if (!translations[language]) {
            language = "es";
        }

        currentLanguage = language;

        document.documentElement.lang = language;

        const titleMap = {
            es: "GÉNESIS GLOBAL — Donde comienzan nuevas oportunidades.",
            en: "GÉNESIS GLOBAL — Where new opportunities begin.",
            fr: "GÉNESIS GLOBAL — Là où commencent de nouvelles opportunités.",
            pt: "GÉNESIS GLOBAL — Onde começam novas oportunidades."
        };

        const descriptionMap = {
            es: "Planificación y acompañamiento de viajes familiares.",
            en: "Family travel planning and support.",
            fr: "Planification et accompagnement de voyages familiaux.",
            pt: "Planejamento e acompanhamento de viagens em família."
        };

        document.title = titleMap[language];

        const metaDescription = document.querySelector(
            'meta[name="description"]'
        );

        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                descriptionMap[language]
            );
        }

        // NAV
        setAll('.links button:not(.cta):nth-child(1)', getText("nav.inicio"));
        setAll('.links button:not(.cta):nth-child(2)', getText("nav.servicios"));
        setAll('.links button:not(.cta):nth-child(3)', getText("nav.proceso"));
        setAll('.links button:not(.cta):nth-child(4)', getText("nav.nosotros"));
        setAll('.links button:not(.cta):nth-child(5)', getText("nav.faq"));

        const navButtons = document.querySelectorAll(".links button");

        navButtons.forEach(function (button) {
            const text = button.textContent.trim();

            if (
                text.includes("Otros") ||
                text.includes("Other") ||
                text.includes("Autres") ||
                text.includes("Outros")
            ) {
                button.textContent = getText("nav.otros");
            }
        });

        const cta = document.querySelector(".links .cta");

        if (cta) {
            cta.textContent = getText("nav.planificar");
        }

        // HERO
        setText(".eyebrow", getText("hero.eyebrow"));
        setText(".hero h1", getText("hero.title"), true);
        setText(".hero .slogan", getText("hero.slogan"));
        setText(".hero-copy > p", getText("hero.description"), true);

        const heroButtons = document.querySelectorAll(".hero .actions button");

        if (heroButtons[0]) {
            heroButtons[0].textContent = getText("hero.primary");
        }

        if (heroButtons[1]) {
            heroButtons[1].textContent = getText("hero.secondary");
        }

        const trust = document.querySelectorAll(".trust span");

        if (trust[0]) trust[0].textContent = getText("hero.trust1");
        if (trust[1]) trust[1].textContent = getText("hero.trust2");
        if (trust[2]) trust[2].textContent = getText("hero.trust3");

        setText(".globe-label", getText("hero.globe"), true);

        // PLANNER
        const plannerHead = document.querySelector("#planner .head");

        if (plannerHead) {
            setText("#planner .kicker", getText("planner.kicker"));
            setText("#planner .section-title", getText("planner.title"), true);

            const plannerDescription = plannerHead.querySelector("p");

            if (plannerDescription) {
                plannerDescription.textContent = getText("planner.description");
            }
        }

        const searchLabels = document.querySelectorAll(
            "#step1 .search-field label"
        );

        if (searchLabels[0]) {
            searchLabels[0].textContent = getText("planner.origin");
        }

        if (searchLabels[1]) {
            searchLabels[1].textContent = getText("planner.destination");
        }

        setPlaceholder(
            "#origenInput",
            getText("planner.originPlaceholder")
        );

        setPlaceholder(
            "#destinoInput",
            getText("planner.destinationPlaceholder")
        );

        setText(
            "#step1 .btn-continuar",
            getText("planner.continue")
        );

        const hint = document.querySelector(
            "#step1 > div:last-child"
        );

        if (hint) {
            hint.textContent = getText("planner.globeHint");
        }

        const detailLabels = document.querySelectorAll(
            "#step2 .detail-field label"
        );

        if (detailLabels[0]) detailLabels[0].textContent = getText("planner.travelDate");
        if (detailLabels[1]) detailLabels[1].textContent = getText("planner.returnDate");
        if (detailLabels[2]) detailLabels[2].textContent = getText("planner.adults");
        if (detailLabels[3]) detailLabels[3].textContent = getText("planner.children");
        if (detailLabels[4]) detailLabels[4].textContent = getText("planner.travelType");

        const typeSelect = document.querySelector("#tipoViaje");

        if (typeSelect) {
            const options = typeSelect.options;

            if (options[0]) options[0].textContent = getText("planner.familyVisit");
            if (options[1]) options[1].textContent = getText("planner.personal");
            if (options[2]) options[2].textContent = getText("planner.tourism");
            if (options[3]) options[3].textContent = getText("planner.other");
        }

        setAll("#step2 .secondary", getText("planner.back"));

        const step2Primary = document.querySelector(
            "#step2 .primary"
        );

        if (step2Primary) {
            step2Primary.textContent = getText("planner.continue");
        }

        const step3Labels = document.querySelectorAll(
            "#step3 .detail-field label"
        );

        if (step3Labels[0]) step3Labels[0].textContent = getText("planner.name");
        if (step3Labels[1]) step3Labels[1].textContent = getText("planner.whatsapp");
        if (step3Labels[2]) step3Labels[2].textContent = getText("planner.email");
        if (step3Labels[3]) step3Labels[3].textContent = getText("planner.residence");
        if (step3Labels[4]) step3Labels[4].textContent = getText("planner.comments");

        setPlaceholder("#nombre", getText("planner.namePlaceholder"));
        setPlaceholder("#whatsapp", getText("planner.whatsappPlaceholder"));
        setPlaceholder("#email", getText("planner.emailPlaceholder"));
        setPlaceholder("#residencia", getText("planner.residencePlaceholder"));
        setPlaceholder("#comentarios", getText("planner.commentsPlaceholder"));

        const step3Buttons = document.querySelectorAll(
            "#step3 .secondary, #step3 .primary"
        );

        if (step3Buttons[0]) {
            step3Buttons[0].textContent = getText("planner.back");
        }

        if (step3Buttons[1]) {
            step3Buttons[1].textContent = getText("planner.summary");
        }

        const step4Buttons = document.querySelectorAll(
            "#step4 .secondary, #step4 .primary"
        );

        if (step4Buttons[0]) {
            step4Buttons[0].textContent = getText("planner.edit");
        }

        if (step4Buttons[1] && !step4Buttons[1].disabled) {
            step4Buttons[1].textContent = getText("planner.send");
        }

        // PROOF
        setText(".proof .kicker", getText("proof.kicker"));
        setText(".proof h2", getText("proof.title"), true);

        const proofSlogan = document.querySelector(".proof-card div div");

        if (proofSlogan) {
            proofSlogan.textContent = getText("proof.slogan");
        }

        const proofDescription = document.querySelector(".proof-card > p");

        if (proofDescription) {
            proofDescription.textContent = getText("proof.description");
        }

        // SERVICES
        setText("#servicios .kicker", getText("services.kicker"));
        setText("#servicios .section-title", getText("services.title"), true);

        const servicesDescription = document.querySelector(
            "#servicios .head p"
        );

        if (servicesDescription) {
            servicesDescription.textContent = getText("services.description");
        }

        const cards = document.querySelectorAll("#servicios .card");

        const serviceTitles = [
            getText("services.one"),
            getText("services.two"),
            getText("services.three"),
            getText("services.four")
        ];

        const serviceTexts = [
            getText("services.oneText"),
            getText("services.twoText"),
            getText("services.threeText"),
            getText("services.fourText")
        ];

        cards.forEach(function (card, index) {
            const h3 = card.querySelector("h3");
            const p = card.querySelector("p");
            const link = card.querySelector(".link");

            if (h3) h3.textContent = serviceTitles[index];
            if (p) p.textContent = serviceTexts[index];
            if (link) link.textContent = getText("services.planNow");
        });

        // PROCESS
        setText("#proceso .kicker", getText("process.kicker"));
        setText("#proceso .section-title", getText("process.title"), true);

        const processDescription = document.querySelector(
            "#proceso .head p"
        );

        if (processDescription) {
            processDescription.textContent = getText("process.description");
        }

        const steps = document.querySelectorAll("#proceso .step");

        const processTitles = [
            getText("process.one"),
            getText("process.two"),
            getText("process.three"),
            getText("process.four")
        ];

        const processTexts = [
            getText("process.oneText"),
            getText("process.twoText"),
            getText("process.threeText"),
            getText("process.fourText")
        ];

        steps.forEach(function (step, index) {
            const h3 = step.querySelector("h3");
            const p = step.querySelector("p");

            if (h3) h3.textContent = processTitles[index];
            if (p) p.textContent = processTexts[index];
        });

        // ABOUT
        setText("#nosotros .kicker", getText("about.kicker"));
        setText("#nosotros .section-title", getText("about.title"), true);

        const aboutDescription = document.querySelector(
            "#nosotros .about p"
        );

        if (aboutDescription) {
            aboutDescription.textContent = getText("about.description");
        }

        const pills = document.querySelectorAll(
            "#nosotros .pill"
        );

        if (pills[0]) pills[0].textContent = getText("about.trust");
        if (pills[1]) pills[1].textContent = getText("about.transparency");
        if (pills[2]) pills[2].textContent = getText("about.closeness");
        if (pills[3]) pills[3].textContent = getText("about.professionalism");

        // FAQ
        setText("#faq .kicker", getText("faq.kicker"));
        setText("#faq .section-title", getText("faq.title"), true);

        const faqQuestions = document.querySelectorAll(".faq-q");
        const faqAnswers = document.querySelectorAll(".faq-a");

        const questions = [
            getText("faq.q1"),
            getText("faq.q2"),
            getText("faq.q3"),
            getText("faq.q4")
        ];

        const answers = [
            getText("faq.a1"),
            getText("faq.a2"),
            getText("faq.a3"),
            getText("faq.a4")
        ];

        faqQuestions.forEach(function (question, index) {
            const arrow = question.querySelector("span:last-child");

            question.textContent = questions[index] + " ";

            if (arrow) {
                question.appendChild(arrow);
            }
        });

        faqAnswers.forEach(function (answer, index) {
            answer.textContent = answers[index];
        });

        // FOOTER
        const footerBrands = document.querySelectorAll(
            ".footer .brand small"
        );

        footerBrands.forEach(function (element) {
            element.textContent = getText("footer.slogan");
        });

        const footerDescription = document.querySelector(
            ".footer > .footer-grid > div:first-child p"
        );

        if (footerDescription) {
            footerDescription.textContent = getText("footer.description");
        }

        const footerColumns = document.querySelectorAll(
            ".footer-grid > div"
        );

        if (footerColumns[1]) {
            const h4 = footerColumns[1].querySelector("h4");
            if (h4) h4.textContent = getText("footer.company");

            const buttons = footerColumns[1].querySelectorAll("button");

            if (buttons[0]) buttons[0].textContent = getText("nav.nosotros");
            if (buttons[1]) buttons[1].textContent = getText("nav.servicios");
            if (buttons[2]) buttons[2].textContent = getText("nav.faq");
        }

        if (footerColumns[2]) {
            const h4 = footerColumns[2].querySelector("h4");
            if (h4) h4.textContent = getText("footer.attention");

            const spans = footerColumns[2].querySelectorAll("span");

            if (spans[0]) spans[0].textContent = getText("footer.personalized");
            if (spans[1]) spans[1].textContent = getText("footer.request");

            const whatsapp = footerColumns[2].querySelector(
                ".whatsapp-link"
            );

            if (whatsapp) {
                whatsapp.textContent = getText("footer.whatsapp");
            }
        }

        const copyLinks = document.querySelectorAll(".copy a");

        if (copyLinks[0]) copyLinks[0].textContent = getText("footer.privacy");
        if (copyLinks[1]) copyLinks[1].textContent = getText("footer.terms");
        if (copyLinks[2]) copyLinks[2].textContent = getText("footer.cookies");

        // LANGUAGE SELECTOR
        const code = document.getElementById("languageCurrentCode");

        if (code) {
            code.textContent = language.toUpperCase();
        }

        document.querySelectorAll(".language-option").forEach(function (option) {
            option.classList.toggle(
                "active",
                option.dataset.language === language
            );
        });

        console.log("🌐 Idioma aplicado:", language);
    }

    function closeLanguageMenu() {
        const switcher = document.getElementById("languageSwitcher");
        const current = document.getElementById("languageCurrent");

        if (switcher) {
            switcher.classList.remove("open");
        }

        if (current) {
            current.setAttribute("aria-expanded", "false");
        }
    }

    function initializeLanguageSystem() {
        const switcher = document.getElementById("languageSwitcher");
        const current = document.getElementById("languageCurrent");
        const options = document.querySelectorAll(".language-option");

        if (!switcher || !current) {
            console.error("❌ No se encontró el selector de idiomas.");
            return;
        }

        current.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            const isOpen = switcher.classList.toggle("open");

            current.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });

        options.forEach(function (option) {
            option.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();

                const language = option.dataset.language;

                if (!language) {
                    return;
                }

                applyLanguage(language);
                closeLanguageMenu();
            });
        });

        document.addEventListener("click", function (event) {
            if (!switcher.contains(event.target)) {
                closeLanguageMenu();
            }
        });

        // SIEMPRE ESPAÑOL AL ABRIR LA PÁGINA
        applyLanguage("es");

        window.GG_I18N = {
            translations: translations,
            getLanguage: function () {
                return currentLanguage;
            },
            setLanguage: applyLanguage,
            translate: getText
        };

        window.getGenesisLanguage = function () {
            return currentLanguage;
        };

        window.applyGenesisLanguage = applyLanguage;

        window.t = getText;

        console.log("✅ Sistema de idiomas GÉNESIS GLOBAL iniciado");
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializeLanguageSystem
        );
    } else {
        initializeLanguageSystem();
    }
})();
