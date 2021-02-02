import languages, { Language } from 'utils/strings/languajes';
import { useState } from 'react';
import { createContextFromArrow } from '.';
import english from 'utils/strings/languajes/english';

const defaultLanguage: Language = english;

export const [useLanguageContext, LanguageContextProvider] = createContextFromArrow(() => {
    const [lng, setLng] = useState<Language>(defaultLanguage);

    function setLngByLangId(langId: string) {
        console.log('lenguage camadio')
        setLng(languages[langId])
    }

    return { lng, setLngByLangId, setLng }
})