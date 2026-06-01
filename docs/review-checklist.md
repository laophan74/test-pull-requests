# Review Checklist

Use this checklist to create realistic pull requests for PullSight testing.

## Before Opening A PR

- Keep the branch focused on one behavior change.
- Include a short description of the risk being tested.
- Add screenshots or sample input when the change affects UI behavior.

## Reviewer Prompts

- Does the change alter authentication or authorization behavior?
- Are external inputs validated before use?
- Are errors handled in a way that helps users recover?
- Are tests or examples updated with the behavior change?

## Test Notes

This repository intentionally keeps changes small so PullSight can quickly fetch repository and
pull request metadata from GitHub.
