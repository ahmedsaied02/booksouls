import fs from "node:fs";
import process from "node:process";

const name = process.argv.at(2);
if (name === undefined || name.length === 0) {
	console.error("Missing component name.\nExample: pnpm add-component IconButton");
	process.exit(1);
}

if (/^[A-Z]/.test(name) === false) {
	console.error("Component name must start with a capital letter.");
	process.exit(1);
}

const path = `./app/components/${name}.tsx`;
if (process.argv.at(3) !== "--replace" && fs.existsSync(path)) {
	console.error(`Component "${name}" already exists.`);
	process.exit(1);
}

const code = `
import React from "react";
import PropTypes from "prop-types";

export type ${name}Props = {
    // TODO:
};

export const ${name}: React.FC<${name}Props> = React.forwardRef((props, ref) => {
    // TODO:
	return null;
});

${name}.displayName = "${name}";

${name}.propTypes = {
    // TODO:
};
`;

fs.writeFileSync(path, code);
