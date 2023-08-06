import {Post} from "./post";
import { Header } from "./Components/Header";
import './styles.css';

export function App() {
  return (
    <div>
      <Header/>
      <h1>Hello world</h1>
      <Post 
      author="Rebeca Caroba" 
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime est numquam, mollitia voluptates tempora ea ipsum recusandae, laudantium alias accusantium dolorem. Architecto dolor tenetur facere possimus quasi suscipit voluptates similique!"
      />
      <Post
      author="Bill Gates"
      content="O dia tá lindo"
      />

    </div>
  )
}


