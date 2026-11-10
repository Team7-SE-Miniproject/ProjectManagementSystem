# Login Security Test Cases

## 1. Document Information

| Field | Details |
|---|---|
| Module | Authentication / Login |
| Sprint | Sprint 2 |
| Owner | Prajwal Test Engineer |
| Test type | Functional, negative, and security testing |
| Priority | High |
| Execution status | Not Run |
| API reference from Sprint 1 tests | `POST /api/login` |
| Request fields observed in Sprint 1 tests | `email`, `password` |

## 2. Objective

The objective of this document is to validate login behavior and identify authentication-related defects.
Testing covers valid and invalid credentials, input validation, response data exposure, and session behavior.
The test cases are intended for execution in an approved development or test environment.
No production user credentials should be used during testing.

## 3. Scope

The existing Sprint 1 automated test file sends login requests to `POST /api/login`.
It expects HTTP `401` for invalid credentials and HTTP `200` for successful login.
The exact response schema should be confirmed against the current implementation before execution.
Cookie names, token format, password policy, lockout rules, and rate limits are not assumed here.
Where a security control is not specified, record the observed behavior and ask the project owner to confirm the requirement.

## 4. Test Environment and Data

- Use a dedicated test account with permission to access the application.
- Use a separate unregistered email address for negative tests.
- Do not use a real person's password or personal account.
- Keep test credentials in local environment variables or a secure password manager.
- Do not commit passwords, cookies, access tokens, or database credentials to Git.
- Record the application build, test date, browser/client, and environment.
- Use only test data that the team has approved.

## 5. Test Case Conventions

| Field | Meaning |
|---|---|
| ID | Unique identifier for the test |
| Priority | Relative impact if the test fails |
| Preconditions | State required before execution |
| Steps | Actions performed by the tester |
| Expected result | Required behavior from the application contract |
| Actual result | Observed behavior, entered after execution |
| Status | Not Run, Pass, Fail, or Blocked |

## 6. Detailed Test Cases

### A. Credential Validation

| ID | Priority | Scenario | Preconditions | Steps | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|---|
| LOGIN-SEC-001 | High | Valid credentials | Active test account exists | Submit the registered email and correct password | Login succeeds using the documented success response; password is not returned | Not recorded | Not Run |
| LOGIN-SEC-002 | High | Incorrect password | Active test account exists | Submit registered email with an incorrect password | Login is rejected using the documented invalid-credentials response | Not recorded | Not Run |
| LOGIN-SEC-003 | High | Unregistered email | No account exists for the test email | Submit unknown email and a password | Login is rejected; no authenticated session is created | Not recorded | Not Run |
| LOGIN-SEC-004 | High | Empty email | Application is available | Submit an empty email and non-empty password | Request is rejected with a controlled validation response | Not recorded | Not Run |
| LOGIN-SEC-005 | High | Empty password | Application is available | Submit a valid-format email and empty password | Request is rejected with a controlled validation response | Not recorded | Not Run |
| LOGIN-SEC-006 | Medium | Both fields empty | Application is available | Submit empty email and empty password | Request is rejected; application does not crash | Not recorded | Not Run |
| LOGIN-SEC-007 | Medium | Malformed email | Application is available | Submit malformed email text and a password | Request is rejected according to validation rules | Not recorded | Not Run |
| LOGIN-SEC-008 | Medium | Email with leading spaces | Test account exists | Submit the email with leading spaces | Handling matches the documented normalization or validation rule | Not recorded | Not Run |
| LOGIN-SEC-009 | Medium | Email with trailing spaces | Test account exists | Submit the email with trailing spaces | Handling matches the documented normalization or validation rule | Not recorded | Not Run |
| LOGIN-SEC-010 | Medium | Email letter-case variation | Test account exists | Submit the email using different letter casing | Behavior matches the documented email comparison rule | Not recorded | Not Run |

### B. Authentication Response and Session Checks

