import fs from 'fs';
import path from 'path';

function replaceInDir(dir, replacements) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath, replacements);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.tsx') || fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = content;
            for (const [from, to] of replacements) {
                modified = modified.split(from).join(to);
            }
            if (modified !== content) {
                fs.writeFileSync(fullPath, modified, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

// Components replacements
replaceInDir('./components/tech', [
    ["from '../assets/", "from '../../assets/tech/"],
    ["from '../components/", "from './"],
    ["src='../assets/", "src='../../assets/tech/"],
    ['src="../assets/', 'src="../../assets/tech/']
]);

// Pages replacements
replaceInDir('./pages/tech', [
    ["from '../components/", "from '../../components/tech/"],
    ["from '../assets/", "from '../../assets/tech/"]
]);
console.log("Done");
