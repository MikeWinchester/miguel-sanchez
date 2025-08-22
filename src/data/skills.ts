// src/data/skills.ts
import type { SkillGroup, SoftSkill } from "@/types"

// Función helper para ordenar habilidades
const sortSkills = (skills: any[]) => skills.sort((a, b) => b.level - a.level)

export const skillGroups: SkillGroup[] = [
  {
    category: "backend",
    title: "Backend",
    skills: sortSkills([
      { name: "Spring Boot", level: 75, category: "backend" },
      { name: "FastAPI", level: 70, category: "backend" },
      { name: "Node.js", level: 60, category: "backend" },
      { name: "Python", level: 60, category: "backend" },
      { name: "Express.js", level: 60, category: "backend" },
    ]),
  },
  {
    category: "frontend",
    title: "Frontend",
    skills: sortSkills([
      { name: "Astro", level: 80, category: "frontend" },
      { name: "TailwindCSS", level: 75, category: "frontend" },
      { name: "React", level: 60, category: "frontend" },
      { name: "TypeScript", level: 55, category: "frontend" },
      { name: "Next.js", level: 55, category: "frontend" },
    ]),
  },
  {
    category: "database",
    title: "Bases de Datos",
    skills: sortSkills([
      { name: "MongoDB", level: 85, category: "database" },
      { name: "MySQL", level: 80, category: "database" },
      { name: "Firebase", level: 75, category: "database" },
      { name: "Supabase", level: 70, category: "database" },
    ]),
  },
  {
    category: "infrastructure",
    title: "Infraestructura",
    skills: sortSkills([
      { name: "Docker", level: 72, category: "infrastructure" },
      { name: "AWS", level: 70, category: "infrastructure" },
      { name: "Vercel", level: 68, category: "infrastructure" },
      { name: "GitHub Actions", level: 65, category: "infrastructure" },
    ]),
  },
]

export const softSkills: SoftSkill[] = [
  {
    name: "Liderazgo",
    description: "Capacidad para guiar equipos hacia objetivos comunes",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="m22 21-3-3"/>
      <path d="m22 18-3-3"/>
    </svg>`
  },
  {
    name: "Comunicación",
    description: "Habilidad para transmitir ideas de forma clara y efectiva",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>`
  },
  {
    name: "Resolución de Problemas",
    description: "Enfoque analítico para encontrar soluciones creativas",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8">
      <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
      <path d="M20 3v4"/>
      <path d="M22 5h-4"/>
      <path d="M18 9v2"/>
      <path d="M19 10h-2"/>
    </svg>`
  },
  {
    name: "Adaptabilidad",
    description: "Flexibilidad para adaptarse a nuevos entornos y tecnologías",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8">
      <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"/>
    </svg>`
  }
]