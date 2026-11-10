# Task API Test Cases
## 1. Document Information
- Module: Task Management API
- Type: QA Test Case Specification
- Sprint: Sprint 2
- Version: 1.0
- Execution Status: Not Run
## 2. Objective and Scope
Verify task API creation, retrieval, updating, deletion, validation, authorization, and task-project relationships.
These are test specifications only; do not mark a case Passed or Failed without execution evidence.
Confirm endpoint paths, HTTP methods, request fields, and response contracts from the project before execution.
## 3. Preconditions and Test Data
- API server and test environment are available.
- Valid and restricted user accounts are available as applicable.
- A valid project and task payload are prepared.
- Existing, editable, and disposable task records are available.
- Use test data only; do not modify production records.
- Remove credentials, tokens, and personal data from evidence.
## 4. Test Case Conventions
- High: core functionality or security. Medium: validation or edge case.
- Status remains Not Run until the test is executed.
- Replace route placeholders with documented application endpoints.
- Expected behavior must follow the API contract; do not assume undocumented fields or status codes.
## 5. Detailed Test Cases
### A. Task Creation
#### TASK-API-001 — Create task with valid data
- Priority: High | Precondition: User has task-creation permission and a valid project exists.
- Steps: Submit a valid task payload with the required project reference.
- Expected: Request succeeds and confirms the created task.
- Status: Not Run
#### TASK-API-002 — Create task without required title
- Priority: High | Steps: Submit a task request without its required title/name.
- Expected: Validation response; no task is created.
- Status: Not Run
#### TASK-API-003 — Create task with empty title
- Priority: High | Steps: Submit a title containing an empty string.
- Expected: API rejects the empty required value.
- Status: Not Run
#### TASK-API-004 — Create task with invalid field types
- Priority: Medium | Steps: Send incorrect types for task title, description, due date, or identifiers.
- Expected: Validation response, not an unhandled server error.
- Status: Not Run
#### TASK-API-005 — Create task with nonexistent project ID
- Priority: High | Steps: Submit a task referencing a project ID that does not exist.
- Expected: API rejects the invalid project reference; no orphan task is created.
- Status: Not Run
#### TASK-API-006 — Create task without authentication
- Priority: High | Steps: Call the task-create endpoint without valid credentials.
- Expected: Access is denied and no task is created.
- Status: Not Run
#### TASK-API-007 — Create task with restricted role
- Priority: High | Precondition: Restricted account is available.
- Steps: Attempt task creation using that account.
- Expected: Documented role permissions are enforced.
- Status: Not Run
### B. Task Retrieval
#### TASK-API-008 — Retrieve existing task
- Priority: High | Precondition: A viewable task exists.
- Steps: Request task details using a valid task ID.
- Expected: Correct task details are returned in the documented response structure.
- Status: Not Run
#### TASK-API-009 — Retrieve task using unknown ID
- Priority: High | Steps: Request details for a task ID that does not exist.
- Expected: Not-found response; no unrelated task data is exposed.
- Status: Not Run
#### TASK-API-010 — Retrieve task using malformed ID
- Priority: Medium | Steps: Supply an incorrectly formatted task ID.
- Expected: Safe validation or not-found response.
- Status: Not Run
#### TASK-API-011 — Retrieve tasks for a project
- Priority: High | Precondition: Project has associated tasks.
- Steps: Call the documented project-task list endpoint.
- Expected: Only tasks associated with the requested project are returned.
- Status: Not Run
#### TASK-API-012 — Retrieve tasks without authentication
- Priority: High | Steps: Call a protected task retrieval endpoint without credentials.
- Expected: Access policy is enforced and restricted task data is not exposed.
- Status: Not Run
### C. Task Update
#### TASK-API-013 — Update task with valid data
- Priority: High | Precondition: User can edit an existing task.
- Steps: Submit valid changed task fields using the documented update method.
- Expected: Update succeeds and later retrieval shows saved values.
- Status: Not Run
#### TASK-API-014 — Update task with invalid status
- Priority: Medium | Steps: Submit a status value outside the documented allowed values.
- Expected: API rejects the invalid status and preserves the previous value.
- Status: Not Run
#### TASK-API-015 — Update task using unknown ID
- Priority: High | Steps: Submit an update for a nonexistent task ID.
- Expected: Not-found response; no unintended task is created.
- Status: Not Run
#### TASK-API-016 — Update task without permission
- Priority: High | Precondition: Account can view but cannot edit the task.
- Steps: Attempt to modify task details.
- Expected: Request is denied and original task data remains unchanged.
- Status: Not Run
#### TASK-API-017 — Update task assignment
- Priority: Medium | Precondition: An eligible assignee exists.
- Steps: Change the task assignee using a valid user reference.
- Expected: Assignment is saved and returned correctly by task retrieval.
- Status: Not Run
### D. Task Deletion and Relationships
#### TASK-API-018 — Delete existing task with permission
- Priority: High | Precondition: Disposable task and delete permission are available.
- Steps: Call the documented task-delete endpoint.
- Expected: Success response and task availability changes as documented.
- Status: Not Run
#### TASK-API-019 — Delete task without permission
- Priority: High | Steps: Attempt deletion using an account without delete permission.
- Expected: Request is denied and task remains available.
- Status: Not Run
#### TASK-API-020 — Delete task using unknown ID
- Priority: Medium | Steps: Submit a delete request for a nonexistent task ID.
- Expected: Not-found response; other records remain unaffected.
- Status: Not Run
#### TASK-API-021 — Verify task-project relationship
- Priority: High | Precondition: A task is associated with a project.
- Steps: Retrieve the task and its parent project's task list.
- Expected: The relationship is consistent in both documented responses.
- Status: Not Run
### E. Reliability and Security
#### TASK-API-022 — Create duplicate task request
- Priority: Medium | Steps: Submit the same task-create request more than once.
- Expected: Duplicate handling follows the API contract and creates no unintended duplicates.
- Status: Not Run
#### TASK-API-023 — Submit script-like task text
- Priority: High | Steps: Submit harmless script-like text in task title or description.
- Expected: Input is handled safely and is not executed when displayed.
- Status: Not Run
#### TASK-API-024 — Verify sensitive data is not exposed
- Priority: High | Steps: Inspect task create, list, detail, and update responses.
- Expected: Only permitted task data is returned; passwords, tokens, and secrets are not exposed.
- Status: Not Run
## 6. Execution Summary
- Total test cases: 24
- High priority: 15
- Medium priority: 9
- Passed / Failed / Blocked: Not recorded
- Not Run: 24
## 7. Execution Record
For each executed case, record date, tester, environment, request, response status, actual result, evidence, and final status; sanitize credentials and record any blocker.
## 8. Defect Reporting
Record the test case ID, title, environment, reproduction steps, expected/actual results, severity, and sanitized evidence; confirm the endpoint contract before reporting a defect.
## 9. QA Sign-off
- Prepared by: QA Team
- Reviewed by: Pending
- Execution completed: Pending
- Overall result: Pending execution
- Sign-off date: Pending
