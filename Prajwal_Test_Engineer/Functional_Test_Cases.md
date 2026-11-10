Project Management System — Functional Test Cases
Prepared by: Prajwal
Role: Test Engineer
Story ID: QA-2
Sprint: 2
Story Points: 5
Project: Project Management System
Status: Prepared; execution pending application availability  
1. Objective
To verify the functional correctness of authentication, project management, and task management features, including input validation, error handling, and access control.
2. Scope
- Login and logout behavior.
- Authentication validation and protected-page access.
- Project creation, viewing, updating, and deletion where supported.
- Task creation, viewing, assignment, updating, and deletion where supported.
- Task status, priority, and deadline handling.
- Project progress display.
- Role-based access and user-facing validation messages.
3. Test Environment and Preconditions
- The application must be available in the designated test environment.
- A registered user account with valid credentials is required.
- An account with restricted permissions is required for access-control checks.
- Existing project, task, and project-member test data should be available where needed.
- Use test data only; do not modify production records.
- Confirm the actual form fields, available roles, and supported operations before execution.
- Record the browser, environment, build/version, and execution date when testing begins.
- Ensure that test accounts are approved for QA use.
4. Test Case Conventions
- Priority High: Core functionality or access-control behavior.
- Priority Medium: Supporting validation or display behavior.
- Actual Result: Record the observed application behavior after execution.
- Status: Keep as Not Run until the test is actually performed.
- Requirement IDs marked TBD must be mapped to the approved requirements before execution.
- If the application is unavailable, retain the execution-pending status rather than marking tests as Passed or Failed.
5. Detailed Functional Test Cases
A. Authentication and Login
TC-01 — Login with valid credentials
- Requirement ID: PMS-F-001 | Priority: High
- Precondition: A registered account is available.
- Test Data: Valid registered username/email and password.
- Steps: Open login page → enter valid credentials → click Login → observe resulting page.
- Expected Result: User is authenticated and redirected to the dashboard.
- Actual Result: Not tested | Status: Not Run
TC-02 — Login with invalid credentials
- Requirement ID: PMS-F-001 | Priority: High
- Precondition: Login page is accessible.
- Test Data: Registered account identifier with an incorrect password.
- Steps: Open login page → enter incorrect password → click Login → observe response.
- Expected Result: Login is rejected and an appropriate error message is displayed.
- Actual Result: Not tested | Status: Not Run
TC-03 — Access protected page without login
- Requirement ID: PMS-SR-002 | Priority: High
- Precondition: User is logged out and a protected URL is known.
- Steps: Log out or open a fresh browser session → enter protected URL directly → observe response.
- Expected Result: Access is denied or the user is redirected to the login page.
- Actual Result: Not tested | Status: Not Run
TC-04 — Login with empty email or username
- Requirement ID: TBD | Priority: Medium
- Precondition: Login page is accessible.
- Steps: Leave the account identifier empty → enter a password → submit the form.
- Expected Result: Required-field validation is displayed and authentication does not proceed.
- Actual Result: Not tested | Status: Not Run
TC-05 — Login with empty password
- Requirement ID: TBD | Priority: Medium
- Precondition: Login page is accessible.
- Steps: Enter a valid account identifier → leave password empty → submit the form.
- Expected Result: Password validation is displayed and authentication does not proceed.
- Actual Result: Not tested | Status: Not Run
TC-06 — Login with both fields empty
- Requirement ID: TBD | Priority: Medium
- Precondition: Login page is accessible.
- Steps: Leave both account identifier and password empty → submit the form.
- Expected Result: Required-field feedback is displayed for the missing inputs.
- Actual Result: Not tested | Status: Not Run
TC-07 — Login with malformed email format
- Requirement ID: TBD | Priority: Medium
- Precondition: Login accepts an email address as the account identifier.
- Steps: Enter a malformed email value → enter a password → submit.
- Expected Result: Invalid format is rejected with understandable feedback.
- Actual Result: Not tested | Status: Not Run
TC-08 — Verify password field masking
- Requirement ID: TBD | Priority: Medium
- Precondition: Login page is accessible.
- Steps: Enter a password in the password field → observe the characters displayed.
- Expected Result: Password characters are masked by default.
- Actual Result: Not tested | Status: Not Run
TC-09 — Logout from an authenticated session
- Requirement ID: TBD | Priority: High
- Precondition: User is logged in.
- Steps: Open the account menu → select Logout → observe the resulting page.
- Expected Result: User is logged out and redirected according to the application flow.
- Actual Result: Not tested | Status: Not Run
TC-10 — Revisit protected page after logout
- Requirement ID: TBD | Priority: High
- Precondition: User has completed logout.
- Steps: Enter a previously accessible protected URL in the address bar.
- Expected Result: Protected content is not available until the user logs in again.
- Actual Result: Not tested | Status: Not Run
B. Project Management
TC-11 — Create a project
- Requirement ID: PMS-F-003 | Priority: High
- Precondition: User is logged in with project-creation permission.
- Test Data: Valid project details as required by the form.
- Steps: Open project section → select create project → enter valid details → submit → open project list.
- Expected Result: Project is saved and displayed in the project list.
- Actual Result: Not tested | Status: Not Run
TC-12 — Create project with missing required fields
- Requirement ID: PMS-F-003 | Priority: High
- Precondition: Project creation form is accessible.
- Steps: Open create-project form → leave required fields empty → submit → review validation.
- Expected Result: Validation errors are displayed and the project is not created.
- Actual Result: Not tested | Status: Not Run
TC-13 — View project details
- Requirement ID: PMS-F-004 | Priority: High
- Precondition: At least one accessible project exists.
- Steps: Log in → open project list → select an existing project → review details.
- Expected Result: Correct project details are displayed.
- Actual Result: Not tested | Status: Not Run
TC-14 — Update project details
- Requirement ID: PMS-F-004 | Priority: High
- Precondition: User has permission to edit an existing project.
- Steps: Open project → choose Edit → change permitted fields → save → reopen details.
- Expected Result: Updated project information is saved and displayed.
- Actual Result: Not tested | Status: Not Run
TC-15 — Create project with whitespace-only name
- Requirement ID: TBD | Priority: Medium
- Precondition: Project creation form is accessible.
- Steps: Enter spaces only in the required project-name field → complete other required fields → submit.
- Expected Result: Whitespace-only required value is rejected or handled according to documented validation.
- Actual Result: Not tested | Status: Not Run
TC-16 — Create project with excessively long name
- Requirement ID: TBD | Priority: Medium
- Precondition: Project creation form is accessible.
- Steps: Enter a project name longer than the documented maximum length → submit.
- Expected Result: Input is validated and the user receives clear feedback.
- Actual Result: Not tested | Status: Not Run
TC-17 — Cancel project creation
- Requirement ID: TBD | Priority: Medium
- Precondition: Project creation form is open.
- Steps: Enter some project details → select Cancel or close the form without saving.
- Expected Result: No new project is created.
- Actual Result: Not tested | Status: Not Run
TC-18 — Verify newly created project after refresh
- Requirement ID: TBD | Priority: High
- Precondition: A project was created successfully.
- Steps: Return to project list → refresh the page → locate the created project.
- Expected Result: The saved project remains visible after refresh.
- Actual Result: Not tested | Status: Not Run
TC-19 — Search for an existing project
- Requirement ID: TBD | Priority: Medium
- Precondition: Project search/filter is available and matching test data exists.
- Steps: Enter a known project name in the search control → submit or wait for filtering.
- Expected Result: Matching project records are displayed.
- Actual Result: Not tested | Status: Not Run
TC-20 — Search for a nonexistent project
- Requirement ID: TBD | Priority: Medium
- Precondition: Project search/filter is available.
- Steps: Search using a value that does not match any project.
- Expected Result: Empty-state feedback is displayed without an application error.
- Actual Result: Not tested | Status: Not Run
TC-21 — Verify project list empty state
- Requirement ID: TBD | Priority: Medium
- Precondition: Use an account or test environment with no visible projects.
- Steps: Open the project list.
- Expected Result: A clear empty-state message or guidance is displayed.
- Actual Result: Not tested | Status: Not Run
TC-22 — Attempt project update without permission
- Requirement ID: PMS-SR-004 | Priority: High
- Precondition: User can view but cannot edit the selected project.
- Steps: Log in as restricted user → open project → attempt an edit operation.
- Expected Result: Unauthorized update is rejected and project data remains unchanged.
- Actual Result: Not tested | Status: Not Run
C. Task Management
TC-23 — Create a task
- Requirement ID: PMS-F-005 | Priority: High
- Precondition: User can access an existing project.
- Test Data: Valid task details.
- Steps: Open project → open task form → enter valid details → submit → review task list.
- Expected Result: Task is created and associated with the correct project.
- Actual Result: Not tested | Status: Not Run
TC-24 — Assign task to a project member
- Requirement ID: PMS-F-006 | Priority: High
- Precondition: A task and valid project member are available.
- Steps: Open task details → select assignee → choose valid member → save → reopen task.
- Expected Result: Task is assigned to the selected member.
- Actual Result: Not tested | Status: Not Run
TC-25 — Update task status
- Requirement ID: PMS-F-008 | Priority: High
- Precondition: An existing task is available for editing.
- Steps: Open task → select a different available status → save → reload page.
- Expected Result: Updated status is saved and displayed correctly.
- Actual Result: Not tested | Status: Not Run
TC-26 — Set task priority and deadline
- Requirement ID: PMS-F-009 | Priority: Medium
- Precondition: Task form is accessible.
- Steps: Open task form → select valid priority → enter permitted deadline → save → reopen task.
- Expected Result: Priority and deadline are saved and displayed correctly.
- Actual Result: Not tested | Status: Not Run
TC-27 — Create task with invalid deadline
- Requirement ID: PMS-F-005 | Priority: Medium
- Precondition: Task creation form is accessible.
- Steps: Enter valid task details → set deadline earlier than permitted → submit.
- Expected Result: Invalid deadline is rejected with a validation message.
- Actual Result: Not tested | Status: Not Run
TC-28 — Create task with missing required title
- Requirement ID: TBD | Priority: High
- Precondition: Task creation form is accessible.
- Steps: Leave required task title empty → complete other required fields → submit.
- Expected Result: Task is not created and required-field feedback is displayed.
- Actual Result: Not tested | Status: Not Run
TC-29 — Create task without selecting a project
- Requirement ID: TBD | Priority: High
- Precondition: Task form allows project selection.
- Steps: Leave project selection empty → enter other task details → submit.
- Expected Result: Missing project association is validated and no unlinked task is created.
- Actual Result: Not tested | Status: Not Run
TC-30 — Edit task description
- Requirement ID: TBD | Priority: Medium
- Precondition: Existing task is editable.
- Steps: Open task → edit description → save → reopen task details.
- Expected Result: Updated description is displayed and retained.
- Actual Result: Not tested | Status: Not Run
TC-31 — Verify task status persists after refresh
- Requirement ID: PMS-F-008 | Priority: High
- Precondition: Task status has been changed successfully.
- Steps: Refresh the task page → inspect the status value.
- Expected Result: Latest saved status remains displayed.
- Actual Result: Not tested | Status: Not Run
TC-32 — Attempt task update without permission
- Requirement ID: PMS-SR-004 | Priority: High
- Precondition: Restricted account cannot edit the selected task.
- Steps: Log in as restricted user → open task → attempt to modify a field.
- Expected Result: Update is denied and original task details remain unchanged.
- Actual Result: Not tested | Status: Not Run
TC-33 — Verify task list for selected project
- Requirement ID: TBD | Priority: High
- Precondition: Two projects exist with different tasks.
- Steps: Open the first project → inspect its task list → repeat for the second project.
- Expected Result: Each project displays only its associated tasks.
- Actual Result: Not tested | Status: Not Run
TC-34 — Verify task assignment display
- Requirement ID: PMS-F-006 | Priority: Medium
- Precondition: A task has been assigned to a valid member.
- Steps: Open task list → inspect assignee display → open task details.
- Expected Result: The same assigned member is shown consistently.
- Actual Result: Not tested | Status: Not Run
TC-35 — Cancel task creation
- Requirement ID: TBD | Priority: Medium
- Precondition: Task creation form is open.
- Steps: Enter task details → cancel without submitting.
- Expected Result: No task is created.
- Actual Result: Not tested | Status: Not Run
TC-36 — Verify task deletion where supported
- Requirement ID: TBD | Priority: Medium
- Precondition: A disposable task exists and the user has delete permission; confirm deletion is supported.
- Steps: Open disposable task → select delete → confirm if prompted → inspect task list.
- Expected Result: Task is removed or marked deleted according to the application's documented behavior.
- Actual Result: Not tested | Status: Not Run
D. Project Progress and Navigation
TC-37 — Verify project progress
- Requirement ID: PMS-F-015 | Priority: Medium
- Precondition: A project contains tasks with different completion states.
- Steps: Open project → record task states → complete one or more tasks → refresh progress view.
- Expected Result: Progress reflects completed tasks according to the implemented calculation.
- Actual Result: Not tested | Status: Not Run
TC-38 — Verify dashboard project summary
- Requirement ID: TBD | Priority: Medium
- Precondition: User has visible project records and dashboard summary is available.
- Steps: Log in → open dashboard → compare project summary with accessible project list.
- Expected Result: Dashboard summary reflects the records visible to that user.
- Actual Result: Not tested | Status: Not Run
TC-39 — Navigate from dashboard to project details
- Requirement ID: TBD | Priority: Medium
- Precondition: Dashboard contains a project link or project card.
- Steps: Open dashboard → select a project link/card.
- Expected Result: Correct project details page opens.
- Actual Result: Not tested | Status: Not Run
TC-40 — Navigate back to project list
- Requirement ID: TBD | Priority: Low
- Precondition: User is viewing a project details page.
- Steps: Use the application's Back or project-list navigation control.
- Expected Result: User returns to the project list without an unexpected error.
- Actual Result: Not tested | Status: Not Run
E. Role, Validation, and User Feedback
TC-41 — Verify role-based access control
- Requirement ID: PMS-SR-004 | Priority: High
- Precondition: An account without permission for a restricted operation is available.
- Steps: Log in as restricted user → navigate to relevant module → attempt restricted operation.
- Expected Result: Unauthorized operation is rejected.
- Actual Result: Not tested | Status: Not Run
TC-42 — Verify validation message for invalid project input
- Requirement ID: PMS-F-003 | Priority: Medium
- Precondition: Project form is accessible.
- Steps: Enter invalid project data → submit → review displayed feedback.
- Expected Result: A clear validation message identifies the input requiring correction.
- Actual Result: Not tested | Status: Not Run
TC-43 — Verify validation message for invalid task input
- Requirement ID: PMS-F-005 | Priority: Medium
- Precondition: Task form is accessible.
- Steps: Enter invalid or incomplete task data → submit → review displayed feedback.
- Expected Result: A clear validation message is displayed and invalid data is not saved.
- Actual Result: Not tested | Status: Not Run
TC-44 — Verify successful save confirmation
- Requirement ID: TBD | Priority: Low
- Precondition: A supported project or task create/update form is available.
- Steps: Submit valid data → observe the application feedback.
- Expected Result: The application provides an appropriate success confirmation.
- Actual Result: Not tested | Status: Not Run
TC-45 — Verify form values after validation error
- Requirement ID: TBD | Priority: Medium
- Precondition: A form has multiple fields and validation is available.
- Steps: Enter several valid values and one invalid value → submit.
- Expected Result: The user can correct the invalid value without unnecessarily re-entering all valid fields, according to the UI design.
- Actual Result: Not tested | Status: Not Run
TC-46 — Verify application handles unavailable record
- Requirement ID: TBD | Priority: Medium
- Precondition: A record is removed or made unavailable in the approved test environment.
- Steps: Navigate to a stale link for that record.
- Expected Result: A suitable not-found or unavailable message is displayed instead of a broken page.
- Actual Result: Not tested | Status: Not Run
6. Execution Summary
Metric	Count
Total test cases	46
Passed	0
Failed	0
Blocked	0
Not Run	46


