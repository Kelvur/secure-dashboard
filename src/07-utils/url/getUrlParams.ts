
function getUrlParams(urlString: string): URLSearchParams {
  const url = new URL(urlString);
  return url.searchParams;
}

export default getUrlParams;
