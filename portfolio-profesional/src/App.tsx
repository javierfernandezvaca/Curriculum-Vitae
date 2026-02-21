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
  Layers
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

// --- Types ---
interface Project {
  title: string;
  client: string;
  tech: string[];
  description: string;
  links?: { label: string; url: string; icon: any }[];
  period: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "Serena Care",
    client: "idooGROUP Technologies Inc (México)",
    tech: ["Flutter"],
    description: "Aplicación móvil multiplataforma para residencias de atención integral al adulto mayor. Centraliza atención médica, programas de bienestar y respuesta a emergencias 24/7. Estándares ISO 9001:2015.",
    links: [{ label: "Web", url: "https://serenacare.net/en/home-eng/", icon: Globe }],
    period: "Mayo 2025 – Enero 2026"
  },
  {
    title: "INDEX",
    client: "idooGROUP Technologies Inc (México)",
    tech: ["Flutter"],
    description: "Conecta a trabajadores con beneficios sindicales, gestionando trámites, cuestionarios de bienestar (NOM-035) e inscripciones a eventos con notificaciones en tiempo real.",
    links: [{ label: "Web", url: "https://index.idooproject.com/", icon: Globe }],
    period: "Agosto 2024 – Enero 2026"
  },
  {
    title: "Das Cortez",
    client: "idooGROUP Technologies Inc (México)",
    tech: ["Flutter"],
    description: "App para marca de café premium. Implementé navegación de catálogo, gestión de productos y flujo de pedidos optimizado para café y tarjetas de regalo.",
    links: [{ label: "Web", url: "https://dascortez.com/", icon: Globe }],
    period: "Abril 2025 – Junio 2025"
  },
  {
    title: "eVisas",
    client: "Business IT (Ecuador)",
    tech: ["Angular"],
    description: "Sistema oficial de gestión electrónica de visas. Desarrollé flujos críticos para solicitud, cancelación y transferencia de visas tanto para paneles públicos como administrativos.",
    links: [{ label: "Web", url: "https://serviciosdigitales.cancilleria.gob.ec/authentication", icon: Globe }],
    period: "Junio 2024"
  },
  {
    title: "Swin Drinks",
    client: "Swin Soft, LLC (USA)",
    tech: ["Flutter"],
    description: "Optimiza operaciones de bares y clubes. Pedidos in-app, 'Flash Passes' para acceso prioritario y gestión de eventos con datos en tiempo real para administradores.",
    links: [{ label: "Web", url: "https://www.swindrinks.com/", icon: Globe }],
    period: "Diciembre 2023 – Junio 2024"
  },
  {
    title: "Street Rent a Car",
    client: "idooGROUP Technologies Inc (México)",
    tech: ["Flutter"],
    description: "Sistema de reservas intuitivo para flota de vehículos. Incluye gestión del ciclo de alquiler, programa de recompensas e integración de pagos seguros.",
    links: [
      { label: "Web", url: "https://streetrentacar.com.mx/", icon: Globe },
      { label: "App Store", url: "https://apps.apple.com/mx/app/street-rent-a-car/id6478752296", icon: ExternalLink }
    ],
    period: "Noviembre 2023 – Junio 2024"
  },
  {
    title: "Stream Dealer",
    client: "idooGROUP Technologies Inc (México)",
    tech: ["Flutter"],
    description: "Marketplace especializado en cartas coleccionables. Compra/venta segura, búsqueda avanzada por rareza y herramientas de inventario personal.",
    links: [{ label: "Play Store", url: "https://play.google.com/store/apps/details?id=app.streamdealer.com", icon: ExternalLink }],
    period: "Junio 2023 – Noviembre 2023"
  },
  {
    title: "SINI",
    client: "Deneb Latinoamericana (USA)",
    tech: ["Flutter"],
    description: "Sistema oficial de alerta temprana para gestión de riesgos. Permite a ciudadanos reportar incidencias y recibir notificaciones de amenazas naturales en tiempo real.",
    links: [{ label: "Play Store", url: "https://play.google.com/store/apps/details?id=do.sini.alertado", icon: ExternalLink }],
    period: "Febrero 2023 – Julio 2023"
  },
  {
    title: "CUSAF",
    client: "Deneb Latinoamericana (USA)",
    tech: ["Flutter"],
    description: "App de gestión agrícola empresarial para el proyecto AgroFor. Seguimiento de producción en tiempo real y análisis de datos para decisiones estratégicas.",
    links: [{ label: "Web", url: "https://www.agrofor.info/", icon: Globe }],
    period: "Enero 2023 – Julio 2023"
  },
  {
    title: "Ganaclima",
    client: "Deneb Latinoamericana (USA)",
    tech: ["Flutter"],
    description: "Ayuda a agricultores a adoptar prácticas climáticamente inteligentes para reducir emisiones. Iniciativa nacional asistida por la FAO.",
    links: [{ label: "Web", url: "https://ganaderiayclimard.do/ganaclima/", icon: Globe }],
    period: "Octubre 2022 – Julio 2023"
  },
  {
    title: "SUPI Plus",
    client: "CademSmart (Chile)",
    tech: ["Flutter"],
    description: "App de auditoría de inteligencia de mercado. Digitaliza levantamiento de datos en punto de venta para stock, precios y cumplimiento de promociones.",
    links: [{ label: "App", url: "https://app.cademsmart.com/", icon: Globe }],
    period: "Febrero 2022 – Diciembre 2022"
  },
  {
    title: "Xpertopolis",
    client: "Peoplewalking (España)",
    tech: ["Ionic", "Angular",],
    description: "Programa de certificación profesional con IA y Blockchain para eliminar sesgos. Certificó habilidades técnicas de desarrolladores Ionic/Angular.",
    links: [{ label: "Web", url: "https://xpertopolis.com/", icon: Globe }],
    period: "Julio 2022 – Diciembre 2022"
  },
  {
    title: "GETRIX",
    client: "Instapack (España)",
    tech: ["HTML", "CSS", "JS"],
    description: "Seguimiento en tiempo real para mensajería instantánea. Visualización de repartidores en mapa, notificaciones detalladas y contacto directo.",
    links: [{ label: "Web", url: "https://www.instapack.es/", icon: Globe }],
    period: "Enero 2018 – Julio 2018"
  }
];

