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
    private _defaultLanguage;
    private _currentLanguage;
    private _allTranslations;
    private _parserInstance;
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
    constructor();
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
    addLanguage(language: string, translations: Record<string, string>): void;
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
    setLanguage(language: string): void;
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
    translate(toTranslate: string, ...args: any): string;
    /**
     * Get the current language
     * @returns {string} The current language
     * @example
     * console.log(translation.currentLanguage); // fr
     * translation.setLanguage('en');
     * console.log(translation.currentLanguage); // en
     */
    get currentLanguage(): string;
    /**
     * Get the default language
     * @returns {string} The default language
     * @example
     * console.log(translation.defaultLanguage); // fr
     * translation.setLanguage('en');
     * console.log(translation.defaultLanguage); // fr
     */
    get defaultLanguage(): string;
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
    get allLanguages(): string[];
}
