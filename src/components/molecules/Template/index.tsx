import MediumEditor from "medium-editor";
import { useEffect } from "react";
import "./styles.css";

const Template = () => {
  useEffect(() => {
    const editor = new MediumEditor(".editable", {
      placeholder: {
        text: "",
      },
    });
    editor.setContent("lonres.com");
  }, []);

  return <textarea name="editor" className="editable"></textarea>;
};

export default Template;
