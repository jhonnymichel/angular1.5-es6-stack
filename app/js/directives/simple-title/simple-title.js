function simpleTitle($interval) {
  return {
    restrict: "E",
    template: require("./simple-title-template.html"),
    scope: {
      name: "="
    },
    link: function(scope, element) {
      $interval(
        (_) => {
          let value = Math.round(10 + Math.random() * 30);
          element.css({
            "font-size": `${value}px`
          });
        },
        1000
      );
    }
  };
}

export default angular.module("app.simple-title", [])
  .directive("simpleTitle", ["$interval", simpleTitle])
  .name;
