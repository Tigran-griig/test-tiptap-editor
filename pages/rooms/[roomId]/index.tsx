import React, {useState,useMemo} from 'react';
import TextEditor from "../../../components/TextEditor/TextEditor";
import {useRouter} from "next/router";
import Avatar from "../../../components/avatar";

const Index = () => {
    const [editorState, setEditorState] = useState();
    const [editor, setEditor] = useState();
    const {query} = useRouter();
    const {roomId} = query;

    const textEditor = useMemo(() => roomId && !Array.isArray(roomId)?
        <TextEditor setEditorState={setEditorState} setEditor={setEditor} roomId={roomId}/> :
        <div className="flex justify-center bg-indigo-500... max-w-50">
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Processing...
        </div>, [roomId])


    return (
        <div>
            <div className="text-center"><h3>room {query?.roomId}</h3></div>
            <div className="text-editor-wrapper">
                <h6 className="k-mr-2">Active now 1 </h6>
                <Avatar/>
            </div>
            {textEditor}
        </div>
    );
};

export default Index;