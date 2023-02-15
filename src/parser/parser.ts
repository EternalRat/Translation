import { sprintf } from 'sprintf-js';

/**
 * This class is used to parse strings
 * @example
 * const parser = new Parser();
 * const parsed = parser.parse('Hello %s', 'John');
 * console.log(parsed); // Hello John
 * const parsed2 = parser.parse('Hello %s %s', 'John', 'Doe');
 * console.log(parsed2); // Hello John Doe
 */
export default class Parser {
    constructor() {
        console.log('Parser element created');
    }

    /**
     *
     * @param toParse {string} The original string that needs to be parsed
     * @param args {any} The arguments that need to be parsed into the string
     * @returns {string} The parsed string
     * @example
     * const parser = new Parser();
     * const parsed = parser.parse('Hello %s', 'John');
     * console.log(parsed); // Hello John
     * const parsed2 = parser.parse('Hello %s %s', 'John', 'Doe');
     * console.log(parsed2); // Hello John Doe
     * const parsed3 = parser.parse('Hello %s %s', 'John');
     * console.log(parsed3); // Hello John %s
     * const parsed4 = parser.parse('Hello %s %s', 'John', 'Doe', 'Foo');
     * console.log(parsed4); // Hello John Doe
     */
    public parse(toParse: string, ...args: any): string {
        console.log('Parsing string: ' + toParse);
        const translated = sprintf(toParse, ...args);
        return translated;
    }
}
