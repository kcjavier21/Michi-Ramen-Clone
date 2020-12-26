const locations = [
    {
        _id: '4001',
        name: 'Anderson Mill',
        address: {
                road: '10700 Anderson Mill Rd.', 
                city: 'Austin, TX 78750', 
                building: 'Williamson Square'
                },
        phone: '(512) 953-8143',
        hours: { 
                frequency: 'Open Daily', 
                timeRange: '11am - 10pm'
                },
        services: ['Take-Out', '3rd-party Delivery']
    },
    {
        _id: '4002',
        name: 'South Lamar',
        address: {
                road: '3005 South Lamar Blvd. D-114B', 
                city: 'Austin, TX 78704', 
                building: 'Corners Shopping Center'
        },
        phone: '(512) 394-6350',
        hours: { 
                frequency: 'Open Daily', 
                timeRange: '11am - 10pm'
        },
        services: ['Take-Out', '3rd-party Delivery']
    },
    {
        _id: '4003',
        name: 'North Lamar',
        address: {
                road: '6519 North Lamar Blvd.', 
                city: 'Austin, TX 78752', 
                building: ''
        },
        phone: '(512) 386-1908',
        hours: { 
                frequency: 'Open Daily', 
                timeRange: '11am - 10pm'
        },
        services: ['Take-Out', '3rd-party Delivery']
    }
];

export function getLocations() {
    return locations;
}