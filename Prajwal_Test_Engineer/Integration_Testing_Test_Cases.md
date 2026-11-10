Integration Testing Test Cases
1. Document Information
- Module: Project Management System
- Type: QA Integration Test Specification
- Sprint: Sprint 2
- Version: 1.0
- Execution Status: Not Run
2. Objective and Scope
Verify that connected modules exchange data correctly. Coverage includes authentication, users, projects, tasks, assignments, updates, deletion, and error handling. These are test specifications only; do not mark tests Passed or Failed without execution evidence.
3. Preconditions and Test Data
- Test environment and application services are available.
- Valid administrator and standard-user accounts are available.
- Test projects, tasks, and eligible assignees can be created.
- Use disposable test records, never production data.
- Confirm actual routes, field names, roles, and expected behavior before execution.
- Record environment, browser, build/version, and test date.
4. Test Case Conventions
- High: critical workflow, access control, or data integrity.
- Medium: supporting workflow or edge case.
- Status remains Not Run until executed.
- Record actual results and sanitized evidence.
- Mark a case Blocked if a required module or service is unavailable.
5. Detailed Integration Test Cases
A. Authentication and User Access
INT-001 — Login and open dashboard
- Priority: High | Steps: Log in with valid credentials and open the dashboard.
- Expected: Login succeeds and the correct user's dashboard loads. | Status: Not Run
  INT-002 — Invalid login blocks protected access
- Priority: High | Steps: Submit invalid credentials and attempt to open a protected page.
- Expected: Login is rejected and protected content remains inaccessible. | Status: Not Run
  INT-003 — Logout removes authenticated access
- Priority: High | Steps: Log in, log out, then revisit a protected page.
- Expected: Authentication is required again. | Status: Not Run
  INT-004 — Role-based module access
- Priority: High | Steps: Sign in with accounts having different documented roles and open restricted modules.
- Expected: Each account can access only permitted functions. | Status: Not Run
B. Project and Task Workflow
INT-005 — Create project and view in list
- Priority: High | Steps: Create a project and open the project listing.
- Expected: The new project appears with saved details. | Status: Not Run
  INT-006 — Create task under an existing project
- Priority: High | Steps: Select an existing project and create a linked task.
- Expected: Task creation succeeds and the correct project relationship is saved. | Status: Not Run
  INT-007 — Project details show associated tasks
- Priority: High | Steps: Open a project that has tasks.
- Expected: Only its associated tasks are displayed. | Status: Not Run
  INT-008 — Task shows correct project
- Priority: High | Steps: Open task details and inspect its project reference.
- Expected: The correct parent project is displayed. | Status: Not Run
  INT-009 — Assign task to eligible user
- Priority: High | Steps: Assign a task to a valid user and reopen it.
- Expected: The selected assignee is saved and displayed. | Status: Not Run
  INT-010 — Reject invalid assignee
- Priority: Medium | Steps: Assign a task using an unknown or ineligible user reference.
- Expected: The assignment is rejected without corrupting task data. | Status: Not Run
C. Updates and Data Consistency
INT-011 — Project update appears across views
- Priority: High | Steps: Change a project field and inspect list and detail pages.
- Expected: Both views show the latest saved value. | Status: Not Run
  INT-012 — Task status update appears across modules
- Priority: High | Steps: Change task status and inspect task list and project task view.
- Expected: Both locations show the updated status. | Status: Not Run
  INT-013 — Task description persists
- Priority: Medium | Steps: Edit a description, save, and reopen the task.
- Expected: The saved description is displayed correctly. | Status: Not Run
  INT-014 — Changes persist after re-login
- Priority: High | Steps: Update a record, log out, log in, and retrieve it.
- Expected: Successfully saved changes remain available. | Status: Not Run
  INT-015 — Block unauthorized cross-user update
- Priority: High | Steps: Use an account without edit permission to update a restricted record.
- Expected: The operation is denied and stored data is unchanged. | Status: Not Run
D. Deletion and Error Handling
INT-016 — Delete task and refresh project view
- Priority: High | Steps: Delete a disposable task and reopen its parent project.
- Expected: Deleted task is no longer shown as specified by the application. | Status: Not Run
  INT-017 — Delete project with linked tasks
- Priority: High | Steps: Attempt to delete a project that has linked tasks.
- Expected: Documented dependency rules are followed and data integrity is preserved. | Status: Not Run
  INT-018 — Handle missing related project
- Priority: Medium | Steps: Attempt task creation using a nonexistent project reference.
- Expected: Clear validation/not-found response; no orphan task is stored. | Status: Not Run
  INT-019 — Handle unavailable dependent service
- Priority: Medium | Steps: In an approved test environment, make a dependency unavailable and perform a related workflow.
- Expected: Controlled error is shown; no false success is reported. | Status: Not Run
  INT-020 — Prevent duplicate submission
- Priority: Medium | Steps: Submit the same create action twice through a repeated click or retry.
- Expected: Duplicate handling follows the contract and avoids unintended records. | Status: Not Run
E. End-to-End Integration
INT-021 — Complete project-to-task workflow
- Priority: High | Steps: Log in, create project, create task, assign it, update status, and retrieve both records.
- Expected: Workflow succeeds and project, task, and assignee data remain consistent. | Status: Not Run
  INT-022 — Verify API and UI consistency
- Priority: High | Steps: Create or update a record through the supported interface and compare it with the documented API response.
- Expected: UI and API represent the same saved values. | Status: Not Run
  INT-023 — Verify validation across modules
- Priority: Medium | Steps: Submit invalid related data, such as a task without a valid project reference.
- Expected: Clear validation feedback; no invalid relationship is saved. | Status: Not Run
  INT-024 — Session expires during workflow
- Priority: High | Steps: Allow the session to expire, then attempt a protected project or task action.
- Expected: Action is not performed and re-authentication is required. | Status: Not Run
6. Execution Summary
- Total test cases: 24
- High priority: 16
- Medium priority: 8
- Passed/Failed/Blocked: Not recorded
- Not Run: 24
7. Execution Record
For each test, record tester, date, environment, test data, steps, actual result, status, and evidence. Remove personal data, passwords, and session tokens from screenshots or logs.
8. Defect Reporting
Record test ID, title, environment, reproduction steps, expected and actual results, severity, and sanitized evidence. Confirm intended module behavior before reporting an integration defect.
9. QA Sign-off
- Prepared by: QA Team
- Reviewed by: Pending
- Execution completed: Pending
- Overall result: Pending execution
- Sign-off date: Pending
10. Integration Test Data Matrix
Data ID	Description	Intended Use
ITD-01	Valid administrator account	Verify privileged workflows
ITD-02	Valid standard account	Verify normal user workflows
ITD-03	Restricted account	Verify authorization boundaries
ITD-04	Existing test project	Verify project-task association
ITD-05	Project with no tasks	Verify empty-state behavior
ITD-06	Existing task with assignee	Verify task retrieval and assignment
ITD-07	Invalid project reference	Verify relationship validation
ITD-08	Expired session	Verify session-expiry handling


11. Evidence and Exit Criteria
For each test, retain the test ID, timestamp, environment, sanitized request/response, screenshot or log reference, and final status.
A workflow is considered successful only when the result is visible in the relevant module and persists after refresh or retrieval.
Do not use real passwords, access tokens, personal information, or production records in evidence.
Before sign-off, review all High-priority cases, record unresolved defects, and identify any blocked scenarios with their reasons.
