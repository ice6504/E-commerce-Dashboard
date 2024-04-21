import PropTypes from "prop-types";

function Stat(props) {
  const { title, percent, up, children } = props;
  return (
    <>
      <div className="bg-white rounded-3xl p-5 sm:hover:scale-105 transition-all duration-300 sm:hover:shadow-xl">
        <h3 className="text-xl sm:text-3xl mb-5">{title}</h3>
        <div className="text-6xl text-center font-bold mb-2">
          {children}
        </div>
        <div
          className={`text-xl text-center font-medium ${
            up ? "text-lime-400" : "text-red-500"
          }`}
        >
          <i className={`fa-solid fa-arrow-${up ? "up" : "down"}`}></i>{" "}
          {percent}%
        </div>
      </div>
    </>
  );
}

Stat.propTypes = {
  title: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  up: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Stat;
