# Webhook Risk Notes

This branch intentionally includes patterns that a review tool should flag:

- A fallback webhook secret is hard-coded for local testing.
- Signature comparison uses a direct string equality check.
- JSON parsing assumes the payload shape is always valid.

These examples are synthetic and should not be copied into production code.
