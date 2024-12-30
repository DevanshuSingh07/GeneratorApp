import img from './images/emptytemp.png';
import createPdf from './helpers/downloder';

import Dragg from './components/Dragme';
const Canvas = ({data,open}) => {


  const text = `To, ${data.organization}. This is to certify that I, Dr. Swapnil Saurabh Deka, have examined Mr. ${data.fullname}, C/O Mr. Rajesh Laad, age ${data.age} years, male, identification mark NA, residing at Nariman Point Colony, Mahalaxmi Nagar, Indore, Madhya Pradesh, 452010, India (whose signature is verified below) and has diagnosed the patient with pain abdomen with fever. Therefore, I do consider that bed rest for one (01) day on 25/08/2024 is necessary, for the restoration of patient's health.
`

  // Function to wrap text within the canvas width
  // const wrapText = (ctx, text, x, y, maxWidth, lineHeight) => {
  //   const words = text.split(' ');
  //   let line = '';
  //   let lines = [];

  //   for (let n = 0; n < words.length; n++) {
      
      
  //     let testLine = line + words[n] + ' ';
  //     let metrics = ctx.measureText(testLine);
  //     let testWidth = metrics.width;

  //     // if(n==0){
            
  //     //   console.log(testLine +"To IF ")
        
        
  //     //   testWidth=maxWidth
  //     //   line = words[n] + ' ';
  //     //   lines.push(line);
  //     // }
  //      if (testWidth > maxWidth && n > 0) {
  //       lines.push(line);
  //       line = words[n] + ' ';

       
  //     }
  //     else {
  //       line = testLine;
  //     }
  //   }
  //   lines.push(line);
  //   // Push the last line
  //   for (let i = 0; i <= lines.length; i++) {
     
  //       ctx.fillText(lines[i], x, y + (i * lineHeight));
  //     S
     
  //   }
  // };

  const handleCanvas = async () => {
    const can = document.getElementById('canva');
    const ima = document.getElementById('image');
    const ctx = can.getContext('2d');
    
    // Draw the background image
    ctx.drawImage(ima, 0, 0, 1200, 1500);

    
    // Set font and text style
    ctx.font = '30px Arial';
    ctx.fillStyle = 'black';
    
    // Set starting position and line height
    const x = 90;
    const y = 600;
    const maxWidth = 1050; // Max width for the text area
    const lineHeight = 45; // Space between lines
    
    // Wrap and render the text
    // wrapText(ctx, text, x, y, maxWidth, lineHeight);
  };



  return (<>
    {open &&<div className="capture" id='capture' style={{position:"relative", height:"1500px",width:"1200px"}}>
      <img src={img} style={{ display: 'none', objectFit: 'contain' }} height={'500px'} width={'500px'} id='image' onLoad={handleCanvas}></img>
      <canvas id='canva' className='' height={'1500px'} width={'1200px'}>
      </canvas>
      
      <Dragg bounds="parent"/>
      <button onClick={createPdf}>print</button>
    </div>}
    </>
  );
};

export default Canvas;
