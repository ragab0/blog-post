import PostManipulate from "@/components/PostManipulate";
import { useParams } from "react-router-dom";

export default function EditPostPage() {
  const { id } = useParams();
  return <PostManipulate isEditingId={id} />;
}
