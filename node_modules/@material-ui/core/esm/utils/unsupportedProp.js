function unsupportedProp(props, propName, componentName, location, propFullName) {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  var propFullNameSafe = propFullName || propName;

  if (typeof props[propName] !== 'undefined') {
    return new Error("The property `".concat(propFullNameSafe, "` is not supported. Please remove it."));
  }

  return null;
}

export default unsupportedProp;