7. Execution Record
For each executed test, record the execution date, tester, environment, browser, actual result, status, and evidence reference.
Screenshots should show relevant application behavior without exposing passwords, tokens, or personal data.
If a test cannot be performed, record the reason and mark it Blocked or retain Not Run as appropriate.
Do not infer a successful result from a page loading; verify the expected saved or displayed behavior.
8. Defect Reporting
For any confirmed failure, record the related Test ID, concise defect title, environment, reproduction steps, expected result, actual result, severity, and supporting evidence.
Include relevant screenshots or sanitized logs where permitted.
Do not report an unexecuted test as a defect.
Confirm the expected application behavior and requirement mapping before raising an issue.
Link each defect to the affected test case when the team's issue-tracking process supports it.
9. Traceability and Review
- Existing requirement IDs from the supplied QA-2 test cases are retained.
- Additional scenarios use Requirement ID TBD until mapped to approved project requirements.
- Review each TBD mapping with the project requirement owner before execution.
- Confirm that test data represents valid, invalid, and restricted-user scenarios.
- Review High-priority cases before lower-priority cases when execution time is limited.
- Keep this document aligned with the actual implemented application behavior and approved requirements.
10. QA Sign-off
- Prepared by: Prajwal
- Reviewed by: Pending
- Execution completed: Pending application availability
- Overall result: Pending execution
- Sign-off date: Pending
Note: All 46 test cases are prepared. Execution is pending application availability. Actual results and statuses must be updated only after testing.
