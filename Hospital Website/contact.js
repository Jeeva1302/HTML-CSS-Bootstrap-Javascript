function ne(){
    let pattern = /^\d{10}$/;
    var name = document.querySelector('.text1').value;
    var address = document.querySelector('.text3').value;
    var phone = document.querySelector('#phone').value;
    var query = document.querySelector('.text2').value;
    if (name == '' || name == null || address == '' || address == null || phone == '' || phone == null || query == '' || query == null) {
        alert('Please fill all the fields');
        return false;
    }
    else if(phone.match(pattern))
{
   document.getElementById("output").innerHTML ="YOUR REQUEST HAS BEEN SUBMITTED";

}
else if(!phone.match(pattern))
{
   document.getElementById("output").innerHTML ="YOUR MOBILE NUMBER IS INVALID";
}

    else {
        document.querySelector('#output').innerHTML = 'Your query has been submitted successfully';
        return false;
    }
}

function f3()



{
    document.getElementById("title1").innerHTML = "BENEFITS";
    document.getElementById("benifits1").innerHTML = "Your heart health is central to overall good health. It's responsible for pumping nutrient-rich blood throughout your body, it supplies oxygen while removing toxins and waste.It can also lower blood pressure; improve and manage levels of cholesterol and other fats in the blood; improve your body's ability to manage blood sugar and insulin levels, which lowers your risk for type 2 diabetes; help you maintain a healthy weight; and reduce levels of C-reactive protein (CRP) in your body, a sign of inflammation. High levels of CRP may raise your risk for heart disease. Inactive people are nearly twice as likely to develop heart disease as people who are physically active.In people with heart disease, regular aerobic activity helps the heart work better. It also may reduce the risk of a second heart attack in people who already have had a heart attack.Vigorous aerobic activity may not be safe for people with heart disease. Talk to your doctor about what type of activity is safe for you."
}
function f13()
{
    document.getElementById("title1").innerHTML = "STEPS TO FOLLOW";
    document.getElementById("benifits1").innerHTML =   "Don't smoke or use tobacco. <br> One of the best things you can do for your heart is to stop smoking or using smokeless tobaccoGet moving:<br> Aim for at least 30 to 60 minutes of activity daily<br>Eat a heart-healthy diet<br>Maintain a healthy weight<br>Get good quality sleep<br>Manage stress<br>Get regular health screenings."
}
function f4()
{
    document.getElementById("title2").innerHTML = "BENEFITS";
    document.getElementById("benifits2").innerHTML = "Your heart health is central to overall good health. It's responsible for pumping nutrient-rich blood throughout your body, it supplies oxygen while removing toxins and waste.It can also lower blood pressure; improve and manage levels of cholesterol and other fats in the blood; improve your body's ability to manage blood sugar and insulin levels, which lowers your risk for type 2 diabetes; help you maintain a healthy weight; and reduce levels of C-reactive protein (CRP) in your body, a sign of inflammation. High levels of CRP may raise your risk for heart disease. Inactive people are nearly twice as likely to develop heart disease as people who are physically active.In people with heart disease, regular aerobic activity helps the heart work better. It also may reduce the risk of a second heart attack in people who already have had a heart attack.Vigorous aerobic activity may not be safe for people with heart disease. Talk to your doctor about what type of activity is safe for you."
}
function f14()
{
    document.getElementById("title2").innerHTML = "STEPS TO FOLLOW";
    document.getElementById("benifits2").innerHTML =   "Don't smoke or use tobacco. <br> One of the best things you can do for your heart is to stop smoking or using smokeless tobaccoGet moving:<br> Aim for at least 30 to 60 minutes of activity daily<br>Eat a heart-healthy diet<br>Maintain a healthy weight<br>Get good quality sleep<br>Manage stress<br>Get regular health screenings."
}

