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
    type: "input"
  },
  {
    name: "length",
    label: "Length",
    required: true,
    message: "Please input the length of the tool!",
    placeholder: "Input your tool lentgh",
    type: "input"
  },
  {
    name: "corner_radius",
    label: "Corner radius",
    required: true,
    message: "Please input the radius of the corner!",
    placeholder: "Input your tool corner radius",
    type: "input"
  },
  {
    name: "flute_number",
    label: "Flutes number",
    required: true,
    message: "Please input the number of the flutes!",
    placeholder: "Input your tool flutes number",
    type: "input"
  },
  {
    name: "flute_length",
    label: "Flute length",
    required: true,
    message: "Please input the length of the flute!",
    placeholder: "Input your tool flute lentgh",
    type: "input"
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
    type: "number"
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
  },
  {
    name: "quantity",
    label: "Quantity",
    required: true,
    message: "Please enter quantity!",
    placeholder: "Enter quantity",
    type: "number",
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