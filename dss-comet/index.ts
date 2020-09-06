const fs = require('fs');

const lights = `
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0026_2.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0027_2.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0028_2.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0029_2.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0030_2.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0031_2.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0032_2.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0033_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0034_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0035_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0036_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0037_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0038_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0039_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0040_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0041_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0042_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0043_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0044_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0045_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0046_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0047_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0048_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0049_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0050_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0051_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0052_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0053_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0054_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0055_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0056_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0057_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0058_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0059_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0060_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0061_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0062_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0063_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0064_1.fit
1	light	..\\Light\\Light_C-2020 F3_30s_1x1_0065_1.fit
`.trim().split('\n');

function main() {
    const root = 'D:\\Astro working\\2020-07-21 (C2020 F3 NEOWISE)\\gif';
    const template = fs.readFileSync(`${root}\\file list (template).txt`, { encoding: 'utf8' });

    const fileLists = lights.map(l => template.replace('<LIGHTROW>', l));
    fileLists.forEach((f, i) => {
        fs.writeFileSync(`${root}\\${i}.txt`, f);
    });
}
main();