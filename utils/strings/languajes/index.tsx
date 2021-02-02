import spanish from './spanish'
import english from './english'
import german from './german'

type StringLanguageMap = { [index: string]: Language }

const languages: StringLanguageMap = {
    'es': spanish,
    'en': english,
    // 'de': german   TO-DO
};

export default languages;

export type Language = typeof spanish | typeof english | typeof german;