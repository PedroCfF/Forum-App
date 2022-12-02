import DefaultContainer from "./Components/DefaultContainer";
import Post from "./Components/Post";
import { useParams } from "react-router-dom";
const ThreadView = (props) => {
  const params = useParams();
  const threadId = params.threadId;

  return (
    <DefaultContainer>
      <Post threadId={threadId}></Post>
    </DefaultContainer>
  );
};

export default ThreadView;
