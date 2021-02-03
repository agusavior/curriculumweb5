import { useLanguageContext } from "@/contexts/LanguajeContext";
import languages from "utils/strings/languajes";
import { StringStringMap } from "utils/customTypes";

export default function() {
    const { lng, setLngByLangId } = useLanguageContext()

    const fromLangIdToStringResource: StringStringMap = {
        'es': lng.spanish,
        'en': lng.english,
        'de': lng.german
    }

    return (
    <div className='p-2 py-4'>
        <p className='mr-4 inline'>{lng.language}: </p>
        <div className='inline border-2 border-pagebackground hover:border-primary'>
            <select
                className=''
                defaultValue={lng.code} 
                onChange={(e) => setLngByLangId(e.target.value)} 
            >
            {
                Object.keys(languages).map(langId =>
                    <option key={langId} value={langId}>{fromLangIdToStringResource[langId]}</option>
                )
            }
            </select>
        </div>
    </div>

    )
}