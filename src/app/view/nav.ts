export const navItems = [
    // {
    //     name: 'Dashboard',
    //     url: 'dashboard',
    //     icon: 'nav-icon icon-speedometer',
    // },
    {
        name: 'Dashboard',
        url: 'dashboard',
        icon: 'icon-speedometer',
        badge: {
            variant: 'info',
            text: 'NEW'
        }
    },
    {
        title: true,
        name: 'Product'
    },
    {
        name: 'Products',
        url: 'products',
        icon: 'icon-layers'
    },
    {
        title: true,
        name: 'Works'
    },
    {
        name: 'Daily Works',
        url: 'dailyworks',
        icon: 'icon-people'
    },
    {
        name: 'Online Booking',
        url: 'onlinebooking',
        icon: 'icon-book-open'
    },
    {
        title: true,
        name: 'Services / Repair'
    },
    {
        name: 'Services',
        url: 'services',
        icon: 'icon-support'
    },
    {
        name: 'Spare Parts',
        url: 'spareparts',
        icon: 'cui-briefcase'
    },
    {
        name: 'Damage',
        url: 'damage',
        icon: 'cui-shield'
    },
    {
        name: 'Damage Repair',
        url: 'damagerepair',
        icon: 'cui-wrench'
    },
    {
        title: true,
        name: 'Expense'
    },
    {
        name: 'Insurance',
        url: 'insurance',
        icon: 'icon-wallet'
    },
    {
        name: 'Due',
        url: 'due',
        icon: 'icon-calendar'
    },
    {
        name: 'Salary',
        url: 'salary',
        icon: 'icon-drawer'
    },
    {
        name: 'Other Expense',
        url: 'otherexpense',
        icon: 'icon-note'
    },
    {
        name: 'Payments',
        url: 'payments',
        icon: 'icon-credit-card'
    },
    {
        title: true,
        name: 'Reports'
    },
    {
        name: 'Statistics',
        url: 'statistics',
        icon: 'icon-chart'
    },
    {
        name: 'Reports',
        url: 'reports',
        icon: 'icon-docs',
        children: [
            {
                name: 'Daily Work Report',
                url: 'reports/dailyworkreport',
                icon: 'icon-docs'
            }
        ]
    },
    // {
    //     name: 'Settings',
    //     url: 'settings',
    //     icon: 'icon-settings'
    // }
];
