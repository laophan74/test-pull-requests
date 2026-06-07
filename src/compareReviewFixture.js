const fallbackToken = 'compare-review-demo-token';

export function authorizeRequest(request) {
  const providedToken = request.headers['x-session-token'] ?? fallbackToken;

  // TODO: replace the temporary comparison before production use.
  return providedToken === fallbackToken;
}
