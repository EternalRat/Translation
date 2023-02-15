import Parser from './parser/parser';

interface Language {
    language: string;
    allTranslations: Record<string, string>;
}

/**
 * @class Translation
 * @description A class that handles translations
 * @example
 * const translation = new Translation();
 * translation.addLanguage('en', {
 *  'hello': 'Hello',
 * 'hello_name': 'Hello %s',
 * });
 * translation.addLanguage('fr', {
 * 'hello': 'Bonjour',
 * 'hello_name': 'Bonjour %s',
 * });
 * translation.setLanguage('en');
 * console.log(translation.translate('hello')); // Hello
 * console.log(translation.translate('hello_name', 'John')); // Hello John
 * translation.setLanguage('fr');
 * console.log(translation.translate('hello')); // Bonjour
 * console.log(translation.translate('hello_name', 'John')); // Bonjour John
 */
export default class Translation {
    private _defaultLanguage: string = 'fr';
    private _currentLanguage: string;
    private _allTranslations: Language[] = [];
    private _parserInstance: Parser;

    /**
     * @constructor
     * @description Creates a new Translation instance
     * @returns {Translation} The new Translation instance
     * @example
     * const translation = new Translation();
     * translation.addLanguage('en', {
     *    'hello': 'Hello',
     *   'hello_name': 'Hello %s',
     * });
     * translation.addLanguage('fr', {
     *   'hello': 'Bonjour',
     *  'hello_name': 'Bonjour %s',
     * });
     * translation.setLanguage('en');
     * console.log(translation.translate('hello')); // Hello
     * console.log(translation.translate('hello_name', 'John')); // Hello John
     * translation.setLanguage('fr');
     * console.log(translation.translate('hello')); // Bonjour
     * console.log(translation.translate('hello_name', 'John')); // Bonjour John
     * console.log(translation.translate('hello_name', 'John', 'Doe')); // Bonjour John Doe
     * console.log(translation.translate('hello_name')); // Bonjour %s
     * console.log(translation.translate('hello_name', 'John', 'Doe', 'Foo')); // Bonjour John Doe
     */
    constructor() {
        console.log('Translation set to default language: ' + this._defaultLanguage);
        this._currentLanguage = this._defaultLanguage;
        this._parserInstance = new Parser();
    }

    /**
     * Add a set of translations for a language
     * @param language {string} The language to add
     * @param translations {Record<string, string>} The translations for the language
     * @example
     * translation.addLanguage('en', {
     *   'hello': 'Hello',
     *  'hello_name': 'Hello %s',
     * });
     * translation.addLanguage('fr', {
     * 'hello': 'Bonjour',
     * 'hello_name': 'Bonjour %s',
     * });
     */
    public addLanguage(language: string, translations: Record<string, string>): void {
        console.log('Adding translation for language: ' + language);
        this._allTranslations.push({
            language,
            allTranslations: translations,
        });
    }

    /**
     * Set the current language
     * @param language {string} The language to set
     * @example
     * translation.setLanguage('en');
     * console.log(translation.translate('hello')); // Hello
     * console.log(translation.translate('hello_name', 'John')); // Hello John
     * translation.setLanguage('fr');
     * console.log(translation.translate('hello')); // Bonjour
     * console.log(translation.translate('hello_name', 'John')); // Bonjour John
     */
    public setLanguage(language: string): void {
        console.log('Setting language to: ' + language);
        this._currentLanguage = language;
    }

    /**
     * Translate a string
     * @param toTranslate {string} The string to translate
     * @param args {any} The arguments to parse into the string
     * @returns {string} The translated string
     * @example
     * console.log(translation.translate('hello')); // Bonjour
     * console.log(translation.translate('hello_name', 'John')); // Bonjour John
     * console.log(translation.translate('hello_name', 'John', 'Doe')); // Bonjour John Doe
     * console.log(translation.translate('hello_name')); // Bonjour %s
     * console.log(translation.translate('hello_name', 'John', 'Doe', 'Foo')); // Bonjour John Doe
     */
    public translate(toTranslate: string, ...args: any): string {
        try {
            const translatedString = this._allTranslations.find(
                translation => translation.language === this._currentLanguage
            )!.allTranslations[toTranslate];
            if (translatedString === undefined) {
                return '__MISSING_TRANSLATION_' + toTranslate;
            }
            return this._parserInstance.parse(
                translatedString,
                ...args
            );
        } catch (error) {
            console.error('Error while translating: ' + error);
            return '__MISSING_TRANSLATION_' + toTranslate;
        }
    }

    /**
     * Get the current language
     * @returns {string} The current language
     * @example
     * console.log(translation.currentLanguage); // fr
     * translation.setLanguage('en');
     * console.log(translation.currentLanguage); // en
     */
    public get currentLanguage(): string {
        return this._currentLanguage;
    }

    /**
     * Get the default language
     * @returns {string} The default language
     * @example
     * console.log(translation.defaultLanguage); // fr
     * translation.setLanguage('en');
     * console.log(translation.defaultLanguage); // fr
     */
    public get defaultLanguage(): string {
        return this._defaultLanguage;
    }

    /**
     * Get all the languages
     * @returns {string[]} All the languages
     * @example
     * console.log(translation.allLanguages); // ['en', 'fr']
     * translation.setLanguage('en');
     * console.log(translation.allLanguages); // ['en', 'fr']
     * translation.addLanguage('de', {
     *  'hello': 'Hallo',
     * 'hello_name': 'Hallo %s',
     * });
     * console.log(translation.allLanguages); // ['en', 'fr', 'de']
     */
    public get allLanguages(): string[] {
        return this._allTranslations.map(translation => translation.language);
    }
}
