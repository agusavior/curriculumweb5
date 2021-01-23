import languages, { Language } from 'assets/strings/languajes';
import spanish from 'assets/strings/languajes/spanish';
import { useState } from 'react';
import { createContextFromArrow } from '.';

const defaultLanguage: Language = spanish;

export const [useLanguageContext, LanguageContextProvider] = createContextFromArrow(() => {
    const [lng, setLng] = useState<Language>(defaultLanguage);

    function setLngByLangId(langId: string) {
        console.log('lenguage camadio')
        setLng(languages[langId])
    }

    return { lng, setLngByLangId, setLng }
})