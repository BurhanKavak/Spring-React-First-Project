import { Avatar, AvatarGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import LanguageService from "../../services/LanguageService";

function LanguageList() {
  const [languages, setLanguages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    LanguageService.getLanguages().then((resp) => setLanguages(resp.data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center" style={{ color: "#d64161" }}>
        Language List
      </h1>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Language Id</th>
            <th>Programming Language</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {languages.map((language) => (
            <tr key={language.id}>
              <td>{language.id}</td>

              <td>
                {language.programmingLanguage.toUpperCase()}
                <Avatar src={`/languages/${language.id % 10}.png`}></Avatar>
              </td>
              <td>{language.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class="back-style">
        <button
          type="button"
          class="btn btn-outline-danger "
          onClick={() => navigate("/")}
        >
          <i class="bi bi-backspace-fill"> Back to list</i>
        </button>
      </div>
    </div>
  );
}
export default LanguageList;
