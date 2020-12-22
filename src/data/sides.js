const sides = [
    { 
        _id: '2001',
        name: 'Edamame',
        description: 'boiled and salted soybean pods',
        price: 3.95
    },
    { 
        _id: '2002',
        name: 'Seaweed Salad',
        description: 'mix of seaweed, woodear mushrooms, sesame oil and chili flakes',
        price: 3.95
    },
    { 
        _id: '2003',
        name: 'Burnt Ends',
        description: 'our take on the BBQ delicacy, bite-size pieces of pan-seared pork or chicken',
        price: 5.95
    },
    { 
        _id: '2004',
        name: 'Chashu Don',
        description: 'burnt ends over steamed rice topped with green onions and bonito flakes',
        price: 6.95
    },
    { 
        _id: '2005',
        name: 'Curry Rice',
        description: 'tonkotsu curry with chashu, peas, carrots and bed of rice',
        price: 8.95
    },
    { 
        _id: '2006',
        name: 'Veggie Curry Rice',
        description: 'veggie curry with broccoli, peas, carrots and bed of rice',
        price: 8.95
    }   
];

export function getSidesList() {
    return sides;
}