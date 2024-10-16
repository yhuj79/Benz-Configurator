import { useRef } from "react";
import { useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import { isMobile } from "react-device-detect";

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
  useToast,
} from "@chakra-ui/react";

import Table from "./Table";
import PreviewList from "./PreviewList";

import Logo from "../../assets/main/logo.webp";

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

// Configuration Page 차량 요약 내역 Modal 컴포넌트
function Modal({ totalPrice }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const options = useSelector((state) => state.options);
  const printRef = useRef();
  const toast = useToast();

  // PC가 아닌 환경에서 프린트 버튼 클릭 시 Toast 띄우기
  const handleMobilePrintClick = () => {
    toast({
      title: "Print Unavailable",
      description: "Printing is only available on desktop devices.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

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
        <ModalContent maxW={isMobile ? "90%" : "65%"}>
          <ModalHeader>Your Configuration</ModalHeader>
          <ModalCloseButton />
          <ModalBody ref={printRef}>
            <div className="flex items-center mt-2 mb-4">
              <img
                className="brightness-150 print:brightness-100 w-10 h-10"
                alt="Logo"
                src={Logo}
              />
              <h1 className="ml-2 font-bold text-head-line text-sm md:text-xl print:text-black">
                {options.fullName}
              </h1>
            </div>
            <Table options={options} />
            <div className="text-right mx-2 mt-4 mb-2">
              <p className="text-desc text-sm print:text-black">
                Drive Away Price*
              </p>
              <p className="font-bold text-head-line text-lg md:text-2xl print:text-black">
                {totalPrice.toLocaleString()} KRW
              </p>
            </div>
            <PreviewList options={options} />
          </ModalBody>
          <ModalFooter className="mt-[-8px]">
            <button
              onClick={onClose}
              className="inline-block border-2 border-gray-500 bg-gray-500 md:hover:bg-gray-600 shadow-lg text-shadow-sm mx-0 mb-2 px-4 py-2 rounded-md font-semibold text-head-line text-sm transition duration-300"
            >
              Close
            </button>
            {isMobile ? (
              <button
                onClick={handleMobilePrintClick}
                className="inline-block border-2 bg-blue-600 md:hover:bg-blue-800 shadow-lg text-shadow-sm mr-0 md:mr-2 mb-2 ml-4 px-4 py-2 border-blue-600 rounded-md font-semibold text-head-line text-sm transition duration-300"
              >
                Print
              </button>
            ) : (
              <ReactToPrint
                trigger={() => (
                  <button className="inline-block border-2 bg-blue-600 md:hover:bg-blue-800 shadow-lg text-shadow-sm mr-0 md:mr-2 mb-2 ml-4 px-4 py-2 border-blue-600 rounded-md font-semibold text-head-line text-sm transition duration-300">
                    Print
                  </button>
                )}
                content={() => printRef.current}
              />
            )}
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </ChakraProvider>
  );
}

export default Modal;
