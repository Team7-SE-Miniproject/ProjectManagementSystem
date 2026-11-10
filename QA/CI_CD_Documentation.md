
# CI/CD Implementation

## Objective
To automate code validation and production build verification using GitHub Actions.

## Tools Used
- GitHub Actions
- Node.js
- npm
- ESLint
- Next.js

## Workflow
1. Developer pushes code to a QA branch.
2. GitHub Actions triggers automatically.
3. Dependencies are installed using npm ci.
4. ESLint checks code quality.
5. Next.js production build is verified.
6. Workflow results are displayed in GitHub Actions.

## Expected Outcome
Automated validation reduces manual testing effort and
helps identify code issues before merging pull requests.

## QA Contribution
Configured the CI workflow and documented the
automated validation process.

### Continuous Delivery (CD) Implementation

A Continuous Delivery stage was integrated into the existing GitHub Actions CI workflow.

After successful dependency installation, ESLint validation and Next.js production build, the workflow automatically uploads the generated production build and supporting files as a GitHub Actions artifact.

**Implementation details:**
- Tool: GitHub Actions
- Artifact action: `actions/upload-artifact@v4`
- Artifact name: `project-management-system-build`
- Artifact retention: 7 days
- Trigger: Push to configured branches and pull requests targeting `main`.

**Outcome:** The CI/CD workflow executed successfully, validating the application and generating a downloadable production build artifact for delivery and local deployment.
