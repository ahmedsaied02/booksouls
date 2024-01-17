import "./LineGradient.css";
import PropTypes from "prop-types";
import React from "react";

export type LineGradientProps = React.ComponentPropsWithRef<"div">;

export const LineGradient: React.FC<LineGradientProps> = React.forwardRef((props, ref) => {
	const { className = "", ...rest } = props;
	return <div ref={ref} className={`line-gradient ${className}`} {...rest} />;
});

LineGradient.displayName = "LineGradient";

LineGradient.propTypes = {
	className: PropTypes.string,
};
