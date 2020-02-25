import React from 'react';

export const Rules = [
    {
        ruleGroup: 'Money',
        rules: [
            {
                ruleTitle: 'Copper',
                ruleDesc: '10 copper in a silver/no lower coin'
            },
            {
                ruleTitle: 'Silver',
                ruleDesc: '10 silver in a gold/10 copper in a silver'
            },
            {
                ruleTitle: 'Gold',
                ruleDesc: '10 gold in a platinum/10 silver in a gold'
            },
            {
                ruleTitle: 'Platinum',
                ruleDesc: 'no higher coin/10 gold in a platinum'
            },
            {
                ruleTitle: 'Electrum',
                ruleDesc: '2 electrum in a gold/5 silver in an electrum'
            }
        ]
    },
    {
        ruleGroup: 'Armor',
        rules: [
            {
                ruleTitle: 'Armor Table',
                ruleDesc: 'light, medium, heavy, shield',
                link: 'https://666kb.com/i/d65675z8954pmt8k7.png'
            }
        ]
    }
];

export const RulesTwo = [
    {
        title: 'Money',
        desc: 'Chart of conversion rates for money',
        img: 'https://i.pinimg.com/736x/e3/d0/d7/e3d0d701c4044bea1ae3db18e355c595.jpg',
        tags: ['money', 'gold', 'silver', 'copper', 'electrum', 'platinum', 'chart', 'convert', 'conversaion']
    },
    {
        title: 'Armor',
        desc: 'Chart of all armor',
        img: 'https://666kb.com/i/d65675z8954pmt8k7.png',
        tags: ['armor', 'light', 'medium', 'heavy', 'shield', 'chart']
    },
    {
        title: 'Weapons',
        desc: 'Chart of all weapons',
        img: 'https://i.imgur.com/zZV0yGx.png',
        tags: ['weapons', 'simple', 'melee', 'ranged', 'martial', 'chart']
    },
    {
        title: 'Travel',
        desc: 'Travel paces per time',
        img: 'https://thinkdm.files.wordpress.com/2018/11/travel-pace-chart.png?w=568',
        tags: ['travel', 'time']
    },
    {
        title: 'Gear',
        desc: 'List of adventuring gear',
        img: 'https://db4sgowjqfwig.cloudfront.net/campaigns/105191/assets/421030/Adventuring_Gear.png?1423013456',
        tags: ['gear', 'item', 'shop', 'prices']
    },
    {
        title: 'Artisan Tools',
        desc: 'List of artisan tools',
        img: 'https://i.imgur.com/cDOa4wL.png',
        tags: ['artisan', 'tools', 'prices', 'shop']
    },
    {
        title: 'Food, Drink, Lodging',
        desc: 'Prices of living expenses',
        img: 'https://i.pinimg.com/originals/33/d2/98/33d2980b0ad634569a5b826c2aeddf09.png',
        tags: ['food', 'drink', 'lodging', 'prices']
    },
    {
        title: 'Lifestyle Expenses',
        desc: 'Cost of living per day per lifestyle',
        img: 'https://i.pinimg.com/originals/36/0b/f5/360bf5cb8154e4b75cc958f260dccffe.png',
        tags: ['living', 'cost', 'prices']
    }
];

/**
 * {
        title: '',
        desc: '',
        img: '',
        tags: []
    }
 */
