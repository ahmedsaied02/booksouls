#!/usr/bin/env node
import fs from "node:fs";
import process from "node:process";
import yargs from "yargs";

yargs(process.argv.slice(2))
	.command({
		command: "add <name>",
		desc: "Adds a new component to the /components directory",
		builder: (yargs) =>
			yargs
				.positional("name", {
					type: "string",
					demandOption: true,
					describe: "The name of the component",
				})
				.option("tag", {
					type: "string",
					demandOption: true,
					describe: "The HTML tag to use for the component",
				})
				.option("overwrite", {
					type: "boolean",
					describe: "Whether or not to overwrite an existing component with the same name",
				}),
		handler: ({ name, tag, overwrite }) => {
			if (/^[A-Z]/.test(name) === false) {
				console.error("Component name must start with a capital letter.");
				process.exit(1);
			}

			const path = `./app/components/${name}.tsx`;
			if (!overwrite && fs.existsSync(path)) {
				console.error(`Component "${name}" already exists.`);
				process.exit(1);
			}

			fs.writeFileSync(path, component(name, tag));
		},
	})
	.parse();

/**
 *
 * @param {string} name
 * @param {string} tag
 */
function component(name, tag) {
	return `
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
`;
}
