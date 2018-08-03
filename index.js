var recipes = {key: 'value'}

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value
  return recipes
}

function deleteFromObjectByKey(recipes, key){
  delete recipes.key;
  return recipes
}

function desctructivelyDeleteFromObjectByKey(object, key){
  var newrecipes = Object.assign({}, recipes)
  delete recipes.key;
  return recipes
}