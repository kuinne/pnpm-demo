function readPackage(pkg, context) {
  if (pkg.name === "foo" && pkg.version.startsWith("1.")) {
    pkg.dependencies = {
      ...pkg.dependencies,
      bar: "^2.0.0",
    };
    context.log("bar@1 => bar@2 in dependencies of foo");
  }

  if (pkg.dependencies.baz) {
    pkg.dependencies.baz = "1.2.3";
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
