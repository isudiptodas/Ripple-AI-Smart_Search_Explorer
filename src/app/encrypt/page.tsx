'use client'

import Navbar from "@/components/Navbar"
import { decrypt, encrypt } from "@/data/encryptionEmoji"
import axios from "axios"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";

function page() {

  const pathname = usePathname();
  const [option, setOption] = useState('caesar');
  const [encryptMessage, setEncryptMessage] = useState('');
  const [encryptSecretKey, setEncryptSecretKey] = useState('');
  const [decryptMessage, setDecryptMessage] = useState('');
  const [decryptSecretKey, setDecryptSecretKey] = useState('');

  const [encryptShiftNumber, setEncryptShiftNumber] = useState<number | null>(null);
  const [decryptShiftNumber, setDecryptShiftNumber] = useState<number | null>(null);
  const [caesarOutput, setCaesarOutput] = useState('');
  const [outputEmoji, setOutputEmoji] = useState('');
  const [outputMessage, setOutputMessage] = useState('');

  const emojiEncrypt = async () => {
    if (option === 'emoji' && !encryptMessage) {
      toast.error("Enter message");
      return;
    }

    if (option === 'emoji' && !encryptSecretKey) {
      toast.error("Enter secret key");
      return;
    }

    if (encryptSecretKey.length < 6) {
      toast.error("Secrey key length : minimum 6");
      return;
    }

    setEncryptMessage(encryptMessage.trim());

    const id = toast.loading("Encrypting ...");

    try {
      const res = await axios.post(`/api/encrypt`, {
        message: encryptMessage, key: encryptSecretKey, type: 'emoji'
      });

      const cipher = res.data?.encrypted;
      const cipherChar = Array.from(cipher);

      console.log(cipher);

      let temp = '';

      cipherChar.forEach((char) => {
        const found = encrypt.find((val) => val.key === char);
        if (found) {
          temp += found.value;
        }
      });

      setOutputEmoji(temp);
    } catch (err) {
      console.log(err);
    }
    finally {
      toast.dismiss(id);
      setEncryptMessage('');
      setEncryptSecretKey('');
    }
  }

  const emojiDecrypt = async () => {
    if (!decryptMessage || !decryptSecretKey) {
      toast.error("Both emoji and secret key needed");
      return;
    }

    const id = toast.loading("Decrypting ...");
    let string = '';

    try {

      const emojiArray = Array.from(decryptMessage);

      emojiArray.forEach(emoji => {
        const found = decrypt.find(val => val.key === emoji);
        if (!found) console.log(`Emoji not found in mapping: ${emoji}`);
        else string += found.value;
      });

      console.log(string);

      const res = await axios.post('/api/decrypt', {
        message: string.toString(), key: decryptSecretKey.trim(), type: 'emoji'
      });

      const decrypted = res.data?.decrypted;

      if (decrypted) {
        setOutputMessage(decrypted);
      }
      else {
        toast.error("Invalid emoji or secret key");
      }

    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
    finally {
      toast.dismiss(id);
    }
  }

  const caesarEncrypt = async () => {
    if (option === 'caesar' && !encryptMessage) {
      toast.error("Enter message");
      return;
    }
    if (option === 'caesar' && !encryptSecretKey) {
      toast.error("Enter secret key");
      return;
    }
    if (option === 'caesar' && !encryptShiftNumber) {
      toast.error("Enter shift position");
      return;
    }
    if ((encryptShiftNumber && encryptShiftNumber <= 0) || (encryptShiftNumber && encryptShiftNumber > 8)) {
      toast.error("Shift is maximum 8 and minimum 1");
      return;
    }
    if (encryptSecretKey.length < 6) {
      toast.error("Secrey key length : minimum 6");
      return;
    }

    setEncryptMessage(encryptMessage.trim());
    setEncryptSecretKey(encryptSecretKey.trim());

    const id = toast.loading("Encrypting ...");

    try {
      const res = await axios.post(`/api/encrypt`, {
        message: encryptMessage, key: encryptSecretKey, type: 'caesar'
      });

      const encrypted = res.data?.encrypted;

      if (encrypted) {
        toast.dismiss(id);
        const temp = Array.from(encrypted);

        let output = '';
        for (let i = 0; i < temp.length; i++) {
          const char: string = temp[i] as string;
          const code = char.charCodeAt(0);
          const shift = code + Number(encryptShiftNumber);
          const newChar = String.fromCharCode(shift);
          output += newChar;
        }
        setCaesarOutput(output);
      }

    } catch (err) {
      console.log(err);
      toast.dismiss(id);
      toast.error("Something went wrong");
    }
    finally {
      toast.dismiss(id);
      setEncryptMessage('');
      setEncryptSecretKey('');
      setEncryptShiftNumber(null);
    }
  }

  const caesarDecrypt = async () => {
    if (option === 'caesar' && !decryptMessage) {
      toast.error("Enter message");
      return;
    }
    if (option === 'caesar' && !decryptSecretKey) {
      toast.error("Enter secret key");
      return;
    }
    if (option === 'caesar' && !decryptShiftNumber) {
      toast.error("Enter shift position");
      return;
    }

    setDecryptSecretKey(decryptSecretKey.trim());

    const temp = Array.from(decryptMessage);
    let output = '';

    for (let i = 0; i < temp.length; i++) {
      const char: string = temp[i] as string;
      const code = char.charCodeAt(0);
      const shift = code - Number(decryptShiftNumber);
      const newChar = String.fromCharCode(shift);
      output += newChar;
    }

    const id = toast.loading("Decrypting ...");
    //console.log(output);
    try {
      const res = await axios.post(`/api/decrypt`, {
        message: output, key: decryptSecretKey, type: 'caesar'
      });

      const decrypted = res.data?.decrypted;
      //console.log(decrypted);
      setOutputMessage(decrypted);

    } catch (err) {
      console.log(err);
      toast.dismiss(id);
      toast.error("Something went wrong");
    }
    finally {
      toast.dismiss(id);
      setDecryptMessage('');
      setDecryptSecretKey('');
      setDecryptShiftNumber(null);
    }
  }

  const copyEmoji = () => {
    navigator.clipboard.writeText(outputEmoji);
    toast.success("Emoji copied");
  }

  const copyCaesar = () => {
    navigator.clipboard.writeText(caesarOutput);
    toast.success("Caesar copied");
  }

  return (
    <>
      <div className={`w-full h-auto flex flex-col pb-16 justify-start items-center relative overflow-hidden`}>
        <Navbar pathname={pathname} />

        <div className={`w-full h-auto mt-20 py-5 md:pt-8 lg:pt-12 px-10`}>
          <h1 className={`w-full text-center font-Montserrat text-lg sm:text-xl`}>Welcome to </h1>
          <h1 className={`w-full text-center font-Montserrat text-3xl md:text-4xl lg:text-5xl font-semibold`}>Message Encryption</h1>

          <p className={`w-full mt-3 lg:mt-6 text-[10px] sm:text-[12px] md:text-sm lg:text-[16px] font-Montserrat text-center italic`}>Encrypt and decrypt your secret messages for secret communication with our 3 layered secured encryption</p>
        </div>

        <div className={`w-[70%] overflow-x-auto scroll-bar mt-3 sm:w-auto px-2 py-2 bg-gray-200 rounded-lg h-auto flex justify-start sm:justify-center items-center gap-3`}>
          <p onClick={() => {
            setOption('emoji');
            setEncryptMessage('');
            setEncryptShiftNumber(0);
            setEncryptSecretKey('');
            setDecryptMessage('');
            setDecryptShiftNumber(0);
            setDecryptSecretKey('');
            setOutputMessage('');
            setOutputEmoji('');
          }} className={`w-auto shrink-0 py-3 px-4 rounded-lg cursor-pointer text-center ${option === 'emoji' ? "bg-black text-white font-semibold" : "bg-transparent text-black"} active:scale-95 duration-100 ease-in-out font-Montserrat text-sm`}>Emoji</p>
          <p onClick={() => {
            setOption('caesar');
            setEncryptMessage('');
            setEncryptShiftNumber(0);
            setEncryptSecretKey('');
            setDecryptMessage('');
            setDecryptShiftNumber(0);
            setDecryptSecretKey('');
            setOutputMessage('');
            setOutputEmoji('');
          }} className={`w-auto shrink-0 py-3 px-4 rounded-lg cursor-pointer text-center ${option === 'caesar' ? "bg-black text-white font-semibold" : "bg-transparent text-black"} active:scale-95 duration-100 ease-in-out font-Montserrat text-sm`}>Caesar Cipher</p>
          <p onClick={() => {
            setOption('ascii');
            setEncryptMessage('');
            setEncryptShiftNumber(0);
            setEncryptSecretKey('');
            setDecryptMessage('');
            setDecryptShiftNumber(0);
            setDecryptSecretKey('');
            setOutputMessage('');
            setOutputEmoji('');
          }} className={`w-auto shrink-0 py-3 px-4 rounded-lg cursor-pointer text-center ${option === 'ascii' ? "bg-black text-white font-semibold" : "bg-transparent text-black"} active:scale-95 duration-100 ease-in-out font-Montserrat text-sm`}>ASCII Art</p>
        </div>

        {option === 'emoji' && <div className={`w-[85%] mt-3 sm:w-[60%] md:w-[50%] xl:w-[35%] h-auto px-3 py-4 flex flex-col justify-start items-center gap-3`}>
          <h1 className={`w-full text-start font-Montserrat text-xl font-semibold`}>Encrypt</h1>
          <textarea value={encryptMessage} onChange={(e) => setEncryptMessage(e.target.value)} className={`w-full h-32 rounded-lg bg-gray-200 outline-none font-Montserrat text-black px-3 py-3`} placeholder="Enter your message" />
          <input value={encryptSecretKey} onChange={(e) => setEncryptSecretKey(e.target.value)} type="text" placeholder="Enter secret key" className={`w-full py-3 px-3 rounded-lg bg-gray-200 font-Montserrat text-black outline-none`} />
          <p onClick={emojiEncrypt} className={`w-full mt-2 py-2 text-center flex justify-center items-center gap-2 rounded-lg cursor-pointer active:scale-95 duration-100 ease-in-out bg-green-400 hover:bg-green-500 text-white`}>Encrypt <FaLock /></p>

          <div className={`w-full ${outputEmoji ? "block" : "hidden"} bg-black h-auto mt-2 px-3 py-3 rounded-lg text-start relative`}>
            {outputEmoji}
            <span className={`w-auto absolute top-2 rounded-xl right-2 flex justify-center items-center gap-2 px-3 py-2 text-[10px] cursor-pointer bg-white text-black`} onClick={copyEmoji}>Copy <FaCopy /></span>
          </div>

          <h1 className={`w-full mt-5 text-start font-Montserrat text-xl font-semibold`}>Decrypt</h1>
          <textarea value={decryptMessage} onChange={(e) => setDecryptMessage(e.target.value)} className={`w-full h-32 rounded-lg bg-gray-200 outline-none font-Montserrat text-black px-3 py-3`} placeholder="Enter your emojis here" />
          <input value={decryptSecretKey} onChange={(e) => setDecryptSecretKey(e.target.value)} type="text" placeholder="Enter secret key" className={`w-full py-3 px-3 rounded-lg bg-gray-200 font-Montserrat text-black outline-none`} />
          <p onClick={emojiDecrypt} className={`w-full mt-2 py-2 text-center flex justify-center items-center gap-2 rounded-lg cursor-pointer active:scale-95 duration-100 ease-in-out bg-blue-400 hover:bg-blue-500 text-white`}>Decrypt <FaLockOpen /></p>

          <div className={`w-full ${outputMessage ? "block" : "hidden"} overflow-hidden bg-black h-auto mt-2 px-3 py-3 rounded-lg text-start relative`}>
            <p className={`w-full text-start text-white font-Montserrat text-sm`}>{outputMessage}</p>
          </div>
        </div>}

        {option === 'caesar' && <div className={`w-[85%] mt-3 sm:w-[60%] md:w-[50%] xl:w-[35%] h-auto px-3 py-4 flex flex-col justify-start items-center gap-3`}>
          <h1 className={`w-full text-start font-Montserrat text-xl font-semibold`}>Encrypt</h1>
          <textarea value={encryptMessage} onChange={(e) => setEncryptMessage(e.target.value)} className={`w-full h-32 rounded-lg bg-gray-200 outline-none font-Montserrat text-black px-3 py-3`} placeholder="Enter your message" />
          <input value={encryptSecretKey} onChange={(e) => setEncryptSecretKey(e.target.value)} type="text" placeholder="Enter secret key" className={`w-full py-3 px-3 rounded-lg bg-gray-200 font-Montserrat text-black outline-none`} />
          <input value={encryptShiftNumber ? encryptShiftNumber : ''} onChange={(e) => setEncryptShiftNumber(Number(e.target.value))} type="number" placeholder="Enter shift position (max 8)" className={`w-full py-3 px-3 rounded-lg bg-gray-200 font-Montserrat text-black outline-none`} />
          <p onClick={caesarEncrypt} className={`w-full mt-2 py-2 text-center flex justify-center items-center gap-2 rounded-lg cursor-pointer active:scale-95 duration-100 ease-in-out bg-green-400 hover:bg-green-500 text-white`}>Encrypt <FaLock /></p>

          <div className={`w-full ${caesarOutput ? "block" : "hidden"} overflow-hidden bg-black h-auto mt-2 px-3 py-3 rounded-lg text-start relative`}>
            <p className={`w-full text-start text-white font-Montserrat text-sm`}>{caesarOutput}</p>
            <span className={`w-auto absolute top-2 rounded-xl right-2 flex justify-center items-center gap-2 px-3 py-2 text-[10px] cursor-pointer bg-white text-black`} onClick={copyCaesar}>Copy <FaCopy /></span>
          </div>

          <h1 className={`w-full mt-5 text-start font-Montserrat text-xl font-semibold`}>Decrypt</h1>
          <textarea value={decryptMessage} onChange={(e) => setDecryptMessage(e.target.value)} placeholder="Enter your encrypted message" className={`w-full py-3 px-3 h-32 rounded-lg bg-gray-200 font-Montserrat text-black outline-none`} />
          <input value={decryptSecretKey} onChange={(e) => setDecryptSecretKey(e.target.value)} type="text" placeholder="Enter secret key" className={`w-full py-3 px-3 rounded-lg bg-gray-200 font-Montserrat text-black outline-none`} />
          <input value={decryptShiftNumber ? decryptShiftNumber : ''} onChange={(e) => setDecryptShiftNumber(Number(e.target.value))} type="number" placeholder="Enter reverse shift number" className={`w-full py-3 px-3 rounded-lg bg-gray-200 font-Montserrat text-black outline-none`} />
          <p onClick={caesarDecrypt} className={`w-full mt-2 py-2 text-center flex justify-center items-center gap-2 rounded-lg cursor-pointer active:scale-95 duration-100 ease-in-out bg-blue-400 hover:bg-blue-500 text-white`}>Decrypt <FaLockOpen /></p>

          <div className={`w-full ${outputMessage ? "block" : "hidden"} overflow-hidden bg-black h-auto mt-2 px-3 py-3 rounded-lg text-start relative`}>
            <p className={`w-full text-start text-white font-Montserrat text-sm`}>{outputMessage}</p>
          </div>
        </div>}

        {option === 'ascii' && <div className={`w-[85%] sm:w-[60%] md:w-[50%] xl:w-[35%] mt-3 h-auto flex flex-col justify-start items-center`}>
          <h1 className={`w-full mt-10 text-center font-Archivo text-gray-300 text-5xl md:text-6xl font-bold`}>Coming Soon</h1>
        </div>}

      </div>
    </>
  )
}

export default page

