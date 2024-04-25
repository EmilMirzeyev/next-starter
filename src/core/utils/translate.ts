export const t = (key: string, dynamic: any = null) => {
  if (!!dynamic) {
    const regex = /{{(.*?)}}/g;
    const matches = Array.from(key.matchAll(regex));

    const variables = matches.map((match) => {
      const variableName = match[1];
      const variableValue = dynamic[variableName];
      return variableValue !== undefined ? variableValue : match[0];
    });

    key = key.replace(regex, () => variables.shift() || "");
  }
  return key;
};
