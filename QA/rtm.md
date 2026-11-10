# REQUIREMENTS TRACEABILITY MATRIX (RTM)
## Project Management System (PMS)

| Document Detail | Information |
|---|---|
| Document ID | PMS-QA-RTM-001 |
| Version | 1.0 |
| Prepared by | Nidhi Raghuraman |
| Role | QA / Test Lead |
| Date | 26th October 2026 |
| Status | Prepared – Execution Pending |

## 1. Purpose

The Requirements Traceability Matrix establishes a relationship between the functional, non-functional and security requirements defined in the PMS SRS and their corresponding test cases.

It ensures that every requirement has an associated verification activity and helps identify requirements that are not yet covered by testing.

## 2. Traceability Matrix

### 2.1 Functional Requirements

| SRS Requirement ID | Requirement | Test Case ID(s) | Test Coverage Status |
|---|---|---|---|
| PMS-F-001 | User registration and login | TC-01, TC-02, TC-22 | Planned |
| PMS-F-002 | Profile management | TC-09 | Planned |
| PMS-F-003 | Administrator creates projects | TC-04 | Planned |
| PMS-F-004 | View authorized projects | TC-13 | Planned |
| PMS-F-005 | Project manager creates tasks | TC-05 | Planned |
| PMS-F-006 | Task manager assigns tasks | TC-06 | Planned |
| PMS-F-007 | View assigned tasks | TC-16 | Planned |
| PMS-F-008 | Update task status | TC-07 | Planned |
| PMS-F-009 | Task priority and deadline | TC-08 | Planned |
| PMS-F-010 | Display project progress | TC-12 | Planned |
| PMS-F-011 | Manage project details | TC-14 | Planned |
| PMS-F-012 | Add project members | TC-15 | Planned |
| PMS-F-013 | Project manager sets priority/deadline | TC-08, TC-10 | Planned |
| PMS-F-014 | View authorized task statuses | TC-16, TC-17 | Planned |
| PMS-F-015 | Progress based on completed tasks | TC-12 | Planned |

### 2.2 Non-Functional Requirements

| SRS Requirement ID | Requirement | Test Case ID(s) | Test Coverage Status |
|---|---|---|---|
| PMS-NF-001 | Performance | TC-11 | Planned |
| PMS-NF-002 | Authorization/security | TC-03, TC-10, TC-17 | Planned |
| PMS-NF-003 | Data consistency | TC-07, TC-18 | Planned |
| PMS-NF-004 | Concurrent use | TC-19 | Planned |
| PMS-NF-005 | Usability | TC-20 | Planned |

### 2.3 Security Requirements

| SRS Requirement ID | Requirement | Test Case ID(s) | Test Coverage Status |
|---|---|---|---|
| PMS-SR-001 | Project/task authorization | TC-10, TC-17 | Planned |
| PMS-SR-002 | Authentication before protected functions | TC-03 | Planned |
| PMS-SR-003 | Own-profile modification | TC-09 | Planned |
| PMS-SR-004 | Role-based access control | TC-10 | Planned |
| PMS-SR-005 | Protected communication | TC-21 | Planned |

## 3. Additional Proposed Test Cases

The following cases are added to improve coverage of requirements not addressed by the original 12 test cases.

| Test ID | Requirement ID | Test Scenario | Expected Result |
|---|---|---|---|
| TC-13 | PMS-F-004 | View projects as an authenticated user | Only projects the user is authorized to access are displayed. |
| TC-14 | PMS-F-011 | Update project details as an authorized administrator | Valid project changes are saved and unauthorized changes are rejected. |
| TC-15 | PMS-F-012 | Add a valid member to a project | Membership is saved and project visibility is updated accordingly. |
| TC-16 | PMS-F-007, PMS-F-014 | View assigned tasks and their statuses | Only permitted tasks and statuses are displayed. |
| TC-17 | PMS-NF-002, PMS-SR-001 | Access another project's resources through a direct URL/API request | Unauthorized access is rejected. |
| TC-18 | PMS-NF-003 | Verify project/task data consistency after updates | Related records remain valid and changes persist correctly. |
| TC-19 | PMS-NF-004 | Perform representative operations using multiple user sessions | No data corruption or significant degradation is observed under the agreed test conditions. |
| TC-20 | PMS-NF-005 | Verify usability of project and task workflows | Navigation, labels and validation/error messages are understandable. |
| TC-21 | PMS-SR-005 | Verify secure communication and secret handling | Deployed protected traffic uses HTTPS and secrets are not exposed in logs or committed files. |
| TC-22 | PMS-F-001 | Logout and attempt to access protected functionality | Session is terminated and protected functionality is inaccessible until re-authentication. |

## 4. Traceability Summary

| Category | Total Requirements | Mapped Requirements |
|---|---:|---:|
| Functional Requirements | 15 | 15 |
| Non-Functional Requirements | 5 | 5 |
| Security Requirements | 5 | 5 |
| **Total** | **25** | **25** |

## 5. Status Definitions

| Status | Meaning |
|---|---|
| Planned | Test case is mapped to a requirement but has not been executed. |
| Not Run | Test case is prepared but execution has not started. |
| Pass | Actual result matches the expected result. |
| Fail | Actual result does not match the expected result. |
| Blocked | Execution cannot proceed because of an unresolved dependency or environment issue. |

## 6. Important Notes

1. All 25 SRS requirements have at least one mapped test case.
2. TC-01 to TC-12 are the original test cases prepared for the project.
3. TC-13 to TC-22 are additional proposed cases to improve traceability.
4. All test cases are currently planned and must be executed against the actual application.
5. A mapped test case does not imply that the corresponding feature is implemented.
6. The RTM must be updated whenever requirements, test cases or implementation behaviour change.

**Prepared by:** Nidhi Raghuraman  
**Designation:** QA / Test Lead  
**Project:** Project Management System – Team 7
