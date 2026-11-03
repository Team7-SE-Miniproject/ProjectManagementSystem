# Project Management System — Regression Testing Report

**Project:** Project Management System
**Sprint:** 2
**Issue:** QA-3
**Tester:** Prajwal
**Testing Type:** Regression Testing
**Status:** Execution Pending

## 1. Objective

Verify that existing functionality continues to work correctly after application changes and bug fixes.

## 2. Regression Test Cases

| Test ID | Feature | Test Scenario | Expected Result | Actual Result | Status |
|---|---|---|---|---|
| RT-01 | Authentication | Log in with valid credentials | User logs in and reaches dashboard | Pending | Not Run |
| RT-02 | Authentication | Log in with invalid credentials | Login rejected with appropriate error | Pending | Not Run |
| RT-03 | Authentication | Access protected page without login | Access denied or redirected to login | Pending | Not Run |
| RT-04 | Projects | Create a project with valid details | Project is created and displayed | Pending | Not Run |
| RT-05 | Projects | Edit existing project details | Changes are saved and displayed | Pending | Not Run |
| RT-06 | Projects | Delete a project | Project is removed according to requirements | Pending | Not Run |
| RT-07 | Tasks | Create a task in a project | Task is created under the correct project | Pending | Not Run |
| RT-08 | Tasks | Assign task to a team member | Correct assignee is displayed | Pending | Not Run |
| RT-09 | Tasks | Change task status | Updated status persists after refresh | Pending | Not Run |
| RT-10 | Tasks | Update task priority and deadline | Updated values are saved correctly | Pending | Not Run |
| RT-11 | User Profile | Update user profile | Updated information is saved | Pending | Not Run |
| RT-12 | Access Control | Attempt unauthorized operation | Operation is rejected | Pending | Not Run |
| RT-13 | Dashboard | Verify project progress | Progress reflects task completion | Pending | Not Run |
| RT-14 | Validation | Submit task with invalid deadline | Validation error is displayed | Pending | Not Run |

## 3. Test Execution Summary

| Metric           | Result |
| ---------------- | ------ |
| Total test cases | 14     |
| Passed           | 0      |
| Failed           | 0      |
| Blocked          | 0      |
| Not Run          | 14     |

*These are initial values. Update them after executing the tests.*

## 4. Defect Tracking

For each failed test, record:

* Defect ID
* Related test case
* Steps to reproduce
* Expected result
* Actual result
* Screenshot or other evidence
* Jira/GitHub issue link
* Retest result after the fix

## 5. Exit Criteria

Regression testing is complete when:

* All 14 test cases have been executed.
* All failures have been documented.
* Critical defects have been resolved and retested.
* Test results and supporting evidence have been recorded.
* The final regression summary has been updated.
