import fs from 'fs';
import path from 'path';

const files = [
  'src/pages/Market/Forex.jsx', 
  'src/pages/Market/Indices.jsx', 
  'src/pages/Market/Commodities.jsx', 
  'src/pages/Market/Cryptography.jsx', 
  'src/pages/Market/Stock.jsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Update left-aligned titles (previously left out or had different margins)
  content = content.replace(
    /className="text-\[15px\] font-bold leading-snug text-\[#0f172a\] text-left"/g,
    'className="text-[16px] sm:text-[17px] font-semibold leading-snug text-[#1e293b] text-left font-sans tracking-tight"'
  );
  
  // Update centered titles (the common one)
  content = content.replace(
    /className="text-\[15px\] font-bold leading-snug text-\[#0f172a\] mb-1\.5 text-center"/g,
    'className="text-[16px] sm:text-[17px] font-semibold leading-snug text-[#1e293b] mb-1.5 text-center font-sans tracking-tight"'
  );

  // Update left-aligned descriptions
  content = content.replace(
    /className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-8 text-left mt-2"/g,
    'className="text-[13px] sm:text-[14px] leading-relaxed text-[#64748b] font-medium text-left mt-1.5"'
  );

  // Update centered descriptions
  content = content.replace(
    /className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-8 text-center"/g,
    'className="text-[13px] sm:text-[14px] leading-relaxed text-[#64748b] font-medium text-center mt-1.5"'
  );

  // If there are other descriptions like `text-sm leading-7 text-[#475569] sm:text-base` etc.
  content = content.replace(
    /className="text-sm leading-7 text-\[#475569\] sm:text-base"/g,
    'className="text-[13px] sm:text-[14px] leading-relaxed text-[#64748b] font-medium"'
  );

  fs.writeFileSync(file, content);
}
