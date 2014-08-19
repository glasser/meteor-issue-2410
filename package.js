Package.describe({
});

Package.onUse(function (api) {
  // Dev packages
  api.use("hogwash");
  api.use("mizzao:partitioner@0.5.2");
});

Package.onTest(function (api) {
  api.use("mizzao:partitioner");
  api.use("meteor-issue-2410");
});
