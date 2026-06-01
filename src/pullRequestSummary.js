const severityWeights = {
  critical: 4,
  high: 3,
  medium: 2,
  low: 1,
};

function summarizePullRequest(pullRequest) {
  const findings = Array.isArray(pullRequest.findings) ? pullRequest.findings : [];
  const weightedRisk = findings.reduce((total, finding) => {
    return total + (severityWeights[finding.severity] ?? 0);
  }, 0);

  return {
    number: pullRequest.number,
    title: pullRequest.title,
    findingCount: findings.length,
    riskScore: Math.min(100, weightedRisk * 12),
    hasBlockingFindings: findings.some((finding) => finding.severity === 'critical'),
  };
}

module.exports = {
  summarizePullRequest,
};
