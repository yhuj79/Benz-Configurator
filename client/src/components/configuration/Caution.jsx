import { isMobile } from "react-device-detect";

import { InfoSharp } from "@mui/icons-material";
import {
  ChakraProvider,
  extendTheme,
  useDisclosure,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
} from "@chakra-ui/react";

// Chakra UI Modal 설정
const theme = extendTheme({
  components: {
    Modal: {
      baseStyle: {
        dialog: {
          bg: "#2F2F2F",
          color: "#F8F8F7",
        },
      },
    },
  },
});

// Configuration Page 주의 사항 컴포넌트
function Caution() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <div className="top-0 right-0 z-30 absolute">
        <InfoSharp
          onClick={onOpen}
          className="bg-black-gray m-3 rounded-full text-blue-400 hover:text-blue-300 cursor-pointer"
          style={{
            fontSize: 30,
            transition: "color 0.3s ease",
          }}
        />
        <ChakraModal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
          <ModalOverlay />
          <ModalContent maxW={isMobile ? "90%" : null}>
            <ModalHeader>Configurator Caution</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                Configurator's image file is accessed through GitHubusercontent.
                Because the cache lifetime is set to 5 minutes, image loading in
                the configurator may become slow over time. We recommend that
                you reconnect to the site after using it for more than 5
                minutes.
                <br />
                <br />
                This site is a project for practicing web development. Product
                Image All rights reserved Mercedes-Benz. Information specified
                on this site may differ from actual information. If you want to
                find real information, visit the Mercedes Benz global site.
                <br />
                <br />
              </Box>
            </ModalBody>
          </ModalContent>
        </ChakraModal>
      </div>
    </ChakraProvider>
  );
}

export default Caution;
