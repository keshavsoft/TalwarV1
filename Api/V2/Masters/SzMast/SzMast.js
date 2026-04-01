import { readFileSync } from "fs";
import MDBReader from "mdb-reader";
const dataPath = "\\\\tally\\e\\talwar\\V1\\Data\\2026\\IAM.mdb";

const exportData = () => {
    const buffer = readFileSync(dataPath);
    const reader = new MDBReader(buffer);

    // Get data from a specific table
    const usersTable = reader.getTable("SzMast");
    const data = usersTable.getData();

    return data;
};

export { exportData };