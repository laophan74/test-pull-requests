const { summarizePullRequest } = require('./pullRequestSummary');

const summary = summarizePullRequest({
  number: 42,
  title: 'Add checkout flow',
  findings: [
    { severity: 'high' },
    { severity: 'medium' },
    { severity: 'low' },
  ],
});

if (summary.findingCount !== 3) {
  throw new Error('Expected all findings to be counted.');
}

if (summary.riskScore !== 72) {
  throw new Error(`Expected risk score 72, received ${summary.riskScore}.`);
}

if (summary.hasBlockingFindings) {
  throw new Error('Expected no blocking findings without critical severity.');
}
