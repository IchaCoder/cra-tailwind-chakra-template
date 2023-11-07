import { Avatar, Box, Text, chakra } from "@chakra-ui/react";
import React from "react";
import Nav from "../components/nav/nav";
import Sidebar from "../components/sidebar/sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
	return (
		<Box display={"flex"}>
			<div>
				<chakra.div minW={{ base: 0, md: "300px" }} h="100vh"></chakra.div>
				<Sidebar />
			</div>
			<Box flex={1} overflow={"scroll"}>
				<chakra.nav>
					<Nav />
				</chakra.nav>
				<Outlet />
			</Box>
		</Box>
	);
};

export default Home;
