export type Language = 'en' | 'ar';

export type Localized = { en: string; ar: string };

export type ProjectSection = {
  label: Localized;
  title: Localized;
  body: Localized;
  items?: Localized[];
};

export type ProjectMedia = {
  type: 'image' | 'video';
  src: string;
  alt: Localized;
  featured?: boolean;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  arabicTitle: string;
  category: string;
  arabicCategory: string;
  context: string;
  arabicContext: string;
  intro: string;
  arabicIntro: string;
  accent: string;
  cardAsset: string;
  cardAlt: Localized;
  heroAsset: string;
  heroAlt: Localized;
  repositoryUrl?: string;
  gallery: ProjectMedia[];
  keyFeatures: Localized[];
  sections: {
    overview: ProjectSection;
    role: ProjectSection;
    problemSolution: ProjectSection;
    process: ProjectSection;
    technologies: ProjectSection;
    impact: ProjectSection;
  };
};

const comingSoon = { en: '', ar: '' };

export const projects: Project[] = [
  {
    slug: 'talaqi',
    index: '01',
    title: 'Talaqi',
    arabicTitle: 'تلاقي',
    category: 'Graduation Project',
    arabicCategory: 'مشروع التخرج',
    context: 'Graduation Project',
    arabicContext: 'مشروع التخرج',
    intro: 'A Flutter-based mobile application developed using Agile to enable peer-to-peer skill exchange and learning. The platform includes user profiles, skill management, learning sessions, real-time messaging, volunteer-hour tracking, badges, reporting, and an AI-powered chatbot for learning guidance. Tech: Flutter · Dart · Firebase · Figma · Agile · AI Chatbot',
    arabicIntro: 'تطبيق جوّال مبني باستخدام Flutter وطُوّر بمنهجية Agile لتمكين تبادل المهارات والتعلّم بين الأقران. تشمل المنصة ملفات المستخدمين، وإدارة المهارات، وجلسات التعلّم، والرسائل الفورية، وتتبع الساعات التطوعية، والشارات، والإبلاغ، وروبوت محادثة مدعوم بالذكاء الاصطناعي للإرشاد التعليمي. التقنيات: Flutter · Dart · Firebase · Figma · Agile · روبوت محادثة بالذكاء الاصطناعي',
    accent: '#8870aa',
    cardAsset: 'talaqi/logo-transparent.png',
    cardAlt: { en: 'Talaqi logo', ar: 'شعار تلاقي' },
    heroAsset: 'talaqi/gallery/page-072-image-00.jpeg',
    heroAlt: { en: 'Talaqi mobile application screen', ar: 'شاشة من تطبيق تلاقي' },
    repositoryUrl: 'https://github.com/sarahatawi-ctrl/TalaqiGP',
    gallery: [
      ...['page-072-image-00.jpeg', 'page-073-image-00.png', 'page-074-image-00.png', 'page-075-image-00.jpeg', 'page-076-image-00.png', 'page-077-image-00.png', 'page-078-image-00.jpeg', 'page-079-image-00.jpeg', 'page-080-image-00.jpeg'].map((file, index) => ({
        type: 'image' as const,
        src: `talaqi/gallery/${file}`,
        alt: { en: `Talaqi application screen ${index + 1}`, ar: `شاشة من تطبيق تلاقي ${index + 1}` },
      })),
    ],
    keyFeatures: [
      { en: 'Profiles for sharing bios, expertise, and skills', ar: 'ملفات شخصية لمشاركة النبذة والخبرات والمهارات' },
      { en: 'Skill search and peer learning sessions', ar: 'البحث عن المهارات وجلسات التعلّم بين الأقران' },
      { en: 'Real-time messaging between mentors and learners', ar: 'رسائل فورية بين المرشدين والمتعلمين' },
      { en: 'AI chatbot for educational guidance', ar: 'روبوت محادثة ذكي للإرشاد التعليمي' },
      { en: 'Automatic volunteer-hour tracking', ar: 'تتبّع تلقائي للساعات التطوعية' },
      { en: 'Milestone badges and a volunteer leaderboard', ar: 'شارات للإنجازات ولوحة للمتطوعين' },
      { en: 'User reporting and administrative moderation', ar: 'الإبلاغ عن المستخدمين والإشراف الإداري' },
    ],
    sections: {
      overview: {
        label: { en: 'Overview', ar: 'نظرة عامة' },
        title: { en: 'A structured place for peer learning.', ar: 'مساحة منظمة للتعلّم بين الأقران.' },
        body: { en: 'Talaqi is a mobile application for exchanging skills and knowledge between individuals in Saudi Arabia. It gives users a structured environment to learn, teach, host learning sessions, and connect as both learners and mentors, while encouraging volunteering and continuous skill development.', ar: 'تلاقي تطبيق جوّال لتبادل المهارات والمعرفة بين الأفراد في المملكة العربية السعودية. يوفّر بيئة منظمة تتيح للمستخدم أن يتعلّم ويعلّم ويستضيف جلسات تعليمية ويتواصل بوصفه متعلّمًا أو مرشدًا، مع تشجيع التطوع والتطوير المستمر للمهارات.' },
      },
      role: {
        label: { en: 'My role', ar: 'دوري' },
        title: comingSoon,
        body: comingSoon,
      },
      problemSolution: {
        label: { en: 'Problem / solution', ar: 'المشكلة والحل' },
        title: { en: 'From scattered knowledge to community connection.', ar: 'من المعرفة المتفرقة إلى التواصل المجتمعي.' },
        body: { en: 'The proposed solution brings together user profiles with names, bios, and skills; hosting and joining learning sessions; AI-powered chatbot guidance; volunteer-hour tracking; badges; user reviews; and a trusted environment for community connection.', ar: 'يجمع الحل المقترح بين ملفات المستخدمين التي تتضمن الأسماء والنبذات والمهارات، واستضافة جلسات التعلّم والانضمام إليها، وإرشاد روبوت محادثة مدعوم بالذكاء الاصطناعي، وتتبع الساعات التطوعية، والشارات، وتقييمات المستخدمين، وبيئة موثوقة للتواصل المجتمعي.' },
      },
      process: {
        label: { en: 'UI/UX process', ar: 'منهجية UI/UX' },
        title: { en: 'A documented path from requirements to testing.', ar: 'مسار موثق من المتطلبات إلى الاختبار.' },
        body: { en: 'The team followed Agile development and documented requirements, use cases, sequence diagrams, a client-server architecture, interface design, implementation, and unit, functional, and acceptance testing. The architecture separates user interactions from application logic and data operations to support maintainability and scalability.', ar: 'اتبع الفريق منهجية Agile، ووثّق المتطلبات وحالات الاستخدام ومخططات التسلسل وبنية العميل والخادم وتصميم الواجهات والتنفيذ، ثم أجرى اختبارات الوحدة والاختبارات الوظيفية واختبارات القبول. تفصل البنية بين تفاعلات المستخدم ومنطق التطبيق وعمليات البيانات لدعم سهولة الصيانة وقابلية التوسع.' },
      },
      technologies: {
        label: { en: 'Technologies', ar: 'التقنيات' },
        title: { en: 'A Flutter and Firebase foundation.', ar: 'أساس من Flutter وFirebase.' },
        body: { en: '', ar: '' },
        items: [{ en: 'Flutter', ar: 'Flutter' }, { en: 'Dart', ar: 'Dart' }, { en: 'Firebase', ar: 'Firebase' }, { en: 'Figma', ar: 'Figma' }, { en: 'GitHub', ar: 'GitHub' }, { en: 'VS Code', ar: 'VS Code' }, { en: 'Google Chrome', ar: 'Google Chrome' }, { en: 'Android Studio', ar: 'Android Studio' }, { en: 'Agile', ar: 'Agile' }, { en: 'WebView', ar: 'WebView' }],
      },
      impact: {
        label: { en: 'Results / impact', ar: 'النتائج والأثر' },
        title: { en: 'Core flows were tested for deployment readiness.', ar: 'اختُبرت المسارات الأساسية استعدادًا للنشر.' },
        body: { en: 'The team executed 23 test cases covering 48 scenarios, and every scenario passed. Unit, functional, and acceptance testing covered core journeys including profile creation, skill and mentor search, learning sessions, real-time messaging, volunteer-hour tracking, badges, reports, the leaderboard, and the AI assistant. Students and volunteers described the interface as intuitive and skill exchange as straightforward, with volunteer-hour tracking and badges receiving particular praise.', ar: 'نفّذ الفريق 23 حالة اختبار شملت 48 سيناريو، ونجحت جميع السيناريوهات. غطّت اختبارات الوحدة والاختبارات الوظيفية واختبارات القبول المسارات الأساسية، ومنها إنشاء الملف الشخصي، والبحث عن المهارات والمرشدين، وجلسات التعلّم، والرسائل الفورية، وتتبع الساعات التطوعية، والشارات، والتقارير، ولوحة المتطوعين، والمساعد الذكي. وصف الطلاب والمتطوعون الواجهة بأنها سهلة وواضحة، وأشادوا خصوصًا بتتبع الساعات التطوعية ونظام الشارات.' },
      },
    },
  },
  {
    slug: 'rateel',
    index: '02',
    title: 'Rateel',
    arabicTitle: 'رتيل',
    category: 'STC / Tata Consultancy Services',
    arabicCategory: 'stc / تاتا للخدمات الاستشارية',
    context: 'Cooperative Training',
    arabicContext: 'التدريب التعاوني',
    intro: 'Contributed to the development of Rateel during cooperative training at STC in partnership with Tata Consultancy Services. Worked across UI/UX implementation, responsive Flutter widgets, navigation flows, Clean Architecture, API integration, dynamic theming, and audio streaming using external APIs. Tech: Flutter · Dart · Clean Architecture · API Integration · audio_service · just_audio · MP3Quran API',
    arabicIntro: 'ساهمت في تطوير تطبيق رتيل خلال التدريب التعاوني في stc بالشراكة مع تاتا للخدمات الاستشارية. شملت المساهمة تنفيذ UI/UX، وعناصر Flutter متجاوبة، ومسارات التنقل، وبنية Clean Architecture، والتكامل مع واجهات API، وتطبيق السمات الديناميكية، وبث الصوت باستخدام واجهات API خارجية. التقنيات: Flutter · Dart · Clean Architecture · التكامل مع واجهات API · audio_service · just_audio · MP3Quran API',
    accent: '#bd9b70',
    cardAsset: 'rateel/gallery/page-005-image-00.png',
    cardAlt: { en: 'Rateel logo', ar: 'شعار رتيل' },
    heroAsset: 'rateel/gallery/page-005-image-00.png',
    heroAlt: { en: 'Rateel supplied logo', ar: 'الشعار المرفق لتطبيق رتيل' },
    gallery: [
      { type: 'image', src: 'rateel/gallery/page-005-image-00.png', alt: { en: 'Rateel logo', ar: 'شعار رتيل' }, featured: true },
      ...['page-006-image-00.png', 'page-008-image-00.png', 'page-007-image-00.png', 'page-009-image-00.png'].map((file, index) => ({
        type: 'image' as const,
        src: `rateel/gallery/${file}`,
        alt: { en: `Rateel source visual ${index + 1}`, ar: `مرئية من مصدر تطبيق رتيل ${index + 1}` },
      })),
    ],
    keyFeatures: [
      { en: 'Responsive Flutter interface and navigation', ar: 'واجهة Flutter متجاوبة ومسارات تنقل سلسة' },
      { en: 'Default and Ramadan dynamic themes', ar: 'سمات ديناميكية للوضع الافتراضي ورمضان' },
      { en: 'Quran audio streaming', ar: 'بث صوتي للقرآن الكريم' },
      { en: 'External content through MP3Quran API', ar: 'محتوى خارجي عبر MP3Quran API' },
      { en: 'Clean Architecture across presentation, business, and data layers', ar: 'Clean Architecture عبر طبقات العرض والأعمال والبيانات' },
    ],
    sections: {
      overview: {
        label: { en: 'Overview', ar: 'نظرة عامة' },
        title: { en: 'An integrated platform for a daily spiritual journey.', ar: 'منصة متكاملة للرحلة الروحية اليومية.' },
        body: { en: 'Rateel is an integrated digital platform supporting users’ daily spiritual journey with a modern interface for religious practices.', ar: 'رتيل منصة رقمية متكاملة تدعم الرحلة الروحية اليومية للمستخدمين من خلال واجهة عصرية للممارسات الدينية.' },
      },
      role: {
        label: { en: 'My role', ar: 'دوري' },
        title: { en: 'From UI mockups to backend API integration.', ar: 'من النماذج الأولية للواجهات إلى التكامل مع واجهات API.' },
        body: { en: 'During cooperative training at TCS & STC, Sarah managed Rateel from initial UI mockups to backend API integration. Her source-supported role included UI/UX design, responsive widget implementation, seamless navigation flow, business-requirement meetings, mobile application development and enhancement, and alignment with STC architectural and security standards.', ar: 'خلال التدريب التعاوني في TCS وstc، أدارت ساره رتيل من النماذج الأولية الأولى للواجهات حتى التكامل مع واجهات API الخلفية. وشمل دورها المدعوم بالمصدر تصميم UI/UX، وتنفيذ عناصر متجاوبة، وبناء مسارات تنقل سلسة، واجتماعات متطلبات العمل، وتطوير وتحسين تطبيق الجوال، والالتزام بمعايير stc المعمارية والأمنية.' },
      },
      problemSolution: {
        label: { en: 'Problem / solution', ar: 'المشكلة والحل' },
        title: { en: 'One considered interface for daily practice.', ar: 'واجهة مدروسة للممارسة اليومية.' },
        body: { en: 'Rateel brought a modern interface and integrated digital experience to users’ daily spiritual journey, with dynamic Default and Ramadan theming and audio/API support.', ar: 'قدّم رتيل واجهة عصرية وتجربة رقمية متكاملة للرحلة الروحية اليومية للمستخدمين، مع سمات ديناميكية للوضعين الافتراضي ورمضان، ودعم للصوت وواجهات API.' },
      },
      process: {
        label: { en: 'UI/UX process', ar: 'منهجية UI/UX' },
        title: { en: 'Designed in conversation with the system around it.', ar: 'تصميم يتناغم مع النظام المحيط به.' },
        body: { en: 'Work included business-requirement meetings, responsive widget implementation, seamless navigation flow, and alignment with STC architectural and security standards.', ar: 'شمل العمل اجتماعات متطلبات العمل، وتنفيذ عناصر متجاوبة، وبناء مسارات تنقل سلسة، والالتزام بمعايير stc المعمارية والأمنية.' },
      },
      technologies: {
        label: { en: 'Technologies', ar: 'التقنيات' },
        title: { en: 'A maintainable mobile architecture with audio built in.', ar: 'بنية جوّال قابلة للصيانة مع تجربة صوتية مدمجة.' },
        body: { en: '', ar: '' },
        items: [{ en: 'Flutter', ar: 'Flutter' }, { en: 'Dart', ar: 'Dart' }, { en: 'Clean Architecture', ar: 'Clean Architecture' }, { en: 'API Integration', ar: 'التكامل مع واجهات API' }, { en: 'MP3Quran API', ar: 'MP3Quran API' }, { en: 'audio_service', ar: 'audio_service' }, { en: 'just_audio', ar: 'just_audio' }],
      },
      impact: {
        label: { en: 'Results / impact', ar: 'النتائج والأثر' },
        title: { en: 'Reliability, maintainability, and a richer audio experience.', ar: 'موثوقية وقابلية صيانة وتجربة صوتية أغنى.' },
        body: { en: 'Clean Architecture reduced technical debt, improved parallel delivery and time-to-market, and supported enterprise reliability. Dynamic theming supported seasonal personalization and maintainability; audio and API integration supported engagement and resource efficiency.', ar: 'ساهمت Clean Architecture في تقليل الدين التقني وتحسين التسليم المتوازي ووقت الوصول إلى السوق ودعم موثوقية المؤسسات. ودعمت السمات الديناميكية التخصيص الموسمي وقابلية الصيانة، بينما دعم تكامل الصوت وواجهات API التفاعل وكفاءة الموارد.' },
      },
    },
  },
  {
    slug: 'banner-system',
    index: '03',
    title: 'Banner System',
    arabicTitle: 'نظام بانر',
    category: 'UI/UX Design',
    arabicCategory: 'تصميم واجهات وتجربة المستخدم',
    context: 'UI/UX Design',
    arabicContext: 'تصميم واجهات وتجربة المستخدم',
    intro: 'A UX/UI redesign project focused on improving the usability of the university Banner System. Applied Design Thinking through user observation, interviews, prototyping, and usability testing. Redesigned key flows including schedules, transcripts, attendance, language switching, navigation, and error handling. Tech: Figma · UX Research · Design Thinking · Prototyping · Usability Testing · RTL',
    arabicIntro: 'مشروع لإعادة تصميم تجربة وواجهة المستخدم يركّز على تحسين سهولة استخدام نظام بانر الجامعي. طُبّقت منهجية Design Thinking من خلال ملاحظة المستخدمين، والمقابلات، والنمذجة الأولية، واختبار قابلية الاستخدام. أُعيد تصميم مسارات رئيسية تشمل الجداول، والسجلات الأكاديمية، والحضور، وتبديل اللغة، والتنقل، ومعالجة الأخطاء. التقنيات: Figma · أبحاث تجربة المستخدم · Design Thinking · النمذجة الأولية · اختبار قابلية الاستخدام · RTL',
    accent: '#7089a8',
    cardAsset: 'banner-system/gallery/image11.png',
    cardAlt: { en: 'Banner System attendance tracking screen', ar: 'شاشة متابعة الحضور والانصراف في نظام بانر' },
    heroAsset: 'banner-system/video/poster.jpg',
    heroAlt: { en: 'Banner System redesign video poster', ar: 'ملصق فيديو إعادة تصميم نظام بانر' },
    gallery: [
      { type: 'video', src: 'banner-system/video/Banner-System-UI-UX-Design.mp4', alt: { en: 'Banner System UI/UX Design presentation', ar: 'عرض تصميم UI/UX لنظام بانر' }, featured: true },
    ],
    keyFeatures: [
      { en: 'One-click schedule access and weekly timetable', ar: 'وصول مباشر للجدول وعرض أسبوعي منظم' },
      { en: 'Consistent Arabic RTL language switching', ar: 'تبديل متّسق للغة العربية ودعم RTL' },
      { en: 'Semester filters for transcripts and attendance', ar: 'فلاتر للفصول في السجل الأكاديمي والحضور' },
      { en: 'Clear navigation with Back, Cancel, and breadcrumbs', ar: 'تنقل واضح عبر الرجوع والإلغاء ومسارات التنقل' },
      { en: 'Visual study-plan status and PNU-aligned identity', ar: 'حالات بصرية للخطة الدراسية وهوية متوافقة مع PNU' },
    ],
    sections: {
      overview: {
        label: { en: 'Overview', ar: 'نظرة عامة' },
        title: { en: 'A collaborative redesign of the university Banner System.', ar: 'إعادة تصميم تعاونية لنظام بانر الجامعي.' },
        body: { en: 'Banner System is a university platform for accessing schedules, academic records, attendance, and study plans. This project reimagines its main journeys to make academic information clearer and everyday tasks easier to complete.', ar: 'نظام بانر منصة جامعية للوصول إلى الجداول والسجلات الأكاديمية والحضور والخطط الدراسية. يعيد هذا المشروع تصور مساراته الأساسية لتوضيح المعلومات الأكاديمية وتسهيل إنجاز المهام اليومية.' },
      },
      role: {
        label: { en: 'My role', ar: 'دوري' },
        title: { en: 'A collaborative UI/UX redesign.', ar: 'إعادة تصميم تعاونية لـ UI/UX.' },
        body: { en: 'This was a collaborative project by Dareen Almutib, Lama Asiri, Sarah Atawi, Leena Alotibi, Danah Almansour, Reem Alhijris, and Abeer Alshammari.', ar: 'كان هذا المشروع تعاونيًا بمشاركة دارين المطـيب، ولمى عسيري، وساره عطوي، ولينا العتيبي، ودانه المنصور، وريم الهجريس، وعبير الشمري.' },
      },
      problemSolution: {
        label: { en: 'Problem / solution', ar: 'المشكلة والحل' },
        title: { en: 'Less friction across the academic journey.', ar: 'احتكاك أقل خلال الرحلة الأكاديمية.' },
        body: { en: 'The redesign addressed schedule access, language switching and RTL layout, an overwhelming academic transcript, unclear attendance records, dead ends and navigation recovery, outdated visual design, complex academic processes and study plan, and inconsistent branding, typography, and logo. Solutions included a homepage schedule shortcut and weekly timetable, full RTL support, semester filtering, a collapsible transcript with GPA and credit emphasis, attendance filters and visual indicators, Back/Cancel and breadcrumbs, a modern PNU identity, a visual study-plan table with status colors, and direct shortcuts.', ar: 'عالجت إعادة التصميم الوصول إلى الجدول، وتبديل اللغة وتخطيط RTL، والسجل الأكاديمي المربك، وعدم وضوح سجلات الحضور، والنهايات المغلقة واستعادة التنقل، والتصميم البصري القديم، وتعقيد الإجراءات الأكاديمية والخطة الدراسية، وعدم اتساق الهوية والخط والشعار. وشملت الحلول اختصار الجدول في الصفحة الرئيسية والجدول الأسبوعي، ودعم RTL الكامل، وتصفية الفصول، وسجلًا أكاديميًا قابلًا للطي مع إبراز المعدل والساعات، وفلاتر الحضور ومؤشرات بصرية، وأزرار الرجوع والإلغاء ومسارات التنقل، وهوية PNU عصرية، وجدولًا بصريًا للخطة الدراسية بألوان للحالات، واختصارات مباشرة.' },
      },
      process: {
        label: { en: 'UI/UX process', ar: 'منهجية UI/UX' },
        title: { en: 'Design Thinking, made visible.', ar: 'منهجية Design Thinking بشكل ملموس.' },
        body: { en: 'The team moved through observation and interviews, problem definition, ideation, prototyping, and testing.', ar: 'انتقل الفريق عبر الملاحظة والمقابلات، وتحديد المشكلة، وتوليد الأفكار، والنمذجة الأولية، والاختبار.' },
        items: [{ en: 'Observation / interviews', ar: 'الملاحظة والمقابلات' }, { en: 'Problem definition', ar: 'تحديد المشكلة' }, { en: 'Ideation', ar: 'توليد الأفكار' }, { en: 'Prototyping', ar: 'النمذجة الأولية' }, { en: 'Testing', ar: 'الاختبار' }],
      },
      technologies: {
        label: { en: 'Technologies', ar: 'التقنيات' },
        title: { en: 'A visual language built for clarity.', ar: 'لغة بصرية مبنية على الوضوح.' },
        body: { en: '', ar: '' },
        items: [{ en: 'Figma', ar: 'Figma' }, { en: 'UX Research', ar: 'أبحاث تجربة المستخدم' }, { en: 'Design Thinking', ar: 'Design Thinking' }, { en: 'Prototyping', ar: 'النمذجة الأولية' }, { en: 'Usability Testing', ar: 'اختبار قابلية الاستخدام' }, { en: 'RTL', ar: 'RTL' }],
      },
      impact: {
        label: { en: 'Results / impact', ar: 'النتائج والأثر' },
        title: { en: 'A cleaner, more confident experience.', ar: 'تجربة أنظف وأكثر ثقة.' },
        body: { en: 'In testing, users reported easier schedule access, consistent language switching, more organized transcripts, clearer attendance, fewer dead ends, and a cleaner and more confident experience.', ar: 'خلال الاختبار، أفاد المستخدمون بسهولة أكبر في الوصول إلى الجدول، واتساق تبديل اللغة، وتنظيم أفضل للسجلات، ووضوح الحضور، ونهايات مغلقة أقل، وتجربة أنظف وأكثر ثقة.' },
      },
    },
  },
];

