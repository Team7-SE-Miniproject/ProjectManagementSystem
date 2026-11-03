# SOFTWARE TEST STRATEGY
## Project Management System (PMS)

| Document Detail | Information |
|---|---|
| Project | Project Management System |
| Document ID | PMS-QA-STR-001 |
| Version | 1.0 |
| Prepared by | Nidhi Raghuraman |
| Role | QA / Test Lead |
| Team | Team 7 |
| Date | 26th October 2026 |
| Status | Draft – Pending Team Review |

---

## 1. Introduction

### 1.1 Purpose

The purpose of this document is to define the testing strategy for the Project Management System (PMS). It establishes the approach, testing levels, testing types, resources, responsibilities and completion criteria required to verify that the application meets its Software Requirements Specification (SRS).

The strategy aims to identify defects early, verify functional correctness, ensure secure access to application features and maintain the reliability of project and task data.

### 1.2 Project Overview

The Project Management System is a web-based application designed to help users manage projects, team members and tasks. It provides functionality for user authentication, project creation, task assignment, task status tracking, priority and deadline management, and project progress monitoring.

### 1.3 Testing Objectives

- Verify that all implemented features satisfy their corresponding SRS requirements.
- Identify functional and integration defects before release.
- Verify authentication and role-based authorization.
- Ensure that project and task information is stored and retrieved consistently.
- Validate application performance against documented requirements.
- Verify usability and appropriate error handling.
- Establish automated testing and continuous integration practices.

## 2. Scope of Testing

### 2.1 Features Included

| Module | Features |
|---|---|
| Authentication | User registration, login and logout |
| User Management | Profile viewing and updating |
| Project Management | Project creation, viewing and updating |
| Project Membership | Adding members and controlling project visibility |
| Task Management | Task creation and viewing |
| Task Assignment | Assigning tasks to valid project members |
| Task Tracking | Updating and viewing task status |
| Priority and Deadline | Setting and updating task priority and deadlines |
| Progress Monitoring | Calculating and displaying project progress |
| Security | Authentication, authorization and role-based access |

### 2.2 Features Excluded

- Internal testing of third-party software.
- Operating system and hardware functionality unrelated to PMS.
- Features not specified in the approved SRS unless formally included through change control.

## 3. Testing Levels

| Testing Level | Description | Expected Evidence |
|---|---|---|
| Unit Testing | Tests individual functions and components independently. | Automated unit test results |
| Integration Testing | Verifies interactions between frontend, API, business logic and PostgreSQL. | API responses and database verification |
| System Testing | Tests complete application workflows from the user's perspective. | Test execution records and screenshots |
| Acceptance Testing | Checks whether implemented functionality satisfies SRS acceptance criteria. | Requirement-linked test results |

## 4. Types of Testing

| Testing Type | Objective | Example |
|---|---|---|
| Functional Testing | Verify expected application behaviour. | Registering and logging in |
| Negative Testing | Verify handling of invalid inputs. | Logging in with an incorrect password |
| Security Testing | Identify unauthorized access and permission issues. | Accessing a protected page without login |
| Regression Testing | Ensure changes do not break existing functionality. | Rechecking login after authentication changes |
| Performance Testing | Measure response times under defined conditions. | Checking whether normal requests meet the 3-second target |
| Data Consistency Testing | Verify correct storage and retrieval of information. | Updating task status and refreshing the page |
| Usability Testing | Check clarity of navigation, labels and feedback. | Verifying validation messages on forms |
| Concurrent-use Testing | Observe behaviour when multiple users perform operations. | Multiple users accessing projects simultaneously |

## 5. Testing Environment

| Component | Planned Environment |
|---|---|
| Operating System | Windows / Linux / macOS |
| Frontend | Next.js |
| Backend | Node.js / Next.js route handlers |
| Database | PostgreSQL |
| Browser | Google Chrome and other supported modern browsers |
| Version Control | Git and GitHub |
| Project Tracking | Jira |
| CI/CD | GitHub Actions |
| API Testing | Postman or equivalent API client |
| Automated Testing | Testing framework selected based on the existing repository |
| Coverage | Framework-compatible code coverage tool |

