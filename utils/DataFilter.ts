import * as fs from 'fs';
import * as path from 'path';

export class DataUtil {
    private testCaseData: any;

    constructor(fileName: string, testCaseId: string) {
        const data = DataUtil.getDataFromJson(fileName);
        if (data[testCaseId]) {
            this.testCaseData = data[testCaseId];
        } else {
            throw new Error(`Test case ID "${testCaseId}" not found in ${fileName}`);
        }
    }

    static getDataFromJson(fileName: string): any {
        try {
            const filePath = path.join(__dirname, '../data', fileName);
            console.log(`Attempting to read file at: ${filePath}`); // Imprime la ruta
            const rawData = fs.readFileSync(filePath, 'utf-8');
            return JSON.parse(rawData);
        } catch (error) {
            if (error instanceof Error) {
                console.error(`Error reading JSON file: ${error.message}`);
            } else {
                console.error('An unknown error occurred');
            }
            throw error;
        }
    }

    get displayName(): string {
        return this.testCaseData.displayName;
    }

    get path(): string {
        return this.testCaseData.path;
    }

    get description(): string {
        return this.testCaseData.description;
    }

    get parentSuite(): string {
        return this.testCaseData.parentSuite;
    }

    get suite(): string {
        return this.testCaseData.suite;
    }

    get subSuite(): string {
        return this.testCaseData.subSuite;
    }

    get owner(): string {
        return this.testCaseData.owner; 
    }

    get severity(): string {
        return this.testCaseData.severity;
    }

    get username(): string {
        return this.testCaseData.input.username;
    }

    get password(): string {
        return this.testCaseData.input.password;
    }

    
}


