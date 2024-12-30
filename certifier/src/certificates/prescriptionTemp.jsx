// import createPdf from '../helpers/downloder'
// import logo from '../images/medicallogo.png'
// import qrimg from '../images/qr.png'
// import sign from '../images/dekasignature.png'
// import stamp from '../images/Deka stamp.png'
// const PrescriptionTemp = (type) => {


//     return (
//         <>
//         <div className="flex justify-center outerbox">

//             <div className="h-[1500px] w-[1200px] certificatebox relative border-4" id='certificate'>
//                 <div className="h-[15%] bg-blue w-[100%] head flex justify-between px-10 py-5 ">
//                     <img src={logo} alt="aaa" srcset="" className='h-[100%] w-[20%]' />
//                     <div className="drheader text-right">
//                         <h1 className="text-yellow font-bold text-5xl" >{drname}</h1>
//                         <div>
//                         <h1 className='text-xl text-white mt-5'>{practise}</h1>
//                         <h1 className='text-l text-white'>{regno}</h1>
//                         </div>
                        
//                     </div>
//                 </div>
//                 <div className="certificatetype h-[60px] border-b-4 border-blue flex justify-center p-1">
//                     <h1 className='text-blue font-bold text-4xl pb-2'>{" MEDICAL CERTIFICATE "}</h1>
//                 </div>
//                 <div className="qrbox flex justify-between mt-10 items-center px-10">
//                     <img src={qrimg} alt="" srcset="" height={180} width={180} />
//                     <div className="date text-right">
//                         <h2 className='text-xl'>issue date</h2>
//                         <h1 className='font-bold text-2xl'>{date}</h1>
//                         <h2 className='text-xl'>document no.</h2>
//                         <h1 className='font-bold text-2xl'>{docno}</h1>
//                     </div>
//                 </div>
//                 <div className="textBg bg-middle/25 text-black rounded-2xl h-[62%] mx-auto w-[95%] mt-10 p-5 relative">
                    
//                     <p className='content text-2xl text-justify'>
                    
//                     </p>
                    
//                     <div className="signatureblock px-10 flex flex-row-reverse absolute bottom-0 w-[100%]">
                        
//                         <div className="sig -mr-15">
//                             <img src={sign} alt="" srcset="" height="auto" width={200} className='-mb-10' />
//                             <img src={stamp} alt="" srcset="" height="auto" width={300} className='-mt-24' />
//                             <h1 className='text-2xl font-bold'>{drname}</h1>
//                             <h2 className='text-xl'>dr's name</h2>
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//                 </div>
//         <input type="button" value="generate" className='p-5 bg-blue text-white' onClick={createPdf}/>
//         </>
//     )
// }

// export default PrescriptionTemp;