export const person = {
  name: 'Perikala Kartheek',
  email: 'perikalakarthik1@gmail.com',
  phone: '+91 7288905227',
  location: 'Ongole, Andhra Pradesh, India',
  linkedin: 'https://www.linkedin.com/in/kartheek-perikala',
  github: 'https://github.com/PERIKALAKARTHIK',
  resumeUrl: '', // Add a PDF at public/resume.pdf and set this to '/resume.pdf'.
  cgpa: '', // Enter the final official CGPA when confirmed.
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  type: string;
  dates?: string;
  description: string;
  focus: string;
  technologies: string[];
  problem: string;
  objective: string;
  architecture: string[];
  working: string;
  implementation: string;
  features: string[];
  challenges: string;
  outcome: string;
  future: string;
  visual: 'inventory' | 'railway' | 'id' | 'network' | 'agriculture' | 'water';
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  circuitUrl?: string;
  pdfUrl?: string;
};

export const featuredProjects: Project[] = [
  {
    slug: 'smart-inventory', title: 'Smart Inventory Management with Priority-Based Expiry Alert System',
    category: 'IoT / Embedded / Automation', type: 'Engineering Project', dates: 'Oct 2025 – Apr 2026',
    description: 'Built a sensor-based monitoring and alerting system that automatically tracks product expiry and triggers priority-based alerts.',
    focus: 'Monitor inventory conditions and expiry information, then generate alerts according to priority.',
    technologies: ['ESP32', 'RFID', 'DHT11', 'LCD', 'Buzzer', 'GSM', 'ThingSpeak'],
    problem: 'Keeping track of product expiry and storage conditions requires timely, organized alerts.',
    objective: 'Bring inventory identification, condition monitoring, and priority-based expiry alerts into one system.',
    architecture: ['RFID / Sensors', 'ESP32', 'Expiry & priority logic', 'LCD / IoT telemetry', 'Buzzer / GSM alerts'],
    working: 'Inventory information and sensor readings feed a controller, which checks expiry information and determines which alerts need attention first.',
    implementation: 'Sensor-based monitoring and alerting system using embedded components and IoT telemetry. Detailed wiring, code, and deployment documentation can be added when available.',
    features: ['Expiry tracking', 'Condition monitoring', 'Priority-based alerts', 'Local display and alerting', 'IoT telemetry'],
    challenges: 'Coordinating sensor readings, inventory information, and alert priority within a single workflow.',
    outcome: 'A project focused on automated expiry monitoring and prioritized alerts; no performance or deployment claims are provided.',
    future: 'Add verified prototype images, circuit diagrams, source code, and testing notes when available.', visual: 'inventory',
  },
  {
    slug: 'automated-railway-gate', title: 'Automated Railway Gate System',
    category: 'Embedded Systems / Automation', type: 'Engineering Project', dates: 'Jan 2025 – Apr 2025',
    description: 'Designed an automated sensor-driven railway gate control system focused on reliable and fail-safe operation.',
    focus: 'Use sensor input and control logic to automate gate movement with safety in mind.',
    technologies: ['Sensors', 'Embedded control', 'Automation logic'],
    problem: 'Manual railway gate operation depends on timely human intervention.',
    objective: 'Design a sensor-driven control sequence for gate operation with safety-oriented behavior.',
    architecture: ['Train detection sensors', 'Controller', 'Safety-oriented control logic', 'Gate movement', 'Status / action'],
    working: 'Sensor input informs the controller, which runs the gate-control sequence and governs automated movement.',
    implementation: 'Designed around sensor input, control logic, and gate actuation. Exact hardware and test details can be added from project documentation.',
    features: ['Sensor-driven detection', 'Automated gate movement', 'Safety-oriented control', 'Reduced manual intervention'],
    challenges: 'Designing a dependable response to sensor input and considering fail-safe behavior.',
    outcome: 'An engineering design for automated gate control; no field deployment or safety certification is claimed.',
    future: 'Document the exact fail-safe states, prototype hardware, test results, and circuit diagrams.', visual: 'railway',
  },
  {
    slug: 'smart-id-tags', title: 'Smart ID Tags',
    category: 'RFID / NFC / Embedded Systems', type: 'Engineering Project', dates: 'Aug 2024 – Nov 2024',
    description: 'Developed an RFID/NFC-based digital identification system for wireless data exchange, access control, and tracking.',
    focus: 'Tag → Reader → Controller → Identification / Action',
    technologies: ['RFID', 'NFC', 'Embedded controller', 'Wireless identification'],
    problem: 'Identification workflows need a way to read and act on tag information without physical contact.',
    objective: 'Create a digital identification workflow using RFID/NFC tag reads.',
    architecture: ['RFID / NFC tag', 'Reader', 'Controller', 'Identification logic', 'Access / tracking action'],
    working: 'A tag is presented to the reader; the controller interprets the received identifier and performs the corresponding identification or action.',
    implementation: 'Developed around RFID/NFC reading and controller-based decisions. Code, circuits, and prototype photos can be attached later.',
    features: ['Contactless tag reading', 'Digital identification', 'Access-control workflow', 'Tracking use case'],
    challenges: 'Connecting tag reads to consistent controller decisions and a clear identification flow.',
    outcome: 'A project exploring RFID/NFC-based identification and action workflows.',
    future: 'Add verified implementation details, security considerations, source code, and prototype imagery.', visual: 'id',
  },
];

