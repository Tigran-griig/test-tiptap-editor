import React, {Dispatch, SetStateAction, useCallback, useMemo, useState,useEffect} from 'react'
import {useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {Placeholder} from '@tiptap/extension-placeholder'
import {Text} from '@tiptap/extension-text'
import {FontFamily} from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'
import {Color} from '@tiptap/extension-color'
import Link from '@tiptap/extension-link'
import Blockquote from '@tiptap/extension-blockquote'
import TextEditorTools from '../TextStyleToolbar/TextEditorTools'
import Collaboration from '@tiptap/extension-collaboration'
import {HocuspocusProvider} from '@hocuspocus/provider'
import * as Y from 'yjs'
import {useRouter} from "next/router";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import {IndexeddbPersistence} from 'y-indexeddb'

interface IUser {
    name: string;
    id?: string;
    color?: string;
}

const ydoc = new Y.Doc();

const colors = [
    "#958DF1",
    "#F98181",
    "#FBBC88",
    "#FAF594",
    "#70CFF8",
    "#94FADB",
    "#B9F18D"
];

const getRandomElement = (list: string[]) =>
    list[Math.floor(Math.random() * list.length)];

const getRandomColor = () => getRandomElement(colors);


const TextEditor = ({
                        setEditorState,
                        setEditor,
                        roomId,
                    }: { setEditorState: Dispatch<SetStateAction<any>>; setEditor: Dispatch<SetStateAction<any>>,roomId:string, }) => {

    const [users, setUsers] = useState<IUser[] | null>([{name: "Vazgen", id: "23"}, {name: "Armen", id: "2345"}]);
    const [currentUser, setCurrentUser] = useState<IUser>({
        name: `${roomId}`, color: getRandomColor()
    });

    const setName = useCallback(() => {
        const name = (window.prompt("Name") || "").trim().substring(0, 32);

        if (name) {
            return setCurrentUser({...currentUser, name});
        }
    }, [currentUser]);

    // new IndexeddbPersistence(`${query?.roomId}`, ydoc)

    const provider = new HocuspocusProvider({
        url: `ws://192.168.10.171:1234`,
        name: `${roomId}`,
        document: ydoc,
        broadcast: false,
        forceSyncInterval: 1000,
    })


    const editor = useEditor({
        extensions: [
            StarterKit,
            Text,
            TextStyle,
            FontFamily,
            Color,
            Blockquote,
            Link.configure({
                openOnClick: false,
            }),
            CollaborationCursor.configure({
                provider: provider,
                user: currentUser,
            }),
            Placeholder.configure({
                placeholder: 'New story',
            }),
            StarterKit.configure({
                // The Collaboration extension comes with its own history handling
                history: false,
            }),
            Collaboration.configure({
                document: provider.document,
            }),
        ],

        onUpdate({editor}) {
            setEditorState(editor.getJSON());
        },
        editorProps: {
            attributes: {
                class: `font-source-serif-pro font-normal `,
            },
        },

    }, [roomId])


    useEffect(() => {
        if (editor && currentUser) {
            editor.chain().focus().user(currentUser).run();
        }
    }, [editor, currentUser]);

    return (
        <div className="flex justify-center w-full pt-[60px]">
            {editor && <TextEditorTools editor={editor}/>}
            <EditorContent editor={editor} className="w-full w-[700px] editor__content"/>
        </div>
    )
}

export default TextEditor
