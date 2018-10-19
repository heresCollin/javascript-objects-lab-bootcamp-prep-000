var recipes = new Object

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = object
  return Object.assign(newObject,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object,{[key]:value})
}
