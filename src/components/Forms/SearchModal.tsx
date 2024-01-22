import {
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { setSearchParams } from "../../redux/search-Slice";

const SearchModal = ({ isOpen, onClose }: any) => {
  const { theme } = useAppSelector((state) => state.slice);
  const value = useAppSelector((state) => state.search.searchParams);
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const submit = (e: any) => {
    e.preventDefault();
    nav("/search/" + value);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        style={{
          backgroundColor: theme === "dark" ? "#0f0f0f" : "#fff",
          color: theme === "dark" ? "#fff" : "#000",
        }}
      >
        <ModalCloseButton />
        <ModalBody style={{ marginTop: "2rem" }}>
          <form onSubmit={submit}>
            <Input
              onChange={(e) => dispatch(setSearchParams(e.target.value))}
              type="text"
              placeholder="Поиск"
            />
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
