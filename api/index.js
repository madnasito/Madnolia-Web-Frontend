import('../dist/madnolia-web-frontend/server/server.mjs').then(module => module.app);
export default async (req, res) => {
  const { app } = await import('../dist/madnolia-web-frontend/server/server.mjs');
  return app(req, res);
};