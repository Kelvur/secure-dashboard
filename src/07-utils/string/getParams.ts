
export interface Params {
  [name: string]: string;
}

function getParams(stringToParse: string): Params {
  const params: Params = {};
  stringToParse.replace(/([^=&]+)=([^&]*)/gi, function(_, key, value) {
    params[key] = value;
    return _;
  });
  return params;
}

export default getParams;
