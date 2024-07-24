import shared from "./astro.config.shared.mjs";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';
import { defineConfig } from "astro/config";
import { getCustomPages, getI18N } from "./src/shared/i18n/index";

const language = 'en';
const i18n = getI18N({language});
const customPages = await getCustomPages({ language })

export default defineConfig({
  ...shared,
  site: i18n.SITE,
  srcDir: "./src/en",
  redirects: {
    "/padel-courts": "/",
    "/padel-courts/panoramic": "/panoramic",
    "/padel-courts/flow": "/flow",
    "/padel-courts/club": "/club",
    "/padel-courts/club-force-80": "/club-force-80",
    "/padel-courts/mini": "/mini",
    "/padel-courts/mobile": "/mobile",
    "/padel-courts/panoramic-force-80": "/panoramic-force-80",
    "/padel-courts/single": "/single",
    "/ru/новости": "/",
    "/pt": "/",
    "/un-proyecto-increible-en-finlandia": "/news/un-proyecto-increible-en-finlandia",
    "/en/portico-sport-in-california": "/news/portico-sport-in-california",
    "/portico-sport-uk": "/news/portico-sport-uk",
    "/portico-sport-suiza": "/news/portico-sport-suiza",
    "/en/portico-sport-in-usa": "/news/portico-sport-in-usa",
    "/ru": "/",
    "/pista-panoramica-de-portico-sport-en-ispo-munich": "/news/pista-panoramica-de-portico-sport-en-ispo-munich/news/portico-sport-at-ispo-munich",
    "/el-padel-apunta-a-estados-unidos-de-manera-indiscutible-2": "/news/el-padel-apunta-a-estados-unidos-de-manera-indiscutible-2",
    "/portico-sport-en-colombia-la-fiebre-del-padel-toma-bogota": "/news/portico-sport-en-colombia-la-fiebre-del-padel-toma-bogota",
    "/en/hexagon-cup-signs-portico-sport-as-court-supplier": "/news/hexagon-cup-signs-portico-sport-as-court-supplier",
    "/en/portico-sport-inaugurates-the-largest-factory-of-padel-covers-and-courts-in-the-sector": "/news/portico-sport-inaugurates-the-largest-factory-of-padel-covers-and-courts-in-the-sector",
    "/nl": "/",
    "/pistas-de-padel-en-croacia": "/news/pistas-de-padel-en-croacia",
    "/nuevo-destino-puerto-rico": "/news/nuevo-destino-puerto-rico",
    "/portico-sport-en-new-york-y-houston": "/news/portico-sport-en-new-york-y-houston",
    "/financiacion": "/",
    "/en/padelcourts": "/",
    "/en/constructive-process": "/",
    "/en/pistas-panoramica": "/panoramic",
    "/de/los-ingenieros-de-portico-sport": "/news/los-ingenieros-de-portico-sport",
    "/fr/los-ingenieros-de-portico-sport": "/news/los-ingenieros-de-portico-sport",
    "/en/portico-sport-engineers": "/news/los-ingenieros-de-portico-sport",
    "/fr/alderley-park": "/projects",
    "/de/portico-sport-en-california": "/news/los-ingenieros-de-portico-sport",
    "/it/cingoli-forza-80": "/club-force-80",
    "/de/alderley-park": "/projects",
    "/de/portico-sport-uk": "/projects",
    "/en/contact": "/client-contact",
    "/pt/portico-sport-na-ispo-munique": "/projects",
    "/it/mini-tracce": "/mini",
    "/it/piste-panoramiche": "/panoramic",
    "/instalaciones-en-sabadell": "/news/instalaciones-en-sabadell",
    "/de/portico-sport-at-ispo-munich": "/news/portico-sport-at-ispo-munich/news/portico-sport-at-ispo-munich",
    "/elfsborg-boras": "/news",
    "/impresionantes-vistas-de-las-pistas-de-padel-y-cubiertas": "/news/impresionantes-vistas-de-las-pistas-de-padel-y-cubiertas",
    "/nuevo-proyecto-de-construccion-de-pistas-de-padel-en-finlandia": "/news",
    "/portico-sport-alta-ingenieria": "/news",
    "/portico-sport-contara-en-2022-con-una-gran-fabrica-de-cubiertas-y-pistas-de-padel-con-la-tecnologia-mas-puntera-del-mercado": "/news/portico-sport-contara-en-2022-con-una-gran-fabrica-de-cubiertas-y-pistas-de-padel-con-la-tecnologia-mas-puntera-del-mercado",
    "/pistas-de-padel-en-madrid-club-urban-padel-alcobendas": "/news/pistas-de-padel-en-madrid-club-urban-padel-alcobendas",
    "/hexagon-cup-signs-portico-sport-as-court-supplier": "/news/hexagon-cup-signs-portico-sport-as-court-supplier",
    "/contacto": "/client-contact",
    "/de/unsere-Fabrik": "/our-factory",
    "/portico-sport-en-ispo-munich-2022": "/news/portico-sport-en-ispo-munich-2022/news/portico-sport-at-ispo-munich",
    "/pt/apresentação-da-pista-hexagonal-da-copa-na-Plaza-de-Colon-em-Madri":
      "/news/hexagon-cup-signs-portico-sport-as-court-supplier",
    "/en/alderley-park": "/projects",
    "/pista-flotante-en-finlandia": "/news/pista-flotante-en-finlandia",
    "/tailandia-y-colombia": "/news/tailandia-y-colombia",
    "/en/ultra-64-court": "/club-force-80",
    "/pistas-panoramica-flow": "/flow",
    "/tipos-de-pistas": "/",
    "/da": "/",
    "/en/el-crecimento-del-padel-a-nivel-mundial": "/news/el-crecimento-del-padel-a-nivel-mundial",
    "/pt/etiqueta/construçãopistaspadel": "/news",
    "/nueva-pista-adaptada-a-futwall": "/news/nueva-pista-adaptada-a-futwall",
    "/portico-sport-presenta-al-mercado-esta-innovadora-pista-de-padel-que-se-diseno-en-exclusiva-para-el-torneo-hexagon-cup":
      "/news/portico-sport-presenta-al-mercado-esta-innovadora-pista-de-padel-que-se-diseno-en-exclusiva-para-el-torneo-hexagon-cup",
    "/cimentacion": "/",
    "/pt/esporte-pórtico-na-austrália": "/news",
    "/pt/jovens-promessas": "/news",
    "/iluminacion": "/",
    "/the-padel-club-uk": "/projects",
    "/en/news": "/news",
    "/pistas-panoramica": "/panoramic",
    "/repsol-y-portico-sport-firman-un-acuerdo-para-impulsar-la-energia-renovable-y-movilidad-sostenible-en-el-sector-del-padel": "/news/repsol-y-portico-sport-firman-un-acuerdo-para-impulsar-la-energia-renovable-y-movilidad-sostenible-en-el-sector-del-padel",
    "/en/our-factory": "/our-factory",
    "/en/virtual-assistant": "/client-contact",
    "/en/tracks-installed-in-croatia": "/news/pistas-instaladas-en-croacia",
    "/pistas-instaladas-en-croacia": "/news/pistas-instaladas-en-croacia",
    "/portico-sport-at-racquetx": "news/portico-sport-at-racquetx",
    "/en/elevated-platform": "/elevated-platform",
    "/fr/suit-le-flux-panoramique": "/flow",
    "/pt/encostas-panorâmicas": "/panoramic",
    "/fr/notre-usine": "/our-factory",
    "/en/installation-finished-in-the-netherlands": "/news",
    "/pt/vidrios": "/",
    "/pistas-mini": "/mini",
    "/en/young-promises": "/news",
    "/en/lighting": "/",
    "/en/courts-club": "/club",
    "/da/spor-ultra-64": "/club-force-80",
    "/it/tizona-sport-portico-sport": "/news/tizona-sport-portico-sport",
    "/cubiertas": "/canopies",
    "/en/foundation": "/",
    "/da/portico-sport-in-gashoren-belgium": "/news/portico-sport-in-gashoren-belgium",
    "/en/pistas-instaladas-en-croacia": "/news/pistas-instaladas-en-croacia",
    "/sv": "/",
    "/tizona-sport-portico-sport": "/news/tizona-sport-portico-sport",
    "/portico-sport-en-sudafrica": "/news/portico-sport-en-sudafrica",
    "/portico-sport-at-ispo-munich": "/news/portico-sport-at-ispo-munich",
    "/los-mejores-jugadores-del-mundo": "/news/los-mejores-jugadores-del-mundo",
    "/en/financing": "/",
    "/instalacion-finalizada-en-holanda": "/news/instalacion-finalizada-en-holanda",
    "/en/pistas-force-80": "/club-force-80",
    "/cesped": "/",
    "/cespedartificial": "/",
    "/en/glasses": "/",
    "/fr/pista-panoramica-de-portico-sport-en-ispo-munich": "/news/portico-sport-at-ispo-munich",
    "/pista-movil": "/mobile",
    "/portico-sport-in-usa": "/news/portico-sport-in-usa",
    "/en/mobile-courts": "/mobile",
    "/en/presentation-of-the-hexagon-cup-track-in-the-plaza-de-colon-in-madrid":
      "/news/hexagon-cup-signs-portico-sport-as-court-supplier",
    "/privacy-policy-and-general-conditions": "/privacy",
    "/it/informativa-sulla-privacy-e-condizioni-generali": "/privacy",
    "/en/in-copenhagen-denmark": "news/in-copenhagen-denmark",
    "/el-fuerte-crecimiento": "news/el-fuerte-crecimiento",
    "/fr/blog": "/news",
    "/en/authorized-dealer": "/authorized-distributor",
    "/en/the-padel-club-uk": "/projects",
    "/en/customization": "/",
    "/porticosportnuevapistaoficialdelafep": "/news/porticosportnuevapistaoficialdelafep",
    "/en/canopies": "/canopies",
    "/en/modular-structures": "/",
    "/fr/couvert": "/canopies",
    "/constantly-expanding": "/news/constantly-expanding",
    "/da/Malaga-spor-installationsprocessen-i-mijas": "/projects",
    "/portico-sport-factura-en-medio-ano-su-cifra-de-ventas-total-de-2022": "/news/portico-sport-factura-en-medio-ano-su-cifra-de-ventas-total-de-2022",
    "/en/continues-its-growth": "/",
    "/en/portico-sport-in-australia": "/projects",
    "/en/portico-sport-invoices-its-total-sales-figure-for-2022-in-half-a-year": "/news/portico-sport-factura-en-medio-ano-su-cifra-de-ventas-total-de-2022",
    "/en/global-growth": "/",
    "/de/noticias": "/news",
    "/da/blog/side/2": "/news",
    "/en/sudafrica": "/news/portico-sport-en-sudafrica",
    "/pistas-club": "/club",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=fr&gurl=vidrios": "/",
    "/en/pistas-panoramica-flow": "/flow",
    "/pistas-movil": "/mobile",
    "/en/pistas-single": "/single",
    "/club-bapadel": "/projects",
    "/en/mini-court": "/mini",
    "/pistas-force-80": "/club-force-80",
    "/pt/cobre": "/canopies",
    "/en/continues": "/news/continues",
    "/de/cubiertas": "/canopies",
    "/en/floating-track-in-finland": "/news/pista-flotante-en-finlandia",
    "/pistas-club-plus": "/club",
    "/de/instalaciones-en-sabadell": "/news/instalaciones-en-sabadell",
    "/en/portico-sport-installed-in-south-africa": "news/portico-sport-en-sudafrica",
    "/en/facilities-in-sabadell": "/news/instalaciones-en-sabadell",
    "/da/tipos-de-pistas": "/",
    "/en/structures": "/",
    "/estructuras-modulares": "/",
    "/fr/contact": "/client-contact",
    "/fr/repsol-et-portico-sport-signent-un-accord-pour-promouvoir-les-énergies-renouvelables-et-la-mobilité-durable-dans-le-secteur-du-padel": "/news/repsol-y-portico-sport-firman-un-acuerdo-para-impulsar-la-energia-renovable-y-movilidad-sostenible-en-el-sector-del-padel",
    "/en/author/portico": "/news",
    "/en/repsol-and-portico-sport-sign-an-agreement-to-promote-renewable-energy-and-sustainable-mobility-in-the-padel-sector": "/news/repsol-y-portico-sport-firman-un-acuerdo-para-impulsar-la-energia-renovable-y-movilidad-sostenible-en-el-sector-del-padel",
    "/pistas-single": "/single",
    "/fr/politique-de-confidentialité-et-conditions-générales": "/privacy",
    "/author/portico": "/news",
    "/sv/Portico-Sport-kommer-2022-att-ha-en-stor-fabrik-för-paddeltennisbanor-och-däck-med-den-mest-banbrytande-tekniken-på-marknaden": "/news/portico-sport-contara-en-2022-con-una-gran-fabrica-de-cubiertas-y-pistas-de-padel-con-la-tecnologia-mas-puntera-del-mercado",
    "/ru/Repsol-и-Portico-Sport-подписывают-соглашение-о-продвижении-возобновляемых-источников-энергии-и-устойчивой-мобильности-в-секторе-весла": "/news/repsol-y-portico-sport-firman-un-acuerdo-para-impulsar-la-energia-renovable-y-movilidad-sostenible-en-el-sector-del-padel",
    "/en/pista-movil": "/mobile",
    "/fr/instalaciones-en-europa-por-portico-sport": "/news/instalaciones-en-europa-por-portico-sport",
    "/en/blog": "/news",
    "/estructuras": "/",
    "/las-pistas-de-padel-valen-la-pena": "/news/las-pistas-de-padel-valen-la-pena",
    "/en/thinking-padel-thinking-portico-sport-why": "/",
    "/noticias": "/news",
    "/asistente-virtual": "/client-contact",
    "/malaga-proceso-de-instalacion-de-pistas-en-mijas": "/news/malaga-proceso-de-instalacion-de-pistas-en-mijas",
    "/blog": "/news",
    "/it/customizacion": "/",
    "/nl/customizacion": "/",
    "/sv/cubiertas": "/canopies",
    "/sv/spårtyper": "/",
    "/it/cubiertas": "/canopies",
    "/plataforma-elevada": "/elevated-platform",
    "/fr/customizacion": "/",
    "/da/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural": "/news/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural",
    "/en/club-plus-courts": "/club",
    "/pt/tipos-de-pistas": "/",
    "/en/privacy-policy-and-general-conditions": "/privacy",
    "/pt/estructuras": "/",
    "/confianza": "/news/confianza",
    "/da/estructuras": "/",
    "/en/blog/page/2": "/news",
    "/sv/estructuras": "/",
    "/de/tipos-de-pistas": "/",
    "/ru/privacy-policy-and-general-conditions": "/privacy",
    "/da/in-copenhagen-denmark": "news/in-copenhagen-denmark",
    "/vidrios": "/",
    "/pistas-ultra-64": "/club-force-80",
    "/customizacion": "/",
    "/en/new-project-completed-in-hillero": "/news/new-project-completed-in-hillero",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=ru&gurl=cubiertas": "/canopies",
    "/it/illuminazione": "/",
    "/fr/iluminacion": "/",
    "/mobile-court": "/mobile",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=de&gurl=iluminacion": "/",
    "/da/blog": "/news",
    "/fr/estructuras": "/",
    "/nl/privacy-policy-and-general-conditions": "/privacy",
    "/en/cespedartificial": "/",
    "/it/tipos-de-pistas": "/",
    "/fr/types-de-piste": "/",
    "/en/portico-sport-in-new-york-and-houston": "/projects",
    "/portico-sport-y-even-padel-unen-fuerzas": "/news/portico-sport-y-even-padel-unen-fuerzas",
    "/sv/portico-sport-contara-en-2022-con-una-gran-fabrica-de-cubiertas-y-pistas-de-padel-con-la-tecnologia-mas-puntera-del-mercado": "/news/portico-sport-contara-en-2022-con-una-gran-fabrica-de-cubiertas-y-pistas-de-padel-con-la-tecnologia-mas-puntera-del-mercado",
    "/da/cubiertas": "/canopies",
    "/portico-sport-en-europa": "/news/portico-sport-en-europa",
    "/it/estructuras": "/",
    "/portico-sport-internacional": "/news/portico-sport-internacional",
    "/portico-sport-in-gashoren-belgium": "/news/portico-sport-in-gashoren-belgium",
    "/da/portico-sport-inaugura-la-mayor-fabrica-de-cubiertas-y-pistas-de-padel-del-sector": "/news/portico-sport-inaugura-la-mayor-fabrica-de-cubiertas-y-pistas-de-padel-del-sector",
    "/pt/privacy-policy-and-general-conditions": "/privacy",
    "/sv/cespedartificial": "/",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=nl&gurl=iluminacion": "/",
    "/crecimiento-a-nivel-mundial": "/news/crecimiento-a-nivel-mundial",
    "/de/estructuras-modulares": "/",
    "/sv/privacy-policy-and-general-conditions": "/privacy",
    "/it/blog": "/news",
    "/fr/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural": "/news/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural",
    "/ru/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural": "/news/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural",
    "/da/customizacion": "/",
    "/da/kneippbyn-isla-de-gotland-suecia-bella-perfeccion": "/news/kneippbyn-isla-de-gotland-suecia-bella-perfeccion",
    "/sv/portico-sport-belgica": "/news/portico-sport-in-gashoren-belgium",
    "/sv/blog/page/2": "/news",
    "/pt/blog": "/news",
    "/nl/blog": "/news",
    "/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural": "/news/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural",
    "/sv/vidrios": "/",
    "/sv/blogg": "/news",
    "/ru/author/marketing": "/news",
    "/ru/las-pistas-de-padel-valen-la-pena": "/news/las-pistas-de-padel-valen-la-pena",
    "/da/iluminacion": "/",
    "/da/contacto": "/client-contact",
    "/sv/Författaren/marknadsföring": "/news",
    "/sv/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural": "/news/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural",
    "/club-setubal": "/projects",
    "/sv/contacto": "/client-contact",
    "/ru/cespedartificial": "/",
    "/de/Die-besten-Spieler-der-Welt": "/news/los-mejores-jugadores-del-mundo",
    "/de/Portico-Sport-landet-in-Afrika-mit-Paddle-Tennisplätzen": "/news/portico-sport-aterriza-en-africa-con-pistas-de-padel",
    "/pt/contacto": "/client-contact",
    "/de/Portico-Sport-in-New-York-und-Houston": "/news/portico-sport-en-new-york-y-houston",
    "/da/privacy-policy-and-general-conditions": "/privacy",
    "/sv/portico-sport-aterriza-en-africa-con-pistas-de-padel": "/news/portico-sport-aterriza-en-africa-con-pistas-de-padel",
    "/en/the-strong-growth": "/news/el-fuerte-crecimiento",
    "/en/portico-sport-at-ispo-munich-2022": "/news/portico-sport-at-ispo-munich",
    "/sv/pistas-instaladas-en-croacia": "/news/pistas-instaladas-en-croacia",
    "/en/the-highest-guarantee": "/",
    "/it/vidrios": "/",
    "/en/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural": "/news/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural",
    "/it/cespedartificial": "/",
    "/fi/seuraa-panoraamavirtausta": "/flow",
    "/it/asistente-virtual": "/client-contact",
    "/sv/iluminacion": "/",
    "/it/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural": "/news/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural",
    "/nl/contacto": "/client-contact",
    "/continues": "/news/continues",
    "/en/portico-sport-in-abc-newspaper-innovation-and-vanguard-in-the-five-continents": "/news",
    "/it/portico-sport-en-california": "/news",
    "/da/vidrios": "/",
    "/en/instalaciones-en-europa-por-portico-sport": "/news/instalaciones-en-europa-por-portico-sport",
    "/da/portico-sport-en-colombia-la-fiebre-del-padel-toma-bogota": "/news/portico-sport-en-colombia-la-fiebre-del-padel-toma-bogota",
    "/fr/noticias": "/news",
    "/portico-sport-aterriza-en-africa-con-pistas-de-padel": "/news/portico-sport-aterriza-en-africa-con-pistas-de-padel",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=da&gurl=malaga-proceso-de-instalacion-de-pistas-en-mijas": "/news/malaga-proceso-de-instalacion-de-pistas-en-mijas",
    "/it/donacion-para-frenar-la-pandemia-de-covid-19": "/news/donacion-para-frenar-la-pandemia-de-covid-19",
    "/en/blog/page/8": "/news",
    "/los-ingenieros-de-portico-sport": "/news/los-ingenieros-de-portico-sport",
    "/en/portico-sport-high-engineering": "/news/los-ingenieros-de-portico-sport",
    "/en/own-laquared-plant": "/news/own-laquared-plant",
    "/kneippbyn-isla-de-gotland-suecia-bella-perfeccion": "/news/kneippbyn-isla-de-gotland-suecia-bella-perfeccion",
    "/it/": "/",
    "/en/artificial-grass": "/",
    "/no/cesped": "/",
    "/en/": "/",
    "/en/tracks-panoramic-flow": "/panoramic",
    "/da/own-laquared-plant": "/news/own-laquared-plant",
    "/fr/contacto": "/client-contact",
    "/en/construccion-de-pistas-de-padel-en-finlandia": "/news",
    "/5-key-benefits-of-portico-sport-canopies-for-sports-and-tennis-clubs": "/news/5-key-benefits-of-portico-sport-canopies-for-sports-and-tennis-clubs",
    "/fr/vidrios": "/",
    "/en/mobile-tracks": "/mobile",
    "/nl/portico-sport-belgica": "/news/portico-sport-belgica",
    "/en/thailand-and-colombia": "/news",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=no&gurl=cesped": "/",
    "/en/tipos-de-pistas": "/",
    "/la-seleccion-espanola-de-padel-se-prepara-en-la-maso": "/news",
    "/sudafrica": "/projects",
    "/ru/estructuras": "/",
    "/en/projects": "/projects",
    "/pt/portico-sport-belgica": "/news/portico-sport-belgica",
    "/en/Factors-to-consider-when-setting-up-a-padel-court-makes-padel-a-profitable-investment": "/news",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=fr&gurl=vidrios": "/",
    "/suecia-y-noruega-con-portico-sport": "/news",
    "/en/repsol-y-portico-sport-firman-un-acuerdo-para-impulsar-la-energia-renovable-y-movilidad-sostenible-en-el-sector-del-padel": "/news/repsol-y-portico-sport-firman-un-acuerdo-para-impulsar-la-energia-renovable-y-movilidad-sostenible-en-el-sector-del-padel",
    "/nl/tipos-de-pistas": "/",
    "/descargas": "/",
    "/da/estructura": "/",
    "/en/estructuras": "/",
    "/ru/customizacion": "/",
    "/blog/page/2": "/news?page=2",
    "/no/": "/",
    "/en/mini-tracks": "/mini",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=en&gurl=vidrios": "/",
    "/portico-sport-en-california": "/news/portico-sport-en-california",
    "/en/padel-una-inversion-rentable": "/news/padel-una-inversion-rentable",
    "/lagos-portugal": "/projects",
    "/it/cesped": "/",
    "/sv/2637-2": "/",
    "/estructura": "/",
    "/en/contacto": "/client-contact",
    "/trabajos-integrados": "/",
    "/padel-una-inversion-rentable": "/news/padel-una-inversion-rentable",
    "/de/estructuras": "/",
    "/en/suecia-y-noruega-con-portico-sport": "/news",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=nl&gurl=iluminacion": "/",
    "/en/tracks-ultra-64": "/",
    "/nl/cubiertas": "/canopies",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=ru&gurl=customizacion": "/",
    "/mantenimiento": "/",
    "/privacy-policy": "/privacy",
    "/fr/portico-sport-belgica": "/news/portico-sport-belgica",
    "/pistas-de-padel/amp": "/",
    "/pt/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural": "/news/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural",
    "/fi/": "/",
    "/it/expansion": "/news",
    "/sv/blog": "/news",
    "/nl/continua-su-crecimiento": "/news/continua-su-crecimiento",
    "/wp-content/uploads/2022/02/Dossier-Pistas.pdf": "/",
    "/it/trabajos-integrados": "/news/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural",
    "/wp-content/uploads/2022/02/Padel-Courts.pdf": "/",
    "/el-crecimiento-del-padel-a-nivel-mundial": "/news/el-crecimiento-del-padel-a-nivel-mundial",
    "/de/iluminacion/amp": "/",
    "/en/padel-a-profitable-investment": "/news",
    "/da/privacy-policy": "/privacy",
    "/in-copenhagen-denmark": "/news",
    "/da/blog/page/2": "/news?page=2",
    "/portico-sport-inaugura-la-mayor-fabrica-de-cubiertas-y-pistas-de-padel-del-sector": "/news/portico-sport-inaugura-la-mayor-fabrica-de-cubiertas-y-pistas-de-padel-del-sector",
    "/en/single-tracks": "/single",
    "/nl/estructura": "/",
    "/ru/instalacion-finalizada-en-holanda": "/news/instalacion-finalizada-en-holanda",
    "/fr/tipos-de-pistas": "/",
    "/fr/cubiertas": "/canopies",
    "/pt/estructura": "/",
    "/da/instalaciones-en-europa-por-portico-sport": "/news/instalaciones-en-europa-por-portico-sport",
    "/pt/author/Portico": "/",
    "/en/tracks-force-80": "/panoramic-force-80",
    "/sv/expansion": "/",
    "/nl/expansion": "/",
    "/padel-canopy-portico-sport": "/canopies",
    "/it/mantenimiento": "/",
    "/da/portico-sport-contara-en-2022-con-una-gran-fabrica-de-cubiertas-y-pistas-de-padel-con-la-tecnologia-mas-puntera-del-mercado": "/news/portico-sport-contara-en-2022-con-una-gran-fabrica-de-cubiertas-y-pistas-de-padel-con-la-tecnologia-mas-puntera-del-mercado",
    "/de/estructura": "/",
    "/en/panoramic-slopes": "/panoramic",
    "/el-padel-un-ascenso-vertiginoso": "/news/el-padel-un-ascenso-vertiginoso",
    "/da/malaga-proceso-de-instalacion-de-pistas-en-mijas": "/news/malaga-proceso-de-instalacion-de-pistas-en-mijas",
    "/fr/": "/",
    "/da/trabajos-integrados": "/",
    "/en/pistas-ultra-64": "/panoramic-force-80",
    "/ru/mantenimiento": "/",
    "/it/privacy-policy": "/privacy",
    "/en/5-key-benefits-of-portico-sport-canopies-for-sports-and-tennis-clubs": "/news/5-key-benefits-of-portico-sport-canopies-for-sports-and-tennis-clubs",
    "/nl/estructuras": "/",
    "/it/privacy-policy-and-general-conditions": "/privacy",
    "/pt/trabajos-integrados": "/",
    "/fr/expansion": "/news",
    "/en-trabajos-integrados": "/",
    "/en/portico-sport-inaugura-la-mayor-fabrica-de-cubiertas-y-pistas-de-padel-del-sector": "/news/portico-sport-inaugura-la-mayor-fabrica-de-cubiertas-y-pistas-de-padel-del-sector",
    "/continues/amp": "/",
    "/nl/trabajos-integrados": "/",
    "/instalaciones-en-europa-por-portico-sport": "/news/instalaciones-en-europa-por-portico-sport",
    "/en/portico-sport-at-ispo-munich": "/news/portico-sport-at-ispo-munich",
    "/nl/privacy-policy": "/privacy",
    "/en/estructura": "/",
    "/da/suecia-y-noruega-con-portico-sport": "/news",
    "/no/cespedartificial": "/",
    "/virtual-projects": "/projects",
    "/ru/trabajos-integrados": "/",
    "/en/vidrios": "/",
    "/en-constante-expansion": "/news/constantly-expanding",
    "/sv/tipos-de-pistas": "/",
    "/sv/cesped": "/",
    "/ru/cesped": "/",
    "/fr/mantenimiento": "/",
    "/nl/confianza": "/news/confianza",
    "/sv/privacy-policy": "/privacy",
    "/sv/trabajos-integrados": "/",
    "/presentacion-de-la-pista-hexagon-cup-en-la-plaza-de-colon-de-madrid": "/news/presentacion-de-la-pista-hexagon-cup-en-la-plaza-de-colon-de-madrid",
    "/ru/expansion": "/news",
    "/pistas-de-padel": "/",
    "/da/mantenimiento": "/",
    "/fr": "/",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=fi&gurl=cubiertas": "/",
    "/en/cesped": "/",
    "/it/estructura": "/",
    "/it/suecia-y-noruega-con-portico-sport": "/news",
    "/fi/cubiertas": "/canopies",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=de&gurl=iluminacion": '/',
    "/pt/mantenimiento": "/",
    "/el-padel-es-un-deporte-relativamente-joven": "/news",
    "/en/tracks-club": "/",
    "/nl/mantenimiento": "/",
    "/nl/modelo-ultra-38-5-la-pista-mas-resistente": "/news/modelo-ultra-38-5-la-pista-mas-resistente",
    "/sv/mantenimiento": "/",
    "/nl/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural": "/news/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural",
    "/pt/cubiertas": "/canopies",
    "/thinking-padel-thinking-portico-sport-por-que": "/news/thinking-padel-thinking-portico-sport-por-que",
    "/en/trabajos-integrados": "/",
    "/nl/modelo-ultra-38-5": "/news/modelo-ultra-38-5-la-pista-mas-resistente",
    "/fr/cubiertas/amp": "/canopies",
    "/fr/estructura": "/",
    "/de": "/",
    "/da/jovenes-promesas": "/news/jovenes-promesas",
    "/la-mas-alta-garantia": "/news/la-mas-alta-garantia",
    "/en/clubportugal": "/projects",
    "/it/contacto": "/client-contact",
    "/ru/privacy-policy": "/privacy",
    "/en/constantly-expanding": "/news/constantly-expanding",
    "/it/iluminacion": "/",
    "/en/tag/connectpadel": "/news",
    "/de/": "/",
    "/el-crecimento-del-padel-a-nivel-mundial": "/news/el-crecimento-del-padel-a-nivel-mundial",
    "/el-padel-apunta-a-estados-unidos-de-manera-indiscutible": "/news",
    "/nuevo-proyecto-en-croacia": "/news",
    "/en/expansion": "/news",
    "/en/iluminacion": "/",
    "/fr/trabajos-integrados": "/",
    "/sv/estructura": "/",
    "/en/cubiertas": "/canopies",
    "/en/proyectos": "/projects",
    "/sv/portico-sport-instaladas-en-sudafrica": "/news/portico-sport-instaladas-en-sudafrica",
    "/portico-sport-instaladas-en-sudafrica": "/news/portico-sport-instaladas-en-sudafrica",
    "/expansion": "/news",
    "/portico-sport-en-diario-abc-innovacion-y-vanguardia-en-los-cinco-continentes": "/news/portico-sport-en-diario-abc-innovacion-y-vanguardia-en-los-cinco-continentes",
    "/en/club-bapadel": "/projects",
    "/impresionantes-vistas": "/news",
    "/construction-process-padel": "/",
    "/en/mantenimiento": "/",
    "/pistas-de-padel/": "/",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=it&gurl=cesped": "/",
    "/en/club-plus-tracks": "/projects",
    "/clubportugal": "/projects",
    "/comercial": "/authorized-distributor",
    "/proyectos": "/projects",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=da&gurl=malaga-proceso-de-instalacion-de-pistas-en-mijas": "/news/malaga-proceso-de-instalacion-de-pistas-en-mijas",
    "/portico-sport-belgica": "/news/portico-sport-belgica",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=sv&gurl=vidrios": "/",
    "/fr/vidrios?glang=fr&gurl=vidrios": "/",
    "/en/portico-sport-uk": "/news/portico-sport-uk",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=ru&gurl=cubiertas": "/canopies",
    "/composicion": "/",
    "/it/trabajos": "/projects",
    "/it/lagos-portugal": "/projects",
    "/map": "/",
    "/nl/iluminacion": "/",
    "/en/2637-2": "/",
    "/pt/expansion": "/news",
    "/fi/customizacion": "/",
    "/ru/estructura": "/",
    "/pt/privacy-policy": "/privacy",
    "/nl/author/Portico": "/",
    "/ru/vidrios": "/",
    "/tag/padel-court": "/",
  },
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en", "fr", "it", "de"],
    routing: {
      prefixDefaultLocale: false
    },
    domains: {
      de: "https://www.porticosport.de",
      fr: "https://www.porticosport.fr",
      es: "https://www.porticosport.es",
      it: "https://www.porticosport.it"
    }
  },
  experimental: {
    i18nDomains: true
  },
  integrations: [tailwind(), preact(), sitemap({
    serialize(item) {
      const lastCharacter = item.url.slice(-1);
      if (lastCharacter === "/") {
        item.url = item.url.slice(0, -1);
      }
      return item;
    },
    customPages,
  }),],
});
