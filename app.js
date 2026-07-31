const restaurant = [];
const rest_name = ["The Spice House",
  "Urban Tadka",
  "Food Junction",
  "Royal Biryani",
  "Pizza Palace",
  "The Burger Hub",
  "Green Leaf Restaurant",
  "Cafe Delight",
  "Mumbai Masala",
  "Delhi Darbar",
  "Punjabi Rasoi",
  "South Indian Corner",
  "Tandoori Nights",
  "Taste of India",
  "The Food Factory",
  "Highway Dhaba",
  "Royal Treat",
  "Chai & Snacks",
  "The Curry House",
  "Foodie's Paradise"]

  
  const foodTypes = ["Indian",
  "North Indian",
  "Fast Food",
  "Biryani",
  "Pizza",
  "Burgers",
  "Vegetarian",
  "Cafe",
  "Maharashtrian",
  "Mughlai",
  ];

  const delhiLocations = [
  "Mumbai",
  "Pune",
  "Nashik",
  "Nagpur",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Ahmedabad",
  "Kolkata"
];

for(let i=0;i<100;i++){

  const obj = {};
  obj ["image"] = ["one","two","three","four","five","six","seven","eight","nine","ten"][Math.floor(Math.random()*10)]
  obj["Name"] = rest_name[Math.floor(Math.random()*20)];
  obj['rating'] = Math.floor(Math.random()*5+1);
  obj["food_type"] = foodTypes[Math.floor(Math.random()*10)];
  obj["Price_for_two"] = Math.floor(Math.random()*2401+100);
  obj["location"] = delhiLocations[Math.floor(Math.random()*10)];
  obj["Distance_from_Customer_house"] =  Math.floor;(Math.random()*10+1);
  obj["offers"] = Math.floor(Math.random()*30);
  obj["alchohol"] = Math.random() > 0.7;
  obj["Restaurant_open_time"] =  Math.floor(Math.random()*24);
  obj["Restaurant_close_time"] = (obj["Restaurant_open_time"]*12)%24;


  restaurant.push(obj);
}   

console.log(restaurant);