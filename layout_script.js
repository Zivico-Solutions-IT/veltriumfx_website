import fs from 'fs';

const files = [
  'src/pages/Market/Forex.jsx', 
  'src/pages/Market/Commodities.jsx', 
  'src/pages/Market/Cryptography.jsx', 
  'src/pages/Market/Stock.jsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // We want to change the centered card layout to:
  // Icon and heading side-by-side, description below.
  // Wait, let's just do a string replace for the specific blocks.
  // Since the files might vary slightly, using regex is better.
  
  // 1. Remove text-center and mx-auto from the card container
  content = content.replace(/text-center/g, 'text-left');
  content = content.replace(/mx-auto/g, ''); // this might break other mx-auto, let's be more specific
  
  // Specific regex for the feature cards:
  // From:
  // <div className="flex flex-col items-center gap-4">
  //   <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#00674F] text-white mx-auto"> ... </div>
  //   <div className="flex flex-col pt-0.5"> ... </div>
  // </div>
  
  // To:
  // <div className="flex items-center gap-4 mb-3">
  //   <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#00674F] text-white"> ... </div>
  //   <h3 ...> ... </h3>
  // </div>
  // <p ...> ... </p>
}
