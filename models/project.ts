import { INTER_STRING } from "@/utils/strings"
import { Language } from "@/utils/strings/languages"

export type Tag = {
    name: keyof Language
    tailwindColor: string
}

const tags = {
    billable: {
        name: 'billable',
        tailwindColor: 'bg-green-300'
    } as Tag,
    current: {
        name: 'current',
        tailwindColor: 'bg-yellow-300'
    } as Tag,
    personal: {
        name: 'personal',
        tailwindColor: 'bg-purple-300'
    } as Tag,
    prototype: {
        name: 'prototype',
        tailwindColor: 'bg-pink-300'
    } as Tag,
    teamwork: {
        name: 'teamwork',
        tailwindColor: 'bg-red-300'
    } as Tag,
};

export type Project = {
    title: keyof Language
    body: keyof Language
    important: boolean
    aptitudes: string[]
    githubUrl?: string
    youtubeUrl?: string
    tags: Tag[]
}

export const projects = {
    famaf: {
        title: 'project_famaf_title',
        body: 'project_famaf_body',
        aptitudes: INTER_STRING.project_famaf,
        important: true,
        tags: [tags.billable,  tags.teamwork]
    } as Project,
    inweb: {
        title: 'project_inweb_title',
        body: 'project_inweb_body',
        aptitudes: INTER_STRING.project_inweb,
        important: true,
        tags: [tags.billable, tags.current,  tags.teamwork]
    } as Project,
    tmob: {
        title: 'project_tmob_title',
        body: 'project_tmob_body',
        aptitudes: INTER_STRING.project_tmob_apts,
        important: true,
        youtubeUrl: 'https://youtu.be/kW26LYynfwc',
        tags: [tags.billable]
    } as Project,
    tgeo: {
        title: 'project_tgeo_title',
        body: 'project_tgeo_body',
        aptitudes: INTER_STRING.project_tgeo_apts,
        important: true,
        tags: [tags.billable, tags.teamwork]
    } as Project,
    curriculum5: {
        title: 'project_curriculumweb5_title',
        body: 'project_curriculumweb5_body',
        aptitudes: INTER_STRING.project_curriculumweb5_apts,
        important: true,
        githubUrl: 'https://github.com/agusavior/curriculumweb5',
        tags: [tags.personal]
    } as Project,
    ips: {
        title: 'project_ips_prototype_title',
        body: 'project_ips_prototype_body',
        aptitudes: INTER_STRING.project_ips_prototype_apts,
        important: true,
        youtubeUrl: 'https://youtu.be/8b4pavgy24U',
        tags: [tags.prototype]
    } as Project,
    quickvorcio: {
        title: 'project_quickvorcio_title',
        body: 'project_quickvorcio_body',
        aptitudes: INTER_STRING.project_quickvorcio_apts,
        important: true,
        tags: [tags.billable, tags.teamwork]
    } as Project,
    tengoque: {
        title: 'project_tengoque_title',
        body: 'project_tengoque_body',
        aptitudes: INTER_STRING.project_tengoque_apts,
        important: true,
        githubUrl: 'https://github.com/agusavior/tengoquebot',
        tags: [tags.personal]
    } as Project,
    triangular: {
        title: 'project_traingular_arbitraje_title',
        body: 'project_traingular_arbitraje_body',
        aptitudes: INTER_STRING.project_traingular_arbitraje_apts,
        important: true,
        tags: [tags.billable]
    } as Project,
    kucoin: {
        title: 'project_kocoin_crawler_title',
        body: 'project_kocoin_crawler_body',
        aptitudes: INTER_STRING.project_kocoin_crawler_apts,
        important: true,
        tags: [tags.billable]
    } as Project,
    matitest: {
        title: 'project_matitest_title',
        body: 'project_matitest_body',
        aptitudes: INTER_STRING.project_matitest_apts,
        githubUrl: 'https://github.com/agusavior/matitest',
        important: false,
        tags: []
    } as Project,
    abochat: {
        title: 'project_abochat_title',
        body: 'project_abochat_body',
        aptitudes: INTER_STRING.project_abochat_apts,
        important: true,
        tags: [tags.billable, tags.teamwork]
    } as Project,
    dragondebate: {
        title: 'project_dragon_debate_title',
        body: 'project_dragon_debate_body',
        aptitudes: INTER_STRING.project_dragon_debate_apts,
        githubUrl: 'https://github.com/agusavior/dragon_debate',
        important: false,
        tags: []
    } as Project,
};