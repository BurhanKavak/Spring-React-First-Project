import axios from "axios";

const base_url = "http://localhost:8080/api/v1/language";
class LanguageService {
  getLanguages() {
    return axios.get(base_url);
  }

  postOneLanguage(language) {
    return axios.post(base_url, language);
  }
}
export default new LanguageService();
