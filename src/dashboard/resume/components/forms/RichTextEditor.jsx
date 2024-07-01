import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import { Brain, LoaderCircle } from "lucide-react";
import React, { useContext, useState } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnUnderline,
  Editor,
  EditorProvider,
  HtmlButton,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { AIChatSession } from "../../../../../service/AIModal";
import { toast } from "sonner";

const RichTextEditor = ({ onRichTextEditorChange, index }) => {
  const [value, setValue] = useState();
  const PROMPT =
    "position titile: {positionTitle} , Depends on position title give me 5-7 bullet points for my experience in resume (Please do not add experince level and No JSON array) , give me result in HTML tags";
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);

  const GenSummeryFormAI = async () => {
    setLoading(true);
    if (!resumeInfo.experience[index].title) {
      toast("Please Add position Title");
      setLoading(false);
      return;
    }
    const prompt = PROMPT.replace(
      "{positionTitle}",
      resumeInfo.experience[index].title
    );
    const result = await AIChatSession.sendMessage(prompt);
    // console.log(result.response.text());
    //const resp = result.response.text();

    const resp = JSON.parse(result.response.text());

    const respd = resp.experience[0] + resp.experience[1] + resp.experience[2];

    console.log(respd);
    setValue(respd.replace("[", "").replace("]", ""));
    setLoading(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <label className="text-sm font-semibold">Summery</label>
        <Button
          onClick={GenSummeryFormAI}
          size="sm"
          className="flex my-4 gap-2 bg-slate-200 "
          variant="outline"
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <>
              <Brain className="size-4" /> Generate from AI
            </>
          )}
        </Button>
      </div>
      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditorChange(e);
          }}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnClearFormatting />
            <HtmlButton />
            <Separator />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
};

export default RichTextEditor;
