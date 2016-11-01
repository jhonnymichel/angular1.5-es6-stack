import SimpleTitleController from "./simple-title-controller.js"

export default function simpleTitle() {
  return {
    restrict: "E",
    template: "<h1>Estou testando meu {{name}}</h1>",
    scope: {
      name: "="
    },
  }
}
