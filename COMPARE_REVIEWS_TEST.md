# Compare Reviews Test Fixture

This pull request is intentionally updated in two stages.

Stage 1 contains:

- a credential-like term;
- a temporary implementation marker.

After the first PullSight review is saved, stage 2 will:

- remove the credential-like pattern;
- keep the temporary marker;
- add a database query pattern.

The follow-up change is now prepared in the local clone but remains unpushed
until the first PullSight review is saved.

The expected rule-based comparison is:

- one resolved finding;
- one unchanged finding;
- one added finding.

All credentials and code paths in this fixture are fake test data.
