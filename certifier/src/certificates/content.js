  
  let inputinfo={
    fullname:"",
    careof:"",
    age:"",
    gender:"",
    idmark:"",
    day:"",
    date:"",
    dignosis:"",
    address:"",
    todate:"",
    fromdate:"",
    time:""
  }
export const certificatedata={
    
    drinformantion:{
        tanmoy:{
            drname:"DR. TANMOY SARDAR",
            regno:"82384",
            practice:"M.B.B.S, GENERAL MEDICINE"
        },
        swapnil:{
            drname:"DR. SWAPNIL SAURABH DEKA",
            regno:"25934",
            practice:"M.B.B.S, GENERAL MEDICINE"
        },
        preeti:{
            drname:"DR. PREETINARI WAGHAMORE",
            regno:"175588",
            practice:"M.B.B.S, GENERAL MEDICINE"
        },
    },
    psychologist:{
        namrata:{
            drname:"NAMRATA SINGHAL",
            practice:"Counseling psychologist",
            deg:"Expressive art therapy UNESCO-CID"
        }
    },
 footertext :"A medical certificate requires the patient's signature to be valid. The details in this document reflect the symptoms the patient described during their consultation with the doctor. However, Doctor or CertifyMyHealth.com (i.e. Medical certificate must have patient’s signature to be valid. The details mentioned in this medical document are as per the symptoms mentioned by patient during the doctor consultation. Doctor or CertifyMyHealth.com (i.e. https://certifmyhealth.com/) are not responsible for pati sharing the wrong information. Patient have agreed while sharing the details of their condition that they are providing the right information and understand the repercussions of giving false information for the medical document and take full responsibility for the information shared. This medical document is only valid for the dates mentioned by the doctor. This medical document should only apply to the organization it is addressed to. This medical document, under no circumstances, can be used for any medico-legal purposes whatsoever. For verification of the document, please scan the certificate and include the document details in the email. Other Terms & Conditions Apply. ) is not responsible for any misinformation provided by the patient. By sharing their condition details, the patient acknowledges that they are providing accurate information, understands the consequences of providing false information in this medical document, and takes full responsibility for the information shared.This medical document is only valid for the dates specified by the doctor and applies solely to the designated organization. Under no circumstances can this document be used for any medico-legal purposes whatsoever.For verification of the document, please scan the certificate and include its details in an email. Other Terms & Conditions may apply."
  
}
 
 async function handle(){

    console.log("handle")
    await fetch("https://babf-2401-4900-8837-6d8c-5801-bbde-2042-79d9.ngrok-free.app/data",{
        headers:{
            'ngrok-skip-browser-warning': 'true'
        }
    })
    .then((response) => response.json())
    .then((result) =>{
        console.log(result.data[0].first_name)
        inputinfo.fullname=result.data[0].first_name+result.data[0].last_name
        inputinfo.careof=result.data[0].careof
        inputinfo.age=result.data[0].age
        inputinfo.gender= result.data[0].gender
        inputinfo.idmark=result.data[0].idmark
        inputinfo.date=result.data[0].date
    
    inputinfo.address= result.data.address_line1+result.data.address_line2+result.data.address_line3+result.data.address_line4
    inputinfo.dignosis= "hai problem"
    
    })
    .catch((error) => console.error(error));
}
export  async function datainterpreter(data){
    await handle()
   console.log(inputinfo);
   
  const sltext =`This is to certify that I, Dr ${"inputinfo.drname"}, have examined Mr. ${inputinfo.fullname} C/O ${inputinfo.careof}, age ${inputinfo.age} years, ${inputinfo.gender}, identification mark ${inputinfo.idmark}, residing at ${inputinfo.address} (whose signature is verified below) and has diagnosed the patient with ${inputinfo.dignosis} Therefore, I do consider that bed rest for ${"day"} day on ${inputinfo.date} was necessary, for the restoration of patient's health.`
//   const mltext=`This is to certify that I, Dr ${drname}, have examined Mr.${fullname}, C/O ${careof}, age ${age} years, ${gender}, identification mark ${idmark}, residing at ${address} (whose signature is verified below) and has diagnosed the patient with ${dignosis}.`
//   const fctext=`This is to certify that I, Dr ${drname}, have examined ${fullname}, C/O ${careof}, age ${age} years, ${gender}, identification mark ${idmark}, residing at ${address} (whose signature is verified below) and has found that the patient is alert and oriented at ${time} on ${date}, free from vision problems, deafness, and other significant health issues that are likely to interfere with the effectiveness of their daily activities. The individual is in good physical and mental health and is fit to perform all regular activites.`
//   const ufttctext=`This is to certify that I,Dr ${drname} examined ${fullname}, C/O ${careof}, age ${age} years, ${gender}, identification mark ${idmark}, residing at ${address}(whose signature is verified below) and has diagnosed the patient with ${dignosis}.`
//   const ctctext=`This is to certify that I, Dr ${drname}, have examined Mr./Ms. ${fullname}C/O Mr./Ms.${careof}, age ${data.age} years, ${gender}, identification mark ${idmark}, residing at ${address} (whose signature is verified below) and has diagnosed the patient with ${dignosis} Mr./Ms. ${careof},  age ${age} years, needs to be constant caretaker of the patient for ${todate}from ${fromdate} for the restoration of patient's health.`
//   const rctext=`This is to certify that I, Dr ${drname}, have examined Mr./Ms. ${fullname} C/O Mr./Ms. ${careof}age ${data.age} years, ${gender}, identification mark ${idmark} residing at ${address} (whose signature is verified below) and find that he/she has recovered from his/her illness and is now fit to resume duties.I also certify that before arriving at this decision, I have examined the original medical certificate and statement of the case on which leave was granted or extended and have taken these into consideration in arriving at my decision.`
 // const wfhctext=`This is to certify that I, Dr ${drname}, have examined Mr./Ms. ${fullname} C/O Mr./Ms. ${gender} age ${data.age} years, ${gender}, identification mark ${idmark}, residing at ${address} (whose signature is verified below) and has diagnosed the patient with ${dignosis} Therefore, I do consider that work from home for ${day} starting from ${date} is/was necessary, for the restoration of patient's health.`
   return sltext;
  
}

