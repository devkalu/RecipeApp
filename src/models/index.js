export class Category {
  constructor(id, title, color) {
    (this.id = id), (this.title = title), (this.color = color);
  }
}

export class Meal {
  constructor(
    id,
    catgoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    (this.id = id),
      (this.catgoryIds = catgoryIds),
      (this.title = title),
      (this.affordability = affordability),
      (this.complexity = complexity),
      (this.imageUrl = imageUrl),
      (this.duration = duration),
      (this.ingredients = ingredients),
      (this.steps = steps),
      (this.isGlutenFree = isGlutenFree),
      (this.isVegan = isVegan),
      (this.isVegetarian = isVegetarian),
      (this.isLactoseFree = isLactoseFree);
  }
}