function f5()
{
    document.getElementById("title3").innerHTML = "BENEFITS";
    document.getElementById("benifits3").innerHTML = "Your heart health is central to overall good health. It's responsible for pumping nutrient-rich blood throughout your body, it supplies oxygen while removing toxins and waste.It can also lower blood pressure; improve and manage levels of cholesterol and other fats in the blood; improve your body's ability to manage blood sugar and insulin levels, which lowers your risk for type 2 diabetes; help you maintain a healthy weight; and reduce levels of C-reactive protein (CRP) in your body, a sign of inflammation. High levels of CRP may raise your risk for heart disease. Inactive people are nearly twice as likely to develop heart disease as people who are physically active.In people with heart disease, regular aerobic activity helps the heart work better. It also may reduce the risk of a second heart attack in people who already have had a heart attack.Vigorous aerobic activity may not be safe for people with heart disease. Talk to your doctor about what type of activity is safe for you."
}
function f15()
{
    document.getElementById("title3").innerHTML = "STEPS TO FOLLOW";
    document.getElementById("benifits3").innerHTML =   "Don't smoke or use tobacco. <br> One of the best things you can do for your heart is to stop smoking or using smokeless tobaccoGet moving:<br> Aim for at least 30 to 60 minutes of activity daily<br>Eat a heart-healthy diet<br>Maintain a healthy weight<br>Get good quality sleep<br>Manage stress<br>Get regular health screenings."
}
function f6()
{
    document.getElementById("title4").innerHTML = "BENEFITS";
    document.getElementById("benifits4").innerHTML =  "Your heart health is central to overall good health. It's responsible for pumping nutrient-rich blood throughout your body, it supplies oxygen while removing toxins and waste.It can also lower blood pressure; improve and manage levels of cholesterol and other fats in the blood; improve your body's ability to manage blood sugar and insulin levels, which lowers your risk for type 2 diabetes; help you maintain a healthy weight; and reduce levels of C-reactive protein (CRP) in your body, a sign of inflammation. High levels of CRP may raise your risk for heart disease. Inactive people are nearly twice as likely to develop heart disease as people who are physically active.In people with heart disease, regular aerobic activity helps the heart work better. It also may reduce the risk of a second heart attack in people who already have had a heart attack.Vigorous aerobic activity may not be safe for people with heart disease. Talk to your doctor about what type of activity is safe for you."
}
function f16()
{
    document.getElementById("title4").innerHTML = "STEPS TO FOLLOW";
    document.getElementById("benifits4").innerHTML =   "Don't smoke or use tobacco. <br> One of the best things you can do for your heart is to stop smoking or using smokeless tobaccoGet moving:<br> Aim for at least 30 to 60 minutes of activity daily<br>Eat a heart-healthy diet<br>Maintain a healthy weight<br>Get good quality sleep<br>Manage stress<br>Get regular health screenings."
}

function causes1()
{
 document.getElementById("intro1").innerHTML="The causes of cardiovascular disease can vary depending on the specific type. For example, atherosclerosis (plaque buildup in your arteries) causes coronary artery disease and peripheral artery disease. Coronary artery disease, scarring of your heart muscle, genetic problems or medications can cause arrhythmias. Aging, infections and rheumatic disease can cause valve diseases.";
}

function effects1()
{

    document.getElementById("intro1").innerHTML="The long-term outlook for people with heart disease depends upon many factors. These include the type of underlying heart disease, the person’s reaction to the medications, and the extent and severity of impairment. If a doctor diagnoses you or a loved one with heart disease, a medication and healthy lifestyle regimen should be followed to prevent worsening complications. Heart disease is considered a chronic condition, and there can be complications following periods of medication-induced improvement. However, heart disease remains the leading cause of death for both men and women, according to the CDCTrusted Source. Seeking treatment after the earliest possible indicators of heart problems, such as high blood pressure or shortness of breath, can result in better outcomes.";
}

function causes2()
{

    document.getElementById("intro2").innerHTML="Orthopedic disorders are issues that affect the joints in our body. Commonly, these disorders are due to old age. However, there seems to be an increasing incidence of orthopedic disorders caused by accidents or injuries. It is imperative to get timely medical treatment for such disorders.";
}

function effects2()
{
    
 document.getElementById("intro2").innerHTML="Such symptoms as pain, muscle spasms, numbness, swelling and stiffness may come and go depending on the specific condition and your activity level. Pain and other symptoms from orthopedic conditions can limit activity if it worsens with movement.";
}

function causes3()
{

    document.getElementById("intro3").innerHTML="Spinal cord disorders can originate from either outside or inside the spinal cord. Damage from the outside of the cord is caused by compression of the spinal cord or injury. The spinal cord may be compressed due to a bone fracture, spinal degeneration, or abnormalities, such as a hematoma, tumor or herniated disk.";
}

function effects3()
{
    
 document.getElementById("intro3").innerHTML="Spinal problems refer to diseases or injuries that affect the spine, such as spinal stenosis. They cause symptoms that include lower back pain, numbness, and tingling sensations. There are many types of spinal conditions that may cause pain and discomfort, and these conditions can result from: genetics.";
}
function int1()
{
    
 document.getElementById("intro1").innerHTML="Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease,heart failure, valvular heart disease and electrophysiology.";
}
function int2()
{
    
 document.getElementById("intro2").innerHTML="Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease,heart failure, valvular heart disease and electrophysiology.";
}
function int3()
{
    
 document.getElementById("intro3").innerHTML="Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease,heart failure, valvular heart disease and electrophysiology.";
}

