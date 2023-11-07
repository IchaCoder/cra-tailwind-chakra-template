import {
	Avatar,
	Box,
	ButtonGroup,
	HStack,
	Icon,
	IconButton,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { FiBell, FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import MobileDrawer from "./mobile-drawer";

const Nav = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	return (
		<>
			<MobileDrawer isOpen={isOpen} onClose={onClose} />
			<Box as="section" p={4}>
				<Box bg="bg.accent.default">
					<HStack justifyContent={"space-between"}>
						<Text
							as="h2"
							fontWeight={700}
							fontSize={{ base: "16px", sm: "24px", lg: "28px" }}
						>
							Welcome!!
						</Text>

						<InputGroup
							maxW={"sm"}
							display={{ base: "none", md: "inline-flex" }}
							borderRadius={8}
							border={"1px solid #B08B57"}
						>
							<InputRightElement>
								<Icon
									as={FiSearch}
									color="fg.accent.muted"
									fontSize="lg"
								/>
							</InputRightElement>
							<Input
								placeholder="Search Athlete"
								variant="filled.accent"
							/>
						</InputGroup>
						<Image
							src="/images/ugsd.png"
							alt="university of ghana sports directorate"
							width={"150px"}
						/>
						<HStack display={{ base: "flex", md: "none" }} gap={2}>
							<Icon
								as={FiSearch}
								color="fg.accent.muted"
								fontSize="2xl"
							/>
							<Icon
								as={HiOutlineMenuAlt1}
								color="fg.accent.muted"
								fontSize="2xl"
								onClick={onOpen}
								cursor={"pointer"}
							/>
						</HStack>
					</HStack>
				</Box>
			</Box>
		</>
	);
};

export default Nav;
