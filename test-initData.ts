// test-initData.ts
// import crypto from 'crypto';

// const botToken = 'твой_бот_токен';
// const data = {
//     id: '123456789',
//     first_name: 'Test',
//     last_name: 'User',
//     username: 'testuser',
//     auth_date: Math.floor(Date.now() / 1000).toString(),
// };

// const sorted = Object.entries(data)
//     .sort(([a], [b]) => a.localeCompare(b))
//     .map(([k, v]) => `${k}=${v}`)
//     .join('\n');

// const secret = crypto.createHash('sha256').update(botToken).digest();
// const hash = crypto.createHmac('sha256', secret).update(sorted).digest('hex');

// const initData = new URLSearchParams({ ...data, hash }).toString();
// console.log('initData:\n', initData);
