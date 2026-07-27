/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  GraduationCap,
  Briefcase,
  Cpu,
  Smartphone,
  Globe,
  Terminal,
  ChevronRight,
  Download,
  Layers,
  Award,
  Apple,
  Play,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useState, useRef } from 'react';

// --- Types ---
interface Project {
  title: string;
  client: string;
  country: string;
  tech: string[];
  description: string;
  links?: { label: string; url: string; icon: any }[];
  period: string;
  recommendationLetter?: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "Wow Pedro",
    client: "MIPYME Wow Pedro",
    country: "🇨🇺 Cuba",
    tech: ["Flutter", "Node", "IA"],
    description: "Desarrollo en proceso de un ecosistema integrado para la automatización total del negocio y su infraestructura. El sistema cuenta con varias apps principales: un Bot de WhatsApp que procesa datos automáticamente usando IA, un Dashboard CRM para la gestión completa de operaciones, un Sistema de Ventas con administración de inventario, stock y caja, y un Contador de Efectivo profesional personalizado.",
    period: "2026 – Presente"
  },
  {
    title: "Serena Care",
    client: "idooGROUP Technologies Inc",
    country: "🇲🇽 México",
    tech: ["Flutter"],
    description: "Desarrollé la aplicación móvil multiplataforma para Serena Care, una red de residencias especializadas en atención integral para adultos mayores en Baja California. La app centraliza servicios asistenciales como atención médica, programas de bienestar y respuesta a emergencias 24/7. Implementé módulos para seguimiento clínico y acceso a información de centros certificados (ISO 9001:2015, registro REPSSABI), garantizando estándares de calidad internacional.",
    links: [{ label: "Web", url: "https://serenacare.net/en/home-eng/", icon: Globe }],
    period: "Mayo 2025 – Enero 2026"
  },
  {
    title: "INDEX",
    client: "idooGROUP Technologies Inc",
    country: "🇲🇽 México",
    tech: ["Flutter"],
    description: "Desarrollé la aplicación móvil multiplataforma que conecta a trabajadores con los beneficios de su sindicato, permitiendo gestionar trámites, responder cuestionarios de bienestar (incluido NOM-035), inscribirse en eventos y acceder a cupones desde un solo lugar. Integré notificaciones en tiempo real, autenticación segura y accesos directos a servicios empresariales.",
    links: [{ label: "Web", url: "https://index.idooproject.com/", icon: Globe }],
    period: "Agosto 2024 – Enero 2026"
  },
  {
    title: "Das Cortez",
    client: "idooGROUP Technologies Inc",
    country: "🇲🇽 México",
    tech: ["Flutter"],
    description: "Participé en el desarrollo de la aplicación móvil multiplataforma para Das Cortez, una marca especializada en cafés finos y productos prémium. Implementé módulos clave para mejorar la experiencia de compra, navegación de catálogo, gestión de productos y flujo de pedidos, optimizando la operación del cliente y facilitando la venta de café, tarjetas de regalo y artículos relacionados.",
    links: [{ label: "Web", url: "https://dascortez.com/", icon: Globe }],
    period: "Abril 2025 – Junio 2025"
  },
  {
    title: "eVisas",
    client: "Grupo Business IT",
    country: "🇪🇨 Ecuador",
    tech: ["Angular"],
    description: "Desarrollé módulos clave para e-Visas, el sistema oficial del Gobierno de Ecuador para la gestión electrónica de visas, disponible 24/7 y 100 % en línea. Contribuí tanto a la interfaz pública para solicitantes como al panel administrativo interno, implementando flujos críticos para la solicitud, cancelación y transferencia de visas, así como validaciones, formularios dinámicos y mejoras de usabilidad orientadas a reducir errores y agilizar trámites.",
    links: [{ label: "Web", url: "https://serviciosdigitales.cancilleria.gob.ec/authentication", icon: Globe }],
    period: "Junio 2024"
  },
  {
    title: "Swin Drinks",
    client: "Swin Soft, LLC",
    country: "🇺🇸 USA",
    tech: ["Flutter"],
    description: "Desarrollé la aplicación móvil multiplataforma para Swin Drinks, una plataforma diseñada para optimizar la operación de bares, clubes y eventos en la industria de la vida nocturna. Implementé funcionalidades clave como pedidos in-app para incrementar ingresos, \"Flash Passes\" para acceso prioritario y un sistema de gestión de eventos en tiempo real que permite a los administradores tomar decisiones operativas basadas en datos.",
    links: [{ label: "Web", url: "https://www.swindrinks.com/", icon: Globe }],
    period: "Diciembre 2023 – Junio 2024"
  },
  {
    title: "Street Rent a Car",
    client: "idooGROUP Technologies Inc",
    country: "🇲🇽 México",
    tech: ["Flutter"],
    description: "Desarrollé la aplicación móvil multiplataforma para Street Rent a Car, una empresa mexicana de alquiler de vehículos con presencia en múltiples sucursales. Implementé un sistema de reservas intuitivo conectado a una flota diversa, gestión completa del ciclo de alquiler, un programa de recompensas y la integración de descuentos exclusivos para aumentar la fidelización y las conversiones. También optimicé la experiencia del usuario en procesos clave como selección de vehículo, fechas, sucursal, disponibilidad y métodos de pago, alineando la aplicación con la estructura y los servicios ofrecidos por dicha empresa.",
    links: [
      { label: "Web", url: "https://streetrentacar.com.mx/", icon: Globe },
      { label: "App Store", url: "https://apps.apple.com/mx/app/street-rent-a-car/id6478752296", icon: Apple },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.idoogroup.srac", icon: Play }
    ],
    period: "Noviembre 2023 – Junio 2024"
  },
  {
    title: "Stream Dealer",
    client: "idooGROUP Technologies Inc",
    country: "🇲🇽 México",
    tech: ["Flutter"],
    description: "Desarrollé la aplicación móvil multiplataforma Stream Dealer, un marketplace especializado en cartas coleccionables y productos relacionados. Implementé funcionalidades clave como publicación y gestión de artículos, compra y venta segura, búsqueda avanzada por colección y rareza, sistema de favoritos, inventario personal y herramientas para conectar a compradores y vendedores dentro de una comunidad activa. La aplicación fue construida con Flutter, optimizando rendimiento, navegación y experiencia de usuario para un flujo de comercio ágil y confiable.",
    links: [{ label: "Play Store", url: "https://play.google.com/store/apps/details?id=app.streamdealer.com", icon: Play }],
    period: "Junio 2023 – Noviembre 2023"
  },
  {
    title: "Good Crown v2",
    client: "Privado",
    country: "🇺🇸 USA",
    tech: ["Flutter"],
    description: "Implementé la aplicación móvil multiplataforma para una red social exclusiva, mejorando significativamente la experiencia del usuario. (Proyecto bajo acuerdo de confidencialidad).",
    period: "Mayo 2023 – Septiembre 2023"
  },
  {
    title: "SINI",
    client: "Deneb Latinoamericana, Inc.",
    country: "🇺🇸 USA",
    tech: ["Flutter"],
    description: "Implementé la aplicación móvil oficial \"AlertaDO\" para la Defensa Civil y el Sistema Integrado Nacional de Información (SINI). Esta herramienta es clave para la gestión de riesgos en República Dominicana y el Caribe, ya que permite a los ciudadanos reportar incidencias de forma ágil y segura. Desarrollé el sistema de alertas tempranas para notificar amenazas naturales y antrópicas en tiempo real, garantizando una respuesta oportuna ante situaciones de peligro.",
    links: [{ label: "Play Store", url: "https://play.google.com/store/apps/details?id=do.sini.alertado", icon: Play }],
    period: "Febrero 2023 – Julio 2023",
    recommendationLetter: import.meta.env.BASE_URL + "recommendation_letter_deneb.pdf"
  },
  {
    title: "CUSAF",
    client: "Deneb Latinoamericana, Inc.",
    country: "🇺🇸 USA",
    tech: ["Flutter"],
    description: "Implementé una aplicación móvil multiplataforma de gestión agrícola empresarial para el proyecto AgroFor. Desarrollé módulos para la optimización de procesos clave, el seguimiento de la producción en tiempo real y el análisis de datos, mejorando la toma de decisiones estratégicas para las operaciones agrícolas del cliente.",
    links: [{ label: "Web", url: "https://www.agrofor.info/", icon: Globe }],
    period: "Enero 2023 – Julio 2023",
    recommendationLetter: import.meta.env.BASE_URL + "recommendation_letter_deneb.pdf"
  },
  {
    title: "Ganaclima",
    client: "Deneb Latinoamericana, Inc.",
    country: "🇺🇸 USA",
    tech: ["Flutter"],
    description: "Desarrollé la aplicación móvil para GanaclimaRD, una iniciativa nacional asistida por la FAO que ayuda a los agricultores a adoptar prácticas climáticamente inteligentes para reducir emisiones y aumentar la productividad.",
    links: [{ label: "Web", url: "https://ganaderiayclimard.do/ganaclima/", icon: Globe }],
    period: "Octubre 2022 – Julio 2023",
    recommendationLetter: import.meta.env.BASE_URL + "recommendation_letter_deneb.pdf"
  },
  {
    title: "SUPI Plus",
    client: "CademSmart",
    country: "🇨🇱 Chile",
    tech: ["Flutter"],
    description: "Implementé la aplicación móvil de auditoría para la firma de inteligencia de mercado CademSmart. La herramienta digitaliza el levantamiento de datos en el punto de venta, permitiendo a los auditores de campo registrar información crítica como disponibilidad de stock, precios y cumplimiento de promociones en tiempo real para los clientes B2B de la compañía.",
    links: [{ label: "App", url: "https://app.cademsmart.com/", icon: Globe }],
    period: "Febrero 2022 – Diciembre 2022"
  },
  {
    title: "Xpertopolis",
    client: "Peoplewalking",
    country: "🇪🇸 España",
    tech: ["Ionic", "Angular"],
    description: "Implementé el programa de certificación profesional para Xpertopolis, una innovadora plataforma de contratación que utiliza IA y Blockchain para eliminar sesgos. Mi desarrollo fue clave para certificar objetivamente las habilidades técnicas de los desarrolladores en Ionic y Angular, asegurando la fiabilidad y transparencia en el proceso de selección de expertos.",
    links: [{ label: "Web", url: "https://xpertopolis.com/", icon: Globe }],
    period: "Julio 2022 – Diciembre 2022"
  },
  {
    title: "Business Series Tool",
    client: "Peoplewalking",
    country: "🇪🇸 España",
    tech: ["Ionic", "Angular"],
    description: "Implementé la aplicación web para la gestión, actualización y soporte del proyecto Business Series Tools, mejorando la eficiencia operativa del equipo.",
    links: [{ label: "Web", url: "https://www.peoplewalking.com/", icon: Globe }],
    period: "Junio 2021 – Diciembre 2022"
  },
  {
    title: "Good Crown v1",
    client: "idooGROUP Technologies Inc",
    country: "🇲🇽 México",
    tech: ["Flutter"],
    description: "Implementé la aplicación móvil multiplataforma innovadora para una red social exclusiva con funcionalidades comerciales integradas. (Proyecto bajo acuerdo de confidencialidad).",
    period: "Noviembre 2020 – Mayo 2021"
  },
  {
    title: "CIMEMP",
    client: "idooGROUP Technologies Inc",
    country: "🇲🇽 México",
    tech: ["Ionic", "Angular"],
    description: "Implementé CIMEMP, una aplicación móvil crucial para la gestión de la salud en empresas estatales mexicanas durante la pandemia. Desarrollé sus funciones clave, incluidos el registro de análisis clínicos, seguimiento de síntomas y generación de reportes, para facilitar una detección temprana y una gestión eficiente de los casos de COVID-19.",
    links: [{ label: "Portfolio", url: "https://www.idoogroup.com/en/portfolio/project-cimemp/", icon: ExternalLink }],
    period: "Julio 2020 – Septiembre 2020"
  },
  {
    title: "COVID-19 Test",
    client: "idooGROUP Technologies Inc",
    country: "🇲🇽 México",
    tech: ["Ionic", "Angular"],
    description: "Aplicación móvil multiplataforma especializada en la detección y seguimiento de casos COVID-19, optimizando la gestión sanitaria para el sector privado.",
    period: "Abril 2020 – Junio 2020"
  },
  {
    title: "GETRIX",
    client: "Instapack",
    country: "🇪🇸 España",
    tech: ["HTML", "CSS", "JS"],
    description: "Implementé GETRIX, la aplicación web de cliente para la empresa de mensajería instantánea Instapack. Mi desarrollo fue clave para su sistema de seguimiento, permitiendo a los usuarios visualizar el repartidor en un mapa en tiempo real, recibir notificaciones detalladas del progreso y contactar directamente al mensajero, mejorando radicalmente la transparencia en la logística.",
    links: [{ label: "Web", url: "https://www.instapack.es/", icon: Globe }],
    period: "Enero 2018 – Julio 2018"
  },
  {
    title: "FULLSTACK",
    client: "Universidad de Guantánamo",
    country: "🇨🇺 Cuba",
    tech: ["Flutter", "Go", "Angular"],
    description: "Lidero el desarrollo de soluciones tecnológicas innovadoras y aplicaciones de propósito general para empresas nacionales y universidades cubanas.",
    period: "Septiembre 2011 – Presente"
  }
];

