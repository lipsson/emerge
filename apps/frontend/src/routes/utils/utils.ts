export const hasParams = (url: string): boolean => {
  if (url) {
    const queryString = url.split("?")[1];
    return queryString
      ? new URLSearchParams(queryString).toString().length > 0
      : false;
  }
  return false;
};

export function removeLastSlash(pathname: string): string {
  /**
   * Remove last slash
   * [1]
   * @input  = '/dashboard/calendar/'
   * @output = '/dashboard/calendar'
   * [2]
   * @input  = '/dashboard/calendar'
   * @output = '/dashboard/calendar'
   */
  if (pathname !== "/" && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export function removeParams(url: string): string {
  try {
    const urlObj = new URL(url, window.location.origin);

    return removeLastSlash(urlObj.pathname);
  } catch (error) {
    return url;
  }
}

export function isExternalLink(url: string): boolean {
  if (url) return url?.startsWith("http");
  return false;
}
