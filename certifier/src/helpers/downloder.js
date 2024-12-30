import html2canvas from 'html2canvas'
import jsPdf from 'jspdf';

const createPdf=()=>{

   
    const canvas = document.getElementById('certificate')

    console.log(canvas);
    
    html2canvas(canvas).then((canva) => { // Increase scale for better quality
        const imageData = canva.toDataURL('image/png', 1);
        const pdf = new jsPdf({
            orientation: 'portrait',
            unit: 'px',
            format: [canva.width, canva.height]
        });
        pdf.addImage(imageData, 'PNG', 0, 0, canva.width, canva.height);
        pdf.save('certificate.pdf');
    });
    
   

}

export default createPdf;