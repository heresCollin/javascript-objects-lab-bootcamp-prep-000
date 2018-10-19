var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = object
  Object.assign(newObject,{[key]:value})
  newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object,{[key]:value})
}

function deleteFromObjectByKey(object, key){
  var newObject = object
  delete newObject[key]
  newObject
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  object
}