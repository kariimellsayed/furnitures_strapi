module.exports = ({ env }) => ({
  host: "0.0.0.0", // استقبل أي اتصال خارجي
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  url: env("PUBLIC_URL", ""), // إضافة المتغير الجديد
});
