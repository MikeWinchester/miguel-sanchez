import type { SkillGroup, SoftSkill } from "@/types"

export const skillGroups: SkillGroup[] = [
  {
    category: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90, category: "backend" },
      { name: "Python", level: 85, category: "backend" },
      { name: "Express.js", level: 88, category: "backend" },
      { name: "FastAPI", level: 80, category: "backend" },
      { name: "GraphQL", level: 75, category: "backend" },
    ],
  },
  {
    category: "frontend",
    title: "Frontend",
    skills: [
      { name: "React", level: 92, category: "frontend" },
      { name: "TypeScript", level: 88, category: "frontend" },
      { name: "Next.js", level: 85, category: "frontend" },
      { name: "Astro", level: 80, category: "frontend" },
      { name: "TailwindCSS", level: 90, category: "frontend" },
    ],
  },
  {
    category: "database",
    title: "Bases de Datos",
    skills: [
      { name: "MongoDB", level: 85, category: "database" },
      { name: "PostgreSQL", level: 80, category: "database" },
      { name: "Redis", level: 75, category: "database" },
      { name: "Supabase", level: 78, category: "database" },
    ],
  },
  {
    category: "infrastructure",
    title: "Infraestructura",
    skills: [
      { name: "Docker", level: 82, category: "infrastructure" },
      { name: "AWS", level: 75, category: "infrastructure" },
      { name: "Vercel", level: 88, category: "infrastructure" },
      { name: "GitHub Actions", level: 80, category: "infrastructure" },
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
