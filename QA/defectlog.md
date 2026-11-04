# DEFECT LOG
## Project Management System (PMS)

| Document Detail | Information |
|---|---|
| Document ID | PMS-QA-DEF-001 |
| Version | 1.0 |
| Prepared by | Nidhi Raghuraman |
| Role | QA / Test Lead |
| Date | 01 November 2026 |
| Status | Active – Awaiting Test Execution |

## 1. Purpose

The purpose of this document is to record, track and monitor defects identified during testing of the Project Management System.

It provides a centralized record of application issues and helps developers and testers coordinate defect resolution and verification.

## 2. Defect Tracking Register

No defects have been confirmed at the time of preparation. Defects will be added after actual test execution and reproduction.

| Defect ID | Related Test Case | Defect Description | Severity | Priority | Assigned To | Status |
|---|---|---|---|---|---|---|
| — | — | No confirmed defects recorded yet. | — | — | — | — |

## 3. Defect Severity Classification

| Severity | Description | Example |
|---|---|---|
| Critical | A major system failure or serious security vulnerability that prevents essential functionality or exposes protected data. | Unauthorized access to another user's protected project data. |
| High | An important feature is broken and has no acceptable workaround. | Registered users cannot log in. |
| Medium | A feature behaves incorrectly but the impact is limited or a workaround exists. | Task priority does not update correctly. |
| Low | A minor issue with limited impact on functionality. | Incorrect spacing or alignment on a dashboard. |

## 4. Defect Priority Classification

| Priority | Description |
|---|---|
| P1 – Urgent | Requires immediate investigation and resolution. |
| P2 – High | Should be resolved before the affected feature is accepted. |
| P3 – Medium | Should be fixed in the current or upcoming development cycle. |
| P4 – Low | Can be addressed when resources are available. |

Severity measures the impact of a defect, whereas priority indicates how urgently it should be addressed.

## 5. Defect Life Cycle

The following workflow will be followed for defect management:

1. **New:** Tester identifies and reports a defect.
2. **Assigned:** Defect is assigned to the responsible developer.
3. **In Progress:** Developer investigates and implements a fix.
4. **Fixed:** Developer submits the correction for review.
5. **Retest:** QA verifies the corrected functionality.
6. **Closed:** QA confirms that the defect is resolved.
7. **Reopened:** QA identifies that the issue still exists after the fix.

A defect may also be marked Rejected or Deferred if the team establishes that it is not a valid defect or approves postponing its resolution.

## 6. Defect Reporting Template

Every confirmed defect must include the following information:

| Field | Description |
|---|---|
| Defect ID | Unique identifier, such as BUG-001 |
| Defect Title | Short description of the issue |
| Related Test Case | Test case that identified the defect |
| Requirement ID | Related SRS requirement |
| Build / Commit | Version or commit being tested |
| Environment | Browser, operating system and application environment |
| Preconditions | Conditions required before reproducing the issue |
| Steps to Reproduce | Exact steps to reproduce the defect |
| Expected Result | Correct expected behaviour |
| Actual Result | Behaviour observed during testing |
| Severity | Critical / High / Medium / Low |
| Priority | P1 / P2 / P3 / P4 |
| Screenshot / Logs | Supporting evidence |
| Assigned Developer | Person responsible for fixing the issue |
| Retest Result | Result after the fix is tested |
| Final Status | Open / In Progress / Fixed / Closed / Reopened |

## 7. Defect Resolution and Verification

1. The tester reports the issue with reproducible steps and evidence.
2. The QA Lead reviews the defect and confirms its severity and priority.
3. The defect is assigned to the relevant developer.
4. The developer investigates and fixes the issue using a separate Git branch.
5. The developer raises a Pull Request containing the correction.
6. The code is reviewed and merged after required checks.
7. QA retests the original scenario.
8. Relevant regression tests are performed to ensure that the correction has not affected other functionality.
9. The defect log and associated test execution records are updated.

## 8. Reporting Metrics

The following metrics will be calculated after testing begins.

| Metric | Value |
|---|---|
| Total defects identified | To be updated |
| Critical defects | To be updated |
| High-severity defects | To be updated |
| Medium-severity defects | To be updated |
| Low-severity defects | To be updated |
| Open defects | To be updated |
| Fixed defects | To be updated |
| Closed defects | To be updated |
| Reopened defects | To be updated |

Defect closure rate will be calculated as:

Defect Closure Rate = (Number of Closed Defects / Total Confirmed Defects) × 100

## 9. Maintenance

The QA/Test Lead will maintain this document throughout the project lifecycle. Every defect must be linked to its corresponding test case and, where applicable, its Jira or GitHub issue.

The defect log will be reviewed during sprint reviews and updated after defect verification.

**Prepared by:** Nidhi Raghuraman  
**Designation:** QA / Test Lead  
**Project:** Project Management System – Team 7
