import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ViewAthlete from "./pages/view-athlete";
import AddAthlete from "./pages/add-athlete";
import Activities from "./pages/activities";
import Login from "./pages/login";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />}>
					<Route index element={<ViewAthlete />} />
					<Route path="add" element={<AddAthlete />} />
					<Route path="activities" element={<Activities />} />
				</Route>
				<Route exact path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
