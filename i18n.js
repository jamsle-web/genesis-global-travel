(function () {
    "use strict";

    const translations = {
        es: {
            nav: { inicio: "Inicio", servicios: "Servicios", proceso: "Cómo funciona", nosotros: "Nosotros", otros: "Otros Servicios", planificar: "Planificar mi viaje →" },
            hero: { title: 'Los kilómetros no deberían separar a las <span>familias.</span>', slogan: "“Donde comienzan nuevas oportunidades.”", description: 'Planificamos y coordinamos tu viaje para que puedas concentrarte en lo más importante: <b>volver a estar cerca de quienes amas.</b>', primary: "Planificar mi viaje →", secondary: "Ver cómo funciona" },
            planner: { kicker: "Planifica tu viaje", title: 'Cuéntanos <span class="text-gradient">desde dónde y hacia dónde</span>', description: "Completa los datos y nosotros organizamos el resto.", origin: "¿Desde dónde viajas?", destination: "¿A dónde quieres viajar?", originPlaceholder: "Ej: Brasil, Cuba, España...", destinationPlaceholder: "Ej: Cuba, Brasil, México...", continue: "Continuar →", globeHint: "También puedes hacer clic en un país del globo para seleccionarlo como destino.", travelDate: "Fecha aproximada de viaje", returnDate: "Fecha de regreso (opcional)", adults: "Número de adultos", children: "Número de niños", travelType: "Tipo de viaje", familyVisit: "Visita familiar", personal: "Viaje personal", tourism: "Turismo", other: "Otro", back: "← Atrás", name: "Nombre completo", namePlaceholder: "Tu nombre completo", whatsapp: "WhatsApp", whatsappPlaceholder: "+54 9 11 1234 5678", email: "Correo electrónico", emailPlaceholder: "tucorreo@ejemplo.com", residence: "País donde resides actualmente", residencePlaceholder: "Ej: Brasil, Argentina, España...", comments: "Comentarios adicionales", commentsPlaceholder: "Cuéntanos algo más que necesites...", summary: "Ver resumen", edit: "← Editar", send: "Enviar solicitud →" },
            footer: { slogan: "Donde comienzan nuevas oportunidades.", description: "Conectamos destinos. Reunimos familias.", company: "Empresa", attention: "Contacto Directo", cuba: "Cuba (CEO): +53 5 9508420", brasil: "Brasil: +55 41 8709-7183", general: "WhatsApp General", rights: "© 2026 GÉNESIS GLOBAL — Donde comienzan nuevas oportunidades." }
        },
        en: {
            nav: { inicio: "Home", servicios: "Services", proceso: "How it works", nosotros: "About us", otros: "Other Services", planificar: "Plan my trip →" },
            hero: { title: 'Miles should not separate <span>families.</span>', slogan: "“Where new opportunities begin.”", description: 'We plan and coordinate your trip so you can focus on what matters most: <b>being close again to those you love.</b>', primary: "Plan my trip →", secondary: "See how it works" },
            planner: { kicker: "Plan your trip", title: 'Tell us <span class="text-gradient">where you are traveling from and to</span>', description: "Complete the information and we will organize the rest.", origin: "Where are you traveling from?", destination: "Where do you want to travel?", originPlaceholder: "E.g.: Brazil, Cuba, Spain...", destinationPlaceholder: "E.g.: Cuba, Brazil, Mexico...", continue: "Continue →", globeHint: "You can also click on a country on the globe to select it as your destination.", travelDate: "Approximate travel date", returnDate: "Return date (optional)", adults: "Number of adults", children: "Number of children", travelType: "Type of trip", familyVisit: "Family visit", personal: "Personal trip", tourism: "Tourism", other: "Other", back: "← Back", name: "Full name", namePlaceholder: "Your full name", whatsapp: "WhatsApp", whatsappPlaceholder: "+54 9 11 1234 5678", email: "Email address", emailPlaceholder: "you@example.com", residence: "Country where you currently live", residencePlaceholder: "E.g.: Brazil, Argentina, Spain...", comments: "Additional comments", commentsPlaceholder: "Tell us anything else you may need...", summary: "View summary", edit: "← Edit", send: "Send request →" },
            footer: { slogan: "Where new opportunities begin.", description: "We connect destinations. We bring families together.", company: "Company", attention: "Direct Contact", cuba: "Cuba (CEO): +53 5 9508420", brasil: "Brazil: +55 41 8709-7183", general: "General WhatsApp", rights: "© 2026 GÉNESIS GLOBAL — Where new opportunities begin." }
        },
        pt: {
            nav: { inicio: "Início", servicios: "Serviços", proceso: "Como funciona", nosotros: "Sobre nós", otros: "Outros Serviços", planificar: "Planejar minha viagem →" },
            hero: { title: 'Os quilômetros não deveriam separar as <span>famílias.</span>', slogan: "“Onde começam novas oportunidades.”", description: 'Planejamos e coordenamos sua viagem para que você possa se concentrar no que realmente importa: <b>estar novamente perto de quem você ama.</b>', primary: "Planejar minha viagem →", secondary: "Ver como funciona" },
            planner: { kicker: "Planeje sua viagem", title: 'Conte-nos <span class="text-gradient">de onde e para onde você vai</span>', description: "Preencha os dados e nós organizaremos o restante.", origin: "De onde você está viajando?", destination: "Para onde você quer viajar?", originPlaceholder: "Ex.: Brasil, Cuba, Espanha...", destinationPlaceholder: "Ex.: Cuba, Brasil, México...", continue: "Continuar →", globeHint: "Você também pode clicar em um país do globo para selecioná-lo como destino.", travelDate: "Data aproximada da viagem", returnDate: "Data de retorno (opcional)", adults: "Número de adultos", children: "Número de crianças", travelType: "Tipo de viagem", familyVisit: "Visita familiar", personal: "Viagem pessoal", tourism: "Turismo", other: "Outro", back: "← Voltar", name: "Nome completo", namePlaceholder: "Seu nome completo", whatsapp: "WhatsApp", whatsappPlaceholder: "+54 9 11 1234 5678", email: "E-mail", emailPlaceholder: "seuemail@exemplo.com", residence: "País onde você reside atualmente", residencePlaceholder: "Ex.: Brasil, Argentina, Espanha...", comments: "Comentários adicionais", commentsPlaceholder: "Conte-nos algo mais que você precisa...", summary: "Ver resumo", edit: "← Editar", send: "Enviar solicitação →" },
            footer: { slogan: "Onde começam novas oportunidades.", description: "Conectamos destinos. Reunimos famílias.", company: "Empresa", attention: "Contato Direto", cuba: "Cuba (CEO): +53 5 9508420", brasil: "Brasil: +55 41 8709-7183", general: "WhatsApp Geral", rights: "© 2026 GÉNESIS GLOBAL — Onde começam novas oportunidades." }
        }
    };

    let currentLanguage = "es";

    function getText(path) {
        const parts = path.split(".");
        let value = translations[currentLanguage];
        for (const part of parts) {
            if (value && Object.prototype.hasOwnProperty.call(value, part)) value = value[part];
            else return "";
        }
        return value;
    }

    function applyLanguage(language) {
        if (!translations[language]) language = "es";
        currentLanguage = language;
        document.documentElement.lang = language;

        document.title = language === 'es' ? "GÉNESIS GLOBAL — Donde comienzan nuevas oportunidades." :
                         language === 'en' ? "GÉNESIS GLOBAL — Where new opportunities begin." :
                         "GÉNESIS GLOBAL — Onde começam novas oportunidades.";

        // NAV
        const navLinks = document.querySelectorAll('.links a');
        if (navLinks[0]) navLinks[0].textContent = getText("nav.inicio");
        if (navLinks[1]) navLinks[1].textContent = getText("nav.servicios");
        if (navLinks[2]) navLinks[2].textContent = getText("nav.proceso");
        if (navLinks[3]) navLinks[3].textContent = getText("nav.nosotros");
        if (navLinks[4]) navLinks[4].textContent = getText("nav.otros");
        const cta = document.querySelector('.links .cta');
        if (cta) cta.textContent = getText("nav.planificar");

        // HERO
        const h1 = document.querySelector(".hero h1");
        if (h1) h1.innerHTML = getText("hero.title");
        const slogan = document.querySelector(".hero .slogan");
        if (slogan) slogan.textContent = getText("hero.slogan");
        const p = document.querySelector(".hero-copy > p");
        if (p) p.innerHTML = getText("hero.description");
        
        const heroButtons = document.querySelectorAll(".hero .actions a");
        if (heroButtons[0]) heroButtons[0].textContent = getText("hero.primary");
        if (heroButtons[1]) heroButtons[1].textContent = getText("hero.secondary");

        // FOOTER
        const footerCols = document.querySelectorAll(".footer-grid > div");
        if (footerCols[1]) {
            const h4 = footerCols[1].querySelector("h4");
            if (h4) h4.textContent = getText("footer.company");
        }
        if (footerCols[2]) {
            const h4 = footerCols[2].querySelector("h4");
            if (h4) h4.textContent = getText("footer.attention");
            const links = footerCols[2].querySelectorAll("a");
            if (links[0]) links[0].textContent = getText("footer.cuba");
            if (links[1]) links[1].textContent = getText("footer.brasil");
            if (links[2]) links[2].textContent = getText("footer.general");
        }
        const rights = document.querySelector(".copy > span:first-child");
        if (rights) rights.textContent = getText("footer.rights");

        // ACTUALIZAR UI DEL SELECTOR (El de tu barra superior)
        const code = document.getElementById("languageCurrentCode");
        if (code) code.textContent = language.toUpperCase();
        document.querySelectorAll(".language-option").forEach(option => {
            option.classList.toggle("active", option.dataset.language === language);
        });
    }

    // INICIALIZACIÓN (SIN INYECTAR MENÚ FLOTANTE)
    document.addEventListener('DOMContentLoaded', () => {
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
            options.forEach(function (option) {
                option.addEventListener("click", function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    const language = option.dataset.language;
                    if (language) {
                        applyLanguage(language);
                        switcher.classList.remove("open");
                        current.setAttribute("aria-expanded", "false");
                    }
                });
            });
            document.addEventListener("click", function (event) {
                if (!switcher.contains(event.target)) {
                    switcher.classList.remove("open");
                    current.setAttribute("aria-expanded", "false");
                }
            });
        }

        applyLanguage("es");
    });

})();
