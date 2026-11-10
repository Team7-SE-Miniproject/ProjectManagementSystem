# Project API Test Cases
## 1. Document Information
- Module: Project Management API
- Type: QA Test Case Specification
- Sprint: Sprint 2
- Version: 1.0
- Execution Status: Not Run
## 2. Objective and Scope
Verify project API creation, retrieval, updating, deletion, input validation, authentication, authorization, and data integrity.
These are test specifications only. Do not mark a case Passed or Failed without execution evidence.
Confirm endpoint paths, HTTP methods, request fields, and response contracts from the project before execution.
## 3. Preconditions and Test Data
- API server and test environment are available.
- Valid, administrator, and restricted user accounts are available as applicable.
- Valid and invalid project payloads are prepared.
- Existing and disposable project records are available.
- Use test data only; do not modify production records.
- Remove credentials, tokens, and personal data from evidence.
## 4. Test Case Conventions
- High: core functionality or security. Medium: validation or edge case.
- Status remains Not Run until the test is executed.
- Replace route placeholders with the application's documented endpoints.
- Expected behavior must follow the API contract; do not assume undocumented status codes or fields.
## 5. Detailed Test Cases
### A. Project Creation
#### PROJ-API-001 — Create project with valid data
- Priority: High | Precondition: User has create permission.
- Steps: Submit a valid project payload to the documented create endpoint.
- Expected: Request succeeds and confirms the created project.
- Status: Not Run
#### PROJ-API-002 — Missing required project name
- Priority: High | Steps: Submit a create request without the required name.
- Expected: Validation response; no project is created.
- Status: Not Run
#### PROJ-API-003 — Empty project name
- Priority: High | Steps: Submit a name containing an empty string.
- Expected: API rejects the value and creates no record.
- Status: Not Run
#### PROJ-API-004 — Whitespace-only project name
- Priority: Medium | Steps: Submit a name containing only spaces.
- Expected: API rejects or normalizes it according to documented rules.
- Status: Not Run
#### PROJ-API-005 — Invalid field data types
- Priority: Medium | Steps: Send incorrect types for name, date, or identifier fields.
- Expected: Validation response, not an unhandled server error.
- Status: Not Run
#### PROJ-API-006 — Create without authentication
- Priority: High | Steps: Call the create endpoint without valid credentials.
- Expected: Access is denied and no project is created.
- Status: Not Run
#### PROJ-API-007 — Create with restricted role
- Priority: High | Precondition: Restricted account is available.
- Steps: Attempt project creation using that account.
- Expected: Role permissions are enforced; unauthorized creation is denied.
- Status: Not Run
### B. Project Retrieval
#### PROJ-API-008 — Retrieve existing project
- Priority: High | Precondition: A viewable project exists.
- Steps: Request project details using a valid project ID.
- Expected: Correct project details in the documented response structure.
- Status: Not Run
#### PROJ-API-009 — Retrieve unknown project ID
- Priority: High | Steps: Request details for an ID that does not exist.
- Expected: Not-found response; no unrelated data is exposed.
- Status: Not Run
#### PROJ-API-010 — Retrieve with malformed ID
- Priority: Medium | Steps: Supply an incorrectly formatted project ID.
- Expected: Safe validation or not-found response.
- Status: Not Run
#### PROJ-API-011 — Retrieve project list
- Priority: High | Steps: Call the documented list endpoint with valid authentication.
- Expected: Project list is returned in the documented format.
- Status: Not Run
#### PROJ-API-012 — Retrieve list without authentication
- Priority: High | Steps: Call the list endpoint without valid credentials.
- Expected: Access policy is enforced; restricted data is not exposed.
- Status: Not Run
### C. Project Update
#### PROJ-API-013 — Update project with valid data
- Priority: High | Precondition: User can edit an existing project.
- Steps: Submit valid changed fields using the documented update method.
- Expected: Update succeeds and later retrieval shows saved values.
- Status: Not Run
#### PROJ-API-014 — Update with missing required data
- Priority: Medium | Steps: Omit a field required by the update contract.
- Expected: Documented full-update or partial-update validation is followed.
- Status: Not Run
#### PROJ-API-015 — Update unknown project ID
- Priority: High | Steps: Submit an update for a nonexistent project ID.
- Expected: Not-found response; no unintended record is created.
- Status: Not Run
#### PROJ-API-016 — Update without permission
- Priority: High | Precondition: Account can view but cannot edit the project.
- Steps: Attempt to change project details.
- Expected: Request is denied and original data remains unchanged.
- Status: Not Run
### D. Project Deletion and Integrity
#### PROJ-API-017 — Delete existing project with permission
- Priority: High | Precondition: Disposable project and delete permission are available.
- Steps: Call the documented delete endpoint.
- Expected: Success response; project availability changes as documented.
- Status: Not Run
#### PROJ-API-018 — Delete without permission
- Priority: High | Steps: Attempt deletion using an account without delete permission.
- Expected: Request is denied and the project remains available.
- Status: Not Run
#### PROJ-API-019 — Delete unknown project ID
- Priority: Medium | Steps: Submit a delete request for a nonexistent ID.
- Expected: Not-found response; other records remain unaffected.
- Status: Not Run
#### PROJ-API-020 — Verify data after update
- Priority: Medium | Precondition: A project update has succeeded.
- Steps: Retrieve the project and compare persisted values with submitted changes.
- Expected: Updated values match; unrelated fields remain unchanged.
- Status: Not Run
### E. Reliability and Security
#### PROJ-API-021 — Duplicate create request
- Priority: Medium | Steps: Submit the same create request more than once.
- Expected: Documented duplicate handling; no unintended duplicate records.
- Status: Not Run
#### PROJ-API-022 — Unexpected extra fields
- Priority: Medium | Steps: Include fields not defined in the request contract.
- Expected: Unsupported fields are safely ignored or rejected; protected data is unchanged.
- Status: Not Run
#### PROJ-API-023 — Script-like text input
- Priority: High | Steps: Submit harmless script-like text in project text fields.
- Expected: Input is handled safely and is not executed when displayed.
- Status: Not Run
#### PROJ-API-024 — Sensitive data in API response
- Priority: High | Steps: Inspect create, list, detail, and update responses.
- Expected: Responses expose permitted project data only, not passwords, tokens, or secrets.
- Status: Not Run
## 6. Execution Summary
- Total test cases: 24
- High priority: 14
- Medium priority: 10
- Passed / Failed / Blocked: Not recorded
- Not Run: 24
## 7. Execution Record
For each executed case, record date, tester, environment, request, response status, actual result, evidence, and final status.
Sanitize credentials and personal data before attaching evidence. Record a reason when a test is blocked.
## 8. Defect Reporting
Record the test case ID, title, environment, reproduction steps, expected and actual results, severity, and sanitized evidence.
Confirm the endpoint contract before reporting an implementation assumption as a defect.
## 9. QA Sign-off
- Prepared by: QA Team
- Reviewed by: Pending
- Execution completed: Pending
- Overall result: Pending execution
- Sign-off date: Pending
