<<<<<<< HEAD
import {useStore } from "../store";

function Landing(props) {
    return (
        <>
            <h1>Task Manager</h1>
        </>
    )
}
=======
import { useStore } from '../store';

function Landing() {
  const { title, setGlobalState } = useStore();

  const changeTitle = () => {
    setGlobalState(oldState => {
      return {
        ...oldState,
        title: 'Something else'
      }
    });
  };

  const toggleDarkMode = () => {
    setGlobalState(oldState => {
      return {
        ...oldState,
        darkMode: !oldState.darkMode
      }
    });
  };

  return (
    <>
      <h1>Task Manager</h1>

      <p>{title}</p>

      <button onClick={changeTitle}>Change</button>

      <div>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </div>
    </>
  )
}

export default Landing;
>>>>>>> d2cf8b3660b4055a1a139e6bc72caa5e8a95a75d
