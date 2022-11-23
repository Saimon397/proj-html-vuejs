import { reactive } from "vue";

export const store = reactive({

    NavList: [
        {
            text: "Home",
            url: "#",
            hover: false,
            link: [
                {
                    title: 'maxCoach education',
                    hot: true,
                    new: false
                },
                {
                    title: 'course portal',
                    hot: false,
                    new: false
                },
                {
                    title: 'distant learning',
                    hot: true,
                    new: false
                },
                {
                    title: 'multimedia pedagogy',
                    hot: false,
                    new: false
                },
                {
                    title: 'moderrn schooling',
                    hot: false,
                    new: false
                },
                {
                    title: 'remote training',
                    hot: false,
                    new: false
                },
                {
                    title: 'health coaching',
                    hot: false,
                    new: false
                },
                {
                    title: 'gym coaching',
                    hot: false,
                    new: false
                },
                {
                    title: 'business',
                    hot: false,
                    new: false
                },
                {
                    title: 'artist',
                    hot: false,
                    new: false
                },
                {
                    title: 'kitchen coach',
                    hot: false,
                    new: false
                },
                {
                    title: 'motivation',
                    hot: false,
                    new: false
                },
                {
                    title: 'dancin',
                    hot: false,
                    new: false
                },
                {
                    title: 'guitar',
                    hot: false,
                    new: false
                },
                {
                    title: 'yoga',
                    hot: false,
                    new: false
                },
                {
                    title: 'photography',
                    hot: false,
                    new: false
                },
                {
                    title: 'personal finance',
                    hot: false,
                    new: false
                },
                {
                    title: 'sales coaching',
                    hot: false,
                    new: true
                },
                {
                    title: 'mental therapy',
                    hot: false,
                    new: true
                },

            ],
        },
        {
            text: "Pages",
            url: "#",
            hover: false,
            link: [
                {
                    title: 'start here',
                    hot: false,
                    new: false
                },

                {
                    title: 'success story',
                    hot: false,
                    new: false
                },

                {
                    title: 'about me',
                    hot: false,
                    new: false
                },

                {
                    title: 'about us 01',
                    hot: false,
                    new: false
                },

                {
                    title: 'about us 02',
                    hot: false,
                    new: false
                },

                {
                    title: 'about us 03',
                    hot: false,
                    new: false
                },

                {
                    title: 'contact me',
                    hot: false,
                    new: false
                },

                {
                    title: 'contact us',
                    hot: false,
                    new: false
                },

                {
                    title: 'purchase guide',
                    hot: false,
                    new: false
                },

                {
                    title: 'privacy policy',
                    hot: false,
                    new: false
                },

                {
                    title: 'terms of service',
                    hot: false,
                    new: false
                },



            ],
        },
        {
            text: "Courses",
            url: "#",
            hover: false,
            link: [
                {
                    title: 'course grid 01',
                    hot: false,
                    new: false
                },
                {
                    title: 'course grid 02',
                    hot: false,
                    new: false
                },
                {
                    title: 'course grid 03',
                    hot: false,
                    new: false
                },
                {
                    title: 'membership level',
                    hot: false,
                    new: false
                },
                {
                    title: 'become a teacher',
                    hot: false,
                    new: false
                },
                {
                    title: 'profile',
                    hot: false,
                    new: false
                },
                {
                    title: 'checkout',
                    hot: false,
                    new: false
                },
                {
                    title: 'single layout',
                    hot: false,
                    new: false
                },


            ],
        },
        {
            text: "Features",
            url: "#",
            hover: false,
            link: [
                {
                    title: 'events',
                    hot: false,
                    new: false
                },

                {
                    title: 'zoom meetings',
                    hot: false,
                    new: false
                },
            ],
        },
        {
            text: "Blog",
            url: "#",
            hover: false,
            link: [
                {
                    title: 'blog grid',
                    hot: false,
                    new: false
                },
                {
                    title: 'blog masonry',
                    hot: false,
                    new: false
                },
                {
                    title: 'blog classic',
                    hot: false,
                    new: false
                },
                {
                    title: 'blog list',
                    hot: false,
                    new: false
                },
            ],
        },
        {
            text: "Shop",
            url: "#",
            hover: false,
            link: [
                {
                    title: 'shop left sidebar',
                    hot: false,
                    new: false
                },
                {
                    title: 'shop right sidebar',
                    hot: false,
                    new: false
                },
                {
                    title: 'cart',
                    hot: false,
                    new: false
                },
                {
                    title: 'wishlist',
                    hot: false,
                    new: false
                },
                {
                    title: 'single product',
                    hot: false,
                    new: false
                },
            ],
        }
    ],

    LanguageList: [
        {
            item: '🇬🇧',
        },
        {
            item: '🇫🇷',
        },
        {
            item: '🇩🇪',
        },
    ],

    elements: [
        {
            img: 'img/icons8-luce-accesa.gif',
            name: 'One to One',
            info: 'Getting the necessary clarity about the current state to help you improve your game.',
        },
        {
            img: 'img/icons8-posizione-globale.gif',
            name: 'Anywhere',
            info: 'Access to valuable and portable program which allow you to setup and live anywhere you want.',
        },
        {
            img: 'img/icons8-orologio.gif',
            name: 'On Time',
            info: 'Punctuality is our top priority because it\'s an essential criteria to assess a program quality.',
        },
        {
            img: 'img/icons8-monitor.gif',
            name: 'Online Coures',
            info: 'Online business coaching now offers you a very powerful way to empower your business into success.',
        },
        {
            img: 'img/icons8-grafico-ad-anello.gif',
            name: 'Consulting',
            info: 'You will get a clear sense of direction for your business, thorough assessment and faster results.',
        },
        {
            img: 'img/icons8-impostazioni.gif',
            name: 'Self Development',
            info: 'Business Coaching often keep your focus and develop you both in a professional and personal way.',
        },
    ],

    elements2: [
        {
            img: 'img/home-business-service-slide-01-480x298.jpg',
            name: 'Consultative Trainig',
            info: 'with a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways.',
            url: '#nogo',
        },
        {
            img: 'img/home-business-service-slide-02-480x298.jpg',
            name: 'Real Deal Coaching',
            info: 'Brings an exceptionally powerful opportunity. Being able to accept, to work with that opportunity.',
            url: '#nogo',
        },
        {
            img: 'img/home-business-service-slide-03-480x298.jpg',
            name: 'Advisor Training Program',
            info: 'Getting high quality, entrepreneur mindset driven online business coaching, is what is needed.',
            url: '#nogo',
        },
    ],

    cards: [
        {
            img: 'img/course-02-443x600.jpg',
            price: '$40.00',
            info1: 'Learning to Write as a Professional Author',
            lessons: 20,
            Students: 63,
        },
        {
            img: 'img/stock-full-hd-03-443x600.jpg',
            price: 'Free',
            info1: 'Customer-centric Info-Tech Strategies',
            lessons: 24,
            Students: 896,
        },
        {
            img: 'img/stock-full-hd-04-443x600.jpg',
            price: '$19.00',
            info1: 'Open Programming Courses for Everyone: Python',
            lessons: 17,
            Students: 65,
        },
        {
            img: 'img/stock-full-hd-06-443x600.jpg',
            price: '$26.00',
            info1: 'Academic Listening and Note-taking',
            lessons: 14,
            Students: 68,
        },
    ],

    elements3: [
        {
            name: 'How can we help ?',
            info: 'How many courses you\'ve been on, using however many techniques and methods. Unless you\'ve come to realize the value of mindset, then you\'ve yet to understand how success comes. With everyone else\'s mindset involved impacting too. Hence why business coaching is so crucial for success.',
        },
        {
            name: 'Why would I need a business COACH ?',
            info: 'Every great entrepreneur is surrounded by coaches and advisor. A great business coach will listen and guide you to success. Perhaps most importantly, a business coach will make you focus on your goals and hold you accountable to th things you should do, and to where you want your business to be.',
        },
        {
            name: 'What is one-on-one coaching ?',
            info: 'We understand that every business is at a different stage of development; this is why we\'ve also developed multiple Group Coaching programs to fit the needs of every kind od business. Unlike a consultant, your personal MaxCoach will do more than just show you want to do - he or she will be with you when you need them most.',
        },
    ],

    elements4: [
        {
            cap: '📍 Texas, US',
            name: 'Storytelling Workshop',
            num: '22',
            data: 'APR',
            buttonn: 'Get ticket',
        },
        {
            cap: '📍 New York, US',
            name: 'Painting Art Contest 2020',
            num: '10',
            data: 'OCT',
            buttonn: 'Get ticket',
        },
        {
            cap: '📍 Hamburg, Germany',
            name: 'International Art Fair 2020',
            num: '23',
            data: 'NOV',
            buttonn: 'Get ticket',
        },
        {
            cap: '📍 Illinois, US',
            name: 'Street Performance: Call for Artist',
            num: '15',
            data: 'DEC',
            buttonn: 'Get ticket',
        },
        {
            cap: '📍 Illinois, US',
            name: 'Consumer Food Safety Education Conference',
            num: '22',
            data: 'JUL',
            buttonn: 'Get ticket',
        },
        {
            cap: '📍 Dubai',
            name: 'How meditation improve your mental health',
            num: '12',
            data: 'AUG',
            buttonn: 'Get ticket',
        },
    ],

    addresses: [
        {
            text: '382 NE 191st St # 87394 Mianmi, FL 33179-3899'
        },
        {
            text: '+1(305)547-9909(9am-5pm ESTm Monday - Friday)'
        },
        {
            text: 'support@maxcoach.com'
        }
    ],

    info: [
        {
            inf: 'Start here'
        },
        {
            inf: 'Blog'
        },
        {
            inf: 'About us'
        },
    ],

    Explore: [
        {
            Exp: 'Memebership'
        },
        {
            Exp: 'Purchase guide'
        },
        {
            Exp: 'Privacy policy'
        },
        {
            Exp: 'Terms of service'
        },
    ],

    NotDefined: [
        {
            moreInfo: 'Success'
        },
        {
            moreInfo: 'Courses'
        },
        {
            moreInfo: 'Contact us'
        }
    ],
});