import CustomButton from "../CustomButton/CustomButton";
import "./Modal.css";
const Modal = ({ setModalGoster }) => {
  return (
    <div className="modal-wrapper" onClick={() => setModalGoster(false)}>
      <div className="modal">
        <form>
          <label htmlFor="">Adınızı Giriniz</label>
          <input type="text" />
          <label htmlFor="">Soyadınızı Giriniz</label>
          <input type="text" />
          <CustomButton
            onClick={() => setModalGoster(false)}
            buttonTitle={"Kapat"}
            buttonColor={"red"}
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;