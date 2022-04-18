import Todo from "./components/Todo";

function App() {
    return (
        <div>
            <h1>My Todos</h1>
            <Todo title="First Todo" id={1} />
            <Todo title="Second Todo" id={2} />
            <Todo title="Third Todo" id={3} />
        </div>
    );
}

export default App;
