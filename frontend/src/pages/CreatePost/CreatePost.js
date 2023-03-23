import React from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { useForm } from "react-hook-form";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const CreatePost = () => {
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  const { handleSubmit } = useForm({
    mode: "onChange"
  });

  const handleSubmitOnClick = () => {
    console.log(
      "editor_content ==> ",
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };

  return (
    <div className="editor">
      <Editor
        editorState={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  )
}

export default CreatePost;