import { Service, Facility, Review, GalleryItem, Doctor } from './types';

// export const SERVICES: Service[] = [
//   {
//     id: '1',
//     title: 'Emergency Care',
//     description: '24/7 emergency response with state-of-the-art trauma units and immediate attention.',
//     iconName: 'Activity',
//     imageUrl: 'https://images.unsplash.com/photo-1587350859728-117622bc75fb?auto=format&fit=crop&q=80&w=800'
//   },
//   {
//     id: '2',
//     title: 'Cardiology',
//     description: 'Expert heart care including diagnostics, treatment, and comprehensive rehabilitation programs.',
//     iconName: 'Heart',
//     imageUrl: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800'
//   },
//   {
//     id: '3',
//     title: 'Laboratory Services',
//     description: 'Fully automated diagnostic lab providing accurate and timely results for all medical tests.',
//     iconName: 'Microscope',
//     imageUrl: 'https://images.unsplash.com/photo-1579154236594-c6b994d05d67?auto=format&fit=crop&q=80&w=800'
//   },
//   {
//     id: '4',
//     title: 'Pediatrics',
//     description: 'Specialized healthcare for infants, children, and adolescents in a child-friendly environment.',
//     iconName: 'Thermometer',
//     imageUrl: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800'
//   }
// ];

