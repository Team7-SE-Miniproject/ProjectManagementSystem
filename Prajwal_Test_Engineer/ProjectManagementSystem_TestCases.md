# Project Management System — Test Cases

**Prepared by:** Prajwal
**Role:** Test Engineer
**Project:** Project Management System
**Source:** Software Requirements Specification (SRS)
**Status:** Prepared; execution pending application availability

| Test ID | Requirement ID | Test Scenario                               | Test Steps                                                                     | Expected Result                                                                        | Actual Result | Status  |
| ------- | -------------- | ------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ------------- | ------- |
| TC-01   | PMS-F-001      | Login with valid credentials                | Enter valid registered credentials and click Login                             | User is authenticated and redirected to the dashboard                                  | Not tested    | Not Run |
| TC-02   | PMS-F-001      | Login with invalid credentials              | Enter an incorrect password and click Login                                    | Login is rejected and an appropriate error message is displayed                        | Not tested    | Not Run |
| TC-03   | PMS-SR-002     | Access protected page without login         | Open a protected URL without logging in                                        | Access is denied or user is redirected to login                                        | Not tested    | Not Run |
| TC-04   | PMS-F-003      | Create a project                            | Log in as an authorized administrator, enter valid project details, and submit | Project is saved and displayed in the project list                                     | Not tested    | Not Run |
| TC-05   | PMS-F-003      | Create project with missing required fields | Leave a required project field empty and submit                                | Validation message is displayed and project is not created                             | Not tested    | Not Run |
| TC-06   | PMS-F-005      | Create a task                               | Log in as an authorized project manager and enter valid task details           | Task is created and associated with the correct project                                | Not tested    | Not Run |
| TC-07   | PMS-F-006      | Assign task to a valid member               | Select a valid project member and assign the task                              | Task is assigned to the selected member                                                | Not tested    | Not Run |
| TC-08   | PMS-F-008      | Update task status                          | Change task status and reload the page                                         | Updated status is saved and displayed correctly                                        | Not tested    | Not Run |
| TC-09   | PMS-F-009      | Set task priority and deadline              | Select a valid priority and deadline, then save                                | Priority and deadline are saved and displayed correctly                                | Not tested    | Not Run |
| TC-10   | PMS-F-002      | Update user profile                         | Modify permitted profile information and save                                  | Updated profile information is saved and displayed                                     | Not tested    | Not Run |
| TC-11   | PMS-SR-004     | Verify role-based access control            | Log in with a role that lacks permission and attempt a restricted operation    | Unauthorized operation is rejected                                                     | Not tested    | Not Run |
| TC-12   | PMS-F-015      | Verify project progress                     | Complete project tasks and inspect project progress                            | Progress reflects completed tasks according to the implemented calculation             | Not tested    | Not Run |
| TC-13   | PMS-NF-001     | Verify response time                        | Measure response time for representative normal requests                       | Requests meet the specified 3-second response-time target under agreed test conditions | Not tested    | Not Run |
| TC-14   | PMS-F-005      | Create task with invalid deadline           | Enter a deadline earlier than the permitted date and submit                    | Invalid deadline is rejected with a validation message                                 | Not tested    | Not Run |
| TC-15   | PMS-F-006      | Assign task without selecting a member      | Attempt to assign a task without selecting a member                            | Validation message is displayed and task assignment is not completed                   | Not tested    | Not Run |

