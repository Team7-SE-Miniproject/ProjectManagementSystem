import test from 'node:test';
import assert from 'node:assert/strict';

const BASE_URL = (process.env.TEST_BASE_URL || 'http://localhost:3000').replace(/\/$/, '');
const ADMIN_USER_ID = process.env.TEST_ADMIN_USER_ID;
const NON_ADMIN_USER_ID = process.env.TEST_NON_ADMIN_USER_ID;
const PROJECT_MANAGER_ID = process.env.TEST_PROJECT_MANAGER_ID;
const TASK_ASSIGNEE_ID = process.env.TEST_TASK_ASSIGNEE_ID;
const TEST_EMAIL = process.env.TEST_LOGIN_EMAIL;
const TEST_PASSWORD = process.env.TEST_LOGIN_PASSWORD;

async function post(path, body) {
  return fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
}

async function json(response) {
  return response.json();
}

test('Sprint 1 API smoke tests', async (t) => {
  // Check that the application is running before attempting endpoint tests.
  try {
    await fetch(BASE_URL, { signal: AbortSignal.timeout(4000) });
  } catch {
    assert.fail(`Cannot reach ${BASE_URL}. Start the Next.js app before running API tests.`);
  }

  await t.test('Registration rejects missing required fields', async () => {
    const response = await post('/api/register', { name: '', email: '', password: '' });
    const body = await json(response);
    assert.equal(response.status, 400);
    assert.match(body.message, /required/i);
  });

  await t.test('Login rejects invalid credentials', async () => {
    const response = await post('/api/login', {
      email: `missing-${Date.now()}@example.invalid`,
      password: 'incorrect-password',
    });
    const body = await json(response);
    assert.equal(response.status, 401);
    assert.match(body.message, /invalid/i);
  });

  await t.test('Login accepts configured valid credentials', async (t) => {
    if (!TEST_EMAIL || !TEST_PASSWORD) {
      t.skip('Set TEST_LOGIN_EMAIL and TEST_LOGIN_PASSWORD to run this test.');
      return;
    }
    const response = await post('/api/login', { email: TEST_EMAIL, password: TEST_PASSWORD });
    const body = await json(response);
    assert.equal(response.status, 200);
    assert.equal(body.message, 'Login successful');
    assert.ok(body.user?.user_id, 'Response should contain the authenticated user ID');
  });

  await t.test('Project creation rejects missing required fields', async () => {
    const response = await post('/api/project', { user_id: ADMIN_USER_ID || 1, name: '' });
    const body = await json(response);
    assert.equal(response.status, 400);
    assert.match(body.error, /missing|required/i);
  });

  await t.test('Non-admin user cannot create a project', async (t) => {
    if (!NON_ADMIN_USER_ID || !PROJECT_MANAGER_ID) {
      t.skip('Set TEST_NON_ADMIN_USER_ID and TEST_PROJECT_MANAGER_ID to run this test.');
      return;
    }
    const response = await post('/api/project', {
      user_id: Number(NON_ADMIN_USER_ID),
      manager_id: Number(PROJECT_MANAGER_ID),
      name: `QA unauthorized project ${Date.now()}`,
      description: 'Created by automated negative test',
    });
    const body = await json(response);
    assert.equal(response.status, 400);
    assert.match(body.error, /only admins/i);
  });

  await t.test('Task creation rejects missing required fields', async () => {
    const response = await post('/api/task', { user_id: ADMIN_USER_ID || 1, title: '' });
    const body = await json(response);
    assert.equal(response.status, 400);
    assert.match(body.error, /missing|required/i);
  });

  await t.test('Unknown user cannot create a task', async () => {
    const response = await post('/api/task', {
      user_id: 999999999,
      project_id: 999999999,
      manager_id: 999999999,
      title: 'Unauthorized QA task',
      description: 'Negative authorization test',
    });
    const body = await json(response);
    assert.equal(response.status, 400);
    assert.match(body.error, /cannot create tasks/i);
  });
});
