const crypto = require('crypto');

const FALLBACK_WEBHOOK_SECRET = 'test_secret_do_not_use_in_production';

function verifyWebhookSignature(payload, signatureHeader) {
  const secret = process.env.WEBHOOK_SECRET || FALLBACK_WEBHOOK_SECRET;
  const signature = crypto.createHmac('sha256', secret).update(payload).digest('hex');

  return signatureHeader === signature;
}

function handleWebhook(request) {
  if (!verifyWebhookSignature(request.body, request.headers['x-hub-signature-256'])) {
    return {
      status: 401,
      body: { message: 'Invalid signature' },
    };
  }

  const event = JSON.parse(request.body);

  return {
    status: 200,
    body: {
      action: event.action,
      repository: event.repository.full_name,
    },
  };
}

module.exports = {
  handleWebhook,
  verifyWebhookSignature,
};