| ID | Priority | Scenario | Preconditions | Steps | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|---|
| LOGIN-SEC-011 | High | Password is not disclosed | Test account exists | Login successfully and inspect response body | Response does not contain plaintext password or password hash | Not recorded | Not Run |
| LOGIN-SEC-012 | High | Failed login creates no session | Application is available | Submit invalid credentials and inspect session state | Failed login does not establish an authenticated session | Not recorded | Not Run |
| LOGIN-SEC-013 | High | Session transport attributes | Login succeeds; cookie-based session is used | Inspect the session cookie attributes | If cookies are used, verify `HttpOnly`, `Secure` over HTTPS, and suitable `SameSite` behavior according to requirements | Not recorded | Not Run |
| LOGIN-SEC-014 | High | Session credential is not in URL | Login succeeds | Inspect the resulting URL and navigation requests | Session credential is not exposed in URL query parameters | Not recorded | Not Run |
| LOGIN-SEC-015 | High | Login response does not expose internal data | Test account exists | Login and inspect response fields | Response contains only approved user/session fields; no database secrets or internal credential data | Not recorded | Not Run |
| LOGIN-SEC-016 | Medium | Repeated failed login attempts | Controlled test environment; policy confirmed if defined | Submit repeated invalid login attempts within the approved test window | Documented throttling or lockout policy is applied, if specified; record actual behavior | Not recorded | Not Run |
| LOGIN-SEC-017 | High | SQL-like input in email | Test environment is available | Submit SQL-like text in the email field | Input does not bypass authentication or cause an uncontrolled database error | Not recorded | Not Run |
| LOGIN-SEC-018 | High | SQL-like input in password | Test environment is available | Submit SQL-like text in the password field | Input is treated as data; authentication is not bypassed | Not recorded | Not Run |
| LOGIN-SEC-019 | Medium | Very long email input | Test environment is available | Submit an unusually long email value within approved test limits | Application returns a controlled validation response and remains available | Not recorded | Not Run |
| LOGIN-SEC-020 | Medium | Very long password input | Test environment is available | Submit an unusually long password within approved test limits | Application handles input safely and returns a controlled response | Not recorded | Not Run |

### C. Error Handling and Reliability

| ID | Priority | Scenario | Preconditions | Steps | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|---|
| LOGIN-SEC-021 | High | Unsupported HTTP method | API route is available | Send a method other than the documented login method | Application returns the documented method error; no server crash | Not recorded | Not Run |
| LOGIN-SEC-022 | Medium | Incorrect content type | API route is available | Submit the request with an unsupported content type | Application returns a controlled client error | Not recorded | Not Run |
| LOGIN-SEC-023 | Medium | Malformed JSON body | API route is available | Submit invalid JSON syntax | Application returns a controlled error without exposing a stack trace | Not recorded | Not Run |
| LOGIN-SEC-024 | Medium | Missing request body | API route is available | Send a login request without a body | Application returns a controlled validation error | Not recorded | Not Run |
| LOGIN-SEC-025 | High | Database unavailable during login | Approved test environment with controlled database outage simulation | Attempt login while the database is unavailable | Application returns a controlled server error; internal database details are not exposed | Not recorded | Not Run |
| LOGIN-SEC-026 | Medium | Concurrent login requests | Test account exists; load is within approved test limits | Submit two login requests close together | Both requests are handled consistently with the application's session policy | Not recorded | Not Run |

## 7. Execution Summary

| Metric | Result |
|---|---|
| Total test cases | 26 |
| Passed | To be filled after execution |
| Failed | To be filled after execution |
| Blocked | To be filled after execution |
| Not Run | 26 before execution |

## 8. Execution Record

| Field | Value |
|---|---|
| Environment | To be filled |
| Application build / commit | To be filled |
| Test date | To be filled |
| Tester | Prajwal Test Engineer |
| Browser / API client | To be filled |
| Test data reference | Use a secure, non-secret reference only |
| Evidence location | To be filled |

## 9. Defect Reporting Guidelines

For every failed test, create or update a defect with the related test case ID.
Include the environment, application build, execution date, exact reproduction steps, expected result, and actual result.
Include the HTTP status and a sanitized response body when the test is API-based.
Attach screenshots or logs only after removing personal information and secrets.
Never include real passwords, password hashes, session cookies, access tokens, or database credentials.
Do not mark a test as Pass unless it has actually been executed and the observed result matches the expected result.

## 10. QA Sign-off

The test cases in this document are test specifications only until execution evidence is recorded.
Any behavior that depends on an undocumented requirement must be clarified with the product owner or developer.
Open defects should be linked to their test case IDs before QA sign-off.