export const additionalProjects: Project[] = [
  { slug: 'rfid-face-attendance', title: 'RFID-Based Attendance System with Face Recognition', category: 'Embedded / RFID / Computer Vision', type: 'Engineering Project', description: 'RFID attendance combined with face recognition for identity verification and automated attendance.', focus: 'Combine tag-based attendance with face verification.', technologies: ['RFID', 'Face recognition', 'Computer vision'], problem: 'Attendance records benefit from identity verification alongside tag scanning.', objective: 'Explore a workflow that checks both RFID and facial identity.', architecture: ['RFID tag / Camera', 'Reader / Vision input', 'Verification logic', 'Attendance record'], working: 'RFID and face-recognition inputs are combined for verification before an attendance action.', implementation: 'Engineering project scope; specific hardware, software, and validation details have not been supplied.', features: ['RFID identification', 'Face verification', 'Attendance automation'], challenges: 'Combining two identity inputs reliably.', outcome: 'Project focus documented; implementation status and accuracy are not specified.', future: 'Add verified architecture, code, and test evidence.', visual: 'id' },
  { slug: 'vanet-accident-rescue', title: 'VANET-IoT Based Accident Detection and Smart Emergency Rescue System', category: 'IoT / VANET / Emergency Systems', type: 'Research Concept', description: 'A concept covering accident detection, communication, emergency alerts, and smart rescue coordination.', focus: 'Connect accident detection to emergency communication and rescue coordination.', technologies: ['VANET', 'IoT', 'Emergency alerts'], problem: 'Emergency response depends on fast communication after an accident.', objective: 'Explore a connected detection and rescue-alert workflow.', architecture: ['Detection inputs', 'IoT / VANET communication', 'Alert logic', 'Emergency notification'], working: 'Detection signals would pass through communication and alert logic toward a rescue response.', implementation: 'Concept-level description; no deployed system or tested implementation is claimed.', features: ['Accident detection concept', 'Emergency alert concept', 'Rescue coordination'], challenges: 'Reliable communication and meaningful alert routing.', outcome: 'Research concept; implementation results are not provided.', future: 'Define hardware, alert protocol, and validation plan.', visual: 'network' },
  { slug: 'smart-agriculture-edge-ai', title: 'Smart Agriculture Using Image Processing with Edge AI', category: 'AI / Computer Vision / Edge AI / Agriculture', type: 'Research Concept', description: 'Image-based agricultural monitoring with edge-based intelligent processing.', focus: 'Explore visual monitoring and local intelligent processing for agriculture.', technologies: ['Image processing', 'Edge AI', 'Computer vision'], problem: 'Agricultural monitoring can require timely interpretation of visual information.', objective: 'Explore image-based monitoring with processing close to the source.', architecture: ['Image capture', 'Edge processing', 'Visual analysis', 'Monitoring insight'], working: 'Images would be processed at the edge to produce monitoring information.', implementation: 'Concept-level scope; model, dataset, accuracy, and field use are not specified.', features: ['Image-based monitoring', 'Edge processing concept'], challenges: 'Selecting suitable imaging conditions and a viable edge-processing approach.', outcome: 'Research concept without claimed deployment or model performance.', future: 'Define dataset, hardware, model, and evaluation plan.', visual: 'agriculture' },
  { slug: 'solar-plastic-cleaning-boat', title: 'Solar-Powered Plastic Cleaning Boat', category: 'IoT / Embedded / Renewable Energy / Environmental Engineering', type: 'Research Concept', description: 'A solar-powered autonomous or semi-autonomous approach to collecting plastic and waste from water bodies.', focus: 'Combine renewable power with water-surface waste collection.', technologies: ['Solar power', 'Embedded systems', 'Waste collection'], problem: 'Floating plastic and waste need practical collection approaches.', objective: 'Explore a solar-assisted boat concept for water-body cleanup.', architecture: ['Solar power', 'Controller', 'Navigation / movement', 'Waste collection'], working: 'A solar-assisted platform would move through a water body and collect floating waste.', implementation: 'Concept-level scope; autonomy, prototype status, and operating results are not specified.', features: ['Solar-assisted operation concept', 'Floating-waste collection concept'], challenges: 'Power budgeting, movement, and collection mechanism design.', outcome: 'Research concept; no real-world deployment is claimed.', future: 'Document mechanism, prototype, and controlled tests if developed.', visual: 'water' },
  { slug: 'laptop-fuzzy-recommendation', title: 'Laptop Recommendation System Using Fuzzy Logic', category: 'AI / Fuzzy Logic / Recommendation Systems', type: 'Academic Project', description: 'Laptop recommendation based on multiple user requirements and fuzzy decision logic.', focus: 'Translate imprecise preferences into a more useful recommendation.', technologies: ['Fuzzy logic', 'Recommendation systems'], problem: 'Laptop selection involves several preferences that are not always strictly defined.', objective: 'Explore fuzzy decision logic for multi-criteria recommendations.', architecture: ['User requirements', 'Fuzzy rules', 'Decision logic', 'Recommendation'], working: 'User requirements are evaluated through fuzzy decision rules to suggest suitable options.', implementation: 'Academic project scope; specific rules, dataset, and evaluation results have not been supplied.', features: ['Multi-criteria inputs', 'Fuzzy decision logic', 'Recommendation output'], challenges: 'Defining meaningful rules across different user priorities.', outcome: 'Academic project focus documented; no performance claim is provided.', future: 'Add rule definitions, sample cases, and evaluation notes.', visual: 'network' },
  { slug: 'smart-water-dispenser', title: 'Smart Water Dispenser Monitoring System', category: 'IoT / Embedded / Monitoring', type: 'Engineering Project', description: 'Monitoring and automated management of a smart water dispensing system.', focus: 'Track dispenser conditions and support automated management.', technologies: ['IoT', 'Embedded monitoring', 'Automation'], problem: 'Water dispensing systems can benefit from monitored status and controlled actions.', objective: 'Explore an embedded monitoring and automation workflow for dispensing.', architecture: ['Monitoring inputs', 'Controller', 'Control logic', 'Dispensing action'], working: 'Monitoring inputs feed a controller that determines an appropriate dispensing-related action.', implementation: 'Engineering project scope; component list and implementation results have not been supplied.', features: ['System monitoring', 'Automated management concept'], challenges: 'Connecting measured state to appropriate control actions.', outcome: 'Project focus documented; deployment status is unspecified.', future: 'Add verified components, prototype photos, and test results.', visual: 'water' },
];

