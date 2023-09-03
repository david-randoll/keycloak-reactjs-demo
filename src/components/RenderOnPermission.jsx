import PropTypes from "prop-types";
import UserService from "../services/UserService";
import NotAllowed from "./NotAllowed";

const RenderOnPermission = ({ permissions, showNotAllowed, children }) =>
  UserService.hasRole(permissions) ? (
    children
  ) : showNotAllowed ? (
    <NotAllowed />
  ) : null;

RenderOnPermission.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RenderOnPermission;
