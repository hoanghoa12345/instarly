export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export function stripTrailingSlash(url: string): string {
  return url.replace(/\/$/, '')
}

export function mimeTypeToExtenstion() {
  // Convert mine type to extenstion
}

export function ext(filename: string): string {
  const re = /(?:\.([^.]+))?$/;
  return re.exec(filename)[1];
}