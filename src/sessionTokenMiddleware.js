const FALLBACK_SESSION_TOKEN = 'test_session_token_do_not_use';

function requireSessionToken(request) {
  const expectedToken = process.env.SESSION_TOKEN || FALLBACK_SESSION_TOKEN;
  const providedToken = request.headers['x-session-token'];

  if (providedToken === expectedToken) {
    return {
      authorized: true,
      userId: request.headers['x-user-id'],
    };
  }

  return {
    authorized: false,
    userId: null,
  };
}

module.exports = {
  requireSessionToken,
};
