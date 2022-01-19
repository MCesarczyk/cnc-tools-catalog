import { formatTool } from "./formatTool";

export const buildToolTable = (data) => {
  let toolTable = [];

  data.forEach(tool => {
    const formattedTool = formatTool(tool);

    toolTable = [
      ...toolTable,
      formattedTool
    ];

  })
  return toolTable;
};