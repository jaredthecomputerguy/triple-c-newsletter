type LogInfo = {
  request: Request;
  url: URL;
  route: string;
  start: number;
  data: Record<string, unknown>;
};

export class Logger {
  constructor() {}

  /* eslint-disable no-console */
  static request(info: LogInfo) {
    const { request, url, route, start, data } = info;
    console.log(
      JSON.stringify({
        time: new Date().toISOString(),
        route,
        method: request.method,
        path: url.pathname,
        query_to: url.searchParams.get("to"),
        referer: request.headers.get("referer"),
        ua: request.headers.get("user-agent"),
        duration_ms: Date.now() - start,
        ip:
          // best-effort behind proxy
          request.headers.get("x-forwarded-for") ?? request.headers.get("cf-connecting-ip") ?? null,
        ...data
      })
    );
  }

  static log(message?: unknown, ...optionalParams: unknown[]) {
    console.log(message, ...optionalParams);
  }
  /* eslint-enable no-console */
}
