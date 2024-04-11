import logo from './logo.svg';
import './App.css';
import NVH_funcdemo from './components/NVH_funcdemo';

function App() {
    const users = {
        username: "k22cnt3",
        password: "123456a@",
        fistname: "nguyen van",
        lastname: "huynh"
    }

    function formatname(user) {
        return <h2 > xin chao, { user.fistname } { user.lastname } < /h2>
    }
    return ( <
        div className = "App" >
        <
        p > fullname: { users.fistname } { users.lastname } < /p> { formatname(users) } <
        NVH_Funcdemo / >
        <
        NVH_Funcdemo username = "NVH"
        fullname = "nguyen van huynh"
        age = "45" / >
        <
        /div>
    );
}

export default App;