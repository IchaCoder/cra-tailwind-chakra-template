import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
} from "@chakra-ui/react";

const MobileDrawer = ({ isOpen, onClose }) => {
	return (
		<Drawer isOpen={isOpen} placement="left" size={"md"} onClose={onClose}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerBody>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
					temporibus velit adipisci. Neque id, expedita consectetur
					voluptatum animi facilis ipsa earum voluptas culpa tempore! Porro
					unde quae deleniti neque necessitatibus? Officiis magni enim ad
					vitae libero unde corrupti molestiae, a obcaecati, minus delectus
					aperiam eveniet dolorem id quas labore sapiente quae! Possimus
					consequuntur a commodi beatae minima magnam ducimus aperiam!
					Quibusdam totam nesciunt, aspernatur ipsam rerum eum optio quas
					magnam corrupti vitae libero necessitatibus quasi perferendis
					veniam excepturi fuga eveniet asperiores repudiandae, iure
					corporis veritatis facilis, fugit earum obcaecati. Alias.
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};

export default MobileDrawer;
