import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const AddTeamMember = () => {
  const [memberName, setMemberName] = useState("");
  const [memberPosition, setMemberPosition] = useState("");
  const [memberProfile, setMemberProfile] = useState(null);
  const [memberFacebookLink, setMemberFacebookLink] = useState("");
  const [memberLinkedinLink, setMemberLinkedinLink] = useState("");
  const [memberGithubLink, setMemberGithubLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      memberName,
      memberPosition,
      memberProfile,
      memberFacebookLink,
      memberLinkedinLink,
      memberGithubLink,
    });
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="space-y-5 w-full lg:w-[70%] mb-10"
      >
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="memberName">Team Member Name</Label>
          <Input
            id="memberName"
            value={memberName}
            onChange={(e) => setMemberName(e.target.value)}
            placeholder="Member Name"
          />
        </div>

        {/* Position */}
        <div className="space-y-2">
          <Label htmlFor="memberPosition">Team Member Position</Label>
          <Input
            id="memberPosition"
            value={memberPosition}
            onChange={(e) => setMemberPosition(e.target.value)}
            placeholder="Member Position"
          />
        </div>

        {/* Profile Picture */}
        <div className="space-y-2">
          <Label htmlFor="memberProfile">Team Member Profile</Label>
          <Input
            id="memberProfile"
            type="file"
            onChange={(e) => setMemberProfile(e.target.files[0])}
          />
        </div>

        {/* Social Links */}
        <div className="block md:flex items-center gap-2 space-y-5 md:space-y-0">
          <div className="space-y-2 w-full">
            <Label htmlFor="facebook">Facebook Profile Link</Label>
            <Input
              id="facebook"
              value={memberFacebookLink}
              onChange={(e) => setMemberFacebookLink(e.target.value)}
              placeholder="Facebook Link"
            />
          </div>
          <div className="space-y-2 w-full">
            <Label htmlFor="linkedin">LinkedIn Profile Link</Label>
            <Input
              id="linkedin"
              value={memberLinkedinLink}
              onChange={(e) => setMemberLinkedinLink(e.target.value)}
              placeholder="LinkedIn Link"
            />
          </div>
          <div className="space-y-2 w-full">
            <Label htmlFor="github">GitHub Profile Link</Label>
            <Input
              id="github"
              value={memberGithubLink}
              onChange={(e) => setMemberGithubLink(e.target.value)}
              placeholder="GitHub Link"
            />
          </div>
        </div>

        {/* Submit */}
        <Button type="submit">Upload Team Member</Button>
      </form>
    </section>
  );
};

export default AddTeamMember;