const SKILLS = {
  'Desarrollo Móvil': {
    icon: <Smartphone className="w-5 h-5" />,
    items: [
      { name: 'Flutter', level: 'expert' },
      { name: 'Ionic', level: 'proficient' },
      { name: 'Kotlin Multiplatform', level: 'competent' }
    ]
  },
  'Desarrollo Web': {
    icon: <Globe className="w-5 h-5" />,
    items: [
      { name: 'Angular', level: 'expert' },
      { name: 'React', level: 'competent' },
      { name: 'Ionic', level: 'proficient' },
      { name: 'Vue', level: 'competent' },
      { name: 'HTML / CSS / JS', level: 'expert' }
    ]
  },
  'Backend': {
    icon: <Layers className="w-5 h-5" />,
    items: [
      { name: 'Go', level: 'proficient' },
      { name: 'Laravel', level: 'proficient' },
      { name: 'Spring Boot', level: 'competent' },
      { name: 'NestJS', level: 'competent' },
      { name: '.NET Core', level: 'competent' },
      { name: 'Node', level: 'competent' }
    ]
  },
  'Escritorio': {
    icon: <Terminal className="w-5 h-5" />,
    items: [
      { name: 'Flutter', level: 'expert' },
      { name: 'C / C++', level: 'expert' }
    ]
  }
};

