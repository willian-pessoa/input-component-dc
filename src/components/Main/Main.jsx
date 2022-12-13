import React from "react";

import Input from "../Input/Input";
import DisplayCol from "../DisplayComponents/DisplayCol";
import DisplayRow from "../DisplayComponents/DisplayRow";
import Comment from "../Comment/Comment";

import { AiOutlineMail, AiFillLock } from "react-icons/ai";

import "./Main.scss";

const Main = () => {
  return (
    <main className="main">
      <h3>Inputs</h3>
      <div className="main-variants">
        <DisplayRow>
          <DisplayCol>
            <Comment text="<Input />"></Comment>
            <Input label="Label" placeHolder="Place Holder" />
          </DisplayCol>
          <DisplayCol>
            <Comment text="<Input disabled />"></Comment>
            <Input label="Label" placeHolder="Place Holder" disabled />
          </DisplayCol>
          <DisplayCol>
            <Comment text="<Input error />" />
            <Input label="Label" placeHolder="Place Holder" error />
          </DisplayCol>
        </DisplayRow>
        <DisplayRow>
          <DisplayCol>
            <Comment text='<Input helperText="Helper Text" />' />
            <Input
              label="Helper Text"
              placeHolder="Place Holder"
              helperText="Helper Text"
            />
          </DisplayCol>
          <DisplayCol>
            <Comment text='<Input helperText="Helper Text" error />' />
            <Input
              label="Helper Text"
              error
              placeHolder="Place Holder"
              helperText="Helper Text"
            />
          </DisplayCol>
        </DisplayRow>
        <DisplayRow>
          <DisplayCol>
            <Comment text='<Input helperText="Full Width" full width />' />
            <Input
              label="Full Width"
              fullWidth
              placeHolder="Place Holder"
              helperText="Helper Text"
            />
          </DisplayCol>
        </DisplayRow>
        <DisplayRow>
          <DisplayCol>
            <Comment text="<Input value='email@email.com' startIcon={<AiOutlineMail/>}/>"></Comment>
            <Input
              label="Email"
              startIcon={<AiOutlineMail />}
              value="email@email.com"
            />
          </DisplayCol>
          <DisplayCol>
            <Comment text="<Input value='•••••••' endIcon={<AiFillLock/>}/>"></Comment>
            <Input label="Password" endIcon={<AiFillLock />} value="•••••••" />
          </DisplayCol>
        </DisplayRow>
        <DisplayRow>
          <DisplayCol>
            <Comment text="<Input color='violet' size='sm'/>"></Comment>
            <Input
              label="Label"
              color="violet"
              size="sm"
              placeHolder="Place Holder"
            />
          </DisplayCol>
          <DisplayCol>
            <Comment text="<Input color='lime' size='md'/>"></Comment>
            <Input
              label="Label"
              color="lime"
              size="md"
              placeHolder="Place Holder"
            />
          </DisplayCol>
        </DisplayRow>
        <DisplayRow>
          <DisplayCol>
            <Comment text="<Input fullWidth multiline={4} />"></Comment>
            <Input
              label="Label"
              fullWidth
              multiline={4}
              placeHolder="Place Holder"
            />
          </DisplayCol>
        </DisplayRow>
      </div>
      <p className="p-footer">
        Icons: https://react-icons.github.io/react-icons/
      </p>
      <p className="p-footer" style={{ fontSize: "14px" }}>
        created by Willian Pessoa - devChallenges.io
      </p>
    </main>
  );
};

export default Main;
