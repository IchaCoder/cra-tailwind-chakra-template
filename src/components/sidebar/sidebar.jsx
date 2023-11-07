import {
	Avatar,
	Box,
	Divider,
	HStack,
	Stack,
	StackDivider,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const links = [
	{
		title: "view athlete",
		url: "/",
	},
	{
		title: "add athlete",
		url: "/add",
	},
	{
		title: "activities",
		url: "/activities",
	},
];

const Sidebar = () => {
	return (
		<Box
			bg="brand.blue"
			minW={"300px"}
			h={"100vh"}
			display={{ base: "none", md: "block" }}
			p={"8"}
			color={"white"}
			position={"fixed"}
			top={0}
			left={0}
		>
			<Box width={"max-content"} mx={"auto"}>
				<Avatar size={"2xl"} />
			</Box>
			<Text
				as={"h1"}
				fontWeight={"bold"}
				fontSize={"40px"}
				textAlign={"center"}
			>
				John Doe
			</Text>
			<Text as={"h3"} textAlign={"center"}>
				Admin
			</Text>
			<Box mt={"3rem"}>
				<Stack>
					<Divider />
					<NavLink
						to={`/`}
						className={({ isActive }) =>
							isActive
								? "p-4 text-center block capitalize text-[20px] bg-[rgba(255,255,255,.2)]"
								: "p-4 text-center block capitalize text-[20px]"
						}
					>
						view athlete
					</NavLink>
					<Divider />
					<NavLink
						to={`/add`}
						className={({ isActive }) =>
							isActive
								? "p-4 text-center block capitalize text-[20px] bg-[rgba(255,255,255,.2)]"
								: "p-4 text-center block capitalize text-[20px]"
						}
					>
						add athlete
					</NavLink>
					<Divider />
					<NavLink
						to={`/activities`}
						className={({ isActive }) =>
							isActive
								? "p-4 text-center block capitalize text-[20px] bg-[rgba(255,255,255,.2)]"
								: "p-4 text-center block capitalize text-[20px]"
						}
					>
						activities
					</NavLink>
					<Divider />
				</Stack>
			</Box>
		</Box>
	);
};

export default Sidebar;
