import fs from 'fs/promises';
import path from 'path';

//Create a directory of random JSON files

  export async function createDirectory() {

    const dirPath = path.join(process.cwd(), 'jsonFiles');

    try {
        await fs.mkdir(dirPath, { recursive: true });
        console.log("Directory created successfully.");
      } catch (err) {
        console.error("Error creating directory:", err);
      }
}


export async function createFiles() {

    let path = '';
 
        try{
            for (let i = 1; i <= 3; i++) {

                path = `jsonFiles/file${i}.json`;
    
                await fs.writeFile(path, 'This is a json file');
            }
        }
        catch(err){
            console.log(err);
        }
}


export async function deleteFiles() {

    let path = '';

        for (let i = 1; i <= 3; i++) {

            path = `jsonFiles/file${i}.json`;

           const result = await fs.unlink(path);
        }
}
