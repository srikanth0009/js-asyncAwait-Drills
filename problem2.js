import fs from 'fs/promises';

// 1. Read the given file lipsum.txt

export async function getData() {

    try {
        const result = await fs.readFile('lipsum.txt', 'utf8');
        return result;

    } catch (err) {
        console.log(err);
    }
}

export async function converttoUpperCase(data) {


    let modifiedData = data.toUpperCase();


    try {
        await fs.writeFile('uppercase.txt', modifiedData);
        console.log(" uppercase.txt file created");

        await fs.appendFile('filenames.txt', 'uppercase.txt ');
        console.log("uppercase.txt file appended");

        const result = await fs.readFile('uppercase.txt', 'utf8');

        return result;

    } catch (err) {
        console.log(err);
    }
}

export async function converttoLowerCase(data) {

    let lowercaseData = data.toLowerCase().split(' ');
    let newString = lowercaseData.join("\n");

    try {
        await fs.writeFile('lowercase.txt', newString);
        console.log(" lowercase.txt file created");

        await fs.appendFile('filenames.txt', 'lowercase.txt ');
        console.log(" lowercase.txt file appended");

        const result = await fs.readFile("lowercase.txt", 'utf8')

        return result;

    } catch (err) {
        console.log(err);
    }

}


export async function toSort(data) {

    let sortedData = data.split('\n').sort().join('\n');

    try {
        await fs.writeFile('sorteddata.txt', sortedData)
        console.log(" sorteddata.txt file created");

        await fs.appendFile('filenames.txt', 'sorteddata.txt')
        console.log(" sorteddata.txt file appended");

        const result = await fs.readFile("filenames.txt", 'utf8');

        return result;

    } catch (err) {
        console.log(err);
    }

}

export async function deleteFiles(data) {

    const array = data.split(' ');

    try {
        for (let x of array) {
            await fs.unlink(x);
            console.log("file deleted");
        };
    } catch (err) {
        console.log(err);
    }
}






// async function toWrite(filename, content) {
//     try {
//         await filename.writeFile(filename, content);
//     } catch (err) {
//         console.log(err);
//     }
// }
// async function toAppend(filename, content) {
//     try {
//         await filename.appendFile(filename, content);
//     } catch (err) {
//         console.log(err);
//     }
// }
// async function toRead(filename) {
//     try {
//         const data = await filename.readFile(filename, 'utf8');
//         return data;

//     } catch (err) {
//         console.log(err);
//     }
//}