import { useSelector } from "react-redux";
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

import Table from "./Table";
import Preview from "./Preview";

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

function Modal({ totalPrice }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const options = useSelector((state) => state.options);

  return (
    <ChakraProvider theme={theme}>
      <button
        onClick={onOpen}
        className="inline-block border-2 bg-blue-600 md:hover:bg-blue-800 shadow-lg text-shadow-sm px-4 py-2 border-blue-600 rounded-md font-semibold text-head-line text-sm transition duration-300"
      >
        Summary
      </button>
      <ChakraModal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent maxW="80%">
          <ModalHeader>Your Configuration</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table options={options} />
            <div className="text-right mx-4 mt-4 mb-2">
              <p className="text-desc text-xs">Drive Away Price*</p>
              <p className="font-bold text-head-line text-lg md:text-xl">
                {totalPrice.toLocaleString()} KRW
              </p>
            </div>
            <Preview options={options} />
          </ModalBody>
          <ModalFooter>
            <button
              onClick={onClose}
              className="inline-block border-2 border-gray-500 bg-gray-500 md:hover:bg-gray-600 shadow-lg text-shadow-sm m-2 px-4 py-2 rounded-md font-semibold text-head-line text-sm transition duration-300"
            >
              Close
            </button>
            <button className="inline-block border-2 bg-blue-600 md:hover:bg-blue-800 shadow-lg text-shadow-sm m-2 px-4 py-2 border-blue-600 rounded-md font-semibold text-head-line text-sm transition duration-300">
              Print
            </button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </ChakraProvider>
  );
}

export default Modal;
