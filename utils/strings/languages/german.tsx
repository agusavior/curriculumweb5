import english from './english'

const german = {

    code: 'de',
    
    /** TO-DO */
}

// Use, german, and if something is not defined in german, then, use english.
export default {...english, ...german}