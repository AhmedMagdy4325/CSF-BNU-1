import newsImageOne from "../assets/new1.jpg";
import newsImageTwo from "../assets/new2.jpg";

export const newsData = [
    {
        id: "1",
        title: {
            ar: "افتتاح المعرض السنوي لمشاريع التخرج 2026",
            en: "Annual Graduation Projects Exhibition 2026 Opened",
        },
        date: "2026-05-15",
        category: "Academic",
        summary: {
            ar: "افتتح عميد الكلية اليوم المعرض السنوي لمشاريع التخرج بحضور نخبة من ممثلي شركات التكنولوجيا.",
            en: "The Dean opened the annual graduation projects exhibition with technology company representatives.",
        },
        content: {
            ar: "شهد المعرض هذا العام مشاركة أكثر من 50 مشروعاً مبتكراً في مجالات الذكاء الاصطناعي والأمن السيبراني وتطبيقات الموبايل...",
            en: "This year's exhibition featured over 50 innovative projects in AI, Cybersecurity, and Mobile applications...",
        },
        image: newsImageOne,
    },
    {
        id: "2",
        title: {
            ar: "فوز فريق الكلية بالمركز الأول في مسابقة البرمجة",
            en: "Faculty Team Wins 1st Place in Programming Contest",
        },
        date: "2026-04-20",
        category: "Competition",
        summary: {
            ar: "حقق طلاب قسم علوم الحاسب المركز الأول في المسابقة الوطنية للبرمجة للتنافس بين الجامعات.",
            en: "Computer Science students achieved first place in the national collegiate programming contest.",
        },
        content: {
            ar: "تمكن الفريق من حل جميع المسائل البرمجية في وقت قياسي بفضل التدريب المستمر والدعم الأكاديمي...",
            en: "The team managed to solve all programming problems in record time due to continuous practice...",
        },
        image: newsImageTwo,
    },
];
