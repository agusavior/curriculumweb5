import languages, { Language } from 'utils/strings/languajes';
import spanish from 'utils/strings/languajes/spanish';
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