const LEVEL_CONFIG: Record<string, { label: string; color: string; width: string }> = {
  expert: { label: 'Experto', color: 'bg-emerald-500', width: 'w-full' },
  proficient: { label: 'Avanzado', color: 'bg-emerald-500/70', width: 'w-4/5' },
  competent: { label: 'Competente', color: 'bg-emerald-500/40', width: 'w-3/5' }
};

// --- Components ---

const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string, subtitle: string, icon: any }) => (
  <motion.div
    className="mb-16"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 glow-emerald">
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
        {subtitle}
      </span>
    </div>
    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
      {title}
    </h2>
  </motion.div>
);

export default function App() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);

  const techFilters = ['Todos', 'Móvil', 'Web', 'Flutter', 'Angular'];

  const filteredProjects = PROJECTS.filter(project => {
    if (activeFilter === 'Todos') return true;

    const tech = project.tech.map(t => t.toLowerCase());

    if (activeFilter === 'Móvil') {
      return tech.some(t => ['flutter', 'ionic', 'mobile', 'móvil', 'kotlin'].includes(t));
    }

    if (activeFilter === 'Web') {
      return tech.some(t => ['angular', 'react', 'vue', 'html', 'css', 'js', 'web', 'javascript'].includes(t));
    }

    return project.tech.includes(activeFilter);
  });

  return (
    <div className="min-h-screen font-sans bg-[#09090b] noise-overlay">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-2xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-black text-lg shadow-lg shadow-emerald-500/20">
              J
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:block text-white">Javier Fernández Vaca</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
            <a href="#experience" className="nav-link hover:text-white transition-colors hidden md:block">Experiencia</a>
            <a href="#education" className="nav-link hover:text-white transition-colors hidden md:block">Educación</a>
            <a href="#skills" className="nav-link hover:text-white transition-colors hidden md:block">Habilidades</a>
            <a href="#projects" className="nav-link hover:text-white transition-colors">Proyectos</a>
            <a
              href="#contact"
              className="px-4 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-400 transition-all text-sm font-semibold shadow-lg shadow-emerald-500/20"
            >
              Contactar
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-emerald-500/[0.07] rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-[0.15em] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Disponible para proyectos
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-8">
              <span className="text-gradient">Ingeniero</span> <br />
              <span className="text-gradient">de Software</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 max-w-xl">
              Ingeniero full-stack con más de <span className="text-emerald-400 font-semibold">13 años de experiencia</span> creando
              aplicaciones móviles y web de alto rendimiento. Con sede en Cuba, trabajando para el mundo.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3.5 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25"
              >
                <ExternalLink className="w-4 h-4" />
                Ver portafolio
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* CV Download Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setCvDropdownOpen(!cvDropdownOpen)}
                  className="group flex items-center gap-2 px-6 py-3.5 bg-zinc-900 border border-white/10 hover:border-emerald-500/30 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-all shadow-lg cursor-pointer"
                >
                  <Download className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                  Descargar CV
                </button>
                {cvDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setCvDropdownOpen(false)} />
                    <div className="absolute left-0 mt-2 w-48 rounded-xl bg-zinc-900 border border-white/10 shadow-2xl z-50 overflow-hidden py-1">
                      <a
                        href={import.meta.env.BASE_URL + "Javier_Fernandez_Vaca_Resume_ES.pdf"}
                        download="Javier_Fernandez_Vaca_Resume_ES.pdf"
                        onClick={() => setCvDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        Español (PDF)
                      </a>
                      <a
                        href={import.meta.env.BASE_URL + "Javier_Fernandez_Vaca_Resume_EN.pdf"}
                        download="Javier_Fernandez_Vaca_Resume_EN.pdf"
                        onClick={() => setCvDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        English (PDF)
                      </a>
                    </div>
                  </>
                )}
              </div>

              <div className="flex items-center gap-3 px-2">
                <a href="mailto:javierfernandezvaca@gmail.com" className="p-3 rounded-xl border border-white/10 hover:bg-white/5 hover:border-emerald-500/30 transition-all">
                  <Mail className="w-5 h-5 text-zinc-400" />
                </a>
                <a href="https://www.linkedin.com/in/javier-fern%C3%A1ndez-vaca-1b7b12189/" target="_blank" rel="noopener" className="p-3 rounded-xl border border-white/10 hover:bg-white/5 hover:border-emerald-500/30 transition-all">
                  <Linkedin className="w-5 h-5 text-zinc-400" />
                </a>
                <a href="https://github.com/javierfernandezvaca" target="_blank" rel="noopener" className="p-3 rounded-xl border border-white/10 hover:bg-white/5 hover:border-emerald-500/30 transition-all">
                  <Github className="w-5 h-5 text-zinc-400" />
                </a>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-8 border-t border-white/[0.06] pt-8">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <div className="text-3xl font-black text-white">+13</div>
                <div className="text-sm text-zinc-500 font-medium">Años de experiencia</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <div className="text-3xl font-black text-white">+19</div>
                <div className="text-sm text-zinc-500 font-medium">Proyectos realizados</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <div className="text-3xl font-black text-emerald-400">Experto</div>
                <div className="text-sm text-zinc-500 font-medium">Flutter & Angular</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="aspect-square rounded-[2rem] overflow-hidden bg-zinc-800 relative z-10 border-2 border-white/10 shadow-2xl shadow-emerald-500/5">
              <img
                src={import.meta.env.BASE_URL + "profile-image.jpg"}
                alt="Javier Fernández Vaca"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-emerald-500/20 rounded-full blur-[80px] animate-float"></div>
            <div className="absolute -bottom-12 -left-12 w-52 h-52 bg-blue-500/10 rounded-full blur-[80px]"></div>

            <motion.div
              className="absolute bottom-8 -right-4 z-20 glass-card p-4 rounded-2xl gradient-border"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-xs font-bold text-zinc-300">Freelance Profesional</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding relative">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            title="Trayectoria Profesional"
            subtitle="Experiencia"
            icon={Briefcase}
          />

          <div className="space-y-8">
            <motion.div
              className="grid md:grid-cols-[200px_1fr] gap-8 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-emerald-400/70 font-mono text-sm pt-1">2011 — Presente</div>
              <div className="glass-card-hover p-8 rounded-3xl gradient-border">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white">Ingeniero de Software Freelance</h3>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase border border-emerald-500/20">Remoto</span>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Especializado en el desarrollo de aplicaciones profesionales de propósito general. Experto en Flutter, Angular y Go para clientes internacionales.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <MapPin className="w-4 h-4 text-emerald-500/60" /> Cuba
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-[200px_1fr] gap-8 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="text-emerald-400/70 font-mono text-sm pt-1">2015 — Presente</div>
              <div className="glass-card-hover p-8 rounded-3xl gradient-border">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white">Profesor Universitario</h3>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase border border-blue-500/20">Académico</span>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Facultad de Ingeniería Informática en la Universidad de Guantánamo. Formando a la próxima generación de profesionales.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <GraduationCap className="w-4 h-4 text-emerald-500/60" /> Profesor Instructor (2015)
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <GraduationCap className="w-4 h-4 text-emerald-500/60" /> Profesor Asistente (2020)
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Formación Académica"
            subtitle="Educación"
            icon={GraduationCap}
          />

          <motion.div
            className="glass-card p-8 md:p-10 rounded-[2rem] relative overflow-hidden gradient-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/[0.07] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-8">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center glow-emerald">
                <GraduationCap className="w-8 h-8 text-emerald-400" />
              </div>

              <div className="flex-1">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Licenciatura en Ciencias de la Computación</h3>
                  <div className="flex flex-wrap items-center gap-3 text-zinc-400 font-medium">
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-500/60" /> Universidad de Oriente, Cuba</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-emerald-500" />
                    Materias principales aprobadas
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "Programación en C/C++",
                      "Estructura de Datos y Algoritmos",
                      "Diseño y Análisis de Algoritmos",
                      "Sistemas de Bases de Datos",
                      "Redes de Computadoras",
                      "Sistemas Operativos",
                      "Lenguajes de Programación",
                      "Técnicas de Compilación",
                      "Ingeniería de Software",
                      "Inteligencia Artificial",
                      "Reconocimiento de Patrones"
                    ].map((subject, idx) => (
                      <span
                        key={idx}
                        className="tech-tag"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding relative">
        <div className="absolute inset-0 dot-pattern pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            title="Arsenal Técnico"
            subtitle="Habilidades"
            icon={Cpu}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SKILLS).map(([key, group], groupIdx) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card-hover p-6 rounded-3xl gradient-border"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                  {group.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-5">{key}</h4>
                <ul className="space-y-4">
                  {group.items.map((item, i) => {
                    const config = LEVEL_CONFIG[item.level];
                    return (
                      <li key={i}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm text-zinc-300 font-medium">{item.name}</span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">{config.label}</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${config.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: item.level === 'expert' ? '100%' : item.level === 'proficient' ? '80%' : '60%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 glow-emerald">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Portafolio
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Proyectos Destacados
              </h2>
            </motion.div>

            <div className="flex flex-wrap gap-2">
              {techFilters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeFilter === filter
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'bg-white/5 text-zinc-400 hover:bg-white/10 border border-white/[0.06]'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                key={project.title}
                className={`group border rounded-[2rem] p-8 transition-all flex flex-col ${project.recommendationLetter
                  ? 'bg-amber-950/30 border-amber-500/20 hover:bg-amber-950/50 hover:border-amber-500/40'
                  : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12]'
                  }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[10px] font-mono text-emerald-400/80 uppercase tracking-widest">
                    {project.period}
                  </div>
                  <div className="flex gap-2">
                    {project.links?.map((link, j) => (
                      <a
                        key={j}
                        href={link.url}
                        target="_blank"
                        rel="noopener"
                        className="p-2 rounded-full bg-white/5 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                        title={link.label}
                      >
                        <link.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-1 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-sm text-zinc-400 font-medium">{project.client}</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                    {project.country}
                  </span>
                </div>

                <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Recommendation Letter Banner */}
                {project.recommendationLetter && (
                  <a
                    href={project.recommendationLetter}
                    target="_blank"
                    rel="noopener"
                    className="group/rec flex items-center gap-3 mb-6 px-4 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/25 hover:bg-amber-500/20 hover:border-amber-400/50 transition-all"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center">
                      <Award className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Carta de recomendación</div>
                      <div className="text-[11px] text-amber-500/70 truncate">Arturo Aranguren</div>
                      <div className="text-[11px] text-amber-500/70 truncate">Presidente, Deneb Latinoamericana Inc.</div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-500/60 group-hover/rec:text-amber-400 transition-colors shrink-0" />
                  </a>
                )}

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.06]">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400/80 border border-emerald-500/15">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding relative">
        <div className="absolute inset-0 dot-pattern pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/[0.05] rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Trabajemos <span className="text-gradient-emerald">Juntos</span>
          </motion.h2>
          <p className="text-xl text-zinc-400 mb-14">
            ¿Tienes un proyecto en mente? <br />
            Estoy disponible para nuevas oportunidades y colaboraciones.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Email */}
            <a
              href="mailto:javierfernandezvaca@gmail.com"
              className="flex items-center gap-4 p-6 rounded-3xl bg-emerald-500 text-white hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 group"
            >
              <div className="shrink-0 w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left min-w-0">
                <div className="text-[10px] uppercase tracking-wider text-emerald-100 font-bold mb-0.5">Email</div>
                <div className="font-semibold text-sm truncate">javierfernandezvaca@gmail.com</div>
              </div>
            </a>
            {/* Teléfono */}
            <a
              href="tel:+5356073219"
              className="flex items-center gap-4 p-6 rounded-3xl glass-card-hover"
            >
              <div className="shrink-0 w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center">
                <Phone className="w-5 h-5 text-zinc-400" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-0.5">Teléfono</div>
                <div className="font-semibold text-white text-sm">+53 56073219</div>
              </div>
            </a>
            {/* Ubicación */}
            <a
              href="https://www.google.com/maps/place/Yosh's+Studio/@20.1504949,-75.1954211,21z/data=!4m6!3m5!1s0x8eceb9006ad14ea5:0xca80981c88f478c7!8m2!3d20.1503723!4d-75.195318!16s%2Fg%2F11vwp29hrw?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-3xl glass-card-hover sm:col-span-2 lg:col-span-1 group"
            >
              <div className="shrink-0 w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                <MapPin className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-0.5 flex items-center gap-1">
                  Ubicación <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="font-semibold text-white text-sm">Guantánamo, Cuba</div>
                <div className="text-xs text-zinc-500 mt-0.5">5 Norte E/ 4 y 5 Este, Rpto. Río Guaso</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center text-white font-bold text-xs">
              J
            </div>
            <span className="font-bold text-sm tracking-tight text-zinc-300">Javier Fernández Vaca</span>
          </div>

          <div className="text-sm text-zinc-600">
            Última actualización: 5 de junio de 2026
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/javierfernandezvaca" target="_blank" rel="noopener" className="text-zinc-600 hover:text-emerald-400 transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/javier-fern%C3%A1ndez-vaca-1b7b12189/" target="_blank" rel="noopener" className="text-zinc-600 hover:text-emerald-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:javierfernandezvaca@gmail.com" className="text-zinc-600 hover:text-emerald-400 transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

