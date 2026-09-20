/**
 * app.js — وجهة | Wejha
 * ================================================
 * Vanilla JavaScript — بدون frameworks أو build tools
 * يعمل بفتح index.html مباشرة في المتصفح
 */

// ================================================
//  المجالات الأكاديمية
// ================================================
const fields = [
  "علوم الحاسوب وتقنية المعلومات",
  "الهندسة",
  "إدارة الأعمال والاقتصاد",
  "العلوم الصحية",
  "القانون والحوكمة",
  "التربية",
  "العلوم الاجتماعية",
  "الزراعة والتقنية الحيوية",
  "إدارة الأراضي والمساحة",
];

// ================================================
//  بيانات التخصصات
//  schedules: مصفوفة أنواع الدوام لكل تخصص
//  إذا schedules.length === 1  → عرض السعر مباشرة
//  إذا أكثر من 1 → عرض أزرار اختيار الدوام
//
//  ⚠️ أسعار ULK بالدولار تقريبية — محوّلة بسعر صرف ≈ 1,180 RWF/USD
//  راجع سعر الصرف الحالي قبل النشر الفعلي
// ================================================
const programs = [
  // ===================== ULK — بكالوريوس =====================
  { uni:"ULK", campus:"Kigali",  level:"بكالوريوس", field:"إدارة الأعمال والاقتصاد",         name:"المحاسبة (Accounting)",                                    duration:3, schedules:[{type:"صباحي", usd:560, rwf:660000}, {type:"مسائي / نهاية أسبوع", usd:610, rwf:720000}] },
  { uni:"ULK", campus:"Gisenyi", level:"بكالوريوس", field:"إدارة الأعمال والاقتصاد",         name:"الاقتصاد (Economics)",                                     duration:3, schedules:[{type:"صباحي", usd:430, rwf:510000}, {type:"مسائي / نهاية أسبوع", usd:485, rwf:570000}] },
  { uni:"ULK", campus:"Gisenyi", level:"بكالوريوس", field:"إدارة الأعمال والاقتصاد",         name:"التمويل (Finance)",                                        duration:3, schedules:[{type:"صباحي", usd:430, rwf:510000}, {type:"مسائي / نهاية أسبوع", usd:485, rwf:570000}] },
  { uni:"ULK", campus:"Kigali",  level:"بكالوريوس", field:"العلوم الاجتماعية",               name:"دراسات التنمية (Development Studies)",                     duration:3, schedules:[{type:"صباحي", usd:560, rwf:660000}, {type:"مسائي", usd:610, rwf:720000}] },
  { uni:"ULK", campus:"Gisenyi", level:"بكالوريوس", field:"العلوم الاجتماعية",               name:"العلاقات الدولية (International Relations)",               duration:3, schedules:[{type:"صباحي", usd:430, rwf:510000}, {type:"مسائي", usd:485, rwf:570000}] },
  { uni:"ULK", campus:"Kigali",  level:"بكالوريوس", field:"القانون والحوكمة",                name:"القانون العام (Public Law)",                               duration:3, schedules:[{type:"صباحي", usd:560, rwf:660000}, {type:"مسائي / نهاية أسبوع", usd:610, rwf:720000}] },
  { uni:"ULK", campus:"Kigali",  level:"بكالوريوس", field:"القانون والحوكمة",                name:"القانون الخاص (Private Law)",                              duration:3, schedules:[{type:"صباحي", usd:560, rwf:660000}, {type:"مسائي / نهاية أسبوع", usd:610, rwf:720000}] },
  { uni:"ULK", campus:"Kigali",  level:"بكالوريوس", field:"علوم الحاسوب وتقنية المعلومات", name:"هندسة الشبكات (Networking)",                               duration:4, schedules:[{type:"صباحي", usd:635, rwf:750000}, {type:"مسائي", usd:685, rwf:810000}] },
  { uni:"ULK", campus:"Gisenyi", level:"بكالوريوس", field:"علوم الحاسوب وتقنية المعلومات", name:"هندسة البرمجيات (Software Engineering)",                   duration:4, schedules:[{type:"صباحي", usd:460, rwf:540000}] },
  { uni:"ULK", campus:"Gisenyi", level:"بكالوريوس", field:"علوم الحاسوب وتقنية المعلومات", name:"علم البيانات (Data Science)",                              duration:4, schedules:[{type:"صباحي", usd:510, rwf:600000}] },
  { uni:"ULK", campus:"Kigali",  level:"بكالوريوس", field:"التربية",                         name:"تربية الأحياء والكيمياء (Biology-Chemistry Education)",    duration:4, schedules:[{type:"صباحي / إجازات", usd:460, rwf:540000}] },
  { uni:"ULK", campus:"Gisenyi", level:"بكالوريوس", field:"التربية",                         name:"تربية الرياضيات والفيزياء (Mathematics-Physics Education)",duration:4, schedules:[{type:"صباحي / إجازات", usd:380, rwf:450000}] },
  { uni:"ULK", campus:"Gisenyi", level:"بكالوريوس", field:"التربية",                         name:"تربية الحاسوب والفيزياء (Computer Science-Physics Education)",duration:4, schedules:[{type:"صباحي / إجازات", usd:380, rwf:450000}] },
  { uni:"ULK", campus:"Kigali",  level:"بكالوريوس", field:"التربية",                         name:"تربية الجغرافيا والتاريخ (Geography-History Education)",   duration:4, schedules:[{type:"صباحي / إجازات", usd:380, rwf:450000}] },
  { uni:"ULK", campus:"Gisenyi", level:"بكالوريوس", field:"التربية",                         name:"تربية الإنجليزية-الفرنسية (English-French Education)",     duration:4, schedules:[{type:"صباحي / إجازات", usd:355, rwf:420000}] },
  { uni:"ULK", campus:"Gisenyi", level:"بكالوريوس", field:"التربية",                         name:"تربية الإنجليزية-الكينيارواندية (English-Kinyarwanda Education)",duration:4, schedules:[{type:"صباحي / إجازات", usd:355, rwf:420000}] },
  { uni:"ULK", campus:"Gisenyi", level:"بكالوريوس", field:"التربية",                         name:"تربية الإنجليزية-السواحيلية (English-Kiswahili Education)",duration:4, schedules:[{type:"صباحي / إجازات", usd:355, rwf:420000}] },

  // ===================== ULK Polytechnic (UPI) — دبلوم متقدم =====================
  // ⚠️ أسعار الدولار تقريبية — سعر الصرف ≈ 1,180 RWF/USD
  { uni:"ULK", campus:"Kigali", level:"دبلوم متقدم", field:"الهندسة", name:"التقنية الكهربائية (Electrical Technology)",         duration:3, schedules:[{type:"صباحي", usd:585, rwf:690000}, {type:"مسائي", usd:635, rwf:750000}] },
  { uni:"ULK", campus:"Kigali", level:"دبلوم متقدم", field:"الهندسة", name:"الإلكترونيات والاتصالات (Electronics & Telecom)",    duration:3, schedules:[{type:"صباحي", usd:585, rwf:690000}, {type:"مسائي", usd:635, rwf:750000}] },
  { uni:"ULK", campus:"Kigali", level:"دبلوم متقدم", field:"الهندسة", name:"تقنية البناء (Construction Technology)",             duration:3, schedules:[{type:"صباحي", usd:585, rwf:690000}, {type:"مسائي", usd:635, rwf:750000}] },
  { uni:"ULK", campus:"Kigali", level:"دبلوم متقدم", field:"الهندسة", name:"هندسة المساحة (Land Survey Engineering)",            duration:3, schedules:[{type:"صباحي", usd:585, rwf:690000}, {type:"مسائي", usd:635, rwf:750000}] },

  // ===================== ULK — B-TECH (سنة واحدة) =====================
  // ⚠️ أسعار الدولار تقريبية — سعر الصرف ≈ 1,180 RWF/USD
  { uni:"ULK", campus:"Kigali", level:"B-TECH", field:"الهندسة", name:"التقنية الكهربائية (Electrical Technology)",                  duration:1, schedules:[{type:"صباحي (44 أسبوع)", usd:1015, rwf:1200000}, {type:"مسائي (53 أسبوع)", usd:1015, rwf:1200000}] },
  { uni:"ULK", campus:"Kigali", level:"B-TECH", field:"الهندسة", name:"الإلكترونيات والاتصالات (Electronics & Telecommunication)",  duration:1, schedules:[{type:"صباحي (44 أسبوع)", usd:1015, rwf:1200000}, {type:"مسائي (53 أسبوع)", usd:1015, rwf:1200000}] },
  { uni:"ULK", campus:"Kigali", level:"B-TECH", field:"الهندسة", name:"تقنية البناء (Construction Technology)",                     duration:1, schedules:[{type:"صباحي (44 أسبوع)", usd:1015, rwf:1200000}, {type:"مسائي (53 أسبوع)", usd:1015, rwf:1200000}] },
  { uni:"ULK", campus:"Kigali", level:"B-TECH", field:"الهندسة", name:"هندسة المساحة (Land Surveying Engineering)",                 duration:1, schedules:[{type:"صباحي (44 أسبوع)", usd:1015, rwf:1200000}, {type:"مسائي (53 أسبوع)", usd:1015, rwf:1200000}] },

  // ===================== ULK — ماجستير =====================
  // ⚠️ أسعار الدولار تقريبية — سعر الصرف ≈ 1,180 RWF/USD
  { uni:"ULK", campus:"Kigali", level:"ماجستير", field:"إدارة الأعمال والاقتصاد", name:"إدارة الأعمال (MBA)",                                              duration:2, schedules:[{type:"عام", usd:1355, rwf:1600000}] },
  { uni:"ULK", campus:"Kigali", level:"ماجستير", field:"إدارة الأعمال والاقتصاد", name:"التمويل (Master of Finance)",                                       duration:2, schedules:[{type:"عام", usd:1355, rwf:1600000}] },
  { uni:"ULK", campus:"Kigali", level:"ماجستير", field:"إدارة الأعمال والاقتصاد", name:"المحاسبة (Master of Accounting)",                                   duration:2, schedules:[{type:"عام", usd:1355, rwf:1600000}] },
  { uni:"ULK", campus:"Kigali", level:"ماجستير", field:"إدارة الأعمال والاقتصاد", name:"الاقتصاد (MSc Economics)",                                          duration:2, schedules:[{type:"عام", usd:1355, rwf:1600000}] },
  { uni:"ULK", campus:"Kigali", level:"ماجستير", field:"العلوم الاجتماعية",        name:"الحوكمة (Master of Governance)",                                   duration:2, schedules:[{type:"عام", usd:1355, rwf:1600000}] },
  { uni:"ULK", campus:"Kigali", level:"ماجستير", field:"العلوم الاجتماعية",        name:"دراسات التنمية (Master of Development Studies)",                  duration:2, schedules:[{type:"عام", usd:1355, rwf:1600000}] },
  { uni:"ULK", campus:"Kigali", level:"ماجستير", field:"القانون والحوكمة",         name:"القانون الدولي العام (Master of Public International Law)",        duration:2, schedules:[{type:"عام", usd:1355, rwf:1600000}] },
  { uni:"ULK", campus:"Kigali", level:"ماجستير", field:"القانون والحوكمة",         name:"قانون الأعمال الدولي (International Economic and Business Law)",  duration:2, schedules:[{type:"عام", usd:1355, rwf:1600000}] },
  { uni:"ULK", campus:"Kigali", level:"ماجستير", field:"علوم الحاسوب وتقنية المعلومات", name:"أنظمة الإنترنت (MSc Internet Systems)",                      duration:2, schedules:[{type:"عام", usd:1355, rwf:1600000}] },
  { uni:"ULK", campus:"Kigali", level:"ماجستير", field:"إدارة الأعمال والاقتصاد", name:"إدارة أعمال - تمويل (MBA: Finance)",                               duration:2, schedules:[{type:"عام", usd:2170, rwf:2560000}] },
  { uni:"ULK", campus:"Kigali", level:"ماجستير", field:"إدارة الأعمال والاقتصاد", name:"إدارة أعمال - تسويق (MBA: Marketing)",                             duration:2, schedules:[{type:"عام", usd:2170, rwf:2560000}] },
  { uni:"ULK", campus:"Kigali", level:"ماجستير", field:"إدارة الأعمال والاقتصاد", name:"إدارة أعمال - محاسبة (MBA: Accounting)",                           duration:2, schedules:[{type:"عام", usd:2170, rwf:2560000}] },
  { uni:"ULK", campus:"Kigali", level:"ماجستير", field:"إدارة الأعمال والاقتصاد", name:"إدارة أعمال - إدارة مشاريع (MBA: Project Management)",             duration:2, schedules:[{type:"عام", usd:2170, rwf:2560000}] },
  { uni:"ULK", campus:"Kigali", level:"ماجستير", field:"إدارة الأعمال والاقتصاد", name:"إدارة أعمال - موارد بشرية (MBA: HR Management)",                   duration:2, schedules:[{type:"عام", usd:2170, rwf:2560000}] },
  { uni:"ULK", campus:"Kigali", level:"ماجستير", field:"إدارة الأعمال والاقتصاد", name:"إدارة أعمال - المشتريات وسلاسل الإمداد (MBA: Procurement & Supply Chain)", duration:2, schedules:[{type:"عام", usd:2170, rwf:2560000}] },
  { uni:"ULK", campus:"Kigali", level:"ماجستير", field:"علوم الحاسوب وتقنية المعلومات", name:"هندسة البرمجيات (MSc Software Engineering)",                 duration:2, schedules:[{type:"عام", usd:1900, rwf:2240000}] },

  // ===================== INES (Musanze) — بكالوريوس =====================
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"الهندسة",                        name:"العمارة - سنة 1،2 (Architecture)",                           duration:5, schedules:[{type:"عام", usd:2175, rwf:2570000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"الهندسة",                        name:"العمارة - سنة 3،4،5 (Architecture)",                         duration:5, schedules:[{type:"عام", usd:1560, rwf:1850000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"الهندسة",                        name:"الهندسة المدنية (Civil Engineering)",                         duration:4, schedules:[{type:"عام", usd:1205, rwf:1425000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"الهندسة",                        name:"هندسة المياه (Water Engineering)",                            duration:4, schedules:[{type:"عام", usd:1205, rwf:1425000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"الهندسة",                        name:"هندسة الطاقة الكهربائية (Electrical Power Engineering)",     duration:4, schedules:[{type:"عام", usd:1480, rwf:1750000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"الهندسة",                        name:"هندسة الطاقة المتجددة (Renewable Energy Engineering)",       duration:4, schedules:[{type:"عام", usd:1480, rwf:1750000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"العلوم الصحية",                  name:"علوم المختبرات الطبية الحيوية (Biomedical Laboratory Sciences)", duration:4, schedules:[{type:"عام", usd:1205, rwf:1425000}] },
  { uni:"INES", campus:"Musanze", level:"دبلوم متقدم", field:"العلوم الصحية",                name:"التمريض العام — دبلوم متقدم (A1)",                           duration:3, schedules:[{type:"عام", usd:1030, rwf:1215000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"العلوم الصحية",                  name:"التمريض العام — بكالوريوس (A0)",                             duration:4, schedules:[{type:"عام", usd:1030, rwf:1215000}] },
  { uni:"INES", campus:"Musanze", level:"دبلوم متقدم", field:"العلوم الصحية",                name:"القبالة — دبلوم متقدم (Midwifery A1)",                       duration:3, schedules:[{type:"عام", usd:1030, rwf:1215000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"العلوم الصحية",                  name:"القبالة — بكالوريوس (Midwifery A0)",                         duration:4, schedules:[{type:"عام", usd:1030, rwf:1215000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"العلوم الصحية",                  name:"الصيدلة (Pharmacy)",                                         duration:5, schedules:[{type:"عام", usd:2410, rwf:2850000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"العلوم الصحية",                  name:"التخدير (Anaesthesia)",                                      duration:4, schedules:[{type:"عام", usd:2410, rwf:2850000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"إدارة الأعمال والاقتصاد",        name:"الإحصاء التطبيقي على الاقتصاد",                              duration:4, schedules:[{type:"عام", usd:680,  rwf:800000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"الزراعة والتقنية الحيوية",       name:"التقنية الحيوية الغذائية (Food Biotechnology)",               duration:4, schedules:[{type:"عام", usd:850,  rwf:1000000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"الزراعة والتقنية الحيوية",       name:"التقنية الحيوية النباتية - سنة 1 (Plant Biotechnology)",     duration:4, schedules:[{type:"عام", usd:850,  rwf:1000000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"الزراعة والتقنية الحيوية",       name:"التقنية الحيوية النباتية - سنة 2،3،4",                       duration:4, schedules:[{type:"عام", usd:780,  rwf:925000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"الزراعة والتقنية الحيوية",       name:"الإنتاج الزراعي (Crop Production)",                          duration:4, schedules:[{type:"عام", usd:850,  rwf:1000000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"إدارة الأراضي والمساحة",         name:"المساحة (Land Survey)",                                      duration:4, schedules:[{type:"عام", usd:1030, rwf:1215000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"علوم الحاسوب وتقنية المعلومات", name:"علوم الحاسوب - سنة 1،2 (Computer Sciences)",                 duration:4, schedules:[{type:"عام", usd:1020, rwf:1200000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"علوم الحاسوب وتقنية المعلومات", name:"هندسة البرمجيات - سنة 3،4 (Software Engineering)",           duration:4, schedules:[{type:"عام", usd:970,  rwf:1150000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"علوم الحاسوب وتقنية المعلومات", name:"هندسة الشبكات - سنة 3،4 (Network Engineering)",              duration:4, schedules:[{type:"عام", usd:970,  rwf:1150000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"علوم الحاسوب وتقنية المعلومات", name:"تقنية المعلومات الصناعية - سنة 3،4",                         duration:4, schedules:[{type:"عام", usd:970,  rwf:1150000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"إدارة الأراضي والمساحة",         name:"إدارة الأراضي (Land Administration and Management)",         duration:4, schedules:[{type:"عام", usd:850,  rwf:1000000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"إدارة الأراضي والمساحة",         name:"التثمين وإدارة الممتلكات (Valuation and Property Management)",duration:4, schedules:[{type:"عام", usd:850,  rwf:1000000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"علوم الحاسوب وتقنية المعلومات", name:"علوم المعلومات وإدارة المكتبات",                             duration:4, schedules:[{type:"عام", usd:680,  rwf:800000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"إدارة الأعمال والاقتصاد",        name:"الاقتصاد - سنة 1 (Economics)",                              duration:4, schedules:[{type:"عام", usd:760,  rwf:900000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"إدارة الأعمال والاقتصاد",        name:"الاقتصاد المالي (Financial Economics)",                      duration:4, schedules:[{type:"عام", usd:760,  rwf:900000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"إدارة الأعمال والاقتصاد",        name:"اقتصاد التنمية الريفية (Rural Development Economics)",       duration:4, schedules:[{type:"عام", usd:760,  rwf:900000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"إدارة الأعمال والاقتصاد",        name:"الاقتصاد الدولي (International Economics)",                  duration:4, schedules:[{type:"عام", usd:760,  rwf:900000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"إدارة الأعمال والاقتصاد",        name:"إدارة الأعمال والمحاسبة - سنة 1 (BBA with Accounting)",      duration:4, schedules:[{type:"عام", usd:760,  rwf:900000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"إدارة الأعمال والاقتصاد",        name:"ريادة الأعمال وتطوير الإدارة (Entrepreneurship Development)", duration:4, schedules:[{type:"عام", usd:760,  rwf:900000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"القانون والحوكمة",               name:"الإدارة العامة والحوكمة (Public Administration and Governance)",duration:4, schedules:[{type:"عام", usd:760, rwf:900000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"القانون والحوكمة",               name:"القانون (Law)",                                              duration:4, schedules:[{type:"عام", usd:760,  rwf:900000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"التربية",                         name:"الإنجليزية-الفرنسية مع التربية",                             duration:4, schedules:[{type:"عام", usd:545,  rwf:645000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"التربية",                         name:"تربية الأحياء والكيمياء",                                    duration:4, schedules:[{type:"عام", usd:545,  rwf:645000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"التربية",                         name:"تربية الرياضيات والفيزياء",                                  duration:4, schedules:[{type:"عام", usd:545,  rwf:645000}] },
  { uni:"INES", campus:"Musanze", level:"بكالوريوس", field:"التربية",                         name:"تربية الرياضيات والحاسوب",                                   duration:4, schedules:[{type:"عام", usd:545,  rwf:645000}] },

  // ===================== INES (Musanze) — ماجستير =====================
  { uni:"INES", campus:"Musanze", level:"ماجستير", field:"إدارة الأعمال والاقتصاد",        name:"إدارة أعمال - التمويل الأصغر (MBA Microfinance)",                          duration:2, schedules:[{type:"عام", usd:2115, rwf:2500000}] },
  { uni:"INES", campus:"Musanze", level:"ماجستير", field:"إدارة الأعمال والاقتصاد",        name:"الضرائب (MSc Taxation)",                                                   duration:2, schedules:[{type:"عام", usd:2115, rwf:2500000}] },
  { uni:"INES", campus:"Musanze", level:"ماجستير", field:"إدارة الأعمال والاقتصاد",        name:"إدارة أعمال - إدارة التعاونيات (MBA Cooperatives Management)",              duration:2, schedules:[{type:"عام", usd:2115, rwf:2500000}] },
  { uni:"INES", campus:"Musanze", level:"ماجستير", field:"إدارة الأعمال والاقتصاد",        name:"إدارة أعمال - ريادة الأعمال والمشاريع الصغيرة (MBA Entrepreneurship & SME)",duration:2, schedules:[{type:"عام", usd:2115, rwf:2500000}] },
  { uni:"INES", campus:"Musanze", level:"ماجستير", field:"القانون والحوكمة",               name:"ماجستير القانون - القانون الجنائي التطبيقي (LLM Applied Criminal Law)",    duration:2, schedules:[{type:"عام", usd:2115, rwf:2500000}] },
  { uni:"INES", campus:"Musanze", level:"ماجستير", field:"العلوم الصحية",                  name:"علوم المختبرات الطبية الحيوية (MSc Biomedical Laboratory Sciences)",        duration:2, schedules:[{type:"عام", usd:2960, rwf:3500000}] },
  { uni:"INES", campus:"Musanze", level:"ماجستير", field:"علوم الحاسوب وتقنية المعلومات", name:"هندسة البرمجيات (MSc Software Engineering)",                                duration:2, schedules:[{type:"عام", usd:2620, rwf:3100000}] },
  { uni:"INES", campus:"Musanze", level:"ماجستير", field:"إدارة الأراضي والمساحة",         name:"المعلوماتية الجغرافية (MSc Geo-Informatics)",                               duration:2, schedules:[{type:"عام", usd:2960, rwf:3500000}] },
  { uni:"INES", campus:"Musanze", level:"ماجستير", field:"إدارة الأراضي والمساحة",         name:"التثمين وإدارة الممتلكات (MSc Valuation and Property Management)",          duration:2, schedules:[{type:"عام", usd:2620, rwf:3100000}] },
  { uni:"INES", campus:"Musanze", level:"ماجستير", field:"إدارة الأراضي والمساحة",         name:"إدارة الأراضي (MSc Land Administration and Management)",                    duration:2, schedules:[{type:"عام", usd:2620, rwf:3100000}] },
  { uni:"INES", campus:"Musanze", level:"ماجستير", field:"الزراعة والتقنية الحيوية",       name:"علم البيانات (MSc Data Science)",                                           duration:2, schedules:[{type:"عام", usd:2875, rwf:3400000}] },
  { uni:"INES", campus:"Musanze", level:"ماجستير", field:"الزراعة والتقنية الحيوية",       name:"علوم وتكنولوجيا الأغذية (MSc Food Science and Technology)",                 duration:2, schedules:[{type:"عام", usd:2875, rwf:3400000}] },
  { uni:"INES", campus:"Musanze", level:"ماجستير", field:"الهندسة",                        name:"تكنولوجيا وإدارة الإنشاءات (MSc Construction Technology and Management)",   duration:2, schedules:[{type:"عام", usd:3130, rwf:3700000}] },
  { uni:"INES", campus:"Musanze", level:"ماجستير", field:"الهندسة",                        name:"الهندسة الجيوتقنية (MSc Geotechnical Engineering)",                          duration:2, schedules:[{type:"عام", usd:3130, rwf:3700000}] },
];

// ================================================
//  أرقام واتساب
// ================================================
const WA1 = "249991731500";  // +249 99 173 1500
const WA2 = "250783711304";  // +250 783 711 304

// ================================================
//  حالة التطبيق
// ================================================
const state = {
  activeSection: "home",
  activeUni:     "all",
  activeLevel:   "all",
  activeField:   "all",
  searchQuery:   "",
};

const SECTIONS = ["home", "universities", "programs", "apply", "contact"];
let searchTimer = null;

// ================================================
//  مساعدات
// ================================================
function fmt(n) {
  return n.toLocaleString("en-US");
}

function escAttr(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ================================================
//  نظام الثيمين
// ================================================
function getTheme() {
  return localStorage.getItem("wejha-theme") || "light";
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  localStorage.setItem("wejha-theme", theme);
}

function toggleTheme() {
  const current = getTheme();
  applyTheme(current === "dark" ? "light" : "dark");
}

function setupTheme() {
  // الثيم مُطبَّق مسبقًا في <head> — نُضيف حدث الزر فقط
  const btn = document.getElementById("theme-toggle-btn");
  if (btn) btn.addEventListener("click", toggleTheme);
}

// ================================================
//  SPA Routing
// ================================================
function showSection(sectionId) {
  if (!SECTIONS.includes(sectionId)) sectionId = "home";

  SECTIONS.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("active");
  });

  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add("active");
    if (sectionId === "programs") renderPrograms();
  }

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("data-section") === sectionId);
  });

  state.activeSection = sectionId;
  closeMobileMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleHashChange() {
  showSection((location.hash || "#home").replace("#", ""));
}

// ================================================
//  قائمة الموبايل
// ================================================
function closeMobileMenu() {
  const nav = document.getElementById("main-nav");
  const btn = document.getElementById("hamburger-btn");
  if (!nav || !btn) return;
  nav.classList.remove("open");
  btn.classList.remove("open");
  btn.setAttribute("aria-expanded", "false");
}

function toggleMobileMenu() {
  const nav = document.getElementById("main-nav");
  const btn = document.getElementById("hamburger-btn");
  const open = nav.classList.contains("open");
  nav.classList.toggle("open");
  btn.classList.toggle("open");
  btn.setAttribute("aria-expanded", String(!open));
}

// ================================================
//  فلاتر التخصصات
// ================================================
function getFiltered() {
  return programs.filter(p => {
    if (state.activeUni   !== "all" && p.uni   !== state.activeUni)   return false;
    if (state.activeLevel !== "all" && p.level !== state.activeLevel) return false;
    if (state.activeField !== "all" && p.field !== state.activeField) return false;
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const haystack = `${p.name} ${p.uni} ${p.campus} ${p.level} ${p.field}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}

// ================================================
//  بناء بطاقة تخصص واحدة
// ================================================
function buildCard(p, index) {
  const uniClass    = p.uni === "ULK" ? "badge-uni-ulk" : "badge-uni-ines";
  const isULK       = p.uni === "ULK";
  const multiSchedule = p.schedules.length > 1;

  // أزرار الدوام (عند وجود أكثر من خيار)
  let scheduleBtns = "";
  if (multiSchedule) {
    scheduleBtns = `<div class="schedule-selector" role="group" aria-label="اختر نوع الدوام">`;
    p.schedules.forEach((s, i) => {
      scheduleBtns += `<button
        class="schedule-btn${i === 0 ? " active" : ""}"
        data-idx="${i}"
        onclick="selectSchedule(this)"
        aria-pressed="${i === 0}"
      >${escAttr(s.type)}</button>`;
    });
    scheduleBtns += `</div>`;
  }

  // السعر الأولي (أول جدول)
  const firstSchedule = p.schedules[0];
  const durationLabel = p.duration === 1 ? "سنة واحدة"
                      : p.duration === 2 ? "سنتان"
                      : `${p.duration} سنوات`;

  // اسم الجامعة الكامل للتقديم
  const uniFullName = p.uni === "ULK"
    ? "ULK — Kigali Independent University"
    : "INES-Ruhengeri";

  return `
<article class="program-card" style="animation-delay:${Math.min(index * 35, 350)}ms"
  data-schedules='${escAttr(JSON.stringify(p.schedules))}'
  data-program-name="${escAttr(p.name)}"
  data-program-uni="${escAttr(uniFullName)}"
  aria-label="${escAttr(p.name)}">

  <div class="card-header">
    <h3 class="card-name">${p.name}</h3>
    <div class="card-badges">
      <span class="badge ${uniClass}">${p.uni}</span>
      <span class="badge badge-level">${p.level}</span>
    </div>
  </div>

  <div class="card-meta">
    <div class="card-meta-item">
      <svg class="card-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
      <span>${p.campus}</span>
    </div>
    <div class="card-meta-item">
      <svg class="card-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      <span>${durationLabel}</span>
    </div>
  </div>

  ${multiSchedule ? scheduleBtns : ""}

  <div class="card-price">
    <div class="price-label">الرسوم السنوية</div>
    <div class="price-usd js-price-usd">$${fmt(firstSchedule.usd)}</div>
    <div class="price-rwf js-price-rwf">${fmt(firstSchedule.rwf)} RWF</div>
    ${isULK ? '<div class="price-note">* سعر الدولار تقريبي (ULK)</div>' : ""}
  </div>

  <div class="card-action">
    <button class="btn-inquire" onclick="inquireProgram(this)" aria-label="استفسر عن ${escAttr(p.name)}">
      استفسر عن هذا التخصص
    </button>
  </div>
</article>`;
}

// ================================================
//  تغيير الدوام داخل البطاقة
// ================================================
function selectSchedule(btn) {
  const card = btn.closest(".program-card");
  if (!card) return;

  // حدّث حالة الأزرار
  card.querySelectorAll(".schedule-btn").forEach(b => {
    b.classList.toggle("active", b === btn);
    b.setAttribute("aria-pressed", b === btn ? "true" : "false");
  });

  // احسب السعر الجديد
  const schedules = JSON.parse(card.getAttribute("data-schedules") || "[]");
  const idx       = parseInt(btn.getAttribute("data-idx"), 10);
  const chosen    = schedules[idx];
  if (!chosen) return;

  card.querySelector(".js-price-usd").textContent = "$" + fmt(chosen.usd);
  card.querySelector(".js-price-rwf").textContent = fmt(chosen.rwf) + " RWF";
}

// ================================================
//  رسم قائمة التخصصات
// ================================================
function renderPrograms() {
  const grid    = document.getElementById("programs-grid");
  const noRes   = document.getElementById("no-results");
  const countEl = document.getElementById("results-count");
  const filtered = getFiltered();

  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = "";
    noRes.classList.remove("hidden");
    countEl.textContent = "";
  } else {
    noRes.classList.add("hidden");
    grid.innerHTML = filtered.map((p, i) => buildCard(p, i)).join("");
    countEl.textContent = `عرض ${filtered.length} تخصص من أصل ${programs.length}`;
  }
}

// ================================================
//  الاستفسار عن تخصص
// ================================================
function inquireProgram(btn) {
  const card = btn.closest(".program-card");
  if (!card) return;

  const name = card.getAttribute("data-program-name") || "";
  const uni  = card.getAttribute("data-program-uni")  || "";

  // الدوام المختار حاليًا
  const activeSchedBtn = card.querySelector(".schedule-btn.active");
  const scheduleType   = activeSchedBtn ? activeSchedBtn.textContent.trim() : "";

  const programWithSchedule = scheduleType && scheduleType !== "عام"
    ? `${name} (${scheduleType})`
    : name;

  location.hash = "#apply";

  setTimeout(() => {
    const fProgram = document.getElementById("field-program");
    const fUni     = document.getElementById("field-university");

    if (fProgram) fProgram.value = programWithSchedule;
    if (fUni) {
      for (let i = 0; i < fUni.options.length; i++) {
        if (fUni.options[i].value === uni) { fUni.selectedIndex = i; break; }
      }
    }

    const fName = document.getElementById("field-name");
    if (fName) fName.focus();
  }, 150);
}

// ================================================
//  إعداد فلاتر المجالات (ديناميكيًا)
// ================================================
function buildFieldTabs() {
  const container = document.getElementById("field-tabs");
  if (!container) return;

  // أزِل كل شيء ما عدا زر "الكل"
  const allBtn = container.querySelector('[data-field="all"]');
  container.innerHTML = "";
  if (allBtn) container.appendChild(allBtn);

  fields.forEach(f => {
    const btn = document.createElement("button");
    btn.className        = "tab-btn";
    btn.setAttribute("data-field", f);
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", "false");
    btn.textContent      = f;
    btn.addEventListener("click", () => {
      container.querySelectorAll(".tab-btn").forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      state.activeField = f;
      renderPrograms();
    });
    container.appendChild(btn);
  });
}

// ================================================
//  إعداد كل الفلاتر
// ================================================
function setupFilters() {
  buildFieldTabs();

  // فلتر الجامعة
  document.querySelectorAll("#uni-tabs .tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#uni-tabs .tab-btn").forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      state.activeUni = btn.getAttribute("data-uni");
      renderPrograms();
    });
  });

  // فلتر المرحلة
  document.querySelectorAll("#level-tabs .tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#level-tabs .tab-btn").forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      state.activeLevel = btn.getAttribute("data-level");
      renderPrograms();
    });
  });

  // البحث مع debounce
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        state.searchQuery = searchInput.value.trim();
        renderPrograms();
      }, 200);
    });
  }

  // مسح كل الفلاتر
  const clearBtn = document.getElementById("clear-filters-btn");
  if (clearBtn) {
    clearBtn.addEventListener("click", resetFilters);
  }
}

function resetFilters() {
  state.activeUni   = "all";
  state.activeLevel = "all";
  state.activeField = "all";
  state.searchQuery = "";

  const si = document.getElementById("search-input");
  if (si) si.value = "";

  ["#uni-tabs", "#level-tabs", "#field-tabs"].forEach(sel => {
    document.querySelectorAll(`${sel} .tab-btn`).forEach((b, i) => {
      const isAll = i === 0;
      b.classList.toggle("active", isAll);
      b.setAttribute("aria-selected", String(isAll));
    });
  });

  renderPrograms();
}

// ================================================
//  روابط الجامعات → فلتر تلقائي
// ================================================
function setupUniversityLinks() {
  document.querySelectorAll("[data-filter-uni]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const uni = link.getAttribute("data-filter-uni");

      state.activeUni   = uni;
      state.activeLevel = "all";
      state.activeField = "all";
      state.searchQuery = "";

      const si = document.getElementById("search-input");
      if (si) si.value = "";

      // Reset level & field tabs
      ["#level-tabs", "#field-tabs"].forEach(sel => {
        document.querySelectorAll(`${sel} .tab-btn`).forEach((b, i) => {
          const isAll = i === 0;
          b.classList.toggle("active", isAll);
          b.setAttribute("aria-selected", String(isAll));
        });
      });

      // Set uni tab
      document.querySelectorAll("#uni-tabs .tab-btn").forEach(b => {
        const match = b.getAttribute("data-uni") === uni;
        b.classList.toggle("active", match);
        b.setAttribute("aria-selected", String(match));
      });

      location.hash = "#programs";
    });
  });
}

// ================================================
//  نموذج التقديم
// ================================================
function buildWAMessage() {
  const name        = document.getElementById("field-name").value.trim();
  const nationality = document.getElementById("field-nationality").value.trim();
  const phone       = document.getElementById("field-phone").value.trim();
  const email       = document.getElementById("field-email").value.trim();
  const university  = document.getElementById("field-university").value.trim();
  const program     = document.getElementById("field-program").value.trim();
  const notes       = document.getElementById("field-notes").value.trim();

  return [
    `مرحبًا، أنا ${name || "—"}`,
    `الجنسية: ${nationality || "—"}`,
    `مهتم بالتقديم إلى: ${university || "غير محدد"}`,
    `التخصص: ${program || "غير محدد"}`,
    `رقم التواصل: ${phone || "—"}`,
    email ? `البريد الإلكتروني: ${email}` : "",
    notes ? `ملاحظات: ${notes}` : "",
  ].filter(Boolean).join("\n").trim();
}

function validateForm() {
  let ok = true;
  const name  = document.getElementById("field-name");
  const phone = document.getElementById("field-phone");

  [{ el: name,  errId: "error-name"  },
   { el: phone, errId: "error-phone" }].forEach(({ el, errId }) => {
    const errEl = document.getElementById(errId);
    if (!el.value.trim()) {
      el.classList.add("error");
      if (errEl) errEl.classList.remove("hidden");
      ok = false;
    } else {
      el.classList.remove("error");
      if (errEl) errEl.classList.add("hidden");
    }
  });

  return ok;
}

function sendViaWhatsApp(number) {
  if (!validateForm()) return;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(buildWAMessage())}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function setupApplyForm() {
  const form = document.getElementById("apply-form");
  if (!form) return;

  form.addEventListener("submit", e => { e.preventDefault(); sendViaWhatsApp(WA1); });

  const btn1 = document.getElementById("submit-btn-1");
  const btn2 = document.getElementById("submit-btn-2");
  if (btn1) btn1.addEventListener("click", e => { e.preventDefault(); sendViaWhatsApp(WA1); });
  if (btn2) btn2.addEventListener("click", e => { e.preventDefault(); sendViaWhatsApp(WA2); });

  ["field-name", "field-phone"].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", () => {
      el.classList.remove("error");
      const suffix = id.replace("field-", "");
      const err = document.getElementById(`error-${suffix}`);
      if (err) err.classList.add("hidden");
    });
  });
}

// ================================================
//  Accordion
// ================================================
function setupAccordion(triggerId, contentId) {
  const trigger = document.getElementById(triggerId);
  const content = document.getElementById(contentId);
  if (!trigger || !content) return;
  trigger.addEventListener("click", () => {
    const expanded = trigger.getAttribute("aria-expanded") === "true";
    trigger.setAttribute("aria-expanded", String(!expanded));
    content.classList.toggle("hidden");
  });
}

// ================================================
//  FAQ
// ================================================
function setupFAQ() {
  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      // أغلق الباقي
      document.querySelectorAll(".faq-question").forEach(q => {
        if (q !== btn) {
          q.setAttribute("aria-expanded", "false");
          q.nextElementSibling && q.nextElementSibling.classList.add("hidden");
        }
      });
      btn.setAttribute("aria-expanded", String(!expanded));
      btn.nextElementSibling && btn.nextElementSibling.classList.toggle("hidden");
    });
  });
}

// ================================================
//  السنة الحالية
// ================================================
function setYear() {
  const el = document.getElementById("current-year");
  if (el) el.textContent = new Date().getFullYear();
}

// ================================================
//  زر Hero
// ================================================
function setupHeroBtn() {
  const btn = document.getElementById("hero-programs-btn");
  if (btn) {
    btn.addEventListener("click", e => {
      e.preventDefault();
      location.hash = "#programs";
    });
  }
}

// ================================================
//  التهيئة الكاملة
// ================================================
function init() {
  // الثيم
  setupTheme();

  // السنة
  setYear();

  // التنقل بالـ hash
  window.addEventListener("hashchange", handleHashChange);

  // همبرغر
  const hamburger = document.getElementById("hamburger-btn");
  if (hamburger) hamburger.addEventListener("click", toggleMobileMenu);

  // أغلق القائمة بالضغط خارجها
  document.addEventListener("click", e => {
    const nav = document.getElementById("main-nav");
    const btn = document.getElementById("hamburger-btn");
    if (nav && btn && !nav.contains(e.target) && !btn.contains(e.target)) {
      closeMobileMenu();
    }
  });

  // الفلاتر
  setupFilters();

  // روابط الجامعات
  setupUniversityLinks();

  // النموذج
  setupApplyForm();

  // زر الهيرو
  setupHeroBtn();

  // Accordion الرسوم
  setupAccordion("fees-accordion-btn", "fees-content");

  // FAQ
  setupFAQ();

  // القسم الأولي
  showSection((location.hash || "#home").replace("#", ""));
}

// تشغيل بعد اكتمال DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
