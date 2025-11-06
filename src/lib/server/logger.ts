/**
 * Simple server-side logger.
 * Replace with Sentry or Logtail later for production.
 */

export function logInfo(message: string, data?: any) {
  console.info(`[INFO] ${message}`, data || "");
}

export function logError(message: string, error?: any) {
  console.error(`[ERROR] ${message}`, error?.stack || error);
}

export function logEvent(event: string, meta?: any) {
  console.log(`[EVENT] ${event}`, meta || "");
}