export const projects = [...featuredProjects, ...additionalProjects];

export const skills = [
  { title: 'Embedded Systems', items: ['Arduino', 'ESP32', 'Sensor integration', 'Hardware-software integration', 'Arduino IDE'] },
  { title: 'Sensors & Communication', items: ['RFID/NFC', 'RTC DS3231', 'GSM modules', 'Motion sensors', 'DHT11', 'MQ135', 'PIR', 'LCD I2C', 'Wi-Fi / IoT connectivity'] },
  { title: 'IoT & Monitoring', items: ['ThingSpeak', 'Sensor telemetry', 'Monitoring systems', 'Alert automation', 'Priority-based alerts', 'Expiry tracking systems'] },
  { title: 'Programming & Automation', items: ['Python scripting', 'Automation logic', 'Git'] },
  { title: 'DevOps / Cloud fundamentals', items: ['Linux', 'Git/GitHub', 'AWS fundamentals', 'Docker', 'Maven', 'Jenkins', 'CI/CD concepts', 'DevOps fundamentals'] },
  { title: 'Data & AI exposure', items: ['Power BI', 'Excel dashboards', 'Machine Learning fundamentals', 'AI/ML concepts', 'LLM tools', 'Prompt-based AI workflows'] },
];

export const experience = [
  { role: 'Embedded System Developer', place: 'EduSkills', period: 'Jul 2025 – Sep 2025', description: 'Practiced embedded system development and hardware-software integration, including sensor-to-system data flow.' },
  { role: 'Machine Learning Internship', place: 'Intern Orbit', period: 'Aug 2025 – Sep 2025', description: 'Applied machine-learning concepts to practical automation-oriented problems.' },
  { role: 'Industrial Automation Virtual Internship', place: 'EduSkills', period: 'Jan 2025 – Mar 2025', description: 'Studied industrial automation systems and control processes, developing a foundation in automated and rule-based workflows.' },
  { role: 'Class Representative, ECE Department', place: 'QIS College of Engineering and Technology', period: 'Sep 2022 – Apr 2026', description: 'Coordinated communication between faculty and students, represented student concerns during departmental interactions, and assisted with academic and co-curricular activities.' },
];