export const experience = [
  {
    name: 'Cooperative Training Intern — Tata Consultancy Services (TCS) | stc',
    arabicName: 'متدربة تدريب تعاوني — تاتا للخدمات الاستشارية (TCS) | stc',
    role: { en: 'Applications Sector', ar: 'قطاع التطبيقات' },
    note: {
      en: 'Contributed to enterprise application development within the stc environment, with hands-on experience in application testing, debugging, technical documentation, and software development workflows.',
      ar: 'ساهمت في تطوير تطبيقات مؤسسية ضمن بيئة stc، مع خبرة عملية في اختبار التطبيقات، وتصحيح الأخطاء، والتوثيق التقني، وسير عمل تطوير البرمجيات.',
    },
  },
];


export type LeadershipCard = {
  id: string;
  organization: Localized;
  logo: string;
  role: Localized;
  period?: Localized;
  location?: Localized;
  backDetails: Localized;
  skills?: Localized;
  certificates: { src: string; alt: Localized }[];
  linkedinUrl?: string;
};

export const leadershipCards: LeadershipCard[] = [
  {
    id: 'gdgoc-leader',
    organization: { en: 'GDGoC at PNU', ar: 'GDGoC في جامعة الأميرة نورة' },
    logo: 'GDG',
    role: { en: 'Leader', ar: 'قائدة' },
    period: { en: 'Sep 2024 – Jun 2025', ar: 'سبتمبر 2024 – يونيو 2025' },
    location: { en: 'Riyadh, Saudi Arabia · Hybrid', ar: 'الرياض، المملكة العربية السعودية · هجين' },
    backDetails: {
      en: 'Led a 35-member student team and organized more than 10 technical events and workshops attended by over 200 students. Contributed to the community’s growth and supported the team through leadership, dedication, and impactful initiatives.',
      ar: 'قدت فريقًا طلابيًا من 35 عضوًا ونظمت أكثر من 10 فعاليات وورش تقنية حضرها أكثر من 200 طالب وطالبة، وأسهمت في نمو المجتمع ودعمت الفريق بالقيادة والتفاني والمبادرات المؤثرة.',
    },
    certificates: [
      { src: 'leadership/certificates/gdgoc-leader-2024.png', alt: { en: 'GDGoC Leader Certificate 2024', ar: 'شهادة قائدة GDGoC لعام 2024' } },
      { src: 'leadership/certificates/gdgoc-outstanding-leadership-2024-2025.png', alt: { en: 'GDGoC Outstanding Leadership Certificate 2024–2025', ar: 'شهادة القيادة المتميزة في GDGoC لعام 2024–2025' } },
    ],
    linkedinUrl: 'https://www.linkedin.com/company/google-developer-groups-at-pnu/posts/?feedView=all',
  },
  {
    id: 'gdgoc-core-team',
    organization: { en: 'GDGoC / GDSC at PNU', ar: 'GDGoC / GDSC في جامعة الأميرة نورة' },
    logo: 'GDG',
    role: { en: 'Core Team Member', ar: 'عضو في الفريق الأساسي' },
    period: { en: 'Sep 2023 – Jun 2024', ar: 'سبتمبر 2023 – يونيو 2024' },
    location: { en: 'Riyadh, Saudi Arabia · Hybrid', ar: 'الرياض، المملكة العربية السعودية · هجين' },
    backDetails: {
      en: 'Served on the Core Team during the 2023–2024 academic year, contributing to club activities and initiatives and supporting the student developer community through technical and community-focused events.',
      ar: 'عملت ضمن الفريق الأساسي خلال العام الأكاديمي 2023–2024، وساهمت في أنشطة النادي ومبادراته ودعمت مجتمع المطورين الطلابي من خلال الفعاليات التقنية والمجتمعية.',
    },
    certificates: [
      { src: 'leadership/certificates/gdgoc-core-team-2023-2024.png', alt: { en: 'GDGoC Core Team Member Certificate 2023–2024', ar: 'شهادة عضو الفريق الأساسي في GDGoC لعام 2023–2024' } },
      { src: 'leadership/certificates/gdgoc-data-engineer.png', alt: { en: 'GDGoC Data Engineer Appreciation Certificate', ar: 'شهادة تقدير مسار مهندس البيانات في GDGoC' } },
      { src: 'leadership/certificates/gdgoc-security-engineer.png', alt: { en: 'GDGoC Security Engineer Appreciation Certificate', ar: 'شهادة تقدير مسار مهندس الأمن في GDGoC' } },
      { src: 'leadership/certificates/gdgoc-technofun-appreciation.png', alt: { en: 'GDGoC TechnoFun Appreciation Certificate', ar: 'شهادة تقدير TechnoFun في GDGoC' } },
      { src: 'leadership/certificates/gdgoc-technofun.png', alt: { en: 'GDGoC TechnoFun Certificate', ar: 'شهادة TechnoFun في GDGoC' } },
    ],
    linkedinUrl: 'https://www.linkedin.com/company/google-developer-groups-at-pnu/posts/?feedView=all',
  },
  {
    id: 'gdgoc-mentor',
    organization: { en: 'GDGoC at PNU', ar: 'GDGoC في جامعة الأميرة نورة' },
    logo: 'GDG',
    role: { en: 'Organizing Team Mentor', ar: 'مرشدة فريق التنظيم' },
    backDetails: {
      en: 'Provided guidance and support to the Events Committee, sharing experience and helping the team plan and deliver engaging events and initiatives for the GDGoC community.',
      ar: 'قدمت الإرشاد والدعم للجنة الفعاليات، وشاركت خبرتها وساعدت الفريق على تخطيط وتنفيذ فعاليات ومبادرات جاذبة لمجتمع GDGoC.',
    },
    skills: { en: 'Mentoring · Strategic Planning · Event Planning · Team Coordination', ar: 'الإرشاد · التخطيط الاستراتيجي · تخطيط الفعاليات · تنسيق الفريق' },
    certificates: [],
    linkedinUrl: 'https://www.linkedin.com/company/google-developer-groups-at-pnu/posts/?feedView=all',
  },
  {
    id: 'ajyalna',
    organization: { en: 'Ajyalna Alwaidah', ar: 'أجيالنا الواعدة' },
    logo: 'أجيالنا',
    role: { en: 'Leader of the Quality and Development Committee', ar: 'قائدة لجنة الجودة والتطوير' },
    period: { en: 'Jul 2025 – Sep 2025', ar: 'يوليو 2025 – سبتمبر 2025' },
    location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض، المملكة العربية السعودية' },
    backDetails: {
      en: 'Led programs that helped new students in Princess Nourah University’s College of Computer and Information Sciences navigate their new major and academic life.',
      ar: 'قدت برامج ساعدت الطالبات المستجدات في كلية علوم الحاسب والمعلومات بجامعة الأميرة نورة على التكيف مع تخصصهن الجديد والحياة الأكاديمية.',
    },
    certificates: [],
    linkedinUrl: 'https://www.linkedin.com/company/أجيالُنا-الواعدة-ajyalna-alwaidah/posts/?feedView=all',
  },
  {
    id: 'student-council',
    organization: { en: 'Princess Nourah bint Abdulrahman University', ar: 'جامعة الأميرة نورة بنت عبدالرحمن' },
    logo: 'PNU',
    role: { en: 'Student Council Member', ar: 'عضو المجلس الطلابي' },
    period: { en: 'Jan 2025 – Jul 2025', ar: 'يناير 2025 – يوليو 2025' },
    backDetails: {
      en: 'Actively represented student interests by working closely with university leadership to enhance student life and foster campus engagement.',
      ar: 'مثلت اهتمامات الطالبات بفاعلية من خلال العمل عن قرب مع قيادة الجامعة لتعزيز الحياة الطلابية وتشجيع المشاركة داخل الحرم الجامعي.',
    },
    certificates: [
      { src: 'leadership/certificates/student-council.png', alt: { en: 'Student Council appreciation certificate', ar: 'شهادة شكر وتقدير من المجلس الطلابي' } },
    ],
  },
];


