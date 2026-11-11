Project Management System — Regression Test Cases
Sprint: 2
Issue: QA-3
Tester: Prajwal
Testing Type: Regression Testing
Status: Not Run
Objective
Check that the main features still work after application changes or bug fixes.
Test Cases
Test ID	Feature	Test Scenario	Steps	Expected Result	Priority	Status
RT-01	Login	Login with valid credentials	Enter valid username and password, then click Login.	User reaches the dashboard.	High	Not Run
RT-02	Login	Login with invalid credentials	Enter incorrect credentials and click Login.	Login is rejected and an error is shown.	High	Not Run
RT-03	Authentication	Open a protected page while logged out	Log out and open a protected page URL.	User is redirected to login or access is denied.	High	Not Run
RT-04	Projects	Create a project	Enter valid project details and save.	Project is created and appears in the project list.	High	Not Run
RT-05	Projects	Edit a project	Change project details and save.	Updated details are displayed.	High	Not Run
RT-06	Tasks	Create a task	Open a project, enter task details, and save.	Task is created under the selected project.	High	Not Run
RT-07	Tasks	Assign a task	Select a team member for a task and save.	The selected member appears as the assignee.	Medium	Not Run
RT-08	Tasks	Update task status	Change the task status and refresh the page.	Updated status remains saved.	High	Not Run
RT-09	User Profile	Update profile	Edit permitted profile details and save.	Updated profile information is displayed.	Medium	Not Run
RT-10	Access Control	Try an operation without permission	Log in with a restricted account and attempt a restricted action.	The application blocks the action.	High	Not Run
RT-11	Dashboard	Check project progress	Open the dashboard and review project progress.	Progress information matches the task completion data.	Medium	Not Run
RT-12	Validation	Submit a form with required fields empty	Leave required fields empty and submit the form.	Validation message appears and invalid data is not saved.	Medium	Not Run
RT-13	Data Persistence	Check saved project and task data	Save a project/task, refresh the page, and reopen it.	Saved information is still displayed correctly.	High	Not Run
RT-14	Logout	Log out of the application	Click the Logout option.	Session ends and the user is redirected as expected.	High	Not Run


Execution Summary
Metric	Count
Total Test Cases	14
Passed	0
Failed	0
Blocked	0
Not Run	14


Update the status and actual result after executing each test case.
Defect Record
For any failed test, record:
- Test ID
- Issue description
- Steps to reproduce
- Expected result and actual result
- Screenshot or other evidence
- Related GitHub/Jira issue, if available
Notes
- Run these tests in the approved test environment.
- Use test accounts and test data.
- Do not mark a test as Passed or Failed before executing it.
- Test only features that are available in the current application.
