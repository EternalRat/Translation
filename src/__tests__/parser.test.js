import Translation from "../index";

test('Missing expected language', () => {
  const translation = new Translation();
  translation.addLanguage('en', {
    hello: 'Hello',
    world: 'World',
  });
  expect(translation.translate('hello')).toBe('__MISSING_TRANSLATION_hello');
});

test('Basic Test with only one language', () => {
  const translation = new Translation();
  translation.addLanguage('en', {
    hello: 'Hello',
    world: 'World',
  });
  translation.setLanguage('en');
  expect(translation.translate('hello')).toBe('Hello');
});

test('Basic Test with two languages', () => {
  const translation = new Translation();
  translation.addLanguage('en', {
    hello: 'Hello',
    world: 'World',
  });
  translation.addLanguage('fr', {
    hello: 'Bonjour',
    world: 'Monde',
  });
  translation.setLanguage('en');
  expect(translation.translate('hello')).toBe('Hello');
  translation.setLanguage('fr');
  expect(translation.translate('hello')).toBe('Bonjour');
});

test('Basic Test with two languages and missing translation', () => {
  const translation = new Translation();
  translation.addLanguage('en', {
    hello: 'Hello',
    world: 'World',
  });
  translation.addLanguage('fr', {
    hello: 'Bonjour',
  });
  translation.setLanguage('en');
  expect(translation.translate('hello')).toBe('Hello');
  translation.setLanguage('fr');
  expect(translation.translate('hello')).toBe('Bonjour');
  expect(translation.translate('world')).toBe('__MISSING_TRANSLATION_world');
});

test('Basic Test with two languages and missing translation and default language and missing default translation', () => {
  const translation = new Translation();
  translation.addLanguage('en', {
    hello: 'Hello',
  });
  translation.addLanguage('fr', {
    hello: 'Bonjour',
  });
  expect(translation.currentLanguage).toBe('fr');
  translation.setLanguage('fr');
  expect(translation.currentLanguage).toBe('fr');
  expect(translation.defaultLanguage).toBe('fr');
  expect(translation.allLanguages).toContain('fr');
  expect(translation.allLanguages).toContain('en');
  expect(translation.translate('hello')).toBe('Bonjour');
  expect(translation.translate('world')).toBe('__MISSING_TRANSLATION_world');
});