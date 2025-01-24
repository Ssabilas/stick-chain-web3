import CryptoJS from "crypto-js";

// Kunci rahasia untuk enkripsi (gunakan dari env untuk keamanan)
const SECRET_KEY = CryptoJS.enc.Utf8.parse("wazzup1234567890"); // Panjang kunci harus 16 karakter

// Fungsi untuk mengenkripsi data tanpa karakter khusus
export const encryptData = (data: string): string => {
  const encrypted = CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(data),
    SECRET_KEY,
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }
  );

  return encrypted.ciphertext.toString(CryptoJS.enc.Hex); // Mengonversi ke format heksadesimal (hanya angka dan huruf a-f)
};

// Fungsi untuk mendekripsi data terenkripsi
export const decryptData = (cipherText: string): string => {
  try {
    const encryptedHex = CryptoJS.enc.Hex.parse(cipherText);
    const encryptedBase64 = CryptoJS.enc.Base64.stringify(encryptedHex);

    const bytes = CryptoJS.AES.decrypt(encryptedBase64, SECRET_KEY, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });

    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error("Decryption failed:", error);
    return "";
  }
};
