var H5PUpgrades = H5PUpgrades || {};

H5PUpgrades['H5P.OERMultiChoice'] = (function () {
  return {
    1: {
      1: function(parameters, finished) {
        console.log(paramters);
        // Remove old images from the existing content
        finished(null, parameters);
      }
    }
  };
})();
