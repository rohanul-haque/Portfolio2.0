import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AppContext } from "@/contexts/AppContext";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";

const AddProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectTags, setProjectTags] = useState([]);
  const [projectImage, setProjectImage] = useState(null);
  const [projectSourceCode, setProjectSourceCode] = useState("");
  const [projectLiveLink, setProjectLiveLink] = useState("");
  const [loading, setLoading] = useState(false);

  const { backendUrl } = useContext(AppContext);

  const handleTagsChange = (e) => {
    const value = e.target.value.split(",").map((tag) => tag.trim());
    setProjectTags(value);
  };

  const formHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const formData = new FormData();

      formData.append("title", projectName);
      formData.append("description", projectDescription);

      projectTags.forEach((tag) => {
        formData.append("tags", tag);
      });

      if (projectImage) {
        formData.append("image", projectImage);
      }

      formData.append("sourceCode", projectSourceCode);
      formData.append("liveLink", projectLiveLink);

      const { data } = await axios.post(`${backendUrl}/project/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          token: localStorage.getItem("token"),
        },
      });

      if (data.success) {
        toast.success(data.message);
        setProjectName("");
        setProjectDescription("");
        setProjectTags([]);
        setProjectImage(null);
        setProjectSourceCode("");
        setProjectLiveLink("");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <form onSubmit={formHandler} className="w-full lg:w-1/2 space-y-5">
        <div className="space-y-2">
          <Label>Project Name</Label>
          <Input
            onChange={(e) => setProjectName(e.target.value)}
            value={projectName}
            placeholder="Enter Project Name"
          />
        </div>

        <div className="space-y-2">
          <Label>Project Description</Label>
          <Textarea
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            placeholder="Enter Project Description"
          />
        </div>

        <div className="space-y-2">
          <Label>Project Tags</Label>
          <Input
            placeholder="Project Tags (comma separated)"
            onChange={handleTagsChange}
            value={projectTags.join(", ")}
          />
        </div>

        <div className="space-y-2">
          <Label>Project Image</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setProjectImage(e.target.files[0])}
          />
        </div>

        <div className="block md:flex items-center gap-3 space-y-3 md:space-y-0">
          <div className="flex-1 space-y-2">
            <Label>Project Source Code</Label>
            <Input
              value={projectSourceCode}
              onChange={(e) => setProjectSourceCode(e.target.value)}
              placeholder="Project Source Code Link"
            />
          </div>
          <div className="flex-1">
            <div className="space-y-2">
              <Label>Project Live Link</Label>
              <Input
                value={projectLiveLink}
                onChange={(e) => setProjectLiveLink(e.target.value)}
                placeholder="Project Live Link"
              />
            </div>
          </div>
        </div>

        <Button disabled={loading} type="submit">
          {loading ? (
            <div className="flex items-center gap-2">
              <LoaderCircle className="animate-spin" />{" "}
              <span>Project Uploading...</span>
            </div>
          ) : (
            "Upload Project"
          )}
        </Button>
      </form>
    </section>
  );
};

export default AddProject;
