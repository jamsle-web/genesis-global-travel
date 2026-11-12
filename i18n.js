
(function () {
    "use strict";

    const translations = {
        es: {
            title: "GÉNESIS GLOBAL — Donde comienzan nuevas oportunidades.",
            meta: "Planificación y acompañamiento de viajes familiares.",
            nav: {
                inicio: "Inicio",
                servicios: "Servicios",
                proceso: "Cómo funciona",
                nosotros: "Nosotros",
                otros: "Otros Servicios",
                planificar: "Planificar mi viaje →",
                language: "Seleccionar idioma"
            },
            hero: {
                eyebrow: "Una nueva forma de organizar tu viaje familiar",
                title: 'Los kilómetros no deberían separar a las <span>familias.</span>',
                slogan: "“Donde comienzan nuevas oportunidades.”",
                description: 'Planificamos y coordinamos tu viaje para que puedas concentrarte en lo más importante: <b>volver a estar cerca de quienes amas.</b>',
                primary: "Planificar mi viaje →",
                secondary: "Ver cómo funciona",
                trust: ["Atención humana", "Proceso claro", "Acompañamiento"]
            },
            planner: {
                kicker: "Planifica tu viaje",
                title: 'Cuéntanos <span class="text-gradient">desde dónde y hacia dónde</span>',
                description: "Completa los datos y nosotros organizamos el resto.",
                origin: "¿Desde dónde viajas?",
                destination: "¿A dónde quieres viajar?",
                originPlaceholder: "Ej: Brasil, Cuba, España...",
                destinationPlaceholder: "Ej: Cuba, Brasil, México...",
                continue: "Continuar →",
                globeHint: "También puedes hacer clic en un país del globo para seleccionarlo como destino.",
                travelDate: "Fecha aproximada de viaje",
                returnDate: "Fecha de regreso (opcional)",
                adults: "Número de adultos",
                children: "Número de niños",
                travelType: "Tipo de viaje",
                familyVisit: "Visita familiar",
                personal: "Viaje personal",
                tourism: "Turismo",
                other: "Otro",
                back: "← Atrás",
                name: "Nombre completo",
                namePlaceholder: "Tu nombre completo",
                whatsapp: "WhatsApp",
                whatsappPlaceholder: "+54 9 11 1234 5678",
                email: "Correo electrónico",
                emailPlaceholder: "tucorreo@ejemplo.com",
                residence: "País donde resides actualmente",
                residencePlaceholder: "Ej: Brasil, Argentina, España...",
                comments: "Comentarios adicionales",
                commentsPlaceholder: "Cuéntanos algo más que necesites...",
                summary: "Ver resumen",
                edit: "← Editar",
                send: "Enviar solicitud →"
            },
            services: {
                kicker: "Descubre más",
                title: "Todo lo que podemos hacer por ti.",
                description: "Vuelos, hoteles, remesas, recargas y más en un solo lugar.",
                button: "Ver Servicios →"
            },
            reviews: {
                kicker: "Testimonios",
                title: 'Lo que dicen <span class="text-gradient">nuestros clientes</span>',
                loading: "Cargando opiniones...",
                empty: "Aún no hay opiniones. ¡Sé el primero en viajar con nosotros!",
                error: "No se pudieron cargar las opiniones en este momento."
            },
            footer: {
                slogan: "Donde comienzan nuevas oportunidades.",
                description: "Conectamos destinos. Reunimos familias.",
                company: "Empresa",
                attention: "Contacto Directo",
                cuba: "Cuba (CEO): +53 5 9508420",
                brasil: "Brasil: +55 41 8709-7183",
                general: "WhatsApp General",
                rights: "© 2026 GÉNESIS GLOBAL — Donde comienzan nuevas oportunidades.",
                faq: "Preguntas frecuentes",
                help: "Centro de ayuda",
                privacy: "Privacidad",
                terms: "Términos",
                cookies: "Cookies",
                newsletter: "Boletín informativo"
            },
            globe: {
                selected: "seleccionado"
            }
        },

        en: {
            title: "GÉNESIS GLOBAL — Where new opportunities begin.",
            meta: "Family travel planning and personalized assistance.",
            nav: {
                inicio: "Home",
                servicios: "Services",
                proceso: "How it works",
                nosotros: "About us",
                otros: "Other Services",
                planificar: "Plan my trip →",
                language: "Select language"
            },
            hero: {
                eyebrow: "A new way to organize your family trip",
                title: 'Miles should not separate <span>families.</span>',
                slogan: "“Where new opportunities begin.”",
                description: 'We plan and coordinate your trip so you can focus on what matters most: <b>being close again to those you love.</b>',
                primary: "Plan my trip →",
                secondary: "See how it works",
                trust: ["Personal assistance", "Clear process", "Ongoing support"]
            },
            planner: {
                kicker: "Plan your trip",
                title: 'Tell us <span class="text-gradient">where you are traveling from and to</span>',
                description: "Complete the information and we will organize the rest.",
                origin: "Where are you traveling from?",
                destination: "Where do you want to travel?",
                originPlaceholder: "E.g.: Brazil, Cuba, Spain...",
                destinationPlaceholder: "E.g.: Cuba, Brazil, Mexico...",
                continue: "Continue →",
                globeHint: "You can also click on a country on the globe to select it as your destination.",
                travelDate: "Approximate travel date",
                returnDate: "Return date (optional)",
                adults: "Number of adults",
                children: "Number of children",
                travelType: "Type of trip",
                familyVisit: "Family visit",
                personal: "Personal trip",
                tourism: "Tourism",
                other: "Other",
                back: "← Back",
                name: "Full name",
                namePlaceholder: "Your full name",
                whatsapp: "WhatsApp",
                whatsappPlaceholder: "+54 9 11 1234 5678",
                email: "Email address",
                emailPlaceholder: "you@example.com",
                residence: "Country where you currently live",
                residencePlaceholder: "E.g.: Brazil, Argentina, Spain...",
                comments: "Additional comments",
                commentsPlaceholder: "Tell us anything else you may need...",
                summary: "View summary",
                edit: "← Edit",
                send: "Send request →"
            },
            services: {
                kicker: "Discover more",
                title: "Everything we can do for you.",
                description: "Flights, hotels, remittances, mobile top-ups and more in one place.",
                button: "Explore Services →"
            },
            reviews: {
                kicker: "Testimonials",
                title: 'What our <span class="text-gradient">customers say</span>',
                loading: "Loading reviews...",
                empty: "There are no reviews yet. Be the first to travel with us!",
                error: "Reviews could not be loaded at this time."
            },
            footer: {
                slogan: "Where new opportunities begin.",
                description: "We connect destinations. We bring families together.",
                company: "Company",
                attention: "Direct Contact",
                cuba: "Cuba (CEO): +53 5 9508420",
                brasil: "Brazil: +55 41 8709-7183",
                general: "General WhatsApp",
                rights: "© 2026 GÉNESIS GLOBAL — Where new opportunities begin.",
                faq: "Frequently Asked Questions",
                help: "Help Center",
                privacy: "Privacy",
                terms: "Terms",
                cookies: "Cookies",
                newsletter: "Newsletter"
            },
            globe: {
                selected: "selected"
            }
        },

        fr: {
            title: "GÉNESIS GLOBAL — Là où commencent de nouvelles opportunités.",
            meta: "Planification de voyages en famille et accompagnement personnalisé.",
            nav: {
                inicio: "Accueil",
                servicios: "Services",
                proceso: "Comment ça marche",
                nosotros: "À propos",
                otros: "Autres services",
                planificar: "Planifier mon voyage →",
                language: "Choisir la langue"
            },
            hero: {
                eyebrow: "Une nouvelle façon d'organiser votre voyage en famille",
                title: 'La distance ne devrait pas séparer les <span>familles.</span>',
                slogan: "« Là où commencent de nouvelles opportunités. »",
                description: 'Nous planifions et coordonnons votre voyage afin que vous puissiez vous concentrer sur l’essentiel : <b>retrouver la proximité de ceux que vous aimez.</b>',
                primary: "Planifier mon voyage →",
                secondary: "Découvrir notre fonctionnement",
                trust: ["Assistance humaine", "Processus clair", "Accompagnement personnalisé"]
            },
            planner: {
                kicker: "Planifiez votre voyage",
                title: 'Indiquez-nous <span class="text-gradient">votre point de départ et votre destination</span>',
                description: "Renseignez les informations et nous nous occupons de la suite.",
                origin: "D’où partez-vous ?",
                destination: "Où souhaitez-vous voyager ?",
                originPlaceholder: "Ex. : Brésil, Cuba, Espagne...",
                destinationPlaceholder: "Ex. : Cuba, Brésil, Mexique...",
                continue: "Continuer →",
                globeHint: "Vous pouvez également cliquer sur un pays du globe pour le sélectionner comme destination.",
                travelDate: "Date approximative du voyage",
                returnDate: "Date de retour (facultative)",
                adults: "Nombre d’adultes",
                children: "Nombre d’enfants",
                travelType: "Type de voyage",
                familyVisit: "Visite familiale",
                personal: "Voyage personnel",
                tourism: "Tourisme",
                other: "Autre",
                back: "← Retour",
                name: "Nom complet",
                namePlaceholder: "Votre nom complet",
                whatsapp: "WhatsApp",
                whatsappPlaceholder: "+33 6 12 34 56 78",
                email: "Adresse e-mail",
                emailPlaceholder: "votreemail@exemple.com",
                residence: "Pays de résidence actuel",
                residencePlaceholder: "Ex. : Brésil, Argentine, Espagne...",
                comments: "Commentaires supplémentaires",
                commentsPlaceholder: "Indiquez-nous toute autre information utile...",
                summary: "Voir le récapitulatif",
                edit: "← Modifier",
                send: "Envoyer la demande →"
            },
            services: {
                kicker: "En savoir plus",
                title: "Tout ce que nous pouvons faire pour vous.",
                description: "Vols, hôtels, transferts d’argent, recharges et bien plus encore, au même endroit.",
                button: "Découvrir les services →"
            },
            reviews: {
                kicker: "Témoignages",
                title: 'Ce que disent <span class="text-gradient">nos clients</span>',
                loading: "Chargement des avis...",
                empty: "Aucun avis pour le moment. Soyez le premier à voyager avec nous !",
                error: "Les avis ne peuvent pas être chargés pour le moment."
            },
            footer: {
                slogan: "Là où commencent de nouvelles opportunités.",
                description: "Nous connectons les destinations. Nous réunissons les familles.",
                company: "Entreprise",
                attention: "Contact direct",
                cuba: "Cuba (PDG) : +53 5 9508420",
                brasil: "Brésil : +55 41 8709-7183",
                general: "WhatsApp général",
                rights: "© 2026 GÉNESIS GLOBAL — Là où commencent de nouvelles opportunités.",
                faq: "Questions fréquentes",
                help: "Centre d’aide",
                privacy: "Confidentialité",
                terms: "Conditions générales",
                cookies: "Cookies",
                newsletter: "Lettre d’information"
            },
            globe: {
                selected: "sélectionné"
            }
        },

        pt: {
            title: "GÉNESIS GLOBAL — Onde começam novas oportunidades.",
            meta: "Planejamento e acompanhamento personalizado de viagens em família.",
            nav: {
                inicio: "Início",
                servicios: "Serviços",
                proceso: "Como funciona",
                nosotros: "Sobre nós",
                otros: "Outros serviços",
                planificar: "Planejar minha viagem →",
                language: "Selecionar idioma"
            },
            hero: {
                eyebrow: "Uma nova maneira de organizar sua viagem em família",
                title: 'Os quilômetros não deveriam separar as <span>famílias.</span>',
                slogan: "“Onde começam novas oportunidades.”",
                description: 'Planejamos e coordenamos sua viagem para que você possa se concentrar no que realmente importa: <b>estar novamente perto de quem você ama.</b>',
                primary: "Planejar minha viagem →",
                secondary: "Veja como funciona",
                trust: ["Atendimento humanizado", "Processo claro", "Acompanhamento"]
            },
            planner: {
                kicker: "Planeje sua viagem",
                title: 'Conte-nos <span class="text-gradient">de onde e para onde você vai</span>',
                description: "Preencha os dados e nós organizaremos o restante.",
                origin: "De onde você está viajando?",
                destination: "Para onde você quer viajar?",
                originPlaceholder: "Ex.: Brasil, Cuba, Espanha...",
                destinationPlaceholder: "Ex.: Cuba, Brasil, México...",
                continue: "Continuar →",
                globeHint: "Você também pode clicar em um país do globo para selecioná-lo como destino.",
                travelDate: "Data aproximada da viagem",
                returnDate: "Data de retorno (opcional)",
                adults: "Número de adultos",
                children: "Número de crianças",
                travelType: "Tipo de viagem",
                familyVisit: "Visita familiar",
                personal: "Viagem pessoal",
                tourism: "Turismo",
                other: "Outro",
                back: "← Voltar",
                name: "Nome completo",
                namePlaceholder: "Seu nome completo",
                whatsapp: "WhatsApp",
                whatsappPlaceholder: "+55 11 99999-9999",
                email: "E-mail",
                emailPlaceholder: "seuemail@exemplo.com",
                residence: "País onde você reside atualmente",
                residencePlaceholder: "Ex.: Brasil, Argentina, Espanha...",
                comments: "Comentários adicionais",
                commentsPlaceholder: "Conte-nos qualquer outra informação necessária...",
                summary: "Ver resumo",
                edit: "← Editar",
                send: "Enviar solicitação →"
            },
            services: {
                kicker: "Descubra mais",
                title: "Tudo o que podemos fazer por você.",
                description: "Voos, hotéis, remessas, recargas e muito mais em um só lugar.",
                button: "Ver serviços →"
            },
            reviews: {
                kicker: "Depoimentos",
                title: 'O que dizem <span class="text-gradient">nossos clientes</span>',
                loading: "Carregando avaliações...",
                empty: "Ainda não há avaliações. Seja o primeiro a viajar conosco!",
                error: "Não foi possível carregar as avaliações neste momento."
            },
            footer: {
                slogan: "Onde começam novas oportunidades.",
                description: "Conectamos destinos. Reunimos famílias.",
                company: "Empresa",
                attention: "Contato direto",
                cuba: "Cuba (CEO): +53 5 9508420",
                brasil: "Brasil: +55 41 8709-7183",
                general: "WhatsApp geral",
                rights: "© 2026 GÉNESIS GLOBAL — Onde começam novas oportunidades.",
                faq: "Perguntas frequentes",
                help: "Central de ajuda",
                privacy: "Privacidade",
                terms: "Termos",
                cookies: "Cookies",
                newsletter: "Newsletter"
            },
            globe: {
                selected: "selecionado"
            }
        }
    };

    let currentLanguage = "es";

    function getText(path) {
        const value = path.split(".").reduce((obj, key) => {
            return obj && Object.prototype.hasOwnProperty.call(obj, key)
                ? obj[key]
                : undefined;
        }, translations[currentLanguage]);

        return value === undefined ? "" : value;
    }

    function setText(selector, value) {
        const element = document.querySelector(selector);
        if (element && typeof value === "string") {
            element.textContent = value;
        }
    }

    function setHTML(selector, value) {
        const element = document.querySelector(selector);
        if (element && typeof value === "string") {
            element.innerHTML = value;
        }
    }

    function setPlaceholder(selector, value) {
        const element = document.querySelector(selector);
        if (element && typeof value === "string") {
            element.placeholder = value;
        }
    }

    function setLabel(inputId, value) {
        const input = document.getElementById(inputId);
        const label = input?.closest(".input-with-icon, .detail-field, .search-field")
            ?.querySelector("label");

        if (label && typeof value === "string") {
            label.textContent = value;
        }
    }

    function applyLanguage(language) {
        if (!Object.prototype.hasOwnProperty.call(translations, language)) {
            language = "es";
        }

        currentLanguage = language;
        const t = translations[language];

        document.documentElement.lang = language;
        document.title = t.title;

        const description = document.querySelector('meta[name="description"]');
        if (description) description.content = t.meta;

        // Navegación
        const navLinks = document.querySelectorAll("#links a");
        const navKeys = ["inicio", "servicios", "proceso", "nosotros", "otros"];

        navKeys.forEach((key, index) => {
            if (navLinks[index]) navLinks[index].textContent = t.nav[key];
        });

        setText(".nav-actions .cta", t.nav.planificar);

        const languageButton = document.getElementById("languageCurrent");
        if (languageButton) {
            languageButton.setAttribute("aria-label", t.nav.language);
        }

        // Hero
        setText(".hero .eyebrow", t.hero.eyebrow);
        setHTML(".hero h1", t.hero.title);
        setText(".hero .slogan", t.hero.slogan);
        setHTML(".hero-copy > p", t.hero.description);

        const heroButtons = document.querySelectorAll(".hero .actions a");
        if (heroButtons[0]) heroButtons[0].textContent = t.hero.primary;
        if (heroButtons[1]) heroButtons[1].textContent = t.hero.secondary;

        document.querySelectorAll(".hero .trust span").forEach((element, index) => {
            if (t.hero.trust[index]) element.textContent = t.hero.trust[index];
        });

        // Planificador
        setText(".planner-card .head .kicker", t.planner.kicker);
        setHTML(".planner-card .head .section-title", t.planner.title);
        setText(".planner-card .head > p", t.planner.description);

        setLabel("origenInput", t.planner.origin);
        setLabel("destinoInput", t.planner.destination);
        setPlaceholder("#origenInput", t.planner.originPlaceholder);
        setPlaceholder("#destinoInput", t.planner.destinationPlaceholder);
        setText("#step1 .btn-continuar", t.planner.continue);

        const globeHint = document.querySelector("#step1 > div:last-child");
        if (globeHint) {
            const svg = globeHint.querySelector("svg");
            globeHint.textContent = "";
            if (svg) globeHint.appendChild(svg);
            globeHint.appendChild(document.createTextNode(" " + t.planner.globeHint));
        }

        setLabel("fechaViaje", t.planner.travelDate);
        setLabel("fechaRegreso", t.planner.returnDate);
        setLabel("adultos", t.planner.adults);
        setLabel("ninos", t.planner.children);
        setLabel("tipoViaje", t.planner.travelType);

        const travelType = document.getElementById("tipoViaje");
        if (travelType) {
            const optionLabels = [
                t.planner.familyVisit,
                t.planner.personal,
                t.planner.tourism,
                t.planner.other
            ];

            Array.from(travelType.options).forEach((option, index) => {
                if (optionLabels[index]) option.textContent = optionLabels[index];
            });
        }

        setLabel("nombre", t.planner.name);
        setPlaceholder("#nombre", t.planner.namePlaceholder);
        setLabel("whatsapp", t.planner.whatsapp);
        setPlaceholder("#whatsapp", t.planner.whatsappPlaceholder);
        setLabel("email", t.planner.email);
        setPlaceholder("#email", t.planner.emailPlaceholder);
        setLabel("residencia", t.planner.residence);
        setPlaceholder("#residencia", t.planner.residencePlaceholder);
        setLabel("comentarios", t.planner.comments);
        setPlaceholder("#comentarios", t.planner.commentsPlaceholder);

        const step2Buttons = document.querySelectorAll("#step2 > div:last-child button");
        if (step2Buttons[0]) step2Buttons[0].textContent = t.planner.back;
        if (step2Buttons[1]) step2Buttons[1].textContent = t.planner.continue;

        const step3Buttons = document.querySelectorAll("#step3 > div:last-child button");
        if (step3Buttons[0]) step3Buttons[0].textContent = t.planner.back;
        if (step3Buttons[1]) step3Buttons[1].textContent = t.planner.summary;

        const step4Buttons = document.querySelectorAll("#step4 > div:last-child button");
        if (step4Buttons[0]) step4Buttons[0].textContent = t.planner.edit;
        if (step4Buttons[1]) step4Buttons[1].textContent = t.planner.send;

        // Sección de servicios
        const serviceSection = document.querySelector(".planner-section + section");
        if (serviceSection) {
            setText(".planner-section + section .kicker", t.services.kicker);
            setText(".planner-section + section .section-title", t.services.title);
            setText(".planner-section + section p", t.services.description);
            setText(".planner-section + section a.primary", t.services.button);
        }

        // Testimonios
        const reviewsSection = document.getElementById("public-reviews-grid")?.closest("section");
        if (reviewsSection) {
            const kicker = reviewsSection.querySelector(".kicker");
            const title = reviewsSection.querySelector(".section-title");

            if (kicker) kicker.textContent = t.reviews.kicker;
            if (title) title.innerHTML = t.reviews.title;

            const loading = reviewsSection.querySelector("#public-reviews-grid > p");
            if (loading && loading.dataset.reviewState === "loading") {
                loading.textContent = t.reviews.loading;
            }
        }

        // Footer
        const footerCols = document.querySelectorAll(".footer-grid > div");

        if (footerCols[0]) {
            const small = footerCols[0].querySelector(".brand small");
            const description = footerCols[0].querySelector("p");

            if (small) small.textContent = t.footer.slogan;
            if (description) description.textContent = t.footer.description;
        }

        if (footerCols[1]) {
            setText(".footer-grid > div:nth-child(2) h4", t.footer.company);
            const links = footerCols[1].querySelectorAll("a");
            if (links[0]) links[0].textContent = t.nav.nosotros;
            if (links[1]) links[1].textContent = t.nav.servicios;
            if (links[2]) links[2].textContent = t.footer.faq;
        }

        if (footerCols[2]) {
            setText(".footer-grid > div:nth-child(3) h4", t.footer.attention);
            const links = footerCols[2].querySelectorAll("a");
            if (links[0]) links[0].textContent = t.footer.cuba;
            if (links[1]) links[1].textContent = t.footer.brasil;
            if (links[2]) links[2].textContent = t.footer.general;
        }

        const rights = document.querySelector(".copy > span:first-child");
        if (rights) rights.textContent = t.footer.rights;

        const legalLinks = document.querySelectorAll(".copy > span:last-child a");
        const legalLabels = [
            t.footer.faq,
            t.footer.help,
            t.footer.privacy,
            t.footer.terms,
            t.footer.cookies,
            t.footer.newsletter
        ];

        legalLinks.forEach((link, index) => {
            if (legalLabels[index]) link.textContent = legalLabels[index];
        });

        // Selector de idioma
        const code = document.getElementById("languageCurrentCode");
        if (code) code.textContent = language.toUpperCase();

        document.querySelectorAll(".language-option").forEach(option => {
            const active = option.dataset.language === language;
            option.classList.toggle("active", active);

            if (active) {
                option.setAttribute("aria-current", "true");
            } else {
                option.removeAttribute("aria-current");
            }
        });

        // Permite que otros módulos actualicen sus propios textos.
        document.dispatchEvent(new CustomEvent("genesis:languagechange", {
            detail: { language }
        }));
    }

    function initialize() {
        const switcher = document.getElementById("languageSwitcher");
        const current = document.getElementById("languageCurrent");
        const options = document.querySelectorAll(".language-option");

        if (switcher && current) {
            current.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();

                const isOpen = switcher.classList.toggle("open");
                current.setAttribute("aria-expanded", String(isOpen));
            });

            options.forEach(option => {
                option.addEventListener("click", function (event) {
                    event.preventDefault();
                    event.stopPropagation();

                    const language = option.dataset.language;
                    if (!language) return;

                    applyLanguage(language);
                    switcher.classList.remove("open");
                    current.setAttribute("aria-expanded", "false");
                });
            });

            document.addEventListener("click", function (event) {
                if (!switcher.contains(event.target)) {
                    switcher.classList.remove("open");
                    current.setAttribute("aria-expanded", "false");
                }
            });

            document.addEventListener("keydown", function (event) {
                if (event.key === "Escape") {
                    switcher.classList.remove("open");
                    current.setAttribute("aria-expanded", "false");
                    current.focus();
                }
            });
        }

        applyLanguage("es");
    }

    window.GenesisI18n = Object.freeze({
        applyLanguage,
        getText,
        getLanguage: () => currentLanguage
    });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialize, { once: true });
    } else {
        initialize();
    }
})();
