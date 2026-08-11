export const departments = [
    {
        id: "software-engineering",
        code: "SE",
        icon: "book",
        title: { ar: "هندسة البرمجيات", en: "Software Engineering" },
        summary: {
            ar: "برنامج متكامل لتصميم وتطوير الأنظمة البرمجية الكبيرة وفق معايير الصناعة الحديثة.",
            en: "A comprehensive program for designing and developing large-scale software systems to modern industry standards.",
        },
        goal: {
            ar: "تخريج مهندسين قادرين على بناء الأنظمة البرمجية وقيادتها باستخدام منهجيات هندسية حديثة.",
            en: "Graduate engineers capable of building and leading software systems using modern engineering methodologies.",
        },
        outcomes: {
            ar: "خريجون قادرون على إدارة مشاريع البرمجيات، تحليل الاحتياجات، وضمان جودة الحلول التقنية.",
            en: "Graduates able to manage software projects, analyze requirements, and ensure technical solution quality.",
        },
        experience: {
            ar: "الطلاب يعملون على مشاريع تطبيقية ومحاكاة لدورات حياة تطوير البرمجيات الحقيقية.",
            en: "Students work on applied projects and simulations of real software development lifecycles.",
        },
        skills: [
            "هندسة النظم",
            "تصميم البرمجيات",
            "اختبار الجودة",
            "إدارة دورة الحياة البرمجية",
        ],
        careers: ["مهندس برمجيات", "محلل نظم", "مدير تطوير", "مهندس جودة"],
        content: {
            ar: "برامج وأنظمة الحوسبة المتقدمة.",
            en: "Advanced computing programs and systems.",
        },
        level: { ar: "بكالوريوس", en: "Bachelor" },
        hours: { ar: "136 ساعة", en: "136 hours" },
        fees: { ar: "80,000 جنيه", en: "80,000 EGP" },
        tags: ["Software", "Engineering", "Agile"],
    },
    {
        id: "artificial-intelligence",
        code: "AI",
        icon: "brain",
        title: { ar: "الذكاء الاصطناعي وتعلم الآلة", en: "Artificial Intelligence and Machine Learning" },
        summary: {
            ar: "برنامج يركز على التعلم الآلي، الرؤية الحاسوبية، ومعالجة اللغة لبناء أنظمة ذكية.",
            en: "A program focused on machine learning, computer vision, and language processing to build intelligent systems.",
        },
        goal: {
            ar: "تخريج متخصصين قادرين على تطوير نماذج ذكية وتحليل البيانات الكبرى لاتخاذ قرارات مدعومة بالذكاء.",
            en: "Graduate specialists capable of developing intelligent models and analyzing big data for smart decision-making.",
        },
        outcomes: {
            ar: "خريجون يتمتعون بقدرة تحليل البيانات، بناء النماذج الذكية، وتطبيق تقنيات AI في مختلف المجالات.",
            en: "Graduates proficient in data analysis, model building, and applying AI techniques across domains.",
        },
        experience: {
            ar: "يتضمن البرنامج مشاريع بحثية في الذكاء الاصطناعي وتطبيقات عملية في المختبرات المتخصصة.",
            en: "The program includes AI research projects and practical applications in specialized labs.",
        },
        skills: [
            "التعلم الآلي",
            "الرؤية الحاسوبية",
            "معالجة اللغة الطبيعية",
            "تحليل البيانات الضخمة",
        ],
        careers: ["مهندس AI", "عالم بيانات", "خبير تعلم آلي", "باحث في الذكاء الاصطناعي"],
        content: {
            ar: "تصميم وتدريب النماذج الذكية والتعامل مع مجموعات بيانات كبيرة.",
            en: "Designing and training smart models while working with large datasets.",
        },
        level: { ar: "بكالوريوس", en: "Bachelor" },
        hours: { ar: "136 ساعة", en: "136 hours" },
        fees: { ar: "80,000 جنيه", en: "80,000 EGP" },
        tags: ["AI", "Machine Learning", "Data", "NLP"],
    },
    {
        id: "data-science",
        code: "DS",
        icon: "cpu",
        title: { ar: "علوم البيانات", en: "Data Science" },
        summary: {
            ar: "برنامج يركز على استخراج المعرفة من البيانات وتحويلها إلى قرارات مدعومة بالمعلومات.",
            en: "A program focused on extracting knowledge from data and turning it into informed decisions.",
        },
        goal: {
            ar: "تخريج متخصصين قادرين على تحليل البيانات وتصميم حلول معلوماتية ذكية لدعم الأعمال.",
            en: "Graduate specialists able to analyze data and design intelligent information solutions for business support.",
        },
        outcomes: {
            ar: "خريجون يمتلكون الخبرة في التنقيب عن البيانات، النمذجة الإحصائية، والتصور البياني للمعلومات.",
            en: "Graduates skilled in data mining, statistical modeling, and visualizing information effectively.",
        },
        experience: {
            ar: "يتعلم الطلاب أدوات تحليل البيانات الحديثة ويطبقونها في مشاريع قيمة واقعية.",
            en: "Students learn modern data analysis tools and apply them in valuable real-world projects.",
        },
        skills: [
            "تنقيب البيانات",
            "النمذجة الإحصائية",
            "تصوير البيانات",
            "تحليل القرار",
        ],
        careers: ["عالم بيانات", "محلل بيانات", "خبير بصريات", "مستشار بياني"],
        content: {
            ar: "تحليل البيانات الكبيرة وتحويلها إلى نتائج قابلة للتنفيذ.",
            en: "Analyzing big data and turning it into actionable insights.",
        },
        level: { ar: "بكالوريوس", en: "Bachelor" },
        hours: { ar: "136 ساعة", en: "136 hours" },
        fees: { ar: "80,000 جنيه", en: "80,000 EGP" },
        tags: ["Data", "Analytics", "Statistics", "Visualization"],
    },
    {
        id: "computational-linguistics",
        code: "CL",
        icon: "book",
        title: { ar: "اللغويات الحاسوبية", en: "Computational Linguistics" },
        summary: {
            ar: "مجال يجمع بين علوم اللغة وتقنيات الحوسبة لبناء أنظمة لفهم وتوليد اللغة الطبيعية.",
            en: "A field that blends linguistics and computing to build systems for natural language understanding and generation.",
        },
        goal: {
            ar: "تخريج متخصصين قادرين على تطوير أدوات لغوية ذكية وتحليل النصوص بشكل دقيق.",
            en: "Graduate specialists capable of developing intelligent language tools and analyzing text with precision.",
        },
        outcomes: {
            ar: "خريجون لديهم القدرة على بناء أنظمة ترجمة آلية، تحليل نصوص، والتعامل مع اللغات المتعددة.",
            en: "Graduates who can build machine translation systems, analyze text, and work with multiple languages.",
        },
        experience: {
            ar: "يتعامل الطلاب مع مشاريع في معالجة اللغة الطبيعية، التعرف على الكلام، وتحليل النصوص.",
            en: "Students work on NLP, speech recognition, and text analysis projects.",
        },
        skills: [
            "معالجة اللغة الطبيعية",
            "تحليل النصوص",
            "ترجمة آلية",
            "تصميم واجهات لغة" ,
        ],
        careers: ["مهندس لغويات حاسوبية", "مصمم نظم NLP", "محلل نصوص", "باحث لغوي"],
        content: {
            ar: "بناء حلول لفهم اللغة وتحليل النصوص الرقمية.",
            en: "Building solutions for language understanding and digital text analysis.",
        },
        level: { ar: "بكالوريوس", en: "Bachelor" },
        hours: { ar: "136 ساعة", en: "136 hours" },
        fees: { ar: "80,000 جنيه", en: "80,000 EGP" },
        tags: ["NLP", "Language", "Speech", "Translation"],
    },
    {
        id: "virtual-reality",
        code: "VR",
        icon: "lightbulb",
        title: { ar: "الواقع الافتراضي والمعزز", en: "Virtual and Augmented Reality" },
        summary: {
            ar: "برنامج يعلّم تصميم تجارب الواقع الافتراضي والمعزز للتطبيقات التعليمية والترفيهية.",
            en: "A program teaching the design of virtual and augmented reality experiences for educational and entertainment applications.",
        },
        goal: {
            ar: "تخريج متخصصين قادرين على بناء عالم رقمي تفاعلي يدمج الواقع الحقيقي مع المحتوى الرقمي.",
            en: "Graduate specialists capable of building interactive digital worlds that merge real-world and digital content.",
        },
        outcomes: {
            ar: "خريجون يتمتعون بقدرة تصميم التجارب التفاعلية، النمذجة الثلاثية الأبعاد، وبرمجة المحاكاة.",
            en: "Graduates skilled in interactive experience design, 3D modeling, and simulation programming.",
        },
        experience: {
            ar: "يعمل الطلاب على تطوير تطبيقات VR/AR في بيئات عملية ومحاكاة لاستخدامات تعليمية ومهنية.",
            en: "Students develop VR/AR applications in practical, simulated environments for educational and professional uses.",
        },
        skills: [
            "تصميم الواقع الافتراضي",
            "برمجة المحاكاة",
            "النمذجة ثلاثية الأبعاد",
            "التجارب التفاعلية",
        ],
        careers: ["مصمم VR/AR", "مطور تجارب رقمية", "مهندس محاكاة", "موظف واقع افتراضي"],
        content: {
            ar: "تصميم تجارب رقمية مدمجة مع العالم الحقيقي.",
            en: "Designing digital experiences integrated with the real world.",
        },
        level: { ar: "بكالوريوس", en: "Bachelor" },
        hours: { ar: "136 ساعة", en: "136 hours" },
        fees: { ar: "80,000 جنيه", en: "80,000 EGP" },
        tags: ["VR", "AR", "3D", "Immersive"],
    },
];

export default departments;
