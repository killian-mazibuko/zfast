import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Killian",
      email: "ktmazibuko@zifast.co.zw",
      password: bcrypt.hashSync("12345", 8),
      isAdmin: true,
    },
    {
      name: "KTMzansi",
      email: "ktmzansi@gmail.com",
      password: bcrypt.hashSync("12345", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "ZiFast Vegetable Box",
      category: "Vegetables",
      image: "/images/p1.jpg",
      price: 12,
      countInStock: 10,
      brand: "N/A",
      rating: 4.5,
      numReviews: 10,
      description:
        "Potatoes, Tomatoes, Onion, Carrot, Cabbage, Lettuce, Brocolli, Cauliflower, Sweet Potato, Cucumber, Beetroot",
    },
    {
      name: "Brocolli",
      category: "Vegetables",
      image: "/images/p2.jpg",
      price: 2,
      countInStock: 5,
      brand: "N/A",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      _id: "3",
      name: "Butternut",
      category: "Vegetables",
      image: "/images/p3.jpg",
      price: 1.5,
      countInStock: 7,
      brand: "N/A",
      rating: 4.8,
      numReviews: 17,
      description: "high quality product",
    },
    {
      name: "Carrots",
      category: "Vegetables",
      image: "/images/p4.jpg",
      price: 1.5,
      countInStock: 7,
      brand: "N/A",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      name: "Cucumber",
      category: "Vegetables",
      image: "/images/p5.jpg",
      price: 2,
      countInStock: 11,
      brand: "N/A",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Cabbage",
      category: "Vegetables",
      image: "/images/p6.jpg",
      price: 0.5,
      countInStock: 4,
      brand: "N/A",
      rating: 4.5,
      numReviews: 15,
      description: "high quality product",
    },
  ],
};
export default data;