Project Management System — Regression Testing Report
Project: Project Management System
Sprint: 2
Issue: QA-3
Tester: Prajwal
Testing Type: Regression Testing
Status: Execution Pending  
1. Objective
Verify that existing functionality continues to work correctly after application changes and bug fixes. Regression testing checks that previously working features remain stable and that changes do not introduce unexpected side effects.
2. Scope
- Authentication and protected-page access.
- Project creation, viewing, editing, and deletion where supported.
- Task creation, assignment, status, priority, and deadline handling.
- User profile updates.
- Role-based access control
- Dashboard and project progress.
- Input validation, navigation, and saved-data consistency.
Execute only scenarios supported by the current application. Confirm exact controls, roles, and deletion behavior against approved requirements.
3. Test Environment and Preconditions
- Application is available in the approved test environment.
- Valid user and restricted user accounts are available.
- Test projects, tasks, and disposable records are prepared.
- A project member account is available for assignment checks.
- Test data is isolated from production data.
- Record browser, operating system, build/version, environment, and execution date.
- Deploy the intended application changes before starting regression testing.
4. Test Case Conventions
- High: Core workflow, security, or data-integrity behavior.
- Medium: Supporting workflow, validation, or consistency behavior.
- Low: Usability or navigation behavior with limited functional impact.
- Actual Result remains Pending until execution.
- Status remains Not Run until evidence supports another status.
- Use Blocked only when execution cannot proceed due to an identified dependency.
- Confirm any TBD requirement mapping before execution.
5. Regression Test Cases
RT-01 — Log in with valid credentials
- Feature: Authentication | Priority: High
- Precondition: Registered account is available.
- Steps: Enter valid credentials and select Login.
- Expected Result: User logs in and reaches the dashboard.
- Actual Result: Pending | Status: Not Run
RT-02 — Log in with invalid credentials
- Feature: Authentication | Priority: High
- Precondition: Login page is available.
- Steps: Enter an incorrect password and select Login.
- Expected Result: Login is rejected with an appropriate error.
- Actual Result: Pending | Status: Not Run
RT-03 — Access protected page without login
- Feature: Authentication | Priority: High
- Precondition: User is logged out and protected URL is known.
- Steps: Open the protected URL directly.
- Expected Result: Access is denied or user is redirected to login.
- Actual Result: Pending | Status: Not Run
RT-04 — Create a project with valid details
- Feature: Projects | Priority: High
- Precondition: User has project-creation permission.
- Steps: Enter valid project details and submit.
- Expected Result: Project is created and displayed.
- Actual Result: Pending | Status: Not Run
RT-05 — Edit existing project details
- Feature: Projects | Priority: High
- Precondition: Editable project exists.
- Steps: Change permitted project details and save.
- Expected Result: Changes are saved and displayed.
- Actual Result: Pending | Status: Not Run
RT-06 — Delete a project
- Feature: Projects | Priority: High
- Precondition: Disposable project exists; deletion is supported and user is authorized.
- Steps: Delete the disposable project.
- Expected Result: Project is removed or marked deleted according to requirements.
- Actual Result: Pending | Status: Not Run.
RT-07 — Create a task in a project
- Feature: Tasks | Priority: High
- Precondition: Accessible project exists.
- Steps: Create a task from the selected project.
- Expected Result: Task is created under the correct project.
- Actual Result: Pending | Status: Not Run
RT-08 — Assign task to a team member
- Feature: Tasks | Priority: High
- Precondition: Task and eligible member exist.
- Steps: Assign the task to the selected member and save.
- Expected Result: Correct assignee is displayed.
- Actual Result: Pending | Status: Not Run
RT-09 — Change task status
- Feature: Tasks | Priority: High
- Precondition: Editable task exists.
- Steps: Change status and refresh the page.
- Expected Result: Updated status persists after refresh.
- Actual Result: Pending | Status: Not Run
RT-10 — Update task priority and deadline
- Feature: Tasks | Priority: Medium
- Precondition: Editable task exists.
- Steps: Change priority and deadline to permitted values.
- Expected Result: Updated values are saved correctly.
- Actual Result: Pending | Status: Not Run
RT-11 — Update user profile
- Feature: User Profile | Priority: Medium
- Precondition: User is logged in and profile editing is available.
- Steps: Edit permitted profile information and save.
- Expected Result: Updated information is saved.
- Actual Result: Pending | Status: Not Run
RT-12 — Attempt unauthorized operation
- Feature: Access Control | Priority: High
- Precondition: Restricted account is available.
- Steps: Attempt an operation not permitted to that account.
- Expected Result: Operation is rejected..
RT-13 — Verify project progress
- Feature: Dashboard | Priority: Medium
- Precondition: Project has tasks with known completion states.
- Steps: Open dashboard or project progress view.
- Expected Result: Progress reflects task completion as implemented.
- Actual Result: Pending | Status: Not Run
RT-14 — Submit task with invalid deadline
- Feature: Validation | Priority: Medium
- Precondition: Task form is available.
- Steps: Enter a deadline that violates application rules and submit.
- Expected Result: Validation error is displayed.
- Actual Result: Pending | Status: Not Run
RT-15 — Submit login with empty account field
- Feature: Authentication | Priority: Medium
- Precondition: Login page is available.
- Steps: Leave account identifier empty, enter password, and submit.
- Expected Result: Required-field validation appears; login does not proceed.
- Actual Result: Pending | Status: Not Run
RT-16 — Submit login with empty password
- Feature: Authentication | Priority: Medium
- Precondition: Login page is available.
- Steps: Enter account identifier, leave password empty, and submit.
- Expected Result: Required-field validation appears; login does not proceed.
- Actual Result: Pending | Status: Not Run
RT-17 — Submit login with both fields empty
- Feature: Authentication | Priority: Medium
- Precondition: Login page is available.
- Steps: Leave both login fields empty and submit.
- Expected Result: Required-field validation appears for missing inputs.
- Actual Result: Pending | Status: Not Run
RT-18 — Verify password masking
- Feature: Authentication | Priority: Low
- Precondition: Login page is available.
- Steps: Enter a password and inspect the password field.
- Expected Result: Password characters are masked by default.
- Actual Result: Pending | Status: Not Run
RT-19 — Log out from active session
- Feature: Authentication | Priority: High
- Precondition: User is logged in.
- Steps: Select the application's Logout action.
- Expected Result: Session ends and user is redirected according to application behavior.
- Actual Result: Pending | Status: Not Run
RT-20 — Revisit protected page after logout
- Feature: Authentication | Priority: High
- Precondition: User has logged out.
- Steps: Open a previously accessible protected URL.
- Expected Result: Protected content is not displayed without authentication.
- Actual Result: Pending | Status: Not Run
RT-21 — Refresh dashboard after login
- Feature: Authentication | Priority: Medium
- Precondition: User is logged in.
- Steps: Refresh the dashboard page.
- Expected Result: Dashboard remains accessible without unexpected login failure.
- Actual Result: Pending | Status: Not Run
RT-22 — Use browser Back after logout
- Feature: Authentication | Priority: High
- Precondition: User has logged out.
- Steps: Use browser Back to revisit a protected page..
- Expected Result: Protected information is not accessible from the prior session.
- Actual Result: Pending | Status: Not Run
RT-23 — Create project with missing required fields
- Feature: Projects | Priority: High
- Precondition: Project form is available.
- Steps: Leave required fields empty and submit.
- Expected Result: Validation appears and project is not created.
- Actual Result: Pending | Status: Not Run
RT-24 — Create project with empty name
- Feature: Projects | Priority: High
- Precondition: Project form is available.
- Steps: Leave project name empty and submit other valid fields.
- Expected Result: Project is rejected with clear validation feedback.
- Actual Result: Pending | Status: Not Run
RT-25 — Create project with whitespace-only name
- Feature: Projects | Priority: Medium
- Precondition: Project form is available.
- Steps: Enter only spaces in project name and submit.
- Expected Result: Whitespace-only required value is rejected or handled by documented rules.
- Actual Result: Pending | Status: Not Run
RT-26 — Create project with excessively long name
- Feature: Projects | Priority: Medium
- Precondition: Maximum field length is documented or discoverable.
- Steps: Enter a name exceeding permitted length and submit.
- Expected Result: Input is validated with clear feedback.
- Actual Result: Pending | Status: Not Run
RT-27 — Cancel project creation
- Feature: Projects | Priority: Medium
- Precondition: Project creation form is open.
- Steps: Enter partial details and cancel without saving.
- Expected Result: No project is created.
- Actual Result: Pending | Status: Not Run
RT-28 — Verify new project after refresh
- Feature: Projects | Priority: High
- Precondition: Project was created successfully.
- Steps: Refresh project list and locate the new project.
- Expected Result: Saved project remains visible.
- Actual Result: Pending | Status: Not Run
RT-29 — Open project details
- Feature: Projects | Priority: High
- Precondition: Accessible project exists.
- Steps: Select the project from the list.
- Expected Result: Correct project details are displayed.
- Actual Result: Pending | Status: Not Run
RT-30 — Return from project details to list
- Feature: Projects | Priority: Low
- Precondition: User is viewing project details.
- Steps: Use project-list navigation control.
- Expected Result: Project list opens without an unexpected error.
- Actual Result: Pending | Status: Not Run
RT-31 — Search for existing project
- Feature: Projects | Priority: Medium
- Precondition: Search is available and matching project exists.
- Steps: Search by a known project name.
- Expected Result: Matching project is displayed.
- Actual Result: Pending | Status: Not Run
RT-32 — Search for nonexistent project
- Feature: Projects | Priority: Medium
- Precondition: Project search is available.
- Steps: Search using a value with no matching project.
- Expected Result: Empty-state feedback appears without application error.
- Actual Result: Pending | Status: Not Run
RT-33 — Verify project list empty state
- Feature: Projects | Priority: Low
- Precondition: Test account has no visible projects.
- Steps: Open the project list.
- Expected Result: Appropriate empty-state guidance is displayed.
- Actual Result: Pending | Status: Not Run
RT-34 — Verify edited project after refresh
- Feature: Projects | Priority: High
- Precondition: Project details were edited successfully.
- Steps: Refresh or reopen project details.
- Expected Result: Latest saved values remain displayed.
- Actual Result: Pending | Status: Not Run
RT-35 — Attempt project update without permission
- Feature: Projects | Priority: High
- Precondition: Restricted account can view but cannot edit project.
- Steps: Attempt to edit and save project details.
- Expected Result: Update is rejected and project data remains unchanged.
- Actual Result: Pending | Status: Not Run
RT-36 — Attempt project deletion without permission
- Feature: Projects | Priority: High
- Precondition: Restricted account lacks delete permission; deletion is supported.
- Steps: Attempt to delete a project.
- Expected Result: Deletion is rejected and project remains available.
- Actual Result: Pending | Status: Not Run
RT-37 — Create task with missing title
- Feature: Tasks | Priority: High
- Precondition: Task form is available.
- Steps: Leave required task title empty and submit.
- Expected Result: Task is not created and validation is displayed.
- Actual Result: Pending | Status: Not Run
RT-38 — Create task without selecting project
- Feature: Tasks | Priority: High
- Precondition: Task form supports project selection.
- Steps: Leave project selection empty and submit otherwise valid data.
- Expected Result: Missing project association is validated.
- Actual Result: Pending | Status: Not Run
RT-39 — Create task with valid details
- Feature: Tasks | Priority: High
- Precondition: Accessible project and task form are available.
- Steps: Enter valid task details and submit.
- Expected Result: Task is created and associated with selected project.
- Actual Result: Pending | Status: Not Run
RT-40 — Cancel task creation
- Feature: Tasks | Priority: Medium
- Precondition: Task creation form is open.
- Steps: Enter partial details and cancel without saving.
- Expected Result: No task is created.
- Actual Result: Pending | Status: Not Run
RT-41 — Open task details
- Feature: Tasks | Priority: High
- Precondition: Accessible task exists.
- Steps: Select the task from task list.
- Expected Result: Correct task details are displayed.
- Actual Result: Pending | Status: Not Run
RT-42 — Edit task description
- Feature: Tasks | Priority: Medium
- Precondition: Task is editable.
- Steps: Change description, save, and reopen task.
- Expected Result: Updated description is displayed and retained.
- Actual Result: Pending | Status: Not Run
RT-43 — Verify task status after refresh
- Feature: Tasks | Priority: High
- Precondition: Task status was changed successfully.
- Steps: Refresh the task page.
- Expected Result: Latest status remains displayed.
- Actual Result: Pending | Status: Not Run
RT-44 — Verify task priority after refresh
- Feature: Tasks | Priority: Medium
- Precondition: Task priority was changed successfully.
- Steps: Refresh or reopen task details.
- Expected Result: Latest priority remains displayed.
- Actual Result: Pending | Status: Not Run
RT-45 — Verify deadline after refresh
- Feature: Tasks | Priority: Medium
- Precondition: Task deadline was changed successfully.
- Steps: Refresh or reopen task details.
- Expected Result: Latest permitted deadline remains displayed.
- Actual Result: Pending | Status: Not Run
RT-46 — Verify task assignment display
- Feature: Tasks | Priority: Medium
- Precondition: Task has an assigned member.
- Steps: Inspect task list and task details.
- Expected Result: Same assignee is displayed consistently.
- Actual Result: Pending | Status: Not Run
RT-47 — Attempt task update without permission
- Feature: Tasks | Priority: High
- Precondition: Restricted account cannot edit selected task.
- Steps: Attempt to change task details.
- Expected Result: Update is rejected and original details remain unchanged.
- Actual Result: Pending | Status: Not Run
RT-48 — Attempt task deletion without permission
- Feature: Tasks | Priority: High
- Precondition: Restricted account lacks delete permission; deletion is supported.
- Steps: Attempt to delete the task.
- Expected Result: Deletion is rejected and task remains available.
- Actual Result: Pending | Status: Not Run
RT-49 — Delete disposable task
- Feature: Tasks | Priority: Medium
- Precondition: Disposable task exists and deletion is supported.
- Steps: Delete the task and reopen its project task list.
- Expected Result: Task is removed or marked deleted according to requirements.
- Actual Result: Pending | Status: Not Run
RT-50 — Verify task list for selected project
- Feature: Tasks | Priority: High
- Precondition: Two projects with different task sets exist.
- Steps: Open each project and inspect its task list.
- Expected Result: Each project displays only its associated tasks.
- Actual Result: Pending | Status: Not Run
RT-51 — Verify invalid project reference
- Feature: Tasks | Priority: High
- Precondition: Safe invalid-association scenario is available.
- Steps: Attempt task creation with invalid project reference if UI permits.
- Expected Result: Invalid association is rejected; no orphan task is created.
- Actual Result: Pending | Status: Not Run
RT-52 — Verify task status options
- Feature: Tasks | Priority: Medium
- Precondition: Task edit form is available.
- Steps: Open status selector and inspect options.
- Expected Result: Only supported status options are presented.
- Actual Result: Pending | Status: Not Run
RT-53 — Verify task priority options
- Feature: Tasks | Priority: Low
- Precondition: Task form is available.
- Steps: Open priority selector and inspect options.
- Expected Result: Only supported priority values are presented.
- Actual Result: Pending | Status: Not Run
RT-54 — Verify deadline boundary validation
- Feature: Tasks | Priority: Medium
- Precondition: Deadline rules are documented.
- Steps: Test a deadline at the allowed boundary and one outside it.
- Expected Result: Boundary behavior follows documented rules.
- Actual Result: Pending | Status: Not Run
RT-55 — Open user profile
- Feature: User Profile | Priority: Medium
- Precondition: User is logged in and profile page is available.
- Steps: Open profile section.
- Expected Result: Correct signed-in user's profile is displayed.
- Actual Result: Pending | Status: Not Run
RT-56 — Update permitted profile fields
- Feature: User Profile | Priority: Medium
- Precondition: User can edit profile details.
- Steps: Change permitted fields and save.
- Expected Result: Updated profile information is displayed.
- Actual Result: Pending | Status: Not Run
RT-57 — Submit profile with missing required value
- Feature: User Profile | Priority: Medium
- Precondition: Profile form has required fields.
- Steps: Clear a required field and submit.
- Expected Result: Validation appears and invalid profile data is not saved.
- Actual Result: Pending | Status: Not Run
RT-58 — Cancel profile changes
- Feature: User Profile | Priority: Low
- Precondition: Profile edit form is open.
- Steps: Change a field and cancel without saving.
- Expected Result: Previously saved profile values remain unchanged.
- Actual Result: Pending | Status: Not Run
RT-59 — Verify profile update after re-login
- Feature: User Profile | Priority: Medium
- Precondition: Profile was updated successfully.
- Steps: Log out, log in again, and open profile.
- Expected Result: Updated information remains saved.
- Actual Result: Pending | Status: Not Run
RT-60 — Open dashboard after login
- Feature: Dashboard | Priority: High
- Precondition: Valid user account is available.
- Steps: Log in and open dashboard.
- Expected Result: Dashboard loads without functional error.
- Actual Result: Pending | Status: Not Run
RT-61 — Verify project progress
- Feature: Dashboard | Priority: Medium
- Precondition: Project has tasks with known completion states.
- Steps: Compare project progress view with task states.
- Expected Result: Progress reflects task completion as implemented.
- Actual Result: Pending | Status: Not Run
RT-62 — Verify project summary
- Feature: Dashboard | Priority: Medium
- Precondition: User has visible projects and dashboard summary is available.
- Steps: Compare dashboard summary with project list.
- Expected Result: Summary reflects records visible to that user.
- Actual Result: Pending | Status: Not Run
RT-63 — Navigate from dashboard to project
- Feature: Dashboard | Priority: Low
- Precondition: Dashboard contains project link or card.
- Steps: Select a project card or link.
- Expected Result: Correct project details page opens.
- Actual Result: Pending | Status: Not Run
RT-64 — Refresh dashboard
- Feature: Dashboard | Priority: Medium
- Precondition: User is authenticated and dashboard is loaded.
- Steps: Refresh dashboard.
- Expected Result: Dashboard data loads without unexpected error.
- Actual Result: Pending | Status: Not Run
RT-65 — Verify role-based access control
- Feature: Access Control | Priority: High
- Precondition: Restricted account is available.
- Steps: Attempt a documented restricted operation.
- Expected Result: Unauthorized operation is rejected.
- Actual Result: Pending | Status: Not Run
RT-66 — Verify restricted project visibility
- Feature: Access Control | Priority: High
- Precondition: Visibility rules are documented and test accounts exist.
- Steps: Sign in with user who should not see a selected project.
- Expected Result: Project visibility follows documented permission rules.
- Actual Result: Pending | Status: Not Run
RT-67 — Verify restricted task visibility
- Feature: Access Control | Priority: High
- Precondition: Task visibility rules are documented.
- Steps: Attempt to open a task outside user's permitted scope.
- Expected Result: Access follows documented task permission rules.
- Actual Result: Pending | Status: Not Run
RT-68 — Verify unauthorized direct URL access
- Feature: Access Control | Priority: High
- Precondition: Restricted resource URL is known.
- Steps: Use restricted account and open URL directly.
- Expected Result: Application denies access according to role permissions.
- Actual Result: Pending | Status: Not Run
RT-69 — Verify project validation feedback
- Feature: Validation | Priority: Medium
- Precondition: Project form is available.
- Steps: Submit invalid or incomplete project data.
- Expected Result: Clear feedback identifies input requiring correction.
- Actual Result: Pending | Status: Not Run
RT-70 — Verify task validation feedback
- Feature: Validation | Priority: Medium
- Precondition: Task form is available.
- Steps: Submit invalid or incomplete task data.
- Expected Result: Clear feedback appears and invalid data is not saved.
- Actual Result: Pending | Status: Not Run
RT-71 — Verify successful save confirmation
- Feature: Validation | Priority: Low
- Precondition: Create or update form is available.
- Steps: Submit valid data and observe feedback.
- Expected Result: Application provides appropriate success confirmation.
- Actual Result: Pending | Status: Not Run
RT-72 — Verify values after validation error
- Feature: Validation | Priority: Medium
- Precondition: Form has multiple fields and validation is available.
- Steps: Enter valid values plus one invalid value and submit.
- Expected Result: Valid entries are retained where supported so invalid field can be corrected.
- Actual Result: Pending | Status: Not Run
RT-73 — Navigate between project and task views
- Feature: Navigation | Priority: Low
- Precondition: Project and task navigation is available.
- Steps: Open project, navigate to tasks, and return to project.
- Expected Result: Navigation completes without broken or incorrect pages.
- Actual Result: Pending | Status: Not Run
RT-74 — Refresh project details
- Feature: Navigation | Priority: Medium
- Precondition: Project details page is open.
- Steps: Refresh the page.
- Expected Result: Correct project details reload successfully.
- Actual Result: Pending | Status: Not Run
RT-75 — Refresh task details
- Feature: Navigation | Priority: Medium
- Precondition: Task details page is open.
- Steps: Refresh the page.
- Expected Result: Correct task details reload successfully.
- Actual Result: Pending | Status: Not Run
RT-76 — Open unavailable record link
- Feature: Error Handling | Priority: Medium
- Precondition: Stale or unavailable record URL is available in test environment.
- Steps: Open unavailable record URL.
- Expected Result: Suitable not-found or unavailable feedback is displayed.
- Actual Result: Pending | Status: Not Run
RT-77 — Verify repeated form submission
- Feature: Error Handling | Priority: Medium
- Precondition: Create form is available.
- Steps: Submit valid data once and repeat action if UI permits.
- Expected Result: Duplicate handling follows requirements and avoids unintended duplicate records.
- Actual Result: Pending | Status: Not Run
RT-78 — Verify understandable error message
- Feature: Error Handling | Priority: Low
- Precondition: Safe invalid-input scenario is available.
- Steps: Trigger validation error and read displayed message.
- Expected Result: Message is understandable and guides correction.
- Actual Result: Pending | Status: Not Run
RT-79 — Compare project list and detail data
- Feature: Data Consistency | Priority: High
- Precondition: Project exists.
- Steps: Compare project name and permitted fields in list and detail views.
- Expected Result: Both views show consistent saved information.
- Actual Result: Pending | Status: Not Run
RT-80 — Compare task list and detail data
- Feature: Data Consistency | Priority: High
- Precondition: Task exists.
- Steps: Compare title, status, priority, and assignee in list and detail views.
- Expected Result: Both views show consistent saved information.
- Actual Result: Pending | Status: Not Run
RT-81 — Verify project-task relationship after refresh
- Feature: Data Consistency | Priority: High
- Precondition: Project has associated tasks.
- Steps: Refresh project and task views and compare relationship.
- Expected Result: Task remains associated with correct project.
- Actual Result: Pending | Status: Not Run
RT-82 — Verify profile data in account area
- Feature: Data Consistency | Priority: Medium
- Precondition: Profile has been updated.
- Steps: Inspect profile page and account summary if available.
- Expected Result: Displayed user information is consistent.
- Actual Result: Pending | Status: Not Run
RT-83 — Verify changes after re-login
- Feature: Data Consistency | Priority: High
- Precondition: Project or task was updated successfully.
- Steps: Log out, log in again, and retrieve updated record.
- Expected Result: Saved changes remain available after re-authentication.
- Actual Result: Pending | Status: Not Run
RT-84 — Run core project-task workflow
- Feature: Regression Smoke | Priority: High
- Precondition: Valid account and disposable test data are available.
- Steps: Log in → create project → create task → assign task → update status → log out.
- Expected Result: Core workflow completes and saved records remain consistent.
- Actual Result: Pending | Status: Not Run
6. Test Execution Summary
Metric	Result
Total test cases	84
Passed	0
Failed	0
Blocked	0
Not Run	84


