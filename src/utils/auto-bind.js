export default function autoBind(component) {
  const classMethods = Object.getOwnPropertyNames(component.prototype);
  classMethods.forEach((method) => {
    if (method.startsWith('handle')) {
      this[method] = this[method].bind(this);
    }
  });
}
