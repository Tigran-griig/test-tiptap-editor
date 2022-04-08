import React, { useState,useRef,useEffect } from 'react';
import TextEditor from "../../../components/TextEditor/TextEditor";
import {useRouter} from "next/router";
import Avatar from "../../../components/avatar";

interface IMsg {
    user: string;
    msg: string;
}

// create random user
const user = "User_" + String(new Date().getTime()).substr(-3);

const Index = () => {
    const [editorState,setEditorState] = useState();
    const [editor,setEditor] = useState();
    const {query} = useRouter();
    console.log(editor,"editor")

    console.log(editorState,"editorStateEditorState")
    return (
        <div>
            <div className="text-center"><h3>room  {query?.roomId}</h3></div>
            <div className="text-editor-wrapper">
                <h6 className="k-mr-2">Active now 1 </h6>
                <Avatar />
            </div>
            <TextEditor setEditorState={setEditorState} setEditor={setEditor} />
        </div>
    );
};

export default Index;