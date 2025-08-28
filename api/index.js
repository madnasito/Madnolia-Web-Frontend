export default async (req, res) => {
  const { default: app } = await import('../dist/madnolia-web-frontend/server/server.mjs');
  return app(req, res);
};