These are initial values. Update the summary only after executing the test cases and recording evidence.
7. Defect Tracking
For each failed test, record:
- Defect ID and related regression test case.
- Short, descriptive defect title.
- Application build/version and test environment.
- Steps to reproduce the issue.
- Expected result and actual result.
- Severity and priority.
- Screenshot, screen recording, or sanitized log evidence.
- Jira/GitHub issue link.
- Fix version or linked pull request, where available.
- Retest result and retest date after the fix.
Do not report a defect solely because a test has not been executed. Confirm expected behavior against the approved requirement or application specification.
8. Retest and Regression Guidelines
- Re-run failed test cases after the relevant fix is available in the test environment.
- Verify the original failure scenario before running related regression scenarios.
- Recheck connected features that may be affected by the change.
- Record the build/version used for the original test and the retest.
- Keep original execution evidence and add separate retest evidence.
- Do not overwrite an earlier result; preserve execution history.
- If a fix cannot be verified, record the reason and keep the result open or blocked according to team process.
9. Entry Criteria
- A testable application build is deployed.
- Required user accounts and test data are available.
- Affected features and changes are identified.
- Test environment access is confirmed.
- Relevant requirements and expected behavior are available.
10. Exit Criteria
Regression testing is complete when:
- All planned regression test cases have been executed or formally marked Blocked with reasons.
- All failures have been documented.
- Critical defects have been resolved and retested, or explicitly accepted by the responsible owner.
- Test results and supporting evidence have been recorded.
- Final regression summary has been updated.
- Outstanding risks and known issues have been communicated.
11. Execution Record
Test ID	Execution Date	Build/Version	Actual Result	Status	Evidence/Defect ID
RT-01 to RT-84	Pending	Pending	Pending	Not Run	Pending


Use one execution record per test case when testing begins. Replace the range row with individual rows or a linked test-management record as execution progresses.
12. QA Sign-off
- Tester: Prajwal
- Reviewer: Pending.
- Execution completed: Pending
- Open critical defects: Not assessed
- Overall regression result: Pending execution
- Sign-off date: Pending.
Note: This report contains prepared regression scenarios. Execution is pending application availability. Update actual results and statuses only after tests are performed.
