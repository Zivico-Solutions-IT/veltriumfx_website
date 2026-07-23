import fs from 'fs';

const files = [
  'src/pages/Market/Commodities.jsx', 
  'src/pages/Market/Cryptography.jsx', 
  'src/pages/Market/Stock.jsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace standard centered layout to left-aligned with icon on left
  content = content.replace(
    /<div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-center">\s*<div className="flex flex-col items-center gap-4">\s*\{\/\* Circular Icon Container \*\/\}\s*<div className="flex h-\[52px\] w-\[52px\] shrink-0 items-center justify-center rounded-full bg-\[#00674F\] text-white mx-auto">\s*<Icon size=\{24\} strokeWidth=\{([\d.]+)\} \/>\s*<\/div>\s*<div className="flex flex-col pt-0\.5">\s*\{\/\* Centered Title \*\/\}\s*<h3 className="text-\[15px\] font-bold leading-snug text-\[#0f172a\] mb-1\.5 text-center">\s*\{([^}]+)\}\s*<\/h3>\s*\{\/\* Centered Description \*\/\}\s*<p className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-8 text-center">\s*\{([^}]+)\}\s*<\/p>\s*<\/div>\s*<\/div>\s*\{\/\* Bottom green dash \*\/\}\s*<div className="mt-8 h-\[3px\] w-6 bg-\[#00674F\] rounded-full mx-auto"><\/div>\s*<\/div>/g,
    `<div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    {/* Circular Icon Container */}
                    <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#00674F] text-white">
                      <Icon size={22} strokeWidth={$1} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-[15px] font-bold leading-snug text-[#0f172a] m-0 text-left">
                      {$2}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-8 text-left mt-2">
                      {$3}
                  </p>
                </div>

                {/* Bottom green dash */}
                <div className="mt-8 h-[3px] w-8 bg-[#00674F] rounded-full"></div>
              </div>`
  );
  
  fs.writeFileSync(file, content);
}
