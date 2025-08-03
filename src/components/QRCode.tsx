import qrCodeImg from "@/assets/qrcode.svg";

const QRCode = () => {
  return (
    <div className="inline-block bg-white p-4 rounded-lg">
      <img src={qrCodeImg} alt="QR Code" className="w-[200px] h-[200px]" />
    </div>
  );
};

export default QRCode;