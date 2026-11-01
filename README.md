# Project Management System (PMS)

Team 7's Project Management System is a web application for organizing projects, users, and tasks. Its goals are to provide a modular, maintainable system with secure authentication and authorization, consistent project and task data, support for multiple users, and a simple interface.

> **Project status:** Application code is present under [`dev/`](dev/). The architecture and test-plan documents remain drafts. PostgreSQL is the confirmed database choice. Database schema/provisioning instructions and automated test execution are not yet documented in this repository.

## Planned capabilities

The requirements and design documents describe these capabilities:

- User registration, login, and profile management.
- Project creation, project membership, and viewing projects.
- Task creation, assignment, viewing, and status updates.
- Task priorities and deadlines.
- Project progress monitoring based on task status.
- Authentication and role- and membership-based authorization for protected project and task access.

The application tree contains pages and API routes for registration, login, dashboards, projects, and tasks. The listed capabilities remain project requirements; the presence of code does not imply that every capability is complete or verified.

## Technology stack

The existing design documents and `dev/package.json` describe this stack:

| Area | Technology |
| --- | --- |
| Web framework | Next.js 16.3.4 |
| UI library | React 19.2.8 |
| Runtime | Node.js (version not specified in the repository) |
| Application languages | JavaScript and TypeScript |
| Styling | Tailwind CSS 4 |
| Database | **PostgreSQL (confirmed project decision)** |
| PostgreSQL client | `pg` |
| Database connection configuration | `DATABASE_URL`, read by `dev/lib/db.js` |
| API testing tool in design documents | Postman |
| UML diagram tool in design documents | Draw.io |

The database pool uses the `DATABASE_URL` environment variable. No credentials or connection-string values belong in this README or in version control.

## Repository structure

| Path | Contents |
| --- | --- |
| `dev/app/` | Next.js App Router pages and API route handlers for authentication, dashboards, projects, tasks, and adding users to tasks |
| `dev/components/` | Project and task UI components |
| `dev/lib/db.js` | PostgreSQL connection pool configuration |
| `dev/package.json` and `dev/package-lock.json` | Application dependencies and npm scripts/lockfile |
| `Team7_SRS.pdf` | Software Requirements Specification |
| `Team7_SAD.docx` | Software Architecture and Design Specification; **Draft**, with incomplete diagram/design sections |
| `Team7_STP.docx` | Software Test Plan; **Draft**, with an unfilled test schedule |
| `QA/testcases.md` | QA test cases; prepared, with execution pending application availability |
| `Jira.csv` | Export of Jira work items; a point-in-time export, not the live Jira board |

## Project documents

- [Software Requirements Specification (SRS)](Team7_SRS.pdf)
- [Software Architecture and Design Specification (SAD)](Team7_SAD.docx) — **Draft**; the component diagram and request-flow description are incomplete, and some design sections need further detail.
- [Software Test Plan (STP)](Team7_STP.docx) — **Draft**; the schedule is unfilled and the requirements traceability section is partial.
- [QA test cases](QA/testcases.md) — prepared by QA; all listed cases are currently marked **Not Run** pending application availability.
- [Jira work-item export](Jira.csv) — exported planning data; consult Jira for current issue and sprint status.

## Local setup

The application package and npm scripts are under `dev/`. From the repository root:

```sh
cd dev
npm ci
```

Configure `DATABASE_URL` in your local environment with a PostgreSQL connection string. The `dev/.gitignore` excludes environment files; keep local database credentials out of version control. The repository does not include a schema, migrations, database seed data, or instructions for provisioning the PostgreSQL database, so those steps need confirmation from the team before the app can be run end to end.

Available npm scripts, as defined in `dev/package.json`:

| Command (from `dev/`) | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Build the Next.js application |
| `npm run start` | Start the built Next.js application |
| `npm run lint` | Run ESLint |

There is no `test` script, test runner, or automated test suite in the current `dev/` files. The manual QA cases in [`QA/testcases.md`](QA/testcases.md) are prepared but have not been executed. Running the lint or build scripts does not replace executing those test cases.

## Contributing workflow

Until the team documents a formal contribution policy, use this suggested workflow:

1. Choose an existing project issue that describes the work. If the task is not represented, coordinate with the Project Manager before creating an issue.
2. Create a focused branch from the current `main` branch. Include the relevant issue number in the branch name where practical.
3. Make changes limited to that issue and keep credentials, database passwords, and other secrets out of version control.
4. Open a pull request targeting `main`. Link the GitHub issue and include the relevant Jira key when one exists. Summarize the change and note any known gaps.
5. Request review from the relevant teammate, respond to feedback, and wait for approval before merging.
6. Run the applicable checks and tests. In the pull request, report which commands were actually run and their results; do not describe unrun checks as passing. Database-backed testing depends on a confirmed PostgreSQL setup.

No repository-specific branch naming rule, required reviewer count, or merge policy is documented here. Follow any team policy agreed later.
