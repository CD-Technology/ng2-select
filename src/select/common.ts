export function escapeRegexp(queryToEscape:string):string {
  return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}

export function prepareRegexp(queryToEscape:string):string {
    let tmpRegex = queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    tmpRegex = queryToEscape.replace(' ', '|');
    return tmpRegex;
}