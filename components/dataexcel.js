import React from "react";
import xlsx from "xlsx";

const filePath = "C:/Users/Vinicius/OneDrive/_mei-ESfactory/track_rec.xlsx";
const workbook = xlsx.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(worksheet);
export const jsondata = JSON.stringify(data);

console.log(jsondata);
