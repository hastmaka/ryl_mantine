import PropTypes from "prop-types";

export function createArray(length) {
    return Array.from({ length }, (_, index) => (index + 1).toString());
}

createArray.propTypes = {
    length: PropTypes.number.isRequired
}