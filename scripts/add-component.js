#!/usr/bin/env node
import inquirer from "inquirer";
import searchlist from "inquirer-search-list";
import fs from "node:fs";
import process from "node:process";
import htmlTags from "./html-tags.js";

inquirer.registerPrompt("search-list", searchlist);

const { name } = await inquirer.prompt([
	{
		name: "name",
		type: "input",
		message: "What is the name of the component?",
		validate: (name) => {
			if (!name) {
				return "Component name is required.";
			}
			if (/^[A-Z]/.test(name) === false) {
				return "Component name must start with a capital letter.";
			}
			if (/^[A-Za-z0-9]+$/.test(name) === false) {
				return "Component name must be alphanumeric.";
			}
			return true;
		},
	},
]);

const path = `./app/components/${name}.tsx`;

if (fs.existsSync(path)) {
	const { overwrite } = await inquirer.prompt([
		{
			name: "overwrite",
			type: "confirm",
			message: `Component "${name}" already exists. Overwrite?`,
		},
	]);

	if (!overwrite) process.exit(0);
}

const { tag } = await inquirer.prompt([
	{
		name: "tag",
		type: "search-list",
		message: "Which tag should be used for the component?",
		choices: htmlTags,
	},
]);

const code = `
import React from "react";
import PropTypes from "prop-types";

export type ${name}Props = React.ComponentPropsWithRef<"${tag}">;

export const ${name}: React.FC<${name}Props> = React.forwardRef((props, ref) => {
	// TODO:
	return <${tag} ref={ref}></${tag}>;
});

${name}.displayName = "${name}";

${name}.propTypes = {
	// TODO:
};
`.slice(1); // Remove leading newline

fs.writeFileSync(path, code);
