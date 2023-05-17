/**
 * The function capitalize only the first letter of a string
 * @param str
 * @returns {string}
 */
export const capitalizeOnlyFirst = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  /**
 * Given a string the function capitalize the first letter of each word
 * @param str
 * @returns {string}
 */
export const capitalizeFirst = (str: string): string => {
 return  str.replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
}


