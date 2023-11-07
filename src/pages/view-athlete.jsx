import { Box, Text, chakra } from "@chakra-ui/react";
import ViewAthleteTable from "../components/view-athelete/table";

const ViewAthlete = () => {
	return (
		<chakra.div
			w="full"
			minH={"full"}
			bgColor="red.300"
			bgImage={"/images/bg1.jpeg"}
			backgroundPosition={"center"}
			backgroundSize={"cover"}
			bgRepeat={"no-repeat"}
		>
			<Box px={{ base: 2, md: 4, lg: 6, xl: 10 }} py={10}>
				<Box
					bg="white"
					height="100%"
					minH={"500px"}
					borderRadius={"lg"}
					p={4}
					px={{ base: "2", md: 8 }}
					overflowY={"auto"}
				>
					<Text
						as={"h2"}
						fontSize={{ base: "xl", sm: "2xl" }}
						textAlign={{ base: "center", sm: "left" }}
						fontWeight={"semibold"}
					>
						{" "}
						Athlete Records
					</Text>
					<ViewAthleteTable />
				</Box>
			</Box>
		</chakra.div>
	);
};

export default ViewAthlete;
