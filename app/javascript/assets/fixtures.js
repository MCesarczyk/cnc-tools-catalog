export const toolTypes = [
  { id: 1, name: "Shell mill" },
  { id: 2, name: "End mill" },
  { id: 3, name: "Ball mill" },
  { id: 4, name: "Spotdrill" },
  { id: 5, name: "Drill" },
  { id: 6, name: "Tap" }
];

export const machines = [
  { id: 1, name: "Juaristi" },
  { id: 2, name: "Kekeisen" }
];

export const toolFormFields = [
  {
    name: "tooltype",
    label: "Type",
    required: true,
    message: "Please input your tool type!",
    placeholde: "Select your tool type",
    optionFilterProp: "children",
    type: "select",
    dataScope: toolTypes,
    filters: toolTypes.map(type => ({
      text: type.name,
      value: type.name
    })),
    onFilter: (value, record) => record.tooltype.indexOf(value) === 0
  },
  {
    name: "diameter",
    label: "Diameter",
    required: true,
    message: "Please input your tool diameter!",
    placeholder: "Input your tool diameter",
    type: "input",
    sorter: {
      compare: (a, b) => a.diameter - b.diameter,
      multiple: 5
    }
  },
  {
    name: "length",
    label: "Length",
    required: true,
    message: "Please input the length of the tool!",
    placeholder: "Input your tool lentgh",
    type: "input",
    sorter: {
      compare: (a, b) => a.length - b.length,
      multiple: 4
    }
  },
  {
    name: "corner_radius",
    label: "Corner radius",
    required: true,
    message: "Please input the radius of the corner!",
    placeholder: "Input your tool corner radius",
    type: "input",
    sorter: {
      compare: (a, b) => a.corner_radius - b.corner_radius,
      multiple: 3
    }
  },
  {
    name: "flute_number",
    label: "Flutes number",
    required: true,
    message: "Please input the number of the flutes!",
    placeholder: "Input your tool flutes number",
    type: "input",
    sorter: {
      compare: (a, b) => a.flute_number - b.flute_number,
      multiple: 2
    }
  },
  {
    name: "flute_length",
    label: "Flute length",
    required: true,
    message: "Please input the length of the flute!",
    placeholder: "Input your tool flute lentgh",
    type: "input",
    sorter: {
      compare: (a, b) => a.flute_length - b.flute_length,
      multiple: 1
    }
  },
  {
    name: "machine",
    label: "Machine",
    required: true,
    message: "Please choose a machine!",
    placeholder: "Select your machine",
    optionFilterProp: "children",
    type: "select",
    dataScope: machines,
    filters: machines.map(machine => ({
      text: machine.name,
      value: machine.name
    })),
    onFilter: (value, record) => record.machine.indexOf(value) === 0
  },
  {
    name: "number",
    label: "Number",
    required: true,
    message: "Please input the tool number!",
    placeholder: "Input your tool number",
    type: "number",
    sorter: {
      compare: (a, b) => a.number - b.number,
      multiple: 6
    }
  }
];

export const articleGroups = [
  { id: 1, name: "Tools" },
  { id: 2, name: "Parts" },
  { id: 3, name: "Jigs" },
  { id: 4, name: "Materials" },
  { id: 5, name: "Measuring" },
  { id: 6, name: "Equipment" }
];

export const articleFormFields = [
  {
    name: "group",
    label: "Group",
    required: true,
    message: "Please choose a group!",
    placeholder: "Select article group ",
    optionFilterProp: "children",
    type: "select",
    dataScope: articleGroups,
    filters: articleGroups.map(group => ({
      text: group.name,
      value: group.name
    })),
    onFilter: (value, record) => record.group.indexOf(value) === 0
  },
  {
    name: "subgroup",
    label: "Subgroup",
    required: true,
    message: "Please choose a subgroup!",
    placeholder: "Select article subgroup",
    optionFilterProp: "",
    type: "",
    // dataScope: articleSubgroups
  },
  {
    name: "article",
    label: "Article",
    required: true,
    message: "Please provide an article!",
    placeholder: "Provide an article name",
    type: "input",
  },
  {
    name: "manufacturer",
    label: "Manufacturer",
    required: true,
    message: "Please choose a manufacturer!",
    placeholder: "Enter manufacturer",
    type: "input",
    sorter: {
      compare: (a, b) => a.manufacturer - b.manufacturer,
      multiple: 3
    }
  },
  {
    name: "description",
    label: "Description",
    required: true,
    message: "Please provide a description!",
    placeholder: "Enter description",
    type: "input",
  },
  {
    name: "catalog",
    label: "Catalog",
    required: true,
    message: "Please choose a catalog!",
    placeholder: "Select supplier catalog",
    type: "input",
    sorter: {
      compare: (a, b) => a.catalog - b.catalog,
      multiple: 2
    }
  },
  {
    name: "quantity",
    label: "Quantity",
    required: true,
    message: "Please enter quantity!",
    placeholder: "Enter quantity",
    type: "number",
    sorter: {
      compare: (a, b) => a.quantity - b.quantity,
      multiple: 1
    }
  },
  {
    name: "annotations",
    label: "Annotations",
    required: false,
    message: "",
    placeholder: "Feel free to write something down",
    type: "input",
  }
];