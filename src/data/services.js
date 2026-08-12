import researchImage from "../assets/ResearcDevelopment.jpg";
import careerImage from "../assets/careerSupport.jpg";
import labsImage from "../assets/digitalLaps.png";
import trainingImage from "../assets/trainingPrograms.jpg";

export const services = [
    {
        id: "training",
        title: { ar: "دورات تدريبية", en: "Training Programs" },
        description: {
            ar: "ورش عمل ودورات قصيرة في تطوير البرمجيات، تحليل البيانات، والذكاء الاصطناعي.",
            en: "Workshops and short courses in software development, data analysis, and artificial intelligence.",
        },
        image: trainingImage,
    },
    {
        id: "research",
        title: { ar: "بحث وتطوير", en: "Research & Development" },
        description: {
            ar: "دعم مشاريع البحث العلمي والتعاون مع الصناعة لبناء حلول تقنية مبتكرة.",
            en: "Supporting scientific research projects and industry collaboration to build innovative technical solutions.",
        },
        image: researchImage,
    },
    {
        id: "labs",
        title: { ar: "معامل رقمية", en: "Digital Labs" },
        description: {
            ar: "معامل مجهزة بأحدث الأدوات العلمية لتطوير التطبيقات والاختبارات العملية.",
            en: "Labs equipped with the latest scientific tools for application development and practical testing.",
        },
        image: labsImage,
    },
    {
        id: "career",
        title: { ar: "دعم مهني", en: "Career Support" },
        description: {
            ar: "خدمات الإرشاد المهني، إعداد السيرة الذاتية، وتوجيه الطلاب نحو فرص التوظيف.",
            en: "Career guidance, resume preparation, and student support toward employment opportunities.",
        },
        image: careerImage,
    },
];

export default services;
