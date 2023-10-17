import PropTypes from "prop-types";

export default function ValidationError({ children }) {
  return <div className="warning">{children}</div>;
}

ValidationError.propTypes = {
  children: PropTypes.node.isRequired,
};