export const FACILITIES: Facility[] = [
  {
    id: '1',
    title: 'Modern ICU',
    description: 'Intensive care units equipped with high-tech life support and monitoring systems.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Advanced OT',
    description: 'Modular operation theaters designed to maintain the highest standards of hygiene and precision.',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Pharmacy',
    description: 'In-house pharmacy stocked with genuine medicines available 24 hours a day.',
    imageUrl: '/images/pharmacy.png'
  },
  {
    id: '4',
    title: 'WiFi',
    description: 'Complimentary high-speed WiFi available across the hospital for patients and visitors.',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    title: 'Common Bathroom',
    description: 'Clean, accessible common bathrooms maintained to strict hygiene standards.',
    imageUrl: '/images/commonbathroom.png'
  },
  {
    id: '6',
    title: 'AC Rooms Available',
    description: 'Air-conditioned rooms for patient comfort with adjustable climate control.',
    imageUrl: '/images/acroom.png'
  },
  {
    id: '7',
    title: 'General Ward',
    description: 'Spacious general wards with professional nursing care and shared amenities.',
    imageUrl: '/images/gernal.png'
  },
  {
    id: '8',
    title: 'Deluxe Room',
    description: 'Private deluxe rooms offering enhanced comfort, privacy and premium services.',
    imageUrl: '/images/delux.png'
  },
  {
    id: '9',
    title: 'Infertility Center',
    description: 'Specialized infertility and reproductive health services with expert counseling.',
    imageUrl: '/images/infertilitycenter.png'
  },
  {
    id: '10',
    title: 'Daycare',
    description: 'Daycare services for short procedures and recovery without overnight admission.',
    imageUrl: '/images/daycare.png'
  },
  {
    id: '11',
    title: 'Women Wellness Center',
    description: 'Comprehensive women’s health services including screening and wellness programs.',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '12',
    title: 'Wheelchair Accessible Entrance',
    description: 'Barrier-free entrances and ramps with clear signage for wheelchair users.',
    imageUrl: '/images/img10.jpg'
  },
  {
    id: '13',
    title: 'Private Rooms',
    description: 'Private patient rooms with attached bathrooms and dedicated nursing support.',
    imageUrl: '/images/privateRooms.webp'
  },
  {
    id: '14',
    title: 'Day Care Center',
    description: 'Child-friendly day care center for young patients and visiting children.',
    imageUrl: '/images/daycarecenter.jpg',
    
  },
  {
    id: '15',
    title: 'Dental & Implant Center',
    description: 'Full-service dental clinic offering routine care, implants and oral surgery.',
    imageUrl: '/images/Dental&ImplantCenter.avif'
  },
  {
    id: '16',
    title: 'Telephonic Counselling',
    description: 'Remote counseling and appointment support available by phone for patients.',
    imageUrl: '/images/telephonicCounselling.jpg'
  },
  {
    id: '17',
    title: 'Waiting Lounge',
    description: 'Comfortable waiting lounges with seating, refreshments and charging points.',
    imageUrl: '/images/waitingLounge.jpeg'
  },
  {
    id: '18',
    title: 'Ventilator Support',
    description: 'Advanced ventilator equipment and trained respiratory support staff available.',
    imageUrl: '/images/VentilatorSupport.jpg'
  },
  {
    id: '19',
    title: 'Wheel Chair Accessible',
    description: 'Accessible restrooms, pathways and transport support for wheelchair users.',
    imageUrl: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '20',
    title: 'IPD (In-Patient Department)',
    description: 'Comprehensive inpatient services with round-the-clock medical and nursing care.',
    imageUrl: '/images/waitingLounge.jpeg'
  },
  {
    id: '21',
    title: 'Ante Natal Check-ups (ANC)',
    description: 'Antenatal clinics providing routine check-ups, screening and pregnancy counseling.',
    imageUrl: '/images/AnteNatalCheck-ups.jpeg'
  },
  {
    id: '22',
    title: 'Major and Minor Surgery',
    description: 'Experienced surgical teams for a wide range of major and minor procedures.',
    imageUrl: '/images/majorandMinorSurgery.webp'
  },
  {
    id: '23',
    title: '24 Hours Pharmacy',
    description: 'Round-the-clock pharmacy ensuring availability of essential medicines at all times.',
    imageUrl: '/images/24HoursPharmacy.webp'
  },
  {
    id: '24',
    title: 'Admission Facility',
    description: 'Dedicated admission desk to assist with paperwork, insurance and bed allocation.',
    imageUrl: '/images/admission.jpeg'
  },
  {
    id: '25',
    title: 'Obstetric ICU',
    description: 'Specialized obstetric ICU for critical maternal care and high-risk pregnancies.',
    imageUrl: '/images/ObstetricICU.jpeg'
  },
  {
    id: '26',
    title: 'Vaccination Centre',
    description: 'Immunization services for children and adults including seasonal vaccines.',
    imageUrl: '/images/VaccinationCentre.jpeg'
  },
  {
    id: '27',
    title: '24 Hours Blood Testing Center',
    description: 'Laboratory services offering 24/7 blood testing and rapid reporting.',
    imageUrl: '/images/24HoursBloodTesting.jpeg'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Elena Vance',
    specialty: 'Chief Cardiologist',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400',
    experience: '15+ Years'
  },
  {
    id: '2',
    name: 'Dr. Marcus Sterling',
    specialty: 'Senior Neurologist',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
    experience: '12+ Years'
  },
  {
    id: '3',
    name: 'Dr. Sarah Kostic',
    specialty: 'Lead Pediatrician',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
    experience: '10+ Years'
  },
  {
    id: '4',
    name: 'Dr. James Howlett',
    specialty: 'Orthopedic Surgeon',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
    experience: '18+ Years'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Rutuja Patil',
    rating: 5,
    comment: 'The doctors and staff at Awarihospital were incredibly attentive. The care I received was top-class.',
    avatarUrl: '/images/icon.png'
  },
  {
    id: '2',
    name: 'pratik shinde',
    rating: 4,
    comment: 'Very professional environment and minimal waiting time. The laboratory facilities are top-notch.',
    avatarUrl: '/images/icon.png'
  },
  {
    id: '3',
    name: 'Emily Davis',
    rating: 5,
    comment: "Best hospital in the city. Their emergency response saved my father's life. Truly grateful.",
    avatarUrl: 'https://i.pravatar.cc/150?u=emily'
  }
];

export const GALLERY: GalleryItem[] = [
  { id: '1', category: 'Interior', imageUrl: '/images/img3.jpg', title: 'Main Lobby' },
  { id: '2', category: 'Medical', imageUrl: '/images/img4.jpg', title: 'Hospital' },
  { id: '3', category: 'Patient Care', imageUrl: '/images/img8.jpg', title: 'Public Suite' },
  { id: '4', category: 'Technology', imageUrl: '/images/img11.jpg', title: 'Woman Care' },
  { id: '5', category: 'Medical', imageUrl: '/images/img1.jpg', title: 'Surgery Room' },
  { id: '6', category: 'Patient Care', imageUrl: '/images/img9.jpg', title: 'Consultation Room' }
];

export const HERO_IMAGES = [
  '/images/img7.jpg',
  '/images/img11.jpg',
  '/images/img8.jpg',
];

interface FacilitySectionItem {
  name: string;
  description: string;
  imageUrl: string;
}

interface FacilitiesSection {
  title: string;
  subtitle?: string;
  items: FacilitySectionItem[];
}

