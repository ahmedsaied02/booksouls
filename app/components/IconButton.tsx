import React from "react";
import PropTypes from "prop-types";

export type IconButtonProps = React.ComponentPropsWithRef<"button">;

export const IconButton: React.FC<IconButtonProps> = React.forwardRef((props, ref) => {
	const { className = "", ...rest } = props;
	return (
		<button
			ref={ref}
			className={`
                inline-flex h-10 w-10 items-center justify-center rounded-full text-primary-text
				before:absolute before:inset-0 before:rounded-[inherit] before:bg-current before:opacity-0
				hover:before:opacity-[8%]
				active:before:opacity-[12%]
               ${className}
            `}
			{...rest}
		/>
	);
});

IconButton.displayName = "IconButton";

IconButton.propTypes = {
	className: PropTypes.string,
};
