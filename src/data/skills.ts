import type { SkillGroup, SoftSkill } from "@/types"

export const skillGroups: SkillGroup[] = [
  {
    category: "backend",
    title: "Backend",
    skills: [
      { name: "Spring Boot", level: 75, category: "backend" },
      { name: "FastAPI", level: 70, category: "backend" },
      { name: "Node.js", level: 60, category: "backend" },
      { name: "Python", level: 60, category: "backend" },
      { name: "Express.js", level: 60, category: "backend" },
    ],
  },
  {
    category: "frontend",
    title: "Frontend",
    skills: [
      { name: "Astro", level: 80, category: "frontend" },
      { name: "TailwindCSS", level: 75, category: "frontend" },
      { name: "React", level: 60, category: "frontend" },
      { name: "TypeScript", level: 55, category: "frontend" },
      { name: "Next.js", level: 55, category: "frontend" },
    ],
  },
  {
    category: "database",
    title: "Bases de Datos",
    skills: [
      { name: "MongoDB", level: 85, category: "database" },
      { name: "MySQL", level: 80, category: "database" },
      { name: "Firebase", level: 75, category: "database" },
      { name: "Supabase", level: 70, category: "database" },
    ],
  },
  {
    category: "infrastructure",
    title: "Infraestructura",
    skills: [
      { name: "Docker", level: 72, category: "infrastructure" },
      { name: "AWS", level: 70, category: "infrastructure" },
      { name: "Vercel", level: 68, category: "infrastructure" },
      { name: "GitHub Actions", level: 65, category: "infrastructure" },
    ],
  },
]

export const softSkills: SoftSkill[] = [
  {
    name: "Liderazgo",
    description: "Capacidad para guiar equipos hacia objetivos comunes",
    icon: "👥",
  },
  {
    name: "Comunicación",
    description: "Habilidad para transmitir ideas de forma clara y efectiva",
    icon: "💬",
  },
  {
    name: "Resolución de Problemas",
    description: "Enfoque analítico para encontrar soluciones creativas",
    icon: "🧩",
  },
  {
    name: "Adaptabilidad",
    description: "Flexibilidad para adaptarse a nuevos entornos y tecnologías",
    icon: "🔄",
  }
]
