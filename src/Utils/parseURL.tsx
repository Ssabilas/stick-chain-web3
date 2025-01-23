import CryptoJS from "crypto-js";

// Kunci rahasia untuk enkripsi (sebaiknya simpan di env file)
const SECRET_KEY = `${import.meta.env.REACT_APP_URL_KEY}`;

// Fungsi untuk mengenkripsi data
export const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
};

// Fungsi untuk mendekripsi data terenkripsi
export const decryptData = (cipherText: string): string => {
  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error("Decryption failed:", error);
    return "";
  }
};
