import PropTypes from "prop-types";

export default function Heading({ title }) {
  return <h1 className="fs-3 fw-normal">{title}</h1>;
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};
