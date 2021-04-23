import { INTER_STRING } from "@/utils/strings"
import { Language } from "@/utils/strings/languages"

export type Experience = {
    initDate: string
    finishDate: string | null
    githubUrl?: string
    youtubeUrl?: string
    jobTitle: keyof Language
    title: keyof Language
    body: keyof Language
    important: boolean
    aptitudes: string[]
}

export type Project = {
    title: keyof Language
    body: keyof Language
    githubUrl?: string
    youtubeUrl?: string
}

export const experiences: Experience[] = [
    {
        initDate: '20-03-08',
        finishDate: '20-03-08',
        jobTitle: 'project_tmob_title',
        title: 'project_tgeo_title',
        body: 'project_tmob_body',
        important: true,
        aptitudes: INTER_STRING.project_matitest_apts
    }, {
        initDate: '20-03-08',
        finishDate: '20-03-08',
        jobTitle: 'project_tgeo_title',
        title: 'project_tgeo_title',
        body: 'project_tmob_body',
        important: true,
        aptitudes: INTER_STRING.project_matitest_apts
    }, {
        initDate: '20-03-08',
        finishDate: '20-03-08',
        jobTitle: 'project_tgeo_title',
        title: 'project_tgeo_title',
        body: 'project_tmob_body',
        important: true,
        aptitudes: INTER_STRING.project_matitest_apts
    }
]