function ne7() {
    var phone = document.getElementById("phone1").value;
    var gmail = document.getElementById("gmail1").value;
    if(phone.length==10){
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(gmail))
        {
            document.getElementById("output1").innerHTML="Request has been sent";
        }
        else{
            document.getElementById("output1").innerHTML="Invalid Email id";
        }
    }


    
    else{
        document.getElementById("output1").innerHTML="Invalid phone number";
    }
}

function ne8()
{

    var gmail1 = document.getElementById("gmail1").value;
    var pat2 = /[a-zA-Z0-9]+@[a-zA-Z0-9.]+/;
   if(pat2.test(gmail1))
   {
     ne9();

   }
   else
   {
    document.getElementById("output1").innerHTML ="Enter Valid Gmail Id";
   }

}

function ne9()
{
    document.getElementById("output1").innerHTML ="REQUEST SUBMITTED";
}
function course1()
{

    document.getElementById("courses1").innerHTML=" MBBS or Bachelor of Medicine and Bachelor of Surgery is also described as BMBS, which is an abbreviation of the Latin word, Medicinae Baccalaureus Baccalaureus Chirurgiae. This is an undergraduate degree programme in the field of Medicine and Surgery. The first two advanced and professional undergraduate medical degrees are Bachelor of Medicine and Bachelor of Surgery. It is probably one of the topmost degrees in the world and therefore by profession, after completing an MBBS from top medical colleges, an individual is officially transformed into a medical professional. This is a very prolonged study that requires a huge amount of patience and ability. Being a medical professional is one of the bravest and most humble occupations. The curriculum describes different medicine and human anatomy and is able to educate the participants on how to test and cure specific diseases. MBBS degree cover numerous medical specialities to allow the learners to develop an in-depth understanding of the area of interest. In this article, we have discussed the MBBS course details which include MBBS admission, courses after MBBS, and the MBBS fee structure, and career opportunities after MBBS. ";
}
function course2()
{

    document.getElementById("courses2").innerHTML=" BAMS stands for Bachelor of Ayurvedic Medicine and Surgery. This is an undergraduate degree programme designed to make students familiar with the concepts of Ayurveda and use them for the treatment of patients. BAMS incorporates Ayurveda with the ideas of modern medicines, and students are taught a combination of both as part of the course curriculum. Ayurveda is one of the oldest systems of medicine and traces its roots to Vedic times. It is based on the curative properties of herbs, and its treatments are known for the natural elements they contain.  Considered an alternate treatment method, the Ayurveda medicine system not only cures and prevents an ailment but also reduces the frequency with which diseases enter the human body. It utilises the self-healing system of the body. Currently, this alternative method of healing is being accepted by people worldwide. Even the World Health Organisation has provided a worldwide forum for promoting traditional medicine systems such as Ayurveda. Therefore, the Bachelor of Ayurvedic Medicine and Surgery (BAMS) course has opened up many promising opportunities for students.  ";
}
function course3()
{

    document.getElementById("courses3").innerHTML="Physiotherapy is a branch of healthcare that applies modes of physical movement such as exercise, massage, besides education, advice, and counselling services to circumstances where movement and function are threatened by ageing, pain, injury, diseases, disorders, conditions, or other environmental factors. Students enrolled to the course are taught on an advanced level about core physiotherapeutic skills such as manual therapy, therapeutic exercises, and application of electro-physical modalities, which have been proven to cure a range of disabilities and disease related to spine, back, neck, and even stress-related incontinence.";
}
function course4()
{

    document.getElementById("courses4").innerHTML=" BAMS stands for Bachelor of Ayurvedic Medicine and Surgery. This is an undergraduate degree programme designed to make students familiar with the concepts of Ayurveda and use them for the treatment of patients. BAMS incorporates Ayurveda with the ideas of modern medicines, and students are taught a combination of both as part of the course curriculum. Ayurveda is one of the oldest systems of medicine and traces its roots to Vedic times. It is based on the curative properties of herbs, and its treatments are known for the natural elements they contain.  Considered an alternate treatment method, the Ayurveda medicine system not only cures and prevents an ailment but also reduces the frequency with which diseases enter the human body. It utilises the self-healing system of the body. Currently, this alternative method of healing is being accepted by people worldwide. Even the World Health Organisation has provided a worldwide forum for promoting traditional medicine systems such as Ayurveda. Therefore, the Bachelor of Ayurvedic Medicine and Surgery (BAMS) course has opened up many promising opportunities for students.";
}
function admission1()
{

    document.getElementById("courses1").innerHTML="There are various ways of enrolling students in the MBBS program provided by various institutions and schools. In the Bachelor of Medicine and Bachelor of Surgery programmes, educational institutions use various methodologies to enrol applicants. To receive an MBBS degree, applicants must follow the different strategies with a thorough understanding from which they must then achieve university admissions. The various methods by which candidates may become admitted to this degree are described below. Entrance exams: The most common method for approving candidates is a medical entrance exam used by colleges and universities. Aspiring MBBS students sit for different entrance exams to earn a Bachelor of Medicine and a Bachelor of Surgery (BMBS or MBBS) degree. The results obtained in these exams allow the students to apply to high-ranking universities offering such degrees.Merit-based: There are colleges and universities in these courses which offer candidates admissions based on the marks achieved in 10 + 2. The eligibility criteria are based on competencies gained in 10 + 2. These colleges often take students using their cut-off lists. But the number of these colleges is very less in numbers and the medical entrance exam is a must for this particular degree."
}
function admission2()
{

    document.getElementById("courses2").innerHTML="  It goes without saying that being familiar with the admission procedure is as important as the exam itself.  Admission to AYUSH 15% All India Quota seats in government BAMS colleges in India is conducted by the AYUSH Admission Central Counselling Committee (AACCC). While the admission to the 85% government state quota seats of BAMS course in India is conducted by the affiliated university of the particular state. Eligible candidates can check the detailed admission procedure below.  Students need to register at the AACC website for admission to AIQ seats in the BAMS course - aaccc.gov.in.  For admission to the state quota seats at BAMS colleges in India, candidates must register at the official websites of the affiliated universities/colleges.After the verification of the application forms, authorities will release the merit list for the list of BAMS colleges in India, mentioning the names of eligible candidates. Shortlisted aspirants have to submit their choices of courses and colleges during online counselling.  Based on choices submitted by applicants, NEET rank, seats available, reservation, and other criteria, authorities grant admission to shortlisted candidates.  Selected students have to report to the allotted college for document verification and completion of the admission process. ";
}
function admission3()
{

    document.getElementById("courses3").innerHTML=" It goes without saying that being familiar with the admission procedure is as important as the exam itself.  Admission to AYUSH 15% All India Quota seats in government BAMS colleges in India is conducted by the AYUSH Admission Central Counselling Committee (AACCC). While the admission to the 85% government state quota seats of BAMS course in India is conducted by the affiliated university of the particular state. Eligible candidates can check the detailed admission procedure below.  Students need to register at the AACC website for admission to AIQ seats in the BAMS course - aaccc.gov.in.  For admission to the state quota seats at BAMS colleges in India, candidates must register at the official websites of the affiliated universities/colleges.After the verification of the application forms, authorities will release the merit list for the list of BAMS colleges in India, mentioning the names of eligible candidates. Shortlisted aspirants have to submit their choices of courses and colleges during online counselling.  Based on choices submitted by applicants, NEET rank, seats available, reservation, and other criteria, authorities grant admission to shortlisted candidates.  Selected students have to report to the allotted college for document verification and completion of the admission process. ";
}
function admission4()
{

    document.getElementById("courses4").innerHTML=" It goes without saying that being familiar with the admission procedure is as important as the exam itself.  Admission to AYUSH 15% All India Quota seats in government BAMS colleges in India is conducted by the AYUSH Admission Central Counselling Committee (AACCC). While the admission to the 85% government state quota seats of BAMS course in India is conducted by the affiliated university of the particular state. Eligible candidates can check the detailed admission procedure below.  Students need to register at the AACC website for admission to AIQ seats in the BAMS course - aaccc.gov.in.  For admission to the state quota seats at BAMS colleges in India, candidates must register at the official websites of the affiliated universities/colleges.After the verification of the application forms, authorities will release the merit list for the list of BAMS colleges in India, mentioning the names of eligible candidates. Shortlisted aspirants have to submit their choices of courses and colleges during online counselling.  Based on choices submitted by applicants, NEET rank, seats available, reservation, and other criteria, authorities grant admission to shortlisted candidates.  Selected students have to report to the allotted college for document verification and completion of the admission process. ";
}