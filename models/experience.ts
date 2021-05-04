import { Language } from "@/utils/strings/languages"
import { Project, projects } from "./project"

export type Experience = {
    initDate: string
    finishDate: string | null
    title: keyof Language
    projects: Project[]
}

export const experiences: Experience[] = [
    {
        initDate: '19-05-20',
        finishDate: '04-05-21',
        title: 'experience0',
        projects: [ projects.inweb, projects.tmob, projects.tgeo ]
    }, {
        initDate: '29-05-18',
        finishDate: '04-03-20',
        title: 'experience1',
        projects: [ projects.curriculum5, projects.kucoin, projects.tengoque, projects.triangular, projects.matitest, projects.dragondebate ]
    }, {
        initDate: '28-12-17',
        finishDate: '13-04-18',
        title: 'experience2',
        projects: [ projects.ips, projects.abochat, projects.quickvorcio ]
    },
]