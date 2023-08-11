import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h3>Task Manager</h3>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/form">Create Task</NavLink>
            </nav>
        </header>
    )
}