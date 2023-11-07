import {
	Container,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useDisclosure,
} from "@chakra-ui/react";
import { FiEdit2, FiEye, FiMoreVertical } from "react-icons/fi";
import { IoTrashBin } from "react-icons/io5";
import Delete from "./modal/delete";

const TableColumns = [
	{ name: "name" },
	{ name: "index #" },
	{ name: "date of birth" },
	{ name: "year of admission" },
	{ name: "hall of residence" },
	{ name: "discipline" },
	{ name: "medals won" },
	{ name: "option" },
];

const ViewAthleteTable = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Delete isOpen={isOpen} onClose={onClose} />
			<Container maxW={"100%"} overflow={"auto"} mt={8}>
				<Table variant="striped" size="sm">
					<Thead>
						<Tr>
							{TableColumns.map((column, index) => (
								<Th
									key={`column-${index}`}
									textTransform={"capitalize"}
									fontSize="1rem"
									fontWeight={"semibold"}
								>
									{column.name}
								</Th>
							))}
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>
								<Text whiteSpace={"nowrap"}>Emmanuel Kwansah</Text>
							</Td>
							<Td>
								<Text>1997463</Text>
							</Td>
							<Td>
								<Text>09/03/2000</Text>
							</Td>
							<Td>
								<Text>2019</Text>
							</Td>
							<Td>
								<Text>Akuafo Hall</Text>
							</Td>
							<Td>
								<Text>Volley</Text>
							</Td>
							<Td>
								<Text>3</Text>
							</Td>
							<Td>
								<Menu>
									<MenuButton
										as={IconButton}
										aria-label="Options"
										icon={<FiMoreVertical />}
										variant="outline"
									/>
									<MenuList>
										<MenuItem icon={<FiEdit2 />}>Edit</MenuItem>
										<MenuItem icon={<FiEye />}>View More</MenuItem>
										<MenuItem color={"red.400"} icon={<IoTrashBin />}>
											Delete
										</MenuItem>
									</MenuList>
								</Menu>
							</Td>
						</Tr>
						<Tr>
							<Td>
								<Text whiteSpace={"nowrap"}>Emmanuel Kwansah</Text>
							</Td>
							<Td>
								<Text>1997463</Text>
							</Td>
							<Td>
								<Text>09/03/2000</Text>
							</Td>
							<Td>
								<Text>2019</Text>
							</Td>
							<Td>
								<Text>Akuafo Hall</Text>
							</Td>
							<Td>
								<Text>Volley</Text>
							</Td>
							<Td>
								<Text>3</Text>
							</Td>
							<Td>
								<Menu>
									<MenuButton
										as={IconButton}
										aria-label="Options"
										icon={<FiMoreVertical />}
										variant="outline"
									/>
									<MenuList>
										<MenuItem icon={<FiEdit2 />}>Edit</MenuItem>
										<MenuItem icon={<FiEye />}>View More</MenuItem>
										<MenuItem
											color={"red.400"}
											icon={<IoTrashBin />}
											onClick={onOpen}
										>
											Delete
										</MenuItem>
									</MenuList>
								</Menu>
							</Td>
						</Tr>
					</Tbody>
				</Table>
			</Container>
		</>
	);
};

export default ViewAthleteTable;
