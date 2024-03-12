import { reactive } from 'vue';

export const store = reactive({

    headerLinks: ['Home', 'About us', 'Portfolio', 'Our Process', 'Pricing', 'Blog', 'Contact'],

    animationCards: [

        {
            url: '/img/smart1.png',
            title: '3D Modelling',
            text: 'We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, well drill deep to deliver above and beyond your expectatlons.',
            color: 'first',
        },

        {
            url: '/img/smart2.png',
            title: 'Collaboration',
            text: 'We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, well drill deep to deliver above and beyond your expectatlons.',
            color: 'second',
        },

        {
            url: '/img/smart3.png',
            title: 'Creativity',
            text: 'We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, well drill deep to deliver above and beyond your expectatlons.',
            color: 'third',
        },

    ],

    staticsCounter: [
        {
            number: 700,
            referenceTo: 'Project done',
        },
        {
            number: 250,
            referenceTo: 'Happy Clients',
        },
        {
            number: 25,
            referenceTo: 'Team Members',
        },
        {
            number: 12,
            referenceTo: 'Years on the market',
        },
    ],

    processCards: [
        {
            url: '/img/process1.png',
            title: 'Pre-Production',
            text: 'Well take your idea and create a techincal script which consists of action notes and animation descriptions',
            numberNot: 4,
        },

        {
            url: '/img/process2.png',
            title: 'Scripting',
            text: 'Well take your idea and create a techincal script which consists of action notes and animation descriptions',
            numberNot: 1,
        },

    ],

    teamMembers: [
        {
            memberImage: '/img/team1.png',
            name: 'Robert Coleman',
            role: 'Owner and Creative Director',
        },
        {
            memberImage: '/img/team2.png',
            name: 'Don Woods',
            role: 'Administrator',
        },
        {
            memberImage: '/img/team2.png',
            name: 'Tomas Nash',
            role: '2d animator and Compositor',
        },
    ],

    footerLinks: ['About Us', 'Portfolio', 'Pircing', 'Career', 'Contact'],


})