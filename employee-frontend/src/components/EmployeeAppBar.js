import * as React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import sharingan from "../images/sharingan.png";

import "../css/style.css";
import { useNavigate } from "react-router-dom";

const EmployeeAppBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top" expand="md">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Brand>
            <div className="sharingan-picture">
              <img onClick={() => navigate("/")} src={sharingan} />
            </div>
          </Navbar.Brand>

          <Nav>
            <NavDropdown title="Social Media">
              <div>
                <NavDropdown.Item
                  href="https://www.instagram.com/burhankvk/"
                  target="_blank"
                >
                  <i class="bi bi-instagram ">
                    {" "}
                    <b>Instagram</b>
                  </i>
                </NavDropdown.Item>
              </div>

              <div>
                <NavDropdown.Item
                  href="https://www.youtube.com/channel/UCvl2Bgx-g3Gov0PD6ZyjNFA"
                  target="_blank"
                >
                  <i class="bi bi-youtube ">
                    {" "}
                    <b>YouTube</b>
                  </i>
                </NavDropdown.Item>
              </div>
              <div>
                <NavDropdown.Item
                  href="https://www.linkedin.com/in/burhan-kavak/"
                  target="_blank"
                >
                  <i class="bi bi-linkedin ">
                    {" "}
                    <b>LinkedIn</b>
                  </i>
                </NavDropdown.Item>
              </div>
              <div>
                <NavDropdown.Item
                  href="https://github.com/BurhanKavak"
                  target="_blank"
                >
                  <i class="bi bi-github ">
                    {" "}
                    <b>GitHub</b>
                  </i>
                </NavDropdown.Item>
              </div>
            </NavDropdown>
            <Nav.Link>
              <element onClick={() => navigate("/burhan/languages/list")}>
                <b class="bi bi-code-slash"> Languages</b>
              </element>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content"></div>
    </div>
  );
};
export default EmployeeAppBar;
