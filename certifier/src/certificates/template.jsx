import createPdf from '../helpers/downloder'
import logo from '../images/medicallogo.png'
import qrimg from '../images/qr.png'
import sign from '../images/dekasignature.png'
import stamp from '../images/Deka stamp.png'
import certificatedata from './content'
const Temp = ({text}) => {

    const footertext ="A medical certificate requires the patient's signature to be valid. The details in this document reflect the symptoms the patient described during their consultation with the doctor. However, Doctor or CertifyMyHealth.com (i.e. Medical certificate must have patient’s signature to be valid. The details mentioned in this medical document are as per the symptoms mentioned by patient during the doctor consultation. Doctor or CertifyMyHealth.com (i.e. https://certifmyhealth.com/) are not responsible for pati sharing the wrong information. Patient have agreed while sharing the details of their condition that they are providing the right information and understand the repercussions of giving false information for the medical document and take full responsibility for the information shared. This medical document is only valid for the dates mentioned by the doctor. This medical document should only apply to the organization it is addressed to. This medical document, under no circumstances, can be used for any medico-legal purposes whatsoever. For verification of the document, please scan the certificate and include the document details in the email. Other Terms & Conditions Apply. ) is not responsible for any misinformation provided by the patient. By sharing their condition details, the patient acknowledges that they are providing accurate information, understands the consequences of providing false information in this medical document, and takes full responsibility for the information shared.This medical document is only valid for the dates specified by the doctor and applies solely to the designated organization. Under no circumstances can this document be used for any medico-legal purposes whatsoever.For verification of the document, please scan the certificate and include its details in an email. Other Terms & Conditions may apply."
    return (
        <>
        <div className="flex justify-center outerbox">

            <div className="h-[1500px] w-[1200px] certificatebox relative border-4" id='certificate'>
                <div className="h-[15%] bg-blue w-[100%] head flex justify-between px-10 py-5 ">
                    <img src={logo} alt="aaa" className='h-[100%] w-[20%]' />
                    <div className="drheader text-right">
                        <h1 className="text-yellow font-bold text-5xl" >{"drname"}</h1>
                        <div>
                        <h1 className='text-xl text-white mt-5'>{"practice"}</h1>
                        <h1 className='text-l text-white'>{"regno"}</h1>
                        </div>
                        
                    </div>
                </div>
                <div className="certificatetype h-auto border-b-4 border-blue py-2">
                    <h1 className='text-blue font-bold text-4xl text-center mb-[10px] -mt-[20px]'>{"type"}</h1>
                </div>
                <div className="qrbox flex justify-between mt-10 items-center px-10">
                    <img src={qrimg} alt="" srcset="" height={180} width={180} />
                    <div className="date text-right">
                        <h2 className='text-xl'>issue date</h2>
                        <h1 className='font-bold text-2xl'>{"date"}</h1>
                        <h2 className='text-xl'>document no.</h2>
                        <h1 className='font-bold text-2xl'>{"docno"}</h1>
                    </div>
                </div>
                <div className="textBg bg-middle/25 text-black rounded-2xl h-[700px] mx-auto w-[95%] mt-10 p-5 relative">
                    <div className="orgbox text-left text-2xl mb-10">
                        <h5 className='mb-2'>To</h5>
                        <p className=''>{"organization"}</p>
                    </div>
                    <p className='content text-2xl text-justify'>
                    {text}
                    </p>
                    <div className="dignosisblock h-[100px]"></div>
                    <div className="signatureblock flex justify-between px-10 py-2 items-end absolute bottom-0 w-[100%]">
                        <div className="patientname">
                            <h2 className='mb-10'>patient's name</h2>
                            <h2>patient's signature</h2>
                        </div>
                        <div className="sig -mr-15">
                            <div className="sigstampbox -mb-10">
                            <img src={sign} alt="" srcset="" height="auto" width={200} className='-mb-28 ml-4' />
                            <img src={stamp} alt="" srcset="" height="auto" width={300} className='' />
                            </div>
                            
                            
                            <div className="lowerbox text-center">
                            <h1 className='text-2xl font-bold'>{"drname"}</h1>
                            <h2 className='text-xl'>dr's name</h2>
                            </div>
                            </div> 
                        
                    </div>
                </div>
                
                <div className="footer bg-blue w-full absolute h-[15%] bottom-0">
                    <p className='text-white text-justify text-[13px] p-2 font-bold'>
                        {footertext}
                    </p>
                </div>
            </div>

            

        </div>
        <input type="button" value="generate" className='p-5 bg-blue text-white' onClick={createPdf}/>
        </>
    )
}

export default Temp;