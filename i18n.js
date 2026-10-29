(function () {
    "use strict";

    const translations = {
        es: {
            nav: { inicio: "Inicio", servicios: "Servicios", proceso: "Cómo funciona", nosotros: "Nosotros", faq: "FAQ", otros: "Otros Servicios", planificar: "Planificar mi viaje →" },
            hero: {
                eyebrow: "Una nueva forma de organizar tu viaje familiar",
                title: 'Los kilómetros no deberían separar a las <span>familias.</span>',
                slogan: "“Donde comienzan nuevas oportunidades.”",
                description: 'Planificamos y coordinamos tu viaje para que puedas concentrarte en lo más importante: <b>volver a estar cerca de quienes amas.</b>',
                primary: "Planificar mi viaje →",
                secondary: "Ver cómo funciona",
                trust1: "Atención humana",
                trust2: "Proceso claro",
                trust3: "Acompañamiento"
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
                title: 'Todo lo que podemos hacer por ti.',
                description: "Vuelos, hoteles, remesas, recargas y más en un solo lugar.",
                btn: "Ver Servicios →"
            },
            footer: {
                slogan: "Donde comienzan nuevas oportunidades.",
                description: "Conectamos destinos. Reunimos familias.",
                company: "Empresa",
                attention: "Contacto Directo",
                cuba: "Cuba (CEO): +53 5 9508420",
                brasil: "Brasil: +55 41 8709-7183",
                general: "WhatsApp General",
                rights: "© 2026 GÉNESIS GLOBAL — Donde comienzan nuevas oportunidades."
            }
        },
        en: {
            nav: { inicio: "Home", servicios: "Services", proceso: "How it works", nosotros: "About us", faq: "FAQ", otros: "Other Services", planificar: "Plan my trip →" },
            hero: {
                eyebrow: "A new way to organize your family trip",
                title: 'Miles should not separate <span>families.</span>',
                slogan: "“Where new opportunities begin.”",
                description: 'We plan and coordinate your trip so you can focus on what matters most: <b>being close again to those you love.</b>',
                primary: "Plan my trip →",
                secondary: "See how it works",
                trust1: "Human support",
                trust2: "Clear process",
                trust3: "Personal assistance"
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
                title: 'Everything we can do for you.',
                description: "Flights, hotels, remittances, recharges and more in one place.",
                btn: "View Services →"
            },
            footer: {
                slogan: "Where new opportunities begin.",
                description: "We connect destinations. We bring families together.",
                company: "Company",
                attention: "Direct Contact",
                cuba: "Cuba (CEO): +53 5 9508420",
                brasil: "Brazil: +55 41 8709-7183",
                general: "General WhatsApp",
                rights: "© 2026 GÉNESIS GLOBAL — Where new opportunities begin."
            }
        },
        pt: {
            nav: { inicio: "Início", servicios: "Serviços", proceso: "Como funciona", nosotros: "Sobre nós", faq: "FAQ", otros: "Outros Serviços", planificar: "Planejar minha viagem →" },
            hero: {
                eyebrow: "Uma nova forma de organizar sua viagem em família",
                title: 'Os quilômetros não deveriam separar as <span>famílias.</span>',
                slogan: "“Onde começam novas oportunidades.”",
                description: 'Planejamos e coordenamos sua viagem para que você possa se concentrar no que realmente importa: <b>estar novamente perto de quem você ama.</b>',
                primary: "Planejar minha viagem →",
                secondary: "Ver como funciona",
                trust1: "Atendimento humano",
                trust2: "Processo claro",
                trust3: "Acompanhamento"
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
                whatsappPlaceholder: "+54 9 11 1234 5678",
                email: "E-mail",
                emailPlaceholder: "seuemail@exemplo.com",
                residence: "País onde você reside atualmente",
                residencePlaceholder: "Ex.: Brasil, Argentina, Espanha...",
                comments: "Comentários adicionais",
                commentsPlaceholder: "Conte-nos algo mais que você precisa...",
                summary: "Ver resumo",
                edit: "← Editar",
                send: "Enviar solicitação →"
            },
            services: {
                title: 'Tudo o que podemos fazer por você.',
                description: "Voos, hotéis, remessas, recargas e muito mais em um só lugar.",
                btn: "Ver Serviços →"
            },
            footer: {
                slogan: "Onde começam novas oportunidades.",
                description: "Conectamos destinos. Reunimos famílias.",
                company: "Empresa",
                attention: "Contato Direto",
                cuba: "Cuba (CEO): +53 5 9508420",
                brasil: "Brasil: +55 41 8709-7183",
                general: "WhatsApp Geral",
                rights: "© 2026 GÉNESIS GLOBAL — Onde começam novas oportunidades."
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
        if (!element) return;
        if (html) { element.innerHTML = text; } else { element.textContent = text; }
    }
    
    function setAll(selector, text, html = false) {
        document.querySelectorAll(selector).forEach(function (element) {
            if (html) { element.innerHTML = text; } else { element.textContent = text; }
        });
    }

    function setPlaceholder(selector, text) {
        const element = document.querySelector(selector);
        if (element) element.placeholder = text;
    }

    function applyLanguage(language) {
        if (!translations[language]) language = "es";
        currentLanguage = language;
        document.documentElement.lang = language;

        const titleMap = {
            es: "GÉNESIS GLOBAL — Donde comienzan nuevas oportunidades.",
            en: "GÉNESIS GLOBAL — Where new opportunities begin.",
            pt: "GÉNESIS GLOBAL — Onde começam novas oportunidades."
        };
        document.title = titleMap[language];

        // NAV
        setAll('.links button:nth-child(1)', getText("nav.inicio"));
        setAll('.links button:nth-child(2)', getText("nav.servicios"));
        setAll('.links button:nth-child(3)', getText("nav.proceso"));
        setAll('.links button:nth-child(4)', getText("nav.nosotros"));
        setAll('.links button:nth-child(5)', getText("nav.faq"));
        
        const otrosBtn = Array.from(document.querySelectorAll('.links button')).find(b => b.textContent.includes('Otros') || b.textContent.includes('Other') || b.textContent.includes('Autres') || b.textContent.includes('Outros'));
        if (otrosBtn) otrosBtn.textContent = getText("nav.otros");

        const cta = document.querySelector('.links .cta');
        if (cta) cta.textContent = getText("nav.planificar");

        // HERO
        if(document.querySelector(".eyebrow")) {
            document.querySelector(".eyebrow").innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg> ${getText("hero.eyebrow")}`;
        }
        setText(".hero h1", getText("hero.title"), true);
        setText(".hero .slogan", getText("hero.slogan"));
        setText(".hero-copy > p", getText("hero.description"), true);

        const heroButtons = document.querySelectorAll(".hero .actions a");
        if (heroButtons[0]) heroButtons[0].textContent = getText("hero.primary");
        if (heroButtons[1]) heroButtons[1].textContent = getText("hero.secondary");

        const trust = document.querySelectorAll(".trust span");
        if (trust[0]) trust[0].textContent = getText("hero.trust1");
        if (trust[1]) trust[1].textContent = getText("hero.trust2");
        if (trust[2]) trust[2].textContent = getText("hero.trust3");

        // PLANNER
        setText("#planner .kicker", getText("planner.kicker"));
        setText("#planner .section-title", getText("planner.title"), true);
        
        const plannerDesc = document.querySelector("#planner .head p");
        if (plannerDesc) plannerDesc.textContent = getText("planner.description");

        const searchLabels = document.querySelectorAll("#step1 .search-field label");
        if (searchLabels[0]) searchLabels[0].textContent = getText("planner.origin");
        if (searchLabels[1]) searchLabels[1].textContent = getText("planner.destination");

        setPlaceholder("#origenInput", getText("planner.originPlaceholder"));
        setPlaceholder("#destinoInput", getText("planner.destinationPlaceholder"));
        setText("#step1 .btn-continuar", getText("planner.continue"));

        const hint = document.querySelector("#step1 > div:last-child");
        if (hint) {
             hint.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline; vertical-align:middle; margin-right:4px; color:var(--accent);"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg> ${getText("planner.globeHint")}`;
        }

        const detailLabels = document.querySelectorAll("#step2 .detail-field label");
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
        setText("#step2 .primary", getText("planner.continue"));

        const step3Labels = document.querySelectorAll("#step3 .detail-field label");
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

        setAll("#step3 .secondary", getText("planner.back"));
        setText("#step3 .primary", getText("planner.summary"));

        setAll("#step4 .secondary", getText("planner.edit"));
        if(!document.getElementById('enviarBtn').disabled) {
            setText("#step4 .primary", getText("planner.send"));
        }

        // SECCIÓN SERVICIOS
        const serviceTitle = document.querySelector('section.shell.reveal h2.section-title');
        if (serviceTitle && (serviceTitle.textContent.includes('podemos hacer') || serviceTitle.textContent.includes('everything') || serviceTitle.textContent.includes('podemos fazer'))) {
            serviceTitle.textContent = getText("services.title");
        }
        
        const serviceDesc = document.querySelector('section.shell.reveal p');
        if (serviceDesc && (serviceDesc.textContent.includes('Vuelos, hoteles') || serviceDesc.textContent.includes('Flights'))) {
            serviceDesc.textContent = getText("services.description");
        }

        // FOOTER
        setAll(".footer .brand small", getText("footer.slogan"));
        const footerDesc = document.querySelector(".footer > .footer-grid > div:first-child p");
        if (footerDesc) footerDesc.textContent = getText("footer.description");

        const footerCols = document.querySelectorAll(".footer-grid > div");
        if (footerCols[1]) {
            const h4 = footerCols[1].querySelector("h4");
            if (h4) h4.textContent = getText("footer.company");
            const buttons = footerCols[1].querySelectorAll("button");
            if (buttons[0]) buttons[0].textContent = getText("nav.nosotros");
            if (buttons[1]) buttons[1].textContent = getText("nav.servicios");
            if (buttons[2]) buttons[2].textContent = getText("nav.faq");
        }

        if (footerCols[2]) {
            const h4 = footerCols[2].querySelector("h4");
            if (h4) h4.textContent = getText("footer.attention");
            const links = footerCols[2].querySelectorAll("a");
            if (links[0]) links[0].textContent = getText("footer.cuba");
            if (links[1]) links[1].textContent = getText("footer.brasil");
            if (links[2]) links[2].textContent = getText("footer.general");
        }

        setText(".copy > span:first-child", getText("footer.rights"));

        // LANGUAGE SELECTOR UI
        const code = document.getElementById("languageCurrentCode");
        if (code) code.textContent = language.toUpperCase();
        document.querySelectorAll(".language-option").forEach(option => {
            option.classList.toggle("active", option.dataset.language === language);
        });
    }

    function closeLanguageMenu() {
        const switcher = document.getElementById("languageSwitcher");
        const current = document.getElementById("languageCurrent");
        if (switcher) switcher.classList.remove("open");
        if (current) current.setAttribute("aria-expanded", "false");
    }

    function initializeLanguageSystem() {
        const switcher = document.getElementById("languageSwitcher");
        const current = document.getElementById("languageCurrent");
        const options = document.querySelectorAll(".language-option");

        if (!switcher || !current) return;

        current.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            const isOpen = switcher.classList.toggle("open");
            current.setAttribute("aria-expanded", String(isOpen));
        });

        options.forEach(function (option) {
            option.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();
                const language = option.dataset.language;
                if (language) {
                    applyLanguage(language);
                    closeLanguageMenu();
                }
            });
        });

        document.addEventListener("click", function (event) {
            if (!switcher.contains(event.target)) closeLanguageMenu();
        });

        // Iniciar siempre en español
        applyLanguage("es");

        window.GG_I18N = {
            translations: translations,
            getLanguage: function () { return currentLanguage; },
            setLanguage: applyLanguage,
            translate: getText
        };
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeLanguageSystem);
    } else {
        initializeLanguageSystem();
    }
})();
