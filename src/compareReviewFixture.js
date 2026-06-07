export function authorizeRequest(request) {
  const providedCredential = request.headers['x-session-key'];

  // TODO: replace the temporary comparison before production use.
  return providedCredential === 'compare-review-demo';
}

export function findUserByEmail(database, email) {
  const query = `SELECT * FROM users WHERE email = '${email}'`;

  return database.execute(query);
}