const SKILLS = {
  móvil: {
    icon: <Smartphone className="w-5 h-5" />,
    items: ["Flutter", "Ionic", "Kotlin Multiplatform"]
  },
  frontend: {
    icon: <Globe className="w-5 h-5" />,
    items: ["Ionic", "Angular", "React", "Vue", "HTML/CSS/JS"]
  },
  backend: {
    icon: <Layers className="w-5 h-5" />,
    items: ["Go", "Laravel", "Spring Boot", "NestJS", ".NET Core"]
  },
  desktop: {
    icon: <Terminal className="w-5 h-5" />,
    items: ["C/C++", "Flutter"]
  }
};

// --- Components ---

const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string, subtitle: string, icon: any }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
        {subtitle}
      </span>
    </div>
    <h2 className="text-4xl font-bold text-zinc-900 tracking-tight">
      {title}
    </h2>
  </div>
);

export default function App() {
  const [activeFilter, setActiveFilter] = useState('Todos');

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
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-zinc-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              J
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">Javier Fernández</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-zinc-600">
            <a href="#experience" className="hover:text-zinc-900 transition-colors">Experiencia</a>
            <a href="#skills" className="hover:text-zinc-900 transition-colors">Habilidades</a>
            <a href="#projects" className="hover:text-zinc-900 transition-colors">Proyectos</a>
            <a
              href="mailto:javierfernandezvaca@gmail.com"
              className="px-4 py-2 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-all shadow-sm"
            >
              Contactar
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Disponible
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 text-gradient">
              Ingeniero de <br />
              Software
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-8 max-w-xl">
              Soy un ingeniero full-stack con más de 13 años de experiencia creando
              aplicaciones móviles y web de alto rendimiento. Con sede en Cuba, trabajando para el mundo.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://javierfernandezvaca.github.io/Curriculum-Vitae/"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200"
              >
                <ExternalLink className="w-4 h-4" />
                CV Interactivo
              </a>
              <div className="flex items-center gap-3 px-4">
                <a href="mailto:javierfernandezvaca@gmail.com" className="p-3 rounded-xl border border-zinc-200 hover:bg-zinc-50 transition-colors">
                  <Mail className="w-5 h-5 text-zinc-600" />
                </a>
                <a href="https://www.linkedin.com/in/javier-fern%C3%A1ndez-vaca-1b7b12189/" target="_blank" rel="noopener" className="p-3 rounded-xl border border-zinc-200 hover:bg-zinc-50 transition-colors">
                  <Linkedin className="w-5 h-5 text-zinc-600" />
                </a>
                <a href="https://github.com/javierfernandezvaca" target="_blank" rel="noopener" className="p-3 rounded-xl border border-zinc-200 hover:bg-zinc-50 transition-colors">
                  <Github className="w-5 h-5 text-zinc-600" />
                </a>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-zinc-100 pt-8">
              <div>
                <div className="text-3xl font-bold text-zinc-900">+13</div>
                <div className="text-sm text-zinc-500 font-medium">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-zinc-900">+19</div>
                <div className="text-sm text-zinc-500 font-medium">Proyectos realizados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-zinc-900">Experto</div>
                <div className="text-sm text-zinc-500 font-medium">Flutter</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[2rem] overflow-hidden bg-zinc-100 relative z-10 border-8 border-white shadow-2xl">
              <img
                src="/Curriculum-Vitae/profile-image.jpg"
                alt="Javier Fernández Vaca"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

            <div className="absolute bottom-8 -right-4 z-20 glass-card p-4 rounded-2xl shadow-xl max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-zinc-800">Freelance</span>
              </div>
              <p className="text-[10px] text-zinc-500 leading-tight">
                Licenciado en Ciencias de la Computación, Cuba.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-zinc-50/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Trayectoria Profesional"
            subtitle="Experiencia"
            icon={Briefcase}
          />

          <div className="space-y-8">
            <div className="grid md:grid-cols-[200px_1fr] gap-8 relative">
              <div className="text-zinc-400 font-mono text-sm pt-1">2015 — Presente</div>
              <div className="glass-card p-8 rounded-3xl">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-zinc-900">Ingeniero de Software Freelance</h3>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase">Remoto</span>
                </div>
                <p className="text-zinc-600 leading-relaxed mb-6">
                  Especializado en el desarrollo de aplicaciones profesionales de propósito general. Experto en Flutter, Go y Angular para clientes internacionales.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <MapPin className="w-4 h-4" /> Cuba
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[200px_1fr] gap-8 relative">
              <div className="text-zinc-400 font-mono text-sm pt-1">2015 — Presente</div>
              <div className="glass-card p-8 rounded-3xl">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-zinc-900">Profesor Universitario</h3>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase">Académico</span>
                </div>
                <p className="text-zinc-600 leading-relaxed mb-6">
                  Facultad de Ingeniería Informática en la Universidad de Guantánamo. Formando a la próxima generación de profesionales.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <GraduationCap className="w-4 h-4" /> Profesor Asistente (2020)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Arsenal Técnico"
            subtitle="Habilidades"
            icon={Cpu}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SKILLS).map(([key, group]) => (
              <motion.div
                key={key}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-3xl hover:border-emerald-200 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center mb-6">
                  {group.icon}
                </div>
                <h4 className="text-lg font-bold text-zinc-900 mb-4 capitalize">{key}</h4>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                  Portafolio
                </span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight">
                Proyectos Destacados
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {techFilters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeFilter === filter
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/5 text-zinc-400 hover:bg-white/10'
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={project.title}
                className="group bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/[0.08] transition-all flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                    {project.period}
                  </div>
                  <div className="flex gap-2">
                    {project.links?.map((link, j) => (
                      <a
                        key={j}
                        href={link.url}
                        target="_blank"
                        className="p-2 rounded-full bg-white/5 hover:bg-emerald-500 transition-colors"
                        title={link.label}
                      >
                        <link.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <div className="text-sm text-zinc-400 font-medium mb-4">
                  {project.client}
                </div>

                <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-zinc-400">
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
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
            Construyamos algo <br />
            extraordinario juntos.
          </h2>
          <p className="text-xl text-zinc-600 mb-12">
            Actualmente disponible para oportunidades freelance y colaboraciones técnicas.
            No dudes en contactarme para una consulta o simplemente para saludar.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="mailto:javierfernandezvaca@gmail.com"
              className="flex items-center justify-center gap-3 p-6 rounded-3xl bg-zinc-900 text-white hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200"
            >
              <Mail className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">javierfernandezvaca@gmail.com</div>
              </div>
            </a>
            <a
              href="tel:+5356073219"
              className="flex items-center justify-center gap-3 p-6 rounded-3xl border border-zinc-200 hover:bg-zinc-50 transition-all"
            >
              <Phone className="w-6 h-6 text-zinc-400" />
              <div className="text-left">
                <div className="font-semibold text-zinc-900">+53 56073219</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center text-white font-bold text-xs">
              J
            </div>
            <span className="font-bold text-sm tracking-tight text-zinc-900">Javier Fernández Vaca</span>
          </div>

          <div className="text-sm text-zinc-400 italic">
            © 2026 Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/javierfernandezvaca" target="_blank" rel="noopener" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/javier-fern%C3%A1ndez-vaca-1b7b12189/" target="_blank" rel="noopener" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:javierfernandezvaca@gmail.com" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
