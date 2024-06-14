import { useState } from "react";
import Warning from "./Warning";

function TextArea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setWarningText("No script tags allowed!");
    } else if (newText.includes("@")) {
      newText = newText.replace("@", "");
      setWarningText("No @ symbol allowed!");
    } else {
      setWarningText("");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="John has been working on a project since ..."
        spellCheck="false"
      />

      {warningText && <Warning warningText={warningText} />}
    </div>
  );
}
export default TextArea;
