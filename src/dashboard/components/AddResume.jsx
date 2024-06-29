import { PlusSquare } from "lucide-react";
import { Tilt } from "react-tilt";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState();

  const onCreate = () => {
    const uuid = uuidv4();
    console.log(resumeTitle, uuid);
    setOpenDialog(false);
  };
  return (
    <>
      <div>
        <Tilt options={{ max: 55, scale: 1, speed: 450 }}>
          <div
            onClick={() => setOpenDialog(true)}
            className="flex items-center hover:scale-105 duration-300 hover:border-dashed hover:shadow-lg hover:shadow-neutral-400 cursor-pointer justify-center py-24 mt-10 border px-14 rounded-2xl bg-slate-200 h-[280px]"
          >
            <PlusSquare />
          </div>
        </Tilt>

        <Dialog open={openDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Resume</DialogTitle>
              <DialogDescription>
                <p>Add Title For Resume</p>
                <Input
                  onChange={(e) => setResumeTitle(e.target.value)}
                  className="mt-2 border-black focus:border-none"
                  placeholder="Ex.Frontend Resume"
                />
              </DialogDescription>
              <div className="flex justify-end gap-5 p-2">
                <Button onClick={() => setOpenDialog(false)} variant="ghost">
                  Cancel
                </Button>
                <Button disabled={!resumeTitle} onClick={() => onCreate()}>
                  Create
                </Button>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default AddResume;
