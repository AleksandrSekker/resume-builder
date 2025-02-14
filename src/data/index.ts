export const defaultData = {
  personalDetails: {
    sectionName: 'Details',
    jobTitle: { label: 'Job Title', title: 'Front end Developer' },
    imageUrl: '/assets/Avatar.jpg',
    personalDetailsList: [
      {
        label: 'First Name',
        title: 'Oleksandr',
        id: 0,
      },
      {
        label: 'Last Name',
        title: 'Sekker',
        id: 1,
      },
      {
        label: 'City',
        title: 'Bobrynets',
        id: 2,
      },
      {
        label: 'Country',
        title: 'Ukraine',
        id: 3,
      },
      {
        label: 'Phone',
        title: '+380686902733',
        link: 'tel:+380686902733',
        id: 4,
      },
      {
        label: 'Email',
        title: 'oleksandr.sekker@gmail.com',
        link: 'mailto:oleksandr.sekker@gmail.com',
        id: 5,
      },
    ],
  },
  profile: {
    sectionName: 'Profile',
    text: 'I am a software engineer with over two years of experience developing scalable and responsive web and mobile applications. I have a strong understanding of front-end development and have worked on various projects, such as an extension for online shopping, a mentorship app, and website onboarding for banks and landing websites. My passion for technology and desire to learn new skills allows me to stay up-to-date with the latest developments in the React ecosystem.',
  },
  employmentHistory: {
    sectionName: 'Employment History',
    employmentList: [
      {
        id: 0,
        jobTitle: {
          label: 'Job Title',
          title: 'Front end Developer',
        },
        employer: {
          label: 'Employer',
          title: 'EZLOGZ',
        },
        startEndDate: {
          label: 'Start & End Date',
          titleStart: 'Oct, 2023',
          titleEnd: 'May, 2024',
        },
        city: {
          label: 'City',
          title: 'Remote',
        },
        description: {
          label: 'Description',
          title:
            'Collaborated with cross-functional teams to design and develop web applications using Next and related technologies\n' +
            'Developed reusable components  and make code refactoring in code\n' +
            'Implemented responsive designs and mobile-first layouts using tailwind or scss\n' +
            'Implemented different animations using framer motion\n' +
            'Implement forms using react-hook-form or formik\n' +
            'Improved page speed, SEO optimization, and implement widget on few company websites',
        },
      },
      {
        id: 1,
        jobTitle: {
          label: 'Job Title',
          title: 'Front end Developer',
        },
        employer: {
          label: 'Employer',
          title: 'Onix-Systems',
        },
        startEndDate: {
          label: 'Start & End Date',
          titleStart: 'Jul, 2021',
          titleEnd: 'Mar, 2023',
        },
        city: {
          label: 'City',
          title: 'Remote',
        },
        description: {
          label: 'Description',
          title:
            'Implemented multi-step authorization by updating user information in each step \n' +
            'Added the ability to add and remove items from external websites and show them in the wish list in the extension. Also when hovering over items on an external website, make the ability to load similar items from other stores.\n' +
            'Made project optimization by implementing eslint rules for company standards, improved test coverage, and developed reusable components for faster and more efficient development\n' +
            'Implemented auto-fill for adders from Geo-location\n' +
            "Added checking of noise when scanning a person's face using azure\n" +
            'Implemented the ability to skip steps with photos and upload them to the server by keyboard hotkeys\n' +
            'Worked with REST API and integrated third-party services into applications\n' +
            'Participated in agile development processes and followed best practices for collaborative development',
        },
      },
    ],
  },
  education: {
    sectionName: 'Education',
    educationList: [
      {
        id: 0,
        school: {
          label: 'School',
          title: 'Agrarian University',
        },
        degree: {
          label: 'Degree',
          title: 'Geodesy, cartography and land management',
        },
        startEndDate: {
          label: 'Start & End Date',
          titleStart: '',
          titleEnd: 'Dec, 2019',
        },
        city: {
          label: 'City',
          title: 'Bila Cerkva',
        },
        description: {
          label: 'Description',
          title: 'Bachelor and Master degree',
        },
      },
    ],
  },
  links: {
    sectionName: 'Links',
    links: [
      {
        id: 0,
        title: 'Personal website',
        link: 'https://oleksandrsekker.com/',
      },
      {
        id: 1,
        title: 'GitHub',
        link: 'https://github.com/AleksandrSekker',
      },
      {
        id: 2,
        title: 'Telegram',
        link: 'https://t.me/sekk_er',
      },
      {
        id: 3,
        title: 'Linkedin',
        link: 'https://www.linkedin.com/in/aleksandr-sekker-521352161/',
      },
    ],
  },
  skills: {
    sectionName: 'Skills',
    skillsList: [
      {
        id: 0,
        title: 'React',
      },
      {
        id: 1,
        title: 'TypeScript',
      },
      {
        id: 2,
        title: 'NextJS',
      },
      {
        id: 3,
        title: 'HTML & CSS',
      },
      {
        id: 4,
        title: 'JavaScript',
      },
    ],
  },
  languages: {
    sectionName: 'Languages',
    languagesList: [
      {
        id: 0,
        title: 'English',
        level: 'B2',
      },
    ],
  },
};