export const workshops = [
  { en: 'Workshop', ar: 'ورشة عمل', detail: { en: '', ar: '' } },
];

export const certifications = [
  { en: 'Certification', ar: 'شهادة', detail: { en: '', ar: '' } },
];

export const copy = {
  en: {
    portfolio: 'Portfolio',
    enter: 'Enter portfolio',
    choose: 'Choose your language',
    languageNote: 'A personal archive of digital work, learning, and leadership.',
    nav: ['About', 'Work', 'Cooperative Training', 'Contact'],
    available: 'Available for meaningful work',
    heroEyebrow: 'Computer Science · Mobile Development · UI/UX',
    heroTitleA: 'I design the',
    heroTitleB: 'way forward.',
     heroBody: 'Computer Science graduate with an interest in mobile application development and UI/UX design.',
     viewWork: 'View selected work',
    contactMe: 'Contact me',
    scroll: 'Scroll to explore',
     selected: 'Selected Work',
    selectedIntro: 'Three studies in making complex things feel considered.',
    viewCase: 'View case study',
    aboutLabel: 'A little context',
    aboutTitle: 'Technical by nature.\\nHuman in practice.',
     aboutBody: 'Computer Science graduate from Princess Nourah bint Abdulrahman University with interest in mobile application development and UI/UX design. Experienced in developing mobile applications using Flutter and Dart, and designing user-centered interfaces using Figma.',
     aboutBody2: 'Completed cooperative training at stc in partnership with Tata Consultancy Services within the applications sector. Previously served as a Leader and Mentor at Google Developer Groups on Campus (GDGoC), a Member of the Student Advisory Council, and Leader of Quality & Development at the “Ajyalna Alwaidah” initiative. Demonstrates communication, leadership, and problem-solving skills, with a commitment to continuous learning and professional growth.',
    currently: 'Currently exploring',
     focus: 'Mobile application development, UI/UX design, and continuous professional growth.',
    experience: 'Cooperative Training',
    experienceIntro: '',
    leadership: 'Leadership & activities',
    leadershipIntro: 'The work around the work matters, too.',
    gdgoc: 'GDGoC journey',
    workshops: 'Workshops',
    certifications: 'Certifications',
    coming: '',
    contactLabel: 'Open invitation',
    contactTitle: 'Let’s build something\\nmeaningful.',
    contactBody: 'Have a question, a thoughtful brief, or a problem worth solving? I’d love to hear it.',
    sayHello: 'Say hello',
    footer: 'Sarah Atawi / Portfolio',
    back: 'Back to portfolio',
    overview: 'Project overview',
    projectNote: 'This case study is being prepared with care.',
    role: 'Role',
    scope: 'Scope',
    status: 'Status',
    inProgress: '',
     myRole: 'My role',
     problemSolution: 'Problem / solution',
     process: 'UI/UX process',
     technologies: 'Technologies',
     keyFeatures: 'Key features',
     impact: 'Results / impact',
     gallery: 'Image & video gallery',
     skills: 'Source-supported skills',
     dragSkills: 'Drag to explore',
     close: 'Close preview',
     previous: 'Previous media',
     next: 'Next media',
  },
  ar: {
    portfolio: 'ملف الأعمال',
    enter: 'الدخول إلى الملف',
    choose: 'اختاري اللغة',
    languageNote: '',
    nav: ['نبذة عني', 'الأعمال', 'التدريب التعاوني', 'تواصل'],
    available: '',
    heroEyebrow: 'علوم الحاسب · تطوير تطبيقات الجوال · تصميم UI/UX',
    heroTitleA: 'ساره عطوي',
    heroTitleB: '',
     heroBody: 'خريجة علوم الحاسب من جامعة الأميرة نورة بنت عبدالرحمن، مع اهتمام بتطوير تطبيقات الجوال وتصميم UI/UX.',
    viewWork: 'مشاريعي المختارة',
    contactMe: 'تواصل معي',
    scroll: 'مرّري للاستكشاف',
    selected: 'مشاريعي المختارة',
    selectedIntro: '',
    viewCase: 'شاهد الحالة',
    aboutLabel: 'نبذة عني',
    aboutTitle: 'علوم الحاسب\\nوتطوير التطبيقات',
     aboutBody: 'خريجة علوم الحاسب من جامعة الأميرة نورة بنت عبدالرحمن، لدي اهتمام بتطوير تطبيقات الجوال وتصميم UI/UX. أمتلك خبرة في تطوير تطبيقات الجوال باستخدام Flutter وDart، وتصميم واجهات تتمحور حول المستخدم باستخدام Figma.',
     aboutBody2: 'أكملت التدريب التعاوني في stc بالشراكة مع شركة تاتا للخدمات الاستشارية ضمن قطاع التطبيقات. وسبق أن عملت قائدة ومرشدة في Google Developer Groups on Campus (GDGoC)، وعضوًا في المجلس الاستشاري الطلابي، وقائدة للجودة والتطوير في مبادرة «أجيالنا الواعدة». أتمتع بمهارات التواصل والقيادة وحل المشكلات، مع التزام بالتعلم المستمر والنمو المهني.',
    currently: 'التخصصات',
     focus: 'تطوير تطبيقات الجوال، وتصميم UI/UX، والنمو المهني المستمر.',
    experience: 'التدريب التعاوني',
    experienceIntro: '',
    leadership: 'القيادة والأنشطة',
    leadershipIntro: '',
    gdgoc: 'رحلة GDGoC',
    workshops: 'ورش العمل',
    certifications: 'الشهادات',
    coming: '',
    contactLabel: 'تواصل',
    contactTitle: 'تواصل\\nمعي',
    contactBody: '',
    sayHello: 'تواصل معي',
    footer: 'ساره عطوي / ملف الأعمال',
    back: 'العودة إلى الملف',
    overview: 'نظرة عامة على المشروع',
    projectNote: 'يتم إعداد دراسة الحالة هذه بعناية.',
    role: 'الدور',
    scope: 'النطاق',
    status: 'الحالة',
    inProgress: '',
     myRole: 'دوري',
     problemSolution: 'المشكلة والحل',
     process: 'منهجية UI/UX',
     technologies: 'التقنيات',
     keyFeatures: 'الميزات الرئيسية',
     impact: 'النتائج والأثر',
     gallery: 'معرض الصور والفيديو',
     skills: 'المهارات المدعومة بالمصدر',
     dragSkills: 'اسحبي للاستكشاف',
     close: 'إغلاق المعاينة',
     previous: 'الوسائط السابقة',
     next: 'الوسائط التالية',
  },
} as const;