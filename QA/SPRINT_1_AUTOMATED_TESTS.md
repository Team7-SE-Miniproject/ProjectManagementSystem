# Sprint 1 — API Test Automation

**Owner:** Prajwal (Test Engineer)  
**Project:** Project Management System  
**Test level:** API / integration smoke tests  
**Framework:** Node.js built-in test runner (no additional package required)

## Coverage

| Test | Endpoint | Scenario | Expected result |
|---|---|---|---|
| S1-API-01 | `POST /api/register` | Required registration fields missing | HTTP 400 and validation message |
| S1-API-02 | `POST /api/login` | Invalid credentials | HTTP 401 and invalid-credentials message |
| S1-API-03 | `POST /api/login` | Valid credentials | HTTP 200 and user object (requires test credentials) |
| S1-API-04 | `POST /api/project` | Required project fields missing | HTTP 400 and validation message |
| S1-API-05 | `POST /api/project` | Non-admin attempts project creation | Request rejected (requires seeded non-admin and manager IDs) |
| S1-API-06 | `POST /api/task` | Required task fields missing | HTTP 400 and validation message |
| S1-API-07 | `POST /api/task` | Unknown user attempts task creation | Request rejected |

These tests reflect the current API implementation. They are integration tests against a running local application and database; they do not prove UI behavior or full role-based security. Some authorization tests are conditional on test data supplied through environment variables.

## Run locally

1. Start PostgreSQL and configure `DATABASE_URL` as required by the application.
2. From the `dev` directory, install dependencies with `npm ci` (first setup only).
3. Start the app in one terminal: `npm run dev`.
4. In another terminal, run: `npm run test:api`.

Optional environment variables:

- `TEST_BASE_URL` — defaults to `http://localhost:3000`.
- `TEST_LOGIN_EMAIL` and `TEST_LOGIN_PASSWORD` — valid test account for the positive login case.
- `TEST_NON_ADMIN_USER_ID` and `TEST_PROJECT_MANAGER_ID` — seeded IDs for the non-admin project authorization case.

Use dedicated local/test database accounts only. Do not put real passwords or production credentials in this repository. Tests that require optional environment variables are reported as skipped when those values are not configured.

## Result reporting

The suite reports pass/fail/skip at runtime. Do not mark tests as passed in the test execution report until they have actually been run against the local application and database.
