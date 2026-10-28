# Project Management System — Test Cases

**Prepared by:** Nidhi Raghuraman  
**Role:** QA/Test Lead  
**Source:** Software Requirements Specification (SRS)  
**Status:** Prepared; execution pending application availability

| Test ID | Requirement ID | Test Scenario | Test Steps | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|---|
| TC-01 | PMS-F-001 | Login with valid credentials | Enter valid registered credentials and submit | User is authenticated and can access permitted pages | Not tested | Not Run |
| TC-02 | PMS-F-001 | Login with invalid credentials | Enter an incorrect password and submit | Login is rejected with an appropriate error | Not tested | Not Run |
| TC-03 | PMS-SR-002 | Access a protected page without login | Open a protected page without authenticating | Access is denied or the user is redirected to login | Not tested | Not Run |
| TC-04 | PMS-F-003 | Create a project | Log in with an authorized administrator and submit valid project details | Project is saved and appears in the project list | Not tested | Not Run |
| TC-05 | PMS-F-005 | Create a task | Log in as an authorized project manager and enter valid task details | Task is created and associated with the correct project | Not tested | Not Run |
| TC-06 | PMS-F-006 | Assign a task | Assign a task to a valid project member | The selected member is associated with the task | Not tested | Not Run |
| TC-07 | PMS-F-008 | Update task status | Change an assigned task's status and reload the page | Updated status is saved and remains visible | Not tested | Not Run |
| TC-08 | PMS-F-009 | Set task priority and deadline | Enter a valid priority and deadline | Values are saved and displayed correctly | Not tested | Not Run |
| TC-09 | PMS-F-002 | Update user profile | Change permitted profile information and save | Changes are saved; another user's profile cannot be modified | Not tested | Not Run |
| TC-10 | PMS-SR-004 | Verify role-based access | Attempt an operation that the logged-in role is not authorized to perform | Unauthorized operation is rejected | Not tested | Not Run |
| TC-11 | PMS-NF-001 | Verify response time | Measure response time for representative normal requests | Requests complete within the specified 3-second target under the agreed test conditions | Not tested | Not Run |
| TC-12 | PMS-F-015 | Verify project progress | Complete tasks and inspect the project's progress | Progress reflects completed tasks according to the implemented calculation | Not tested | Not Run |
