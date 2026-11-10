# Project Management System — Functional Test Cases

**Prepared by:** Prajwal
**Role:** Test Engineer
**Story ID:** QA-2
**Sprint:** 2
**Story Points:** 5
**Project:** Project Management System
**Status:** Prepared; execution pending application availability

## 1. Objective

To verify the functional correctness of authentication, project management, and task management features, including input validation, error handling, and access control.

## 2. Test Cases

| Test ID | Requirement ID | Test Scenario                               | Test Steps                                                                | Expected Result                                                             | Actual Result | Status  |
| ------- | -------------- | ------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------- | ------- |
| TC-01   | PMS-F-001      | Login with valid credentials                | Enter valid registered credentials and click Login.                       | User is authenticated and redirected to the dashboard.                      | Not tested    | Not Run |
| TC-02   | PMS-F-001      | Login with invalid credentials              | Enter an incorrect password and click Login.                              | Login is rejected and an appropriate error message is displayed.            | Not tested    | Not Run |
| TC-03   | PMS-SR-002     | Access protected page without login         | Open a protected URL without logging in.                                  | Access is denied or the user is redirected to the login page.               | Not tested    | Not Run |
| TC-04   | PMS-F-003      | Create a project                            | Log in as an authorized user, enter valid project details, and submit.    | Project is saved and displayed in the project list.                         | Not tested    | Not Run |
| TC-05   | PMS-F-003      | Create project with missing required fields | Leave required project fields empty and submit.                           | Validation errors are displayed and the project is not created.             | Not tested    | Not Run |
| TC-06   | PMS-F-004      | View project details                        | Select an existing project from the project list.                         | Correct project details are displayed.                                      | Not tested    | Not Run |
| TC-07   | PMS-F-004      | Update project details                      | Edit an existing project's permitted details and save.                    | Updated project information is saved and displayed.                         | Not tested    | Not Run |
| TC-08   | PMS-F-005      | Create a task                               | Open a project, enter valid task details, and submit.                     | Task is created and associated with the correct project.                    | Not tested    | Not Run |
| TC-09   | PMS-F-006      | Assign task to a project member             | Select a valid project member and assign the task.                        | Task is assigned to the selected member.                                    | Not tested    | Not Run |
| TC-10   | PMS-F-008      | Update task status                          | Change a task's status and reload the page.                               | Updated status is saved and displayed correctly.                            | Not tested    | Not Run |
| TC-11   | PMS-F-009      | Set task priority and deadline              | Select a valid priority and deadline, then save.                          | Priority and deadline are saved and displayed correctly.                    | Not tested    | Not Run |
| TC-12   | PMS-F-005      | Create task with invalid deadline           | Enter a deadline earlier than the permitted date and submit.              | Invalid deadline is rejected with a validation message.                     | Not tested    | Not Run |
| TC-13   | PMS-SR-004     | Verify role-based access control            | Log in with a role lacking permission and attempt a restricted operation. | Unauthorized operation is rejected.                                         | Not tested    | Not Run |
| TC-14   | PMS-F-015      | Verify project progress                     | Complete project tasks and inspect project progress.                      | Progress reflects completed tasks according to the implemented calculation. | Not tested    | Not Run |

## 3. Execution Summary

| Metric           | Count |
| ---------------- | ----: |
| Total test cases |    14 |
| Passed           |     0 |
| Failed           |     0 |
| Blocked          |     0 |
| Not Run          |    14 |

**Note:** All test cases are prepared. Execution is pending application availability. Actual results and statuses will be updated after testing..
