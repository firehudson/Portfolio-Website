import dechea from 'assets/10-Dechea.jpg';
import santiment from 'assets/9-Santiment.jpg';
import GQTY from 'assets/11-GQTYdev.jpg';
import AuthBuddyVideo from 'assets/AuthBuddy.mp4';
import AuthBuddy from 'assets/AuthBuddy.jpg';
import AlphaVantageChart from 'assets/AlphaVantageChart.jpg';
export const projectData = [
    {
        id: 'Dechea',
        title: 'Dechea',
        role: ' Serverless Project Architect and Sr. Frontend Engineer ',
        brief: 'Dechea is a modern dental practice platform designed to keep patients at the center of care. The application allows for the rapid... ',
        overview: 'Dechea is a modern dental practice platform designed to keep patients at the center of care. The application allows for the rapid creation of medical findings and cost estimates in under 10 minutes.',
        Features: [
            'Developed a patient-centric platform that enhances user experience.',
            'Streamlined medical documentation processes for efficiency.',
            'Managed patient file security with strict adherence to permission protocols.'
        ],
        justify: 'Led adaption of new technologies to improve development efficiency, implemented automated testing to ensure quality, and collaborated closely with stakeholders to refine project requirements and optimize workflows.',
        link: 'https://www.dechea.com/',
        imageUrl: dechea
    },
    {
        id: 'Santiment',
        title: 'Santiment',
        role: ' Sr. Frontend Developer',
        brief: 'Santiment is a crypto platform that allows users to track and monitor their assets while receiving updates on the latest market...',
        overview: 'Santiment is a crypto platform that allows users to track and monitor their assets while receiving updates on the latest market trends.',
        Features: [
            'Built the Santiment web app using SanUI, a core component library for small, reusable React components.',
            'Developed and deployed reusable UI components within Storybook, ensuring cross-browser compatibility.',
            'Integrated components into SanUI to enhance design coherence and scalability across all Santiment projects.'
        ],
        justify: 'As a Sr. Frontend Developer, I was responsible for creating robust UI components, adhering to TDD principles, and promoting collaboration among team members, which led to a 30% reduction in testing time.',
        link: 'https://app.santiment.net',
        imageUrl: santiment
    },
    {
        id: 'GQTY',
        title: 'GQTY',
        role: ' Sr. Frontend Developer ',
        brief: 'GQTY is a platform that enhances the GraphQL development experience by providing advanced features for real-time data',
        overview: 'GQTY is a platform that enhances the GraphQL development experience by providing advanced features for real-time data fetching and manipulation.',
        Features: [
            'Orchestrated the integration of advanced features that attracted over 200 new developers in the first month post-launch.',
            "Highlighted GQTY strengths, including type safety, efficient queries, and automatic code generation.",
            'Demonstrated seamless integration with popular JavaScript frameworks such as React, Vue.js, and Angular.'
        ],
        justify: "In my role, I was responsible for enhancing the platform's capabilities, ensuring a smooth user experience and effective communication of GQTY’s benefits to the developer community.",
        link: 'https://gqty.dev/',
        imageUrl: GQTY
    },
    {
        id: 'AuthBuddy',
        title: 'AuthBuddy',
        role: 'Sr. Front-end Developer',
        brief: 'AuthBuddy is a Two-Factor Authentication (2FA) component designed for secure and seamless account verification.',
        overview: 'AuthBuddy is a 2FA component built with Svelte 5 and SvelteKit, providing a clean user experience with dynamic interactions.',
        Features: [
            '6-digit code input with smooth focus transitions, along with success and error animations for clear feedback.',
            'Real-time display of remaining digits with centralized state management supporting writable stores.',
            'Streamlined file organization using Svelte\'s collocation features.'
        ],
        justify: 'I developed the 2FA component, focusing on usability, maintainability, and efficient state handling. Leveraging Svelte 5\'s runes and Tailwind CSS customizations, I ensured a scalable and user-friendly solution.',
        link: 'https://auth-buddy.vercel.app/',
        imageUrl: AuthBuddy,
        videoUrl: AuthBuddyVideo,
    },
    {
        id: 'AlphaVantageChart',
        title: 'AlphaVantageChart',
        role: 'Front-end Developer',
        brief: 'Alpha Vantage Chart is a web application that fetches stock data from the Alpha Vantage API and visualizes it in a candlestick chart.',
        overview: 'Alpha Vantage Chart is a web application that fetches stock data from the Alpha Vantage API and visualizes it in a candlestick chart. It supports dynamic interval selection and provides a responsive and interactive user experience.',
        Features: [
            'Fetches stock data using Alpha Vantage\'s TIME_SERIES_INTRADAY function for interactive candlestick chart visualizations (ApexCharts).',
            'Enables dynamic interval selection while gracefully handling loading states during API requests.',
            'Optimized data fetching, implemented through server-side rendering (SSR) with Next.js.'
        ],
        justify: 'Developed this application with a focus on efficient data fetching, smooth visualizations, and user-friendly interactions. By leveraging Next.js 14 features, TypeScript for type safety, and ApexCharts for advanced data visualization, I ensured a robust and maintainable solution.',
        link: 'Live Demo',
        imageUrl: AlphaVantageChart,
        videoUrl: AuthBuddyVideo,
    }
];
