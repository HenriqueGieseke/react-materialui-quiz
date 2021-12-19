const replaceCharacters = (string) => {
  const newString = string
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&eacute;/g, 'é')
    .replace(/&amp;/g, '&')
    .replace(/&ldquo;/g, '´´')
    .replace(/&hellip;/g, '...')
    .replace(/&rdquo;/g, '``')
    .replace(/&ndash;/g, '-')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&rsquo;/, '´')
    .replace(/&lsquo;/, '`')
    .replace(/&shy;/, '-');

  return newString;
};

export { replaceCharacters };
