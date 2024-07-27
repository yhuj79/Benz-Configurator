import { isMobile } from "react-device-detect";

import {
  ChakraProvider,
  useDisclosure,
  extendTheme,
  Alert,
  AlertIcon,
  AlertDescription,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { SyncAltSharp } from "@mui/icons-material";

import ModelList from "../common/ModelList";

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

// Configuration Page 차량 변경 컴포넌트
function Change() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <SyncAltSharp
        onClick={onOpen}
        sx={{ fontSize: 26 }}
        className="text-blue-500 hover:text-blue-300 transition duration-300 cursor-pointer"
      />
      <ChakraModal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent maxW={isMobile ? "90%" : "65%"}>
          <ModalHeader>Change Model</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="mb-4">
            <div className="mx-2 mb-2">
              <Alert status="warning" variant="solid">
                <AlertIcon />
                <AlertDescription>
                  Any changes you have made so far will be lost.
                </AlertDescription>
              </Alert>
            </div>
            <ModelList type={"change"} />
          </ModalBody>
        </ModalContent>
      </ChakraModal>
    </ChakraProvider>
  );
}

export default Change;
