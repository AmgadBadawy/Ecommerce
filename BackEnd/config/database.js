const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL', 'postgresql://postgres:XqrEOBfRrViuGWuRXtlvnxMEwMAoLrQz@junction.proxy.rlwy.net:21482/railway'),
      host: env('DATABASE_HOST', 'junction.proxy.rlwy.net'),  // المضيف
      port: env.int('DATABASE_PORT', 21482),  // المنفذ
      database: env('DATABASE_NAME', 'railway'),  // اسم قاعدة البيانات
      user: env('DATABASE_USERNAME', 'postgres'),  // اسم المستخدم
      password: env('DATABASE_PASSWORD', 'XqrEOBfRrViuGWuRXtlvnxMEwMAoLrQz'),  // كلمة المرور
      ssl: {
        rejectUnauthorized: false,  // إيقاف التحقق من الشهادات إذا لزم الأمر
      },
    },
    pool: {
      min: env.int('DATABASE_POOL_MIN', 2),
      max: env.int('DATABASE_POOL_MAX', 10),
    },
    acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
  },
});
