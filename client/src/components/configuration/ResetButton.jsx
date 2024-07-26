import { useDispatch } from "react-redux";

import {
  ChakraProvider,
  useDisclosure,
  extendTheme,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { setInitialOptions } from "../../features/optionsSlice";

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

// Configuration Page SideBar 하단 리셋 컴포넌트
function ResetButton({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const handleReset = (data) => {
    dispatch(setInitialOptions(data));
    onClose();
  };

  return (
    <ChakraProvider theme={theme}>
      <div className="mx-5 mt-10 mb-6">
        <button
          onClick={onOpen}
          className="inline-block border-2 bg-blue-600 md:hover:bg-blue-800 shadow-lg text-shadow-sm px-4 py-2 border-blue-600 rounded-md w-full font-semibold text-head-line text-sm transition duration-300"
        >
          Reset All Options
        </button>
      </div>
      <ChakraModal isOpen={isOpen} onClose={onClose} size={"sm"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reset All Options</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Are you sure you want to reset?</p>
          </ModalBody>
          <ModalFooter>
            <button
              onClick={onClose}
              className="inline-block border-2 border-gray-500 bg-gray-500 md:hover:bg-gray-600 shadow-lg text-shadow-sm mx-0 mb-2 px-4 py-2 rounded-md font-semibold text-head-line text-sm transition duration-300"
            >
              Close
            </button>
            <button
              onClick={() => handleReset(data)}
              className="inline-block border-2 bg-blue-600 md:hover:bg-blue-800 shadow-lg text-shadow-sm mx-2 mb-2 px-4 py-2 border-blue-600 rounded-md font-semibold text-head-line text-sm transition duration-300"
            >
              Reset
            </button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </ChakraProvider>
  );
}

export default ResetButton;
