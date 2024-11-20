import fs from 'fs/promises';

import { getData, converttoUpperCase, converttoLowerCase, toSort, deleteFiles } from "../problem2.js";


async function getOutput() {

    let hii = "This is my first lipsum file";

    try {
        await fs.writeFile('lipsum.txt', hii);

        const result1 = await getData();

        const result2 = await converttoUpperCase(result1);

        const result3 = await converttoLowerCase(result2);

        const result4 = await toSort(result3);

        const result5 = await deleteFiles(result4);
        
        console.log("Completed all successfully");

    }catch(err){
        console.log(err);
    }
}

getOutput();