The exact runtime, framework versions and test commands will be confirmed from the repository before automated test execution.

## 6. Test Data

Testing will use dummy data and accounts representing the supported user roles.

Planned test data includes:

- Valid and invalid registration details.
- Existing and duplicate email addresses.
- Valid and invalid login credentials.
- Users with different application roles.
- Projects with valid and invalid details.
- Tasks with different statuses and priorities.
- Valid and invalid deadlines.
- Project memberships and task assignments.

Real credentials, passwords, access tokens and database secrets must not be included in the repository or screenshots.

## 7. Entry Criteria

Testing can begin when:

1. A testable application build or feature branch is available.
2. Required dependencies are installed.
3. Database configuration is available.
4. Relevant requirements and acceptance criteria are documented.
5. Test accounts and dummy data are prepared.
6. Test cases are reviewed and ready for execution.
7. The build or commit under test is identified.

## 8. Exit Criteria

Testing will be considered complete when:

1. All planned test cases have been executed, or remaining cases are explicitly marked Blocked or Not Run with reasons.
2. All high-priority requirements have linked test coverage and recorded implementation/test status.
3. No unresolved critical defect is concealed or left undocumented.
4. Failed tests have corresponding defect records.
5. Applicable regression tests have been executed after fixes.
6. The Requirements Traceability Matrix is updated.
7. Test reports and execution evidence are maintained.

The target is 100% execution of planned test cases. Any deviation must be documented honestly.

## 9. Defect Management Strategy

Defects identified during testing will be recorded in the defect log.

Each defect must contain:

- Defect ID and title.
- Related requirement and test case.
- Build or commit identifier.
- Environment and preconditions.
- Steps to reproduce.
- Expected and actual results.
- Severity and priority.
- Screenshot or relevant logs.
- Assigned developer.
- Retest result and final status.

The developer investigates and fixes the defect through a separate branch and Pull Request. QA verifies the correction and performs relevant regression testing before closure.

## 10. Roles and Responsibilities

| Role | Responsibility |
|---|---|
| QA / Test Lead – Nidhi Raghuraman | Own testing strategy, RTM, QA documentation, test coordination, review and reporting. |
| Test Engineer – Prajwal R | Assist with test case execution, evidence collection, defect reporting and retesting. |
| Developer – Prabhanjana P Hegde | Implement application features, fix defects and provide testable builds. |
| Project Manager – Padarthi Seshank | Maintain sprint backlog, coordinate team activities and track dependencies. |

## 11. Risks and Mitigation

| Risk | Mitigation |
|---|---|
| Application build is incomplete | Prioritize testing of available features and document blockers. |
| Database connection failure | Verify PostgreSQL configuration before integration testing. |
| Requirements differ from implementation | Record deviations and obtain team agreement. |
| Insufficient test coverage | Maintain RTM and prioritize high-risk requirements. |
| Defects remain unresolved | Track defects with severity, ownership and retest status. |
| CI pipeline failures | Align automated checks with the actual project scripts and dependencies. |
| Inadequate testing time | Prioritize authentication, authorization and core project/task workflows. |

## 12. Deliverables

The QA team will maintain the following deliverables:

1. Software Test Strategy / Test Plan.
2. Test Case Document.
3. Requirements Traceability Matrix.
4. Defect Log.
5. Test Execution Report.
6. Unit Test Report.
7. System Validation Report.
8. Code Coverage Report.
9. Branch Coverage Report.
10. Sprint QA Summary Report.

## 13. Approval

| Role | Name | Approval Status |
|---|---|---|
| QA / Test Lead | Nidhi Raghuraman | Prepared |
| Test Engineer | Prajwal R | Pending Review |
| Project Manager | Padarthi Seshank | Pending Review |

**Document Status:** Draft – Pending Team Review and Approval.
