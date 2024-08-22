import React from "react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const update = ({
  setScoreValue,
  scores
}) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-blue-500 text-white ml-5">Update</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Update Scores</DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription> */}
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <Label htmlFor="rank" className="text-left">
                Update your <b>rank</b>
              </Label>
              <Input
                id="rank"
                className="col-span-1 border-blue-500"
                name="rank"
                value={scores.rank}
                type="number"
                onChange={(e) => setScoreValue("rank", e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="currentScore" className="text-left">
                Update your <b>percentile</b> 
              </Label>
              <Input
                id="currentScore"
                className="col-span-1 border-blue-500"
                name="percentile"
                max={100}
                min={0}
                type="number"
                value={scores.percentile}
                onChange={(e) => setScoreValue("percentile", e.target.value)}
              />
            </div><div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="currentScore" className="text-left">
                Update your your <b>current score (out of 15)</b> 
              </Label>
              <Input
                id="currentScore"
                className="col-span-1 border-blue-500"
                name="currentScore"
                value={scores.currentScore}
                type="number"
                max={15}
                min={0}
                onChange={(e) => setScoreValue("currentScore", e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-blue-500 text-white">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default update;
