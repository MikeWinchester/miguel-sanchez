export interface Experience {
  id: string
  position: string
  company: string
  startDate: string
  endDate: string
  description: string
  technologies?: string[]
  slug: string
}

export interface Project {
  id: string
  title: string
  description: string
  date: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  slug: string
  category: string
  role: string
}

export interface Skill {
  name: string
  level: number
  category: SkillCategory
}

export type SkillCategory = "backend" | "frontend" | "database" | "infrastructure" | "other"

export interface SkillGroup {
  category: SkillCategory
  title: string
  skills: Skill[]
}

export interface SoftSkill {
  name: string
  description: string
  icon: string
}

export interface ContactForm {
  name: string
  email: string
  message: string
}

export interface PersonalInfo {
  name: string
  profession: string
  email: string
  location: string
  bio: string
  profileImage: string
  aboutMeImage: string
  socialLinks: {
    github: string
    linkedin: string
    youtube?: string
  }
}

export interface Modal{
  css_id: string
  countdown_id: string
  title: string
  type: string
  message: string
  x_background: string
  dimensions: string
}