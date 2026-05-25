const translations = {
    ar: {
        page_title: 'نورة المطيري | إدارة أعمال',
        brand_name: 'نورة المطيري',
        nav_home: 'الرئيسية', nav_edu: 'التعليم', nav_exp: 'الخبرات', nav_cert: 'الشهادات', nav_skills: 'المهارات', nav_contact: 'تواصل',
        hero_badge: 'طالبة إدارة أعمال', hero_hello: 'مرحباً، أنا', hero_name: 'نورة المطيري',
        flip_hint: 'مرر الماوس للخلف',
        flip_hint_mobile: 'انقر للخلف',
        hero_desc: 'طالبة طموحة في جامعة الكويت، متخصصة في الإدارة المالية والتسويق.',
        hero_btn1: 'تواصل معي', hero_btn2: 'تحميل السيرة الذاتية',
        stat_gpa: 'GPA', stat_internships: 'تدريب', stat_certs: 'شهادة',
        edu_title: 'التعليم', edu_sub: 'مسيرتي الأكاديمية',
        edu1_date: '2022 - الآن', edu1_title: 'بكالوريوس إدارة أعمال', edu1_uni: 'جامعة الكويت', edu1_desc: 'تخصص الإدارة المالية والتسويق. GPA: 3.7',
        edu2_date: '2018 - 2022', edu2_title: 'شهادة الثانوية العامة', edu2_uni: 'ثانوية حولي', edu2_desc: 'نسبة 98% - المرتبة الأولى',
        exp_title: 'الخبرات العملية', exp_sub: 'التدريب والعمل التطوعي',
        exp1_date: '2025 - الآن', exp1_title: 'متدرب إدارة مالية', exp1_company: 'شركة البترول الوطنية الكويتية', exp1_desc: 'تحليل البيانات المالية وإعداد التقارير.',
        exp2_date: '2024', exp2_title: 'متدرب تسويق', exp2_company: 'وكالة الإبداع للإعلان', exp2_desc: 'إدارة حملات التواصل الاجتماعي.',
        exp3_date: '2023', exp3_title: 'متطوع تنظيم فعاليات', exp3_company: 'الاتحاد الطلابي - جامعة الكويت', exp3_desc: 'تنظيم المؤتمرات الطلابية.',
        cert_title: 'الشهادات المهنية', cert_sub: 'الشهادات التي حصلت عليها',
        cert1_title: 'CFA مستوى 1', cert2_title: 'PMP', cert3_title: 'CMA',
        cert_complete: 'مكتمل', cert_progress: 'قيد الدراسة',
        skills_title: 'المهارات', skills_sub: 'المهارات التي أتقنها',
        skill1: 'تحليل مالي', skill2: 'تسويق رقمي', skill3: 'Excel متقدم', skill4: 'Power BI', skill5: 'إدارة مشاريع',
        contact_title: 'تواصل معي', contact_sub: 'يسعدني سماع أفكارك',
        form_name: 'الاسم', form_email: 'البريد الإلكتروني', form_msg: 'الرسالة', form_submit: 'إرسال',
        copyright: '© 2026 نورة المطيري. قالب من <strong>موقعك</strong> – Mawqeak'
    },
    en: {
        page_title: 'Noura Al-Mutairi | Business Administration',
        brand_name: 'Noura Al-Mutairi',
        nav_home: 'Home', nav_edu: 'Education', nav_exp: 'Experience', nav_cert: 'Certificates', nav_skills: 'Skills', nav_contact: 'Contact',
        hero_badge: 'Business Student', hero_hello: 'Hi, I am', hero_name: 'Noura Al-Mutairi',
        flip_hint: 'Hover to flip',
        flip_hint_mobile: 'Tap to flip',
        hero_desc: 'Ambitious student at Kuwait University, majoring in Financial Management and Marketing.',
        hero_btn1: 'Contact Me', hero_btn2: 'Download CV',
        stat_gpa: 'GPA', stat_internships: 'Internships', stat_certs: 'Certificates',
        edu_title: 'Education', edu_sub: 'My Academic Journey',
        edu1_date: '2022 - Present', edu1_title: 'BSc Business Administration', edu1_uni: 'Kuwait University', edu1_desc: 'Major: Finance & Marketing. GPA: 3.7',
        edu2_date: '2018 - 2022', edu2_title: 'High School Diploma', edu2_uni: 'Hawally High School', edu2_desc: 'Score: 98% - Ranked 1st',
        exp_title: 'Work Experience', exp_sub: 'Internships & Volunteering',
        exp1_date: '2025 - Present', exp1_title: 'Finance Intern', exp1_company: 'Kuwait National Petroleum Company', exp1_desc: 'Financial data analysis and reporting.',
        exp2_date: '2024', exp2_title: 'Marketing Intern', exp2_company: 'Creative Ad Agency', exp2_desc: 'Social media campaign management.',
        exp3_date: '2023', exp3_title: 'Event Volunteer', exp3_company: 'Student Union - Kuwait University', exp3_desc: 'Organizing student conferences.',
        cert_title: 'Professional Certificates', cert_sub: 'Certificates I have earned',
        cert1_title: 'CFA Level 1', cert2_title: 'PMP', cert3_title: 'CMA',
        cert_complete: 'Completed', cert_progress: 'In Progress',
        skills_title: 'Skills', skills_sub: 'Skills I have mastered',
        skill1: 'Financial Analysis', skill2: 'Digital Marketing', skill3: 'Advanced Excel', skill4: 'Power BI', skill5: 'Project Management',
        contact_title: 'Contact Me', contact_sub: 'I\'d love to hear from you',
        form_name: 'Name', form_email: 'Email', form_msg: 'Message', form_submit: 'Send',
        copyright: '© 2026 Noura Al-Mutairi. Template by <strong>Mawqeak</strong>'
    }
};

let currentLang = 'ar';
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    const btn = document.getElementById('langToggle');
    if (btn) btn.innerHTML = lang === 'ar' ? '<i class="fas fa-globe"></i> English' : '<i class="fas fa-globe"></i> العربية';
    localStorage.setItem('lang', lang);
}
function switchLanguage() { setLanguage(currentLang === 'ar' ? 'en' : 'ar'); }
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(localStorage.getItem('lang') || 'ar');
    document.getElementById('langToggle')?.addEventListener('click', switchLanguage);
});
