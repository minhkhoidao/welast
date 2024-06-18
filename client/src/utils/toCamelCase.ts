/**
 * Converts a string to camel case.
 * @param {string} str - The string to convert.
 * @returns {string} The converted string.
 */
const toCamelCase = (str: string): string => {
  return str.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
};

/**
 * Transforms the keys of an object to camel case.
 * @param {T} obj - The object whose keys are to be transformed.
 * @returns {Record<string, unknown>} The object with transformed keys.
 */
export const transformKeysToCamelCase = (obj: any) => {
  let output = {} as any;
  for (let i in obj) {
    if (typeof obj[i] === "object" && obj[i] !== null) {
      output[toCamelCase(i)] = transformKeysToCamelCase(obj[i]);
    } else {
      output[toCamelCase(i)] = obj[i];
    }
  }
  return output;
};