interface FacilitiesPage {
  title: string;
  sections: FacilitiesSection[];
  beds: number;
  amenities: string[];
}

export const FACILITIES_PAGE : FacilitiesPage = {
  title: 'Facilities & Services',
  sections: [
    {
      title: 'Services',
      subtitle: 'All Services',
      items: [
        { name: 'Accept Donations', description: 'Donation programs to support our healthcare mission. Hospitals and healthcare centers often rely on donations to improve patient care, upgrade medical equipment, and expand life-saving services. Every contribution — big or small — helps provide treatment, hope, and healing to those in need.', imageUrl: '/images/AcceptDonations.jpeg' },
        { name: 'Patient Counselling', description: 'Expert counseling services for patient well-being and mental health support. Patient counselling is the process where healthcare professionals provide guidance, information, and emotional support to help patients understand their condition, treatment options, and lifestyle changes. It plays a key role in improving health outcomes and building trust between patients and providers.', imageUrl: '/images/PatientCounselling.jpg' },
        { name: 'Antenatal Care', description: 'Comprehensive prenatal care and monitoring for expectant mothers. Antenatal care (ANC) — also called prenatal care — is the regular medical care a person receives during pregnancy to ensure the health of both the mother and the developing baby. It focuses on early detection of potential risks, health education, and preparation for childbirth. ', imageUrl: '/images/AntenatalCare.jpg' },
        { name: 'Vaccination', description: 'Complete vaccination programs for all age groups. Vaccination is a safe and effective way to protect people from serious infectious diseases. It works by stimulating the immune system to recognize and fight harmful viruses or bacteria without causing the illness itself.', imageUrl: '/images/Vaccination.jpeg' },
        { name: 'Postnatal Care', description: 'Post-delivery care and support for new mothers and babies. Postnatal care (also called postpartum care) is the care given to the mother and newborn baby immediately after birth and during the first several weeks of life. This period is critical for recovery, bonding, and ensuring both are healthy.', imageUrl: '/images/PostnatalCare.jpg' },
        { name: 'Pre Pregnancy Counselling', description: 'Guidance and counseling for couples planning pregnancy. Pre-pregnancy counselling (also called preconception counselling) is a healthcare consultation that takes place before trying to conceive. Its goal is to ensure the best possible health for both the future parent and baby by identifying risks early and promoting healthy lifestyle choices.', imageUrl: '/images/PrePregnancyCounselling.webp' },
        { name: 'Blood Sample Collection', description: 'Sterile and professional blood collection services. Blood sample collection is a routine medical procedure in which a small amount of blood is taken from the body for laboratory testing. It helps healthcare providers diagnose diseases, monitor health conditions, and evaluate how well treatments are working.', imageUrl: '/images/BloodSampleCollection.jpeg' },
        { name: 'Lactation Counselling', description: 'Support and guidance for breastfeeding mothers. Lactation counselling is professional guidance provided to new mothers to support successful breastfeeding. It helps mothers learn proper techniques, overcome challenges, and ensure their baby receives optimal nutrition.', imageUrl: '/images/LactationCounselling.jpg' },
        { name: 'Blood Pressure Check-Up', description: 'Regular hypertension monitoring and management. A blood pressure check-up is a simple and painless test that measures the force of blood pushing against the walls of your arteries. It is one of the most important routine health checks because abnormal blood pressure often has no obvious symptoms.', imageUrl: '/images/BloodPressureCheck-Up.jpeg' },
        { name: 'Premarital Counselling', description: 'Health and counseling services before marriage. Premarital counselling is a type of therapy or guidance designed to help couples prepare for marriage. It focuses on strengthening communication, clarifying expectations, and building a solid foundation for a healthy, long-lasting relationship.', imageUrl: '/images/PremaritalCounselling.jpg' },
        { name: 'Preconceptional Counselling', description: 'Pre-pregnancy health assessment and guidance. Preconceptional counselling is healthcare guidance provided before pregnancy to help individuals or couples prepare physically, emotionally, and medically for a healthy conception and pregnancy. It focuses on reducing risks and promoting the best possible outcomes for both parent and baby. ', imageUrl: '/images/PreconceptionalCounselling.jpg' },
        { name: 'Adolescent Care', description: 'Specialized healthcare services for teenagers. Adolescent care is specialized healthcare focused on the physical, emotional, and social wellbeing of young people typically between the ages of 10 and 19. This stage involves rapid growth and development, making regular health guidance especially important.', imageUrl: '/images/AdolescentCare.jpg' },
        { name: 'Pregnancy Care', description: 'Complete prenatal and maternal health management. Pregnancy care (also called prenatal care) refers to the medical attention, lifestyle guidance, and regular checkups a person receives throughout pregnancy to ensure the health of both mother and baby.', imageUrl: '/images/PregnancyCare.jpg' },
        { name: 'Nursing Care', description: 'Professional nursing support and patient care services. Nursing care is the professional support and medical attention provided by nurses to help individuals maintain health, recover from illness, and improve quality of life. It combines clinical skills with compassion to ensure patients feel safe, respected, and cared for.', imageUrl: '/images/NursingCare.jpeg' },
        { name: 'Sugar Check Up', description: 'Diabetes screening and glucose level monitoring. A sugar check-up (blood glucose test) measures the amount of sugar in your blood. It is an important test used to detect, monitor, and manage diabetes and ensure your body is properly regulating energy. ', imageUrl: '/images/SugarCheckUp.jpg' },
        { name: 'Pathology Sample Collection', description: 'Professional specimen collection for laboratory testing. Pathology sample collection is the process of obtaining biological specimens—such as blood, urine, tissue, or other body fluids—for laboratory testing. These tests help healthcare providers diagnose diseases, monitor health conditions, and guide treatment decisions.', imageUrl: '/images/PathologySampleCollection.jpg' },
        { name: 'Counselling Service', description: 'Professional counseling for various health concerns. Counselling services by Indian doctors focus on guiding patients through medical, emotional, and lifestyle concerns while respecting cultural values and individual needs. These services help patients better understand their health, make informed decisions, and feel supported throughout their care journey.', imageUrl: '/images/CounsellingService.webp' },
        { name: 'Pediatric Care', description: 'Specialized healthcare for infants and children. Pediatric care is specialized medical care for infants, children, and adolescents, focusing on their physical, emotional, and developmental health. Pediatric healthcare providers ensure that children grow safely and reach important developmental milestones.', imageUrl: '/images/PediatricCare.jpeg' },
        { name: 'Fertility Counselling Services', description: 'Expert guidance for fertility and family planning. Fertility counselling services provide professional guidance to individuals or couples who are planning a pregnancy or experiencing difficulty conceiving. These services combine medical expertise with emotional support to help patients understand their options and make confident decisions.', imageUrl: '/images/FertilityCounsellingServices.png' },
        { name: 'Preoperative Care', description: 'Pre-surgery preparation and health assessment. Preoperative care is the preparation and medical evaluation a patient receives before surgery. Its purpose is to ensure the patient is physically and mentally ready, reduce risks, and promote a smoother recovery.', imageUrl: '/images/PreoperativeCare.jpg' },
        { name: 'Open 24x7', description: 'Round-the-clock medical services and emergency support. Open 24×7 service means that healthcare assistance is available around the clock — 24 hours a day, 7 days a week, including weekends and holidays. This ensures patients can receive timely care whenever a medical need arises.', imageUrl: '/images/Open24x7.jpg' }
      ]
    },
    {
      title: 'Tests',
      items: [
        { name: 'SGOT (Serum Glutamic-Oxaloacetic Transaminase Test)', description: 'Liver function test measuring enzyme levels. SGOT (Serum Glutamic-Oxaloacetic Transaminase) — now more commonly called the AST (Aspartate Aminotransferase) test — is a blood test used to evaluate liver health. This enzyme is normally found in the liver, heart, muscles, and other tissues. When these tissues are damaged, SGOT/AST can leak into the bloodstream.', imageUrl: '/images/SGOT.jpeg' },
        { name: 'GT (Glucose Tolerance Test)', description: 'Blood sugar tolerance assessment test. GT (Glucose Tolerance Test) — often called the Oral Glucose Tolerance Test (OGTT) — measures how well your body processes sugar (glucose). It is commonly used to diagnose diabetes, prediabetes, and gestational diabetes during pregnancy.', imageUrl: '/images/GT.webp' },
        { name: 'Blood Sugar Test', description: 'Quick glucose level measurement and diabetes screening. A blood sugar test measures the amount of glucose (sugar) in your blood. Glucose is the body’s main source of energy, and maintaining the right level is essential for overall health. This test is commonly used to diagnose and monitor diabetes.', imageUrl: '/images/BloodSugarTest.jpeg' },
        { name: 'Hemoglobin Test', description: 'Red blood cell count and anemia assessment. A hemoglobin test is a common blood test that measures the level of hemoglobin (Hb) — the iron-rich protein in red blood cells responsible for carrying oxygen throughout the body.', imageUrl: '/images/HemoglobinTest.jpeg' },
        { name: 'Health Screening', description: 'Comprehensive health check-up and assessment. A health screening test is a preventive medical check designed to detect potential health problems before symptoms appear. Early detection allows for timely treatment, better outcomes, and a healthier life.', imageUrl: '/images/HealthScreening.webp' },
        { name: 'VDRL Test', description: 'Sexually transmitted infection screening. The VDRL test (Venereal Disease Research Laboratory test) is a blood test used to screen for syphilis, a sexually transmitted infection caused by bacteria. It detects antibodies that the body produces in response to the infection.', imageUrl: '/images/VDRLTest.webp' },
        { name: 'SGPT (Serum Glutamic Pyruvic Transaminase Test)', description: 'Liver enzyme level measurement for hepatic function. SGPT (Serum Glutamic Pyruvic Transaminase) — now commonly called the ALT (Alanine Aminotransferase) test — is a blood test that helps evaluate liver health. ALT is an enzyme mainly found in the liver, and higher levels in the blood may signal liver irritation or damage.', imageUrl: '/images/SGPT.jpeg' },
        { name: 'Sexually Transmitted Diseases Test', description: 'STD screening and diagnostic testing. Sexually Transmitted Diseases (STD) tests are medical tests used to detect infections that are primarily spread through sexual contact. Early testing is essential because many STDs may not show symptoms, yet can still affect health and be transmitted to others.', imageUrl: '/images/SexuallyTransmittedDiseasesTest.jpeg' },
        { name: 'Urine Cytology', description: 'Microscopic analysis of urine for abnormalities. Urine cytology is a laboratory test used to examine cells found in urine. It helps detect abnormal or cancerous cells, particularly in the urinary tract, including the bladder, kidneys, and ureters.', imageUrl: '/images/UrineCytology.webp' },
        { name: 'Hba 1C', description: 'Long-term blood sugar control measurement. HbA1c (Hemoglobin A1c) is a blood test that measures your average blood sugar levels over the past 2–3 months. It is one of the most important tests for diagnosing and monitoring diabetes.', imageUrl: '/images/Hba1C.jpeg' },
        { name: 'Hpv Test', description: 'Human papillomavirus screening for cervical cancer prevention. The HPV test (Human Papillomavirus test) is a screening procedure used to detect the presence of high-risk HPV types that can lead to cervical cancer and other related conditions. HPV is a very common virus spread through intimate skin-to-skin contact.', imageUrl: '/images/HpvTest.jpeg' },
        { name: 'Glucose Tolerance', description: 'Assessment of glucose metabolism and diabetes risk. Glucose tolerance refers to how effectively your body processes sugar (glucose) after you consume it. A Glucose Tolerance Test (GTT) evaluates this process and helps diagnose conditions such as prediabetes, diabetes, and gestational diabetes.', imageUrl: '/images/GlucoseTolerance.jpg' },
        { name: 'General Test', description: 'Routine blood work and general health panels. A general test (or general health checkup) is a routine medical evaluation that assesses your overall health. It helps detect potential health issues early—even before symptoms appear—so you can take preventive action.', imageUrl: '/images/GeneralTest.jpg' },
        { name: 'Urine Testing', description: 'Comprehensive urinalysis for health assessment. Urine testing (also called urinalysis) is a common diagnostic test used to examine the appearance, concentration, and content of urine. It provides valuable insights into your overall health and helps detect a wide range of medical conditions.', imageUrl: '/images/UrineTesting.webp' },
        { name: 'Semen Analysis', description: 'Fertility testing and sperm health evaluation. Semen analysis is a laboratory test used to evaluate male fertility by examining the health and quality of sperm. It measures several factors that influence the ability to conceive.', imageUrl: '/images/SemenAnalysis.jpg' },
        { name: 'Vitamin D3', description: 'Vitamin D level measurement and bone health assessment. Vitamin D3 (cholecalciferol) is a vital nutrient that helps your body absorb calcium and phosphorus, supporting strong bones, a healthy immune system, and proper muscle function. It is often called the “sunshine vitamin” because your skin produces it when exposed to sunlight. ', imageUrl: '/images/VitaminD3.jpeg' },
        { name: 'Dengue Fever Test', description: 'Rapid dengue virus detection and confirmation. A dengue fever test is a diagnostic blood test used to confirm infection with the dengue virus, which is transmitted through mosquito bites. Early testing is important for proper care and to prevent complications.', imageUrl: '/images/DengueFeverTest.jpg' },
        { name: 'Follicular Monitoring', description: 'Ultrasound tracking for fertility treatment. Follicular monitoring is a specialized ultrasound procedure used to track the growth and development of ovarian follicles — the small sacs in the ovaries that contain eggs. It is commonly performed when planning a pregnancy or undergoing fertility treatment.', imageUrl: '/images/FollicularMonitoring.jpg' },
        { name: 'Widal Test', description: 'Typhoid fever detection through serology. The Widal test is a blood test used to help diagnose typhoid fever, a bacterial infection caused by Salmonella typhi. It detects antibodies that the body produces in response to the infection.', imageUrl: '/images/WidalTest.jpeg' },
        { name: 'Serum Creatinine', description: 'Kidney function assessment through blood test. Serum creatinine is a blood test that measures the level of creatinine, a waste product produced by muscles during normal metabolism. The kidneys filter creatinine from the blood, so this test is a key indicator of kidney function.', imageUrl: '/images/SerumCreatinine.jpeg' },
        { name: 'Papanicolaou (Pap Smear)', description: 'Cervical cancer screening and detection test. The Papanicolaou test (Pap smear) is a screening procedure used to detect abnormal cells in the cervix, helping prevent cervical cancer through early identification and treatment.', imageUrl: '/images/PapanicolaouPapSmear.jpg' }
      ]
    },
    {
      title: 'Treatment',
      items: [
        { name: 'Gastritis', description: 'Medical management of stomach inflammation and ulcers. Gastritis is the inflammation of the stomach lining. It can be acute (sudden) or chronic (long-term) and may cause discomfort, pain, or digestive problems. If untreated, it can lead to ulcers or bleeding.', imageUrl: '/images/Gastritis.jpeg' },
        { name: 'Assisted Reproduction', description: 'IVF and advanced fertility treatments. Assisted Reproductive Technology (ART) refers to medical techniques used to help individuals or couples conceive a child when natural pregnancy is difficult. These treatments involve handling eggs, sperm, or embryos in a specialized fertility laboratory.', imageUrl: '/images/AssistedReproduction.jpeg' },
        { name: 'Vaginal Prolapse', description: 'Surgical and conservative treatment for pelvic organ prolapse. Vaginal prolapse, also called pelvic organ prolapse, occurs when the pelvic floor muscles and supporting tissues weaken, causing organs such as the uterus, bladder, or rectum to slip down into or outside the vaginal canal.', imageUrl: '/images/VaginalProlapse.jpeg' },
        { name: 'Male Breast (Gynecomastia)', description: 'Surgical correction of enlarged male breast tissue. Gynecomastia is a condition in which male breast tissue enlarges due to a hormonal imbalance — typically when estrogen levels are higher relative to testosterone.', imageUrl: '/images/MaleBreast.jpeg' },
        { name: 'Fissure In Ano', description: 'Medical and surgical treatment of anal fissures. A fissure-in-ano (anal fissure) is a small tear or cut in the lining of the anal canal. It commonly causes pain and bleeding during bowel movements and can affect people of all ages.', imageUrl: '/images/Fissure.jpeg' },
        { name: 'Neurological Dysfunction', description: 'Treatment for neurological disorders and dysfunctions. Neurological dysfunction refers to problems in the brain, spinal cord, or nerves that interfere with normal body functions such as movement, sensation, thinking, or coordination.', imageUrl: '/images/NeurologicalDysfunction.jpeg' },
        { name: 'Fibroadenoma', description: 'Benign breast tumor treatment and management. A fibroadenoma is a non-cancerous (benign) breast tumor made up of glandular and connective breast tissue. It is one of the most common breast lumps, especially in women between 15 and 35 years.', imageUrl: '/images/Fibroadenoma.jpeg' },
        { name: 'Irregular Menses', description: 'Hormonal and therapeutic treatment for menstrual disorders. Irregular menses refers to menstrual periods that do not follow a consistent pattern. A normal cycle usually occurs every 21–35 days, but irregular cycles may come earlier, later, or unpredictably.', imageUrl: '/images/IrregularMenses.jpeg' },
        { name: 'Urinary Incontinence', description: 'Medical and surgical solutions for urinary control. Urinary incontinence is the loss of bladder control, leading to accidental urine leakage. It is a common medical condition that can affect both women and men, especially with aging — but it is treatable and manageable.', imageUrl: '/images/UrinaryIncontinence.jpeg' },
        { name: 'Pelvic Pain', description: 'Diagnosis and comprehensive treatment of pelvic disorders. Pelvic pain is discomfort felt in the lower abdomen, the area below the belly button and between the hips. It can be:Acute – sudden and short-termChronic – lasting longer than 3–6 month', imageUrl: '/images/PelvicPain.jpeg' },
        { name: 'Cervical Cancer', description: 'Advanced cancer treatment and oncology care. Cervical cancer is a type of cancer that begins in the cervix, the lower, narrow end of the uterus that connects to the vagina. It develops when abnormal cells in the cervix grow uncontrollably and may invade nearby tissues or spread to other parts of the body.', imageUrl: '/images/CervicalCancer.jpeg' },
        { name: 'Urethritis', description: 'Treatment for urethral inflammation and infections. Urethritis is a condition characterized by inflammation of the urethra — the thin tube that carries urine from the bladder out of the body. It commonly results from infection but can also occur due to irritation or injury.', imageUrl: '/images/Urethritis.jpeg' },
        { name: 'PCOD', description: 'Comprehensive polycystic ovary disease management. PCOD (Polycystic Ovarian Disease) is a common hormonal condition affecting people with ovaries, especially during the reproductive years. In PCOD, the ovaries may become enlarged and develop many small fluid-filled sacs (cysts). These cysts are actually immature follicles that did not release an egg.', imageUrl: '/images/PCOD.jpeg' },
        { name: 'Uterine Cancer', description: 'Oncology treatment for uterine malignancies. Uterine cancer is a type of cancer that begins in the uterus — the hollow, pear-shaped organ in the pelvis where a baby grows during pregnancy. The most common form is endometrial cancer, which starts in the inner lining of the uterus (endometrium).', imageUrl: '/images/UterineCancer.jpeg' },
        { name: 'Malaria', description: 'Antimalarial therapy and tropical disease management. Malaria treatment focuses on eliminating the parasite from the bloodstream and relieving symptoms quickly to prevent complications. Malaria is caused by Plasmodium parasites transmitted through infected mosquito bites. ', imageUrl: '/images/Malaria.jpeg' },
        { name: 'Fibromyalgia', description: 'Pain management and treatment for fibromyalgia syndrome. Fibromyalgia is a long-term condition that causes widespread muscle pain, fatigue, and tenderness throughout the body. It affects how the brain and spinal cord process pain signals, making sensations feel more intense.', imageUrl: '/images/Fibromyalgia.jpeg' },
        { name: 'Heavy Menstrual bleeding (Menorrhagia)', description: 'Treatment for excessive menstrual bleeding disorders. Heavy menstrual bleeding (Menorrhagia) is when periods are unusually heavy or last longer than 7 days. It can interfere with daily life and may lead to fatigue or anemia if not treated.', imageUrl: '/images/HeavyMenstrualbleeding.jpg' },
        { name: 'Cervix Cancer', description: 'Specialized cervical cancer treatment and care. Cervical cancer treatment depends on the stage of the cancer, overall health, and whether future pregnancy is desired. When detected early, treatment is often very successful.', imageUrl: '/images/CervixCancer.jpg' },
        { name: 'Vaginal Infection', description: 'Diagnosis and treatment of various vaginal infections. A vaginal infection occurs when the natural balance of bacteria and yeast in the vagina is disrupted. This can lead to irritation, discharge, odor, and discomfort. Vaginal infections are very common and are usually treatable.', imageUrl: '/images/VaginalInfection.jpeg' }
      ]
    },
    {
      title: 'Surgery',
      items: [
        { name: 'Minor Surgery', description: 'Routine surgical procedures for minor conditions. Minor surgery care refers to the preparation, procedure, and follow-up management of surgical procedures that are typically: Performed quickly (often <1 hour), Low risk, Under local or minimal sedation, Often outpatient (patient goes home same day)', imageUrl: '/images/MinorSurgery.jpg' },
        { name: 'Caesarean Section', description: 'Safe surgical delivery for complex pregnancies. A Caesarean Section is a surgical procedure used to deliver a baby through incisions made in the mother’s abdomen and uterus. It’s performed when a vaginal birth would put the mother or baby at risk, or when labor isn’t progressing safely.', imageUrl: '/images/CaesareanSection.jpeg' },
        { name: 'Reproductive Surgery', description: 'Surgical procedures for reproductive health restoration. Reproductive surgery refers to surgical procedures performed on the female and male reproductive systems to diagnose or treat conditions that affect fertility, reproductive organs, or reproductive health.These surgeries can be minimally invasive (laparoscopy/hysteroscopy) or open surgery depending on the condition.', imageUrl: '/images/ReproductiveSurgery.png' },
        { name: 'Laparoscopic Sterilisation', description: 'Minimally invasive sterilization procedures. Laparoscopic sterilisation (also called laparoscopic tubal ligation) is a permanent family planning procedure for women. It prevents pregnancy by blocking or sealing the fallopian tubes, so the egg cannot meet the sperm.', imageUrl: '/images/LaparoscopicSterilisation.jpg' },
        { name: 'Reconstructive Surgery', description: 'Complex reconstructive surgical procedures. Reconstructive surgery is a type of surgery performed to restore the normal appearance, structure, and function of body parts that have been affected by: Injury or trauma, Congenital (birth) defects, Infection, Tumor or cancer removal, Burns or chronic wounds', imageUrl: '/images/ReconstructiveSurgery.jpg' },
        { name: 'Vaginal Hysterectomy', description: 'Surgical removal of uterus via vaginal approach. A vaginal hysterectomy is a surgical procedure to remove the uterus through the vagina, without making any incision on the abdomen. It is one of the least invasive methods of hysterectomy and is commonly preferred when suitable. Depending on the condition, the surgeon may also remove:Cervix (usually removed with uterus), Ovaries and/or fallopian tubes (if required)', imageUrl: '/images/VaginalHysterectomy.jpeg' },
        { name: 'Tubal Ligation', description: 'Permanent sterilization through fallopian tube surgery. Tubal ligation is a permanent method of contraception for women. It prevents pregnancy by blocking, cutting, tying, or sealing the fallopian tubes, so the egg cannot meet the sperm.It is also known as female sterilization.', imageUrl: '/images/TubalLigation.jpeg' }
      ]
    },
    {
      title: 'Management',
      items: [
        { name: 'Emergency Conditions', description: 'Rapid stabilization and treatment for acute emergencies.', imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800' },
        { name: 'Pcod Management', description: 'PCOD (Polycystic Ovarian Disease) — also called PCOS (Polycystic Ovary Syndrome) — is a hormonal disorder common in women of reproductive age. It can cause irregular periods, ovarian cysts, weight gain, acne, and difficulty conceiving.', imageUrl: '/images/PcodManagement.png' },
        { name: 'Pre and Post Operative', description: 'Pre-operative care includes all the medical preparations done before a surgical procedure to ensure patient safety and successful outcomes. ', imageUrl: '/images/PreandPostOperative.jpg' },
        { name: 'Child Growth Management', description: 'Pediatric growth monitoring and developmental assessment.', imageUrl: '/images/ChildGrowthManagement.jpg' },
        { name: 'Urinary Tract Infection Management', description: 'A UTI is an infection of any part of the urinary system — usually the bladder (cystitis) or urethra, and sometimes the kidneys (pyelonephritis). It’s caused by bacteria entering the urinary tract and multiplying.', imageUrl: '/images/UrinaryTractInfectionManagement.jpeg' },
        { name: 'High Risk Obstetrics', description: 'Specialized care for high-risk pregnancies. High-risk obstetrics refers to pregnancy care when the mother, fetus, or both have increased chances of complications. These conditions require specialized monitoring, more frequent check-ups, and expert care from obstetricians and often maternal–fetal medicine specialists.', imageUrl: '/images/HighRiskObstetrics.jpg' }
      ]
    },
    {
      title: 'Therapy',
      items: [
        { name: 'Nebulization Therapy', description: 'Nebulization therapy is a method of administering medication in the form of a fine mist that can be inhaled directly into the airways and lungs. It’s commonly used for respiratory conditions such as asthma, chronic obstructive pulmonary disease (COPD), bronchitis, and other breathing difficulties.', imageUrl: '/images/NebulizationTherapy.jpg' }
      ]
    },
    {
      title: 'Procedures',
      items: [
        { name: 'Ovarian Cystectomy', description: 'Surgical removal of ovarian cysts with preservation of ovarian tissue.', imageUrl: '/images/Ovariancystectomy.webp' }
      ]
    }
  ],
  beds: 11,
  amenities: ['Waiting Area']
};


