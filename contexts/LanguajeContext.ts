import languages, { Language } from 'utils/strings/languages';
import { useState } from 'react';
import { createContextFromArrow } from '.';
import english from 'utils/strings/languages/english';

const defaultLanguage: Language = english;

export const [useLanguageContext, LanguageContextProvider] = createContextFromArrow(() => {
    const [lng, setLng] = useState<Language>(defaultLanguage);

    function setLngByLangId(langId: string) {
        setLng(languages[langId])
    }

    return { lng, setLngByLangId, setLng }
})