const ramenBowls = [
    {
        _id: "0001",
        type: "Michi",
        price: "10.95",
        chashu: ["lean pork", "pork belly", "spicy ground pork chicken"],
        toppings: ["roasted nori", "mayu oil", "woodear mushrooms", "green onions"],
        bowls: ["Shoyo Tonkotsu"]
    },
    {
        _id: "0002",
        type: "Sapporo",
        price: "11.95",
        chashu: ["lean pork", "pork belly", "spicy ground pork chicken"],
        toppings: ["bean sprouts", "corn/butter", "wooden mushrooms"],
        bowls: ["Miso Tonkotsu"]
    },
    {
        _id: "0003",
        type: "Veggie",
        price: "10.95",
        chashu: [""],
        toppings: ["mix of carrots", "sprouts and cabbage", "sweet corn", "woodear mushrooms", "mayu oil", "green onions"],
        bowls: ["Shoyu", "Miso Shiitake"]
    },
    {
        _id: "0004",
        type: "Meat Lover's",
        price: "13.95",
        chashu: ["lean pork", "pork belly", "spicy ground pork chicken"],
        toppings: ["mix of carrots", "sprouts and cabbage", "sweet corn", "woodear mushrooms", "mayu oil", "green onions"],
        bowls: ["Shoyu Tonkotsu"]
    },
    {
        _id: "0005",
        type: "Jungle",
        price: "13.95",
        chashu: ["lean pork", "pork belly", "spicy ground pork chicken"],
        toppings: ["ground pork", "mayu oil", "woodear mushrooms", "green onions"],
        bowls: ["Lemongrass Tonkotsu"]
    },
    {
        _id: "0006",
        type: "Dipping",
        price: "12.95",
        chashu: ["lean pork", "pork belly", "spicy ground pork chicken"],
        toppings: ["shredded nori",  "green onions", "ground pork", "fresh garlic", "fried onions", "lime wedege", "mayu oil", "woodear mushrooms"],
        bowls: ["Fish Tonkotsu"]
    },
    {
        _id: "0007",
        type: "Tori",
        price: "10.95",
        chashu: ["lean pork", "pork belly", "spicy ground pork chicken"],
        toppings: ["marinated bamboo", "pickled ginger", "woodear mushrooms", "green onions"],
        bowls: ["Shio Chicken"]
    },
    
];

export function getRamenCategories(id) {
    return ramenBowls.filter(r => r.id === id)
}

export function getRamenCategories() {
    return ramenBowls.filter(r => r)
}