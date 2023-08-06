import { Header } from "./Components/Header";
import './global.css';
import styles from "./App.module.css"
import { Sidebar } from "./Components/Sidebar";
import { Post } from "./Components/Post";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post
            author="Rebeca Caroba"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime est numquam, mollitia voluptates tempora ea ipsum recusandae, laudantium alias accusantium dolorem. Architecto dolor tenetur facere possimus quasi suscipit voluptates similique!"
          />
          <Post
            author="Bill Gates"
            content="O dia tá lindo"
          />
        </main>
      </div>
    </div>
  )
}


