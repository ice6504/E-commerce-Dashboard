import PropTypes from "prop-types";
import { StyledEngineProvider } from "@mui/material/styles";

function InjectTailwind(props) {
  const { children } = props;
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
}

InjectTailwind.propTypes = { children: PropTypes.node };
export default InjectTailwind;
