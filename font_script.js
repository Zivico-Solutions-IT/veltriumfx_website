import fs from 'fs';

const files = [
  'src/pages/Market/Forex.jsx', 
  'src/pages/Market/Commodities.jsx', 
  'src/pages/Market/Cryptography.jsx', 
  'src/pages/Market/Stock.jsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace title styles in the standard feature cards
  // Currently: className="text-[15px] font-bold leading-snug text-[#0f172a] m-0 text-left"
  content = content.replace(
    /className="text-\[15px\] font-bold leading-snug text-\[#0f172a\] m-0 text-left"/g,
    'className="text-[16px] sm:text-[17px] font-semibold leading-snug text-[#1e293b] m-0 text-left font-sans tracking-tight"'
  );
  
  // Replace description styles in the standard feature cards
  // Currently: className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-8 text-left mt-2"
  content = content.replace(
    /className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-8 text-left mt-2"/g,
    'className="text-[13px] sm:text-[14px] leading-relaxed text-[#64748b] font-medium text-left mt-1.5"'
  );
  
  // Also, update the "How Are Indices Calculated" section in Indices.jsx explicitly
  if (file.includes('Indices.jsx')) {
    content = content.replace(
      /className="text-lg font-bold text-\[#0f172a\] leading-tight mt-1"/g,
      'className="text-[16px] sm:text-[17px] font-semibold text-[#1e293b] leading-snug mt-1 font-sans tracking-tight"'
    );
    content = content.replace(
      /className="mt-3 text-\[13px\] sm:text-sm leading-relaxed text-\[#475569\]"/g,
      'className="mt-2 text-[13px] sm:text-[14px] font-medium leading-relaxed text-[#64748b]"'
    );
  }
  
  fs.writeFileSync(file, content);
}
