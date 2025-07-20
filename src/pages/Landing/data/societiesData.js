export const societiesData = [
  {
    id: 'hkn-society',
    name: 'HKN Society',
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995507.png', // Placeholder icon
    carouselImages: [
      'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg',
      'https://images.pexels.com/photos/905905/pexels-photo-905905.jpeg'
    ],
    description: 'The HKN Society is dedicated to recognizing excellence in the IEEE fields of interest.',
    vision: 'To quest for new technologies in all relative engineering fields by creating a new professional platform for networking and exploring career opportunities.',
    mission: 'To make the students aware about the latest technical advancements. To inculcate a sense of team work and responsibility by encouraging them to organize events.',
    slate: [
      { role: 'Chair', name: 'Dr. Jane Doe', photo: 'https://randomuser.me/api/portraits/women/40.jpg' },
      { role: 'Vice Chair', name: 'Dr. John Smith', photo: 'https://randomuser.me/api/portraits/men/41.jpg' },
      { role: 'Advisor', name: 'Dr. Emily Brown', photo: 'https://randomuser.me/api/portraits/women/42.jpg' }
    ],
    achievements: [
      { title: 'Outstanding Chapter Award', year: 2024, description: 'Recognized for outstanding chapter activities.', image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg' }
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg', caption: 'Induction Ceremony' },
      { img: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg', caption: 'Community Service' }
    ],
    events: {
      past: [
        { title: 'HKN Induction', date: '2023-11-15', description: 'Induction ceremony for new members.', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg' }
      ],
      upcoming: [
        { title: 'Professional Development Workshop', date: '2024-09-20', description: 'Workshop for professional skills.', image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg' }
      ]
    }
  },
  {
    id: 'ieee-circuits-and-systems-society',
    name: 'IEEE Circuits and Systems Society',
    image: 'https://cdn-icons-png.flaticon.com/512/2721/2721297.png',
    carouselImages: [
      'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg',
      'https://images.pexels.com/photos/905905/pexels-photo-905905.jpeg'
    ],
    description: "The IEEE Circuits and Systems Society advances the theory, analysis, design, practical implementation, and application of circuits, and the application of circuit theoretic techniques to systems and signal processing.",
    vision: "To be the leading global community for circuits and systems professionals.",
    mission: "To promote the advancement of circuits and systems theory, design, and implementation.",
    slate: [
      { role: 'Chair', name: 'Dr. Linda Park', photo: 'https://randomuser.me/api/portraits/women/13.jpg' },
      { role: 'Vice Chair', name: 'Dr. Mark Evans', photo: 'https://randomuser.me/api/portraits/men/14.jpg' },
      { role: 'Advisor', name: 'Dr. Sunil Rao', photo: 'https://randomuser.me/api/portraits/men/15.jpg' }
    ],
    achievements: [
      { title: 'Best Paper Award', year: 2023, description: 'Awarded for outstanding research in circuits.', image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg' }
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg', caption: 'Annual Symposium' },
      { img: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg', caption: 'Lab Session' }
    ],
    events: {
      past: [
        { title: 'Circuits Symposium', date: '2023-03-15', description: 'A symposium on advanced circuits.', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg' }
      ],
      upcoming: [
        { title: 'Analog Design Workshop', date: '2024-08-12', description: 'Workshop on analog circuit design.', image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg' }
      ]
    }
  },
  {
    id: 'ieee-signal-processing-society',
    name: 'IEEE Signal Processing Society',
    image: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png',
    carouselImages: [
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
      'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg'
    ],
    description: "The IEEE Signal Processing Society is the world's premier professional society for signal processing scientists and professionals.",
    vision: "To advance and disseminate knowledge and technology in signal processing.",
    mission: "To promote the theory and application of signal processing and its allied fields.",
    slate: [
      { role: 'Chair', name: 'Dr. Maria Gomez', photo: 'https://randomuser.me/api/portraits/women/16.jpg' },
      { role: 'Vice Chair', name: 'Dr. Alex Chen', photo: 'https://randomuser.me/api/portraits/men/17.jpg' },
      { role: 'Advisor', name: 'Dr. Priya Patel', photo: 'https://randomuser.me/api/portraits/women/18.jpg' }
    ],
    achievements: [
      { title: 'Signal Processing Impact Award', year: 2022, description: 'For significant contributions to signal processing.', image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg' }
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/905905/pexels-photo-905905.jpeg', caption: 'DSP Workshop' },
      { img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg', caption: 'Conference' }
    ],
    events: {
      past: [
        { title: 'DSP Conference', date: '2023-05-10', description: 'Conference on digital signal processing.', image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg' }
      ],
      upcoming: [
        { title: 'Audio Signal Bootcamp', date: '2024-07-18', description: 'Bootcamp on audio signal processing.', image: 'https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg' }
      ]
    }
  },
  {
    id: 'ieee-communication-society',
    name: 'IEEE Communication Society',
    image: 'https://cdn-icons-png.flaticon.com/512/3062/3062634.png',
    carouselImages: [
      'https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg',
      'https://images.pexels.com/photos/905905/pexels-photo-905905.jpeg'
    ],
    description: "The IEEE Communication Society is dedicated to the advancement of science, technology, and applications in communications and related disciplines.",
    vision: "To be the leading global community for communications professionals.",
    mission: "To promote the development and application of communication and networking technologies.",
    slate: [
      { role: 'Chair', name: 'Dr. Ayesha Khan', photo: 'https://randomuser.me/api/portraits/women/19.jpg' },
      { role: 'Vice Chair', name: 'Dr. John Lee', photo: 'https://randomuser.me/api/portraits/men/20.jpg' },
      { role: 'Advisor', name: 'Dr. Rakesh Sharma', photo: 'https://randomuser.me/api/portraits/men/21.jpg' }
    ],
    achievements: [
      { title: 'Best Communication Project', year: 2023, description: 'Awarded for excellence in communication systems.', image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg' }
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg', caption: 'Networking Event' },
      { img: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg', caption: 'Tech Talk' }
    ],
    events: {
      past: [
        { title: '5G Symposium', date: '2023-09-12', description: 'Symposium on 5G technologies.', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg' }
      ],
      upcoming: [
        { title: 'IoT Conference', date: '2024-11-22', description: 'Conference on Internet of Things.', image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg' }
      ]
    }
  },
  {
    id: 'ieee-microwave-theory-and-technology-society',
    name: 'IEEE Microwave Theory and Technology Society',
    image: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
    carouselImages: [
      'https://images.pexels.com/photos/905905/pexels-photo-905905.jpeg',
      'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg'
    ],
    description: "The IEEE Microwave Theory and Technology Society advances the theory and application of microwave and millimeter-wave technology.",
    vision: "To be the global leader in microwave theory and technology.",
    mission: "To promote the development and application of microwave technology.",
    slate: [
      { role: 'Chair', name: 'Dr. Emily Carter', photo: 'https://randomuser.me/api/portraits/women/22.jpg' },
      { role: 'Vice Chair', name: 'Dr. Michael Brown', photo: 'https://randomuser.me/api/portraits/men/23.jpg' },
      { role: 'Advisor', name: 'Dr. Suresh Gupta', photo: 'https://randomuser.me/api/portraits/men/24.jpg' }
    ],
    achievements: [
      { title: 'Microwave Innovation Award', year: 2022, description: 'For innovation in microwave technology.', image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg' }
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg', caption: 'Microwave Lab' },
      { img: 'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg', caption: 'Tech Expo' }
    ],
    events: {
      past: [
        { title: 'Microwave Symposium', date: '2023-07-18', description: 'Symposium on microwave theory.', image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg' }
      ],
      upcoming: [
        { title: 'RF Workshop', date: '2024-10-10', description: 'Workshop on RF and microwave systems.', image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg' }
      ]
    }
  },
  {
    id: 'ieee-antennas-and-propagation-society',
    name: 'IEEE Antennas and Propagation Society',
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995507.png',
    carouselImages: [
      'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg',
      'https://images.pexels.com/photos/905905/pexels-photo-905905.jpeg'
    ],
    description: "The IEEE Antennas and Propagation Society is dedicated to the advancement of antenna theory and propagation of electromagnetic waves.",
    vision: "To be the global leader in antennas and propagation research and education.",
    mission: "To promote the development and application of antennas and propagation technologies.",
    slate: [
      { role: 'Chair', name: 'Dr. Olivia White', photo: 'https://randomuser.me/api/portraits/women/25.jpg' },
      { role: 'Vice Chair', name: 'Dr. Ethan Green', photo: 'https://randomuser.me/api/portraits/men/26.jpg' },
      { role: 'Advisor', name: 'Dr. Priya Nair', photo: 'https://randomuser.me/api/portraits/women/27.jpg' }
    ],
    achievements: [
      { title: 'Antenna Design Award', year: 2023, description: 'For innovative antenna design.', image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg' }
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg', caption: 'Antenna Lab' },
      { img: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg', caption: 'Propagation Workshop' }
    ],
    events: {
      past: [
        { title: 'Antenna Symposium', date: '2023-08-10', description: 'Symposium on antenna theory.', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg' }
      ],
      upcoming: [
        { title: 'Wave Propagation Seminar', date: '2024-12-05', description: 'Seminar on electromagnetic wave propagation.', image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg' }
      ]
    }
  },
  {
    id: 'ieee-systems-man-and-cybernetics-society',
    name: 'IEEE Systems, Man, and Cybernetics Society',
    image: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png',
    carouselImages: [
      'https://images.pexels.com/photos/905905/pexels-photo-905905.jpeg',
      'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg'
    ],
    description: "The IEEE SMC Society advances the theory and practice of systems engineering, human-machine systems, and cybernetics.",
    vision: "To be the leading global community for systems, man, and cybernetics professionals.",
    mission: "To promote the development and application of systems and cybernetics technologies.",
    slate: [
      { role: 'Chair', name: 'Dr. Sophia Turner', photo: 'https://randomuser.me/api/portraits/women/28.jpg' },
      { role: 'Vice Chair', name: 'Dr. Liam Patel', photo: 'https://randomuser.me/api/portraits/men/29.jpg' },
      { role: 'Advisor', name: 'Dr. Anjali Rao', photo: 'https://randomuser.me/api/portraits/women/30.jpg' }
    ],
    achievements: [
      { title: 'Cybernetics Research Award', year: 2022, description: 'For outstanding research in cybernetics.', image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg' }
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg', caption: 'Systems Conference' },
      { img: 'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg', caption: 'Human-Machine Workshop' }
    ],
    events: {
      past: [
        { title: 'SMC Symposium', date: '2023-10-05', description: 'Symposium on systems and cybernetics.', image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg' }
      ],
      upcoming: [
        { title: 'Human-Machine Interaction Seminar', date: '2024-09-18', description: 'Seminar on human-machine systems.', image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg' }
      ]
    }
  },
  {
    id: 'ieee-computer-society',
    name: 'IEEE Computer Society',
    image: 'https://cdn-icons-png.flaticon.com/512/2721/2721297.png',
    carouselImages: [
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      'https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg'
    ],
    description: "The IEEE Computer Society is the premier source for information, inspiration, and collaboration in computer science and engineering.",
    vision: "To be the leading provider of technical information, community services, and personalized services to the world's computing professionals.",
    mission: "To advance the theory, practice, and application of computer and information processing science and technology.",
    slate: [
      { role: 'Chair', name: 'Alice Johnson', photo: 'https://randomuser.me/api/portraits/women/1.jpg' },
      { role: 'Vice Chair', name: 'Bob Lee', photo: 'https://randomuser.me/api/portraits/men/2.jpg' },
      { role: 'Advisor', name: 'Dr. Emily Watson', photo: 'https://randomuser.me/api/portraits/women/3.jpg' }
    ],
    achievements: [
      { title: 'Best Student Branch Award', year: 2024, description: 'IEEE Region 10 Recognition', image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg' },
      { title: 'Technical Innovation Prize', year: 2023, description: 'Awarded for outstanding technical project.', image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg' }
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg', caption: 'Annual Meetup' },
      { img: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg', caption: 'Workshop' }
    ],
    events: {
      past: [
        { title: 'AI Conference', date: '2023-04-12', description: 'A major conference on AI.', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg' }
      ],
      upcoming: [
        { title: 'Cloud Computing Bootcamp', date: '2024-09-10', description: 'Hands-on cloud workshop.', image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg' }
      ]
    }
  },
  {
    id: 'ieee-engineering-in-medicine-and-biology-society',
    name: 'IEEE Engineering in Medicine and Biology Society',
    image: 'https://cdn-icons-png.flaticon.com/512/2965/2965380.png',
    carouselImages: [
      'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg'
    ],
    description: "The IEEE EMBS advances the development and application of engineering concepts and methods to biology and medicine.",
    vision: "To be the leading global community for biomedical engineering professionals.",
    mission: "To promote the advancement of engineering in medicine and biology.",
    slate: [
      { role: 'Chair', name: 'Dr. Hannah Kim', photo: 'https://randomuser.me/api/portraits/women/31.jpg' },
      { role: 'Vice Chair', name: 'Dr. Daniel Lee', photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { role: 'Advisor', name: 'Dr. Meera Singh', photo: 'https://randomuser.me/api/portraits/women/33.jpg' }
    ],
    achievements: [
      { title: 'Biomedical Innovation Award', year: 2023, description: 'For innovation in biomedical engineering.', image: 'https://images.pexels.com/photos/106368/pexels-photo-106368.jpeg' }
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg', caption: 'Medical Devices Expo' },
      { img: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg', caption: 'Bioengineering Workshop' }
    ],
    events: {
      past: [
        { title: 'Medical Devices Conference', date: '2023-11-20', description: 'Conference on medical devices.', image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg' }
      ],
      upcoming: [
        { title: 'Bioengineering Symposium', date: '2024-12-10', description: 'Symposium on bioengineering.', image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg' }
      ]
    }
  },
  {
    id: 'ieee-information-theory-society',
    name: 'IEEE Information Theory Society',
    image: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png',
    carouselImages: [
      'https://images.pexels.com/photos/905905/pexels-photo-905905.jpeg',
      'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg'
    ],
    description: "The IEEE Information Theory Society is dedicated to the advancement of the mathematical underpinnings of information technology.",
    vision: "To be the leading global community for information theory professionals.",
    mission: "To promote the development and application of information theory.",
    slate: [
      { role: 'Chair', name: 'Dr. Isabella Rossi', photo: 'https://randomuser.me/api/portraits/women/34.jpg' },
      { role: 'Vice Chair', name: 'Dr. Lucas Wang', photo: 'https://randomuser.me/api/portraits/men/35.jpg' },
      { role: 'Advisor', name: 'Dr. Aditi Sharma', photo: 'https://randomuser.me/api/portraits/women/36.jpg' }
    ],
    achievements: [
      { title: 'Information Theory Prize', year: 2022, description: 'For outstanding contributions to information theory.', image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg' }
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg', caption: 'Theory Conference' },
      { img: 'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg', caption: 'Coding Workshop' }
    ],
    events: {
      past: [
        { title: 'Coding Theory Symposium', date: '2023-09-25', description: 'Symposium on coding theory.', image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg' }
      ],
      upcoming: [
        { title: 'Entropy Seminar', date: '2024-10-30', description: 'Seminar on entropy and information.', image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg' }
      ]
    }
  },
  {
    id: 'ieee-computational-intelligence-society',
    name: 'IEEE Computational Intelligence Society',
    image: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png',
    carouselImages: [
      'https://images.pexels.com/photos/905905/pexels-photo-905905.jpeg',
      'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg'
    ],
    description: "The IEEE Computational Intelligence Society advances the theory, design, application, and development of biologically and linguistically motivated computational paradigms.",
    vision: "To be the global leader in computational intelligence research and application.",
    mission: "To promote the development and application of computational intelligence technologies.",
    slate: [
      { role: 'Chair', name: 'Dr. Julia Müller', photo: 'https://randomuser.me/api/portraits/women/37.jpg' },
      { role: 'Vice Chair', name: 'Dr. Ahmed Hassan', photo: 'https://randomuser.me/api/portraits/men/38.jpg' },
      { role: 'Advisor', name: 'Dr. Mei Lin', photo: 'https://randomuser.me/api/portraits/women/39.jpg' }
    ],
    achievements: [
      { title: 'CI Innovation Award', year: 2023, description: 'For innovation in computational intelligence.', image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg' }
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg', caption: 'CI Symposium' },
      { img: 'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg', caption: 'Neural Networks Workshop' }
    ],
    events: {
      past: [
        { title: 'Neural Networks Conference', date: '2023-06-15', description: 'Conference on neural networks.', image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg' }
      ],
      upcoming: [
        { title: 'Fuzzy Systems Bootcamp', date: '2024-09-10', description: 'Bootcamp on fuzzy systems.', image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg' }
      ]
    }
  },
  {
    id: 'ieee-sensors-council',
    name: 'IEEE Sensors Council',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135755.png',
    carouselImages: [
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
      'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg'
    ],
    description: "The IEEE Sensors Council promotes the theory, design, fabrication, manufacturing, and application of sensors.",
    vision: "To be the leading global community for sensor technology professionals.",
    mission: "To advance the science and application of sensors.",
    slate: [
      { role: 'Chair', name: 'Dr. Elena Petrova', photo: 'https://randomuser.me/api/portraits/women/40.jpg' },
      { role: 'Vice Chair', name: 'Dr. Tomás Silva', photo: 'https://randomuser.me/api/portraits/men/41.jpg' },
      { role: 'Advisor', name: 'Dr. Yuki Tanaka', photo: 'https://randomuser.me/api/portraits/women/42.jpg' }
    ],
    achievements: [
      { title: 'Sensor Innovation Award', year: 2022, description: 'For innovation in sensor technology.', image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg' }
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/905905/pexels-photo-905905.jpeg', caption: 'Sensor Expo' },
      { img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg', caption: 'Workshop' }
    ],
    events: {
      past: [
        { title: 'Sensor Symposium', date: '2023-05-22', description: 'Symposium on sensor technology.', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg' }
      ],
      upcoming: [
        { title: 'Smart Sensors Conference', date: '2024-10-18', description: 'Conference on smart sensors.', image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg' }
      ]
    }
  },
  {
    id: 'ieee-biometrics-council',
    name: 'IEEE Biometrics Council',
    image: 'https://cdn-icons-png.flaticon.com/512/2965/2965380.png',
    carouselImages: [
      'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg'
    ],
    description: "The IEEE Biometrics Council advances the theory, design, and application of biometrics in security and identification.",
    vision: "To be the global leader in biometrics research and application.",
    mission: "To promote the development and application of biometric technologies.",
    slate: [
      { role: 'Chair', name: 'Dr. Marta Rossi', photo: 'https://randomuser.me/api/portraits/women/43.jpg' },
      { role: 'Vice Chair', name: 'Dr. Samuel Lee', photo: 'https://randomuser.me/api/portraits/men/44.jpg' },
      { role: 'Advisor', name: 'Dr. Aisha Rahman', photo: 'https://randomuser.me/api/portraits/women/45.jpg' }
    ],
    achievements: [
      { title: 'Biometrics Research Award', year: 2023, description: 'For outstanding research in biometrics.', image: 'https://images.pexels.com/photos/106368/pexels-photo-106368.jpeg' }
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg', caption: 'Biometrics Expo' },
      { img: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg', caption: 'Security Workshop' }
    ],
    events: {
      past: [
        { title: 'Biometrics Conference', date: '2023-11-10', description: 'Conference on biometrics.', image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg' }
      ],
      upcoming: [
        { title: 'Identity Management Seminar', date: '2024-12-15', description: 'Seminar on identity management.', image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg' }
      ]
    }
  },
  {
    id: 'ieee-photonics-society',
    name: 'IEEE Photonics Society',
    image: 'https://cdn-icons-png.flaticon.com/512/905/905690.png',
    carouselImages: [
      'https://images.pexels.com/photos/905905/pexels-photo-905905.jpeg',
      'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg'
    ],
    description: "The IEEE Photonics Society is dedicated to the advancement of photonics and optoelectronics.",
    vision: "To be the global leader in photonics research and application.",
    mission: "To promote the development and application of photonics technologies.",
    slate: [
      { role: 'Chair', name: 'Dr. Laura Kim', photo: 'https://randomuser.me/api/portraits/women/46.jpg' },
      { role: 'Vice Chair', name: 'Dr. Peter Novak', photo: 'https://randomuser.me/api/portraits/men/47.jpg' },
      { role: 'Advisor', name: 'Dr. Saanvi Mehta', photo: 'https://randomuser.me/api/portraits/women/48.jpg' }
    ],
    achievements: [
      { title: 'Photonics Innovation Award', year: 2022, description: 'For innovation in photonics.', image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg' }
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg', caption: 'Photonics Lab' },
      { img: 'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg', caption: 'Optics Workshop' }
    ],
    events: {
      past: [
        { title: 'Photonics Symposium', date: '2023-10-20', description: 'Symposium on photonics.', image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg' }
      ],
      upcoming: [
        { title: 'Optoelectronics Conference', date: '2024-11-25', description: 'Conference on optoelectronics.', image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg' }
      ]
    }
  },
  {
    id: 'ieee-industrial-electronics-society',
    name: 'IEEE Industrial Electronics Society',
    image: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
    carouselImages: [
      'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg',
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg'
    ],
    description: "The IEEE Industrial Electronics Society advances the theory and application of electronics in industry.",
    vision: "To be the leading global community for industrial electronics professionals.",
    mission: "To promote the development and application of industrial electronics.",
    slate: [
      { role: 'Chair', name: 'Dr. Grace Lee', photo: 'https://randomuser.me/api/portraits/women/49.jpg' },
      { role: 'Vice Chair', name: 'Dr. Oscar Martinez', photo: 'https://randomuser.me/api/portraits/men/50.jpg' },
      { role: 'Advisor', name: 'Dr. Rina Patel', photo: 'https://randomuser.me/api/portraits/women/51.jpg' }
    ],
    achievements: [
      { title: 'Industrial Innovation Award', year: 2023, description: 'For innovation in industrial electronics.', image: 'https://images.pexels.com/photos/106368/pexels-photo-106368.jpeg' }
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg', caption: 'Industry Expo' },
      { img: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg', caption: 'Automation Workshop' }
    ],
    events: {
      past: [
        { title: 'Industrial Electronics Conference', date: '2023-09-30', description: 'Conference on industrial electronics.', image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg' }
      ],
      upcoming: [
        { title: 'Smart Manufacturing Seminar', date: '2024-11-12', description: 'Seminar on smart manufacturing.', image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg' }
      ]
    }
  },
  {
    id: 'ieee-power-electronics-society',
    name: 'IEEE Power Electronics Society',
    image: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
    carouselImages: [
      'https://images.pexels.com/photos/905905/pexels-photo-905905.jpeg',
      'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg'
    ],
    description: "The IEEE Power Electronics Society is dedicated to the advancement of the theory and application of power electronics.",
    vision: "To be the global leader in power electronics research and application.",
    mission: "To promote the development and application of power electronics technologies.",
    slate: [
      { role: 'Chair', name: 'Dr. Lucas Silva', photo: 'https://randomuser.me/api/portraits/men/52.jpg' },
      { role: 'Vice Chair', name: 'Dr. Emily Brown', photo: 'https://randomuser.me/api/portraits/women/53.jpg' },
      { role: 'Advisor', name: 'Dr. Rajesh Kumar', photo: 'https://randomuser.me/api/portraits/men/54.jpg' }
    ],
    achievements: [
      { title: 'Power Electronics Innovation Award', year: 2022, description: 'For innovation in power electronics.', image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg' }
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg', caption: 'Power Expo' },
      { img: 'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg', caption: 'Electronics Workshop' }
    ],
    events: {
      past: [
        { title: 'Power Electronics Symposium', date: '2023-08-22', description: 'Symposium on power electronics.', image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg' }
      ],
      upcoming: [
        { title: 'Energy Conversion Conference', date: '2024-10-28', description: 'Conference on energy conversion.', image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg' }
      ]
    }
  },
  {
    id: 'ieee-geoscience-and-remote-sensing-society',
    name: 'IEEE Geoscience and Remote Sensing Society',
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995507.png',
    vision: '',
    mission: '',
    slate: [],
    achievements: [],
    events: { past: [], upcoming: [] }
  },
  {
    id: 'ieee-robotics-and-automation-society',
    name: 'IEEE Robotics and Automation Society',
    image: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png',
    vision: '',
    mission: '',
    slate: [],
    achievements: [],
    events: { past: [], upcoming: [] }
  },
  {
    id: 'ieee-robotics-society',
    name: 'IEEE Robotics Society',
    image: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png',
    carouselImages: [
      'https://images.pexels.com/photos/905905/pexels-photo-905905.jpeg',
      'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg'
    ],
    description: "The IEEE Robotics Society inspires innovation in robotics and automation, connecting students and professionals worldwide.",
    vision: "To lead the advancement of robotics and automation for the benefit of humanity.",
    mission: "To foster the development and application of robotics and automation technology.",
    slate: [
      { role: 'Chair', name: 'Carlos Martinez', photo: 'https://randomuser.me/api/portraits/men/4.jpg' },
      { role: 'Vice Chair', name: 'Priya Singh', photo: 'https://randomuser.me/api/portraits/women/5.jpg' },
      { role: 'Advisor', name: 'Dr. John Smith', photo: 'https://randomuser.me/api/portraits/men/6.jpg' }
    ],
    achievements: [
      { title: 'Robotics Innovation Award', year: 2023, description: 'Awarded for excellence in robotics research.', image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg' }
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg', caption: 'Robotics Expo' },
      { img: 'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg', caption: 'Automation Workshop' }
    ],
    events: {
      past: [
        { title: 'Robotics Workshop', date: '2023-02-20', description: 'Hands-on robotics workshop.', image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg' }
      ],
      upcoming: [
        { title: 'Automation Summit', date: '2024-11-15', description: 'Summit on automation technologies.', image: 'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg' }
      ]
    }
  }
]; 
