import type { Category, Product } from "./types";

// Don't change the order as this will affect the product list
export const categories: Category[] = [
  { id: "a1b2c3d4-1111-4a1b-8c2d-3e4f5a6b7c8d", name: "Coffe" },
  { id: "b2c3d4e5-2222-4b2c-9d3e-4f5a6b7c8d9e", name: "Pastry" },
  { id: "c3d4e5f6-3333-4c3d-8e4f-5a6b7c8d9e0f", name: "Food" },
  { id: "d4e5f6a7-4444-4d4e-9f5a-6b7c8d9e0f1a", name: "Beverage" },
];

const [coffee, pastry, food, beverage] = categories;

export const products: Product[] = [
  // Coffe
  {
    id: "a3f1c2d4-5b6e-4a7f-8c9d-0e1f2a3b4c5d",
    imgUrl:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400",
    name: "Espresso",
    category: coffee,
    price: 2.5,
  },
  {
    id: "b4e2d3c5-6c7f-4b8a-9d0e-1f2a3b4c5d6e",
    imgUrl:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400",
    name: "Cappuccino",
    category: coffee,
    price: 3.75,
  },
  {
    id: "c5f3e4d6-7d8a-4c9b-8e1f-2a3b4c5d6e7f",
    imgUrl: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400",
    name: "Latte",
    category: coffee,
    price: 4.0,
  },
  {
    id: "d6a4f5e7-8e9b-4d0c-9f2a-3b4c5d6e7f80",
    imgUrl:
      "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400",
    name: "Americano",
    category: coffee,
    price: 3.0,
  },

  // Pastry
  {
    id: "e7b5a6f8-9f0c-4e1d-8a3b-4c5d6e7f8091",
    imgUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400",
    name: "Butter Croissant",
    category: pastry,
    price: 3.25,
  },
  {
    id: "f8c6b7a9-a01d-4f2e-9b4c-5d6e7f8091a2",
    imgUrl:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400",
    name: "Chocolate Chip Cookie",
    category: pastry,
    price: 2.0,
  },
  {
    id: "09d7c8ba-b12e-4a3f-8c5d-6e7f8091a2b3",
    imgUrl:
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400",
    name: "Blueberry Muffin",
    category: pastry,
    price: 3.5,
  },
  {
    id: "1ae8d9cb-c23f-4b4a-9d6e-7f8091a2b3c4",
    imgUrl:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400",
    name: "Cinnamon Roll",
    category: pastry,
    price: 4.25,
  },

  // Food
  {
    id: "2bf9eadc-d340-4c5b-8e7f-8091a2b3c4d5",
    imgUrl:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400",
    name: "Turkey Club Sandwich",
    category: food,
    price: 8.5,
  },
  {
    id: "3c0afbed-e451-4d6c-9f80-91a2b3c4d5e6",
    imgUrl:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400",
    name: "Avocado Toast",
    category: food,
    price: 7.25,
  },
  {
    id: "4d1b0cfe-f562-4e7d-8a91-a2b3c4d5e6f7",
    imgUrl:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
    name: "Garden Salad",
    category: food,
    price: 6.75,
  },
  {
    id: "5e2c1d0f-0673-4f8e-9ba2-b3c4d5e6f708",
    imgUrl:
      "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=400",
    name: "Breakfast Bagel",
    category: food,
    price: 6.0,
  },

  // Beverage
  {
    id: "6f3d2e10-1784-4a9f-8cb3-c4d5e6f70819",
    imgUrl:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400",
    name: "Fresh Orange Juice",
    category: beverage,
    price: 4.5,
  },
  {
    id: "704e3f21-2895-4bba-9dc4-d5e6f708192a",
    imgUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400",
    name: "Iced Tea",
    category: beverage,
    price: 3.25,
  },
  {
    id: "815f4032-39a6-4cca-8ed5-e6f708192a3b",
    imgUrl: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400",
    name: "Strawberry Smoothie",
    category: beverage,
    price: 5.5,
  },
  {
    id: "92605143-4ab7-4ddb-9fe6-f708192a3b4c",
    imgUrl: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400",
    name: "Sparkling Lemonade",
    category: beverage,
    price: 3.75,
  },
];
