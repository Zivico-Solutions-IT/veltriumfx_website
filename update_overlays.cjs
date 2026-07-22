const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else if (f.endsWith('.jsx')) {
            callback(path.join(dir, f));
        }
    });
}

let root = path.join(__dirname, 'src', 'pages');
let count = 0;

walkDir(root, function(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let replacement = 'className="absolute inset-0 bg-black/40"';
    let pattern = /className=\s*["']absolute inset-0 bg-\[#00674F\]\/\d+.*?["']/g;
    
    let newContent = content.replace(pattern, replacement);
    
    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log("Updated " + filePath);
        count++;
    }
});

console.log("Total updated: " + count);
