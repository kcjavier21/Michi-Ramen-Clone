const beverages = [
    {
        _id: '3001',
        category: 'Beer',
        items: ['Draft', 'Japanese Bottles']
    },
    {
        _id: '3002',
        category: 'Sake',
        items: ['Not Available']
    },
    {
        _id: '3003',
        category: 'Wine',
        items: ['Not Available']
    },
    {
        _id: '3004',
        category: 'Tea',
        items: ['Cold Tea', 'Hot Tea']
    }
]

export function getBeveragesList() {
    return beverages;
}
