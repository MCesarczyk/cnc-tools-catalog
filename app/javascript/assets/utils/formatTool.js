export const formatTool = (tool) => {
  const formattedTool = {
    key: tool.id,
    id: tool.id,
    tooltype: tool.tooltype,
    diameter: tool.diameter,
    length: tool.length,
    corner_radius: tool.corner_radius,
    flute_number: tool.flute_number,
    flute_length: tool.flute_length,
    machine: tool.machine,
    number: tool.number,
  }

  return formattedTool;
};