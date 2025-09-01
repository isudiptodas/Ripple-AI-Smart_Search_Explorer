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
  const [option, setOption] = useState('emoji');
  const [encryptMessage, setEncryptMessage] = useState('');
  const [encryptSecretKey, setEncryptSecretKey] = useState('');
  const [decryptMessage, setDecryptMessage] = useState('');
  const [decryptSecretKey, setDecryptSecretKey] = useState('');

  const [encryptIdentifier, setEncryptIdentifier] = useState('');
  const [decryptIdentifier, setDecryptIdentifier] = useState('');

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

    setEncryptMessage(encryptMessage.trim());

    const id = toast.loading("Encrypting ...");

    try {
      const res = await axios.post(`/api/encrypt`, {
        message: encryptMessage, key: encryptSecretKey, type: 'emoji'
      });

      const cipher = res.data?.encrypted;
      const cipherChar = Array.from(cipher);

      //console.log(cipher);
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
      //console.log(string);

      const res = await axios.post('/api/decrypt', {
        message: string.toString(), key: decryptSecretKey.trim(), type: 'emoji'
      });

      const decrypted = res.data?.decrypted;

      if(decrypted){
        setOutputMessage(decrypted);
      }
      else{
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

  const identifierEncrypt = async () => {

  }

  const identifierDecrypt = async () => {

  }

  const copyEmoji = () => {
    navigator.clipboard.writeText(outputEmoji);
    toast.success("Emoji copied");
  }

  return (
    <>
      <div className={`w-full h-auto flex flex-col pb-16 justify-start items-center relative overflow-hidden`}>
        <Navbar pathname={pathname} />

        <div className={`w-full h-auto mt-20 py-5 md:pt-8 lg:pt-12 px-10`}>
          <h1 className={`w-full text-center font-Montserrat text-lg sm:text-xl`}>Welcome to </h1>
          <h1 className={`w-full text-center font-Montserrat text-3xl md:text-4xl lg:text-5xl font-semibold`}>Text Encryption</h1>

          <p className={`w-full mt-3 lg:mt-6 text-[10px] sm:text-[12px] md:text-sm lg:text-[16px] font-Montserrat text-center italic`}>Encrypt and decrypt your secret messages for secret communication with our 3 layered secured encryption</p>
        </div>

        <div className={`w-[70%] mt-3 sm:w-[60%] md:w-[40%] xl:w-[35%] px-2 py-2 bg-gray-200 rounded-lg h-auto flex justify-center items-center gap-3`}>
          <p onClick={() => {
            setOption('emoji');
            setEncryptMessage('');
            setEncryptIdentifier('');
            setEncryptSecretKey('');
            setDecryptMessage('');
            setDecryptIdentifier('');
            setDecryptSecretKey('');
          }} className={`w-full py-3 px-4 rounded-lg cursor-pointer text-center ${option === 'emoji' ? "bg-black text-white font-semibold" : "bg-transparent text-black"} active:scale-95 duration-100 ease-in-out font-Montserrat text-sm`}>Emoji</p>
          <p onClick={() => {
            setOption('identifier');
            setEncryptMessage('');
            setEncryptIdentifier('');
            setEncryptSecretKey('');
            setDecryptMessage('');
            setDecryptIdentifier('');
            setDecryptSecretKey('');
          }} className={`w-full py-3 px-4 rounded-lg cursor-pointer text-center ${option === 'identifier' ? "bg-black text-white font-semibold" : "bg-transparent text-black"} active:scale-95 duration-100 ease-in-out font-Montserrat text-sm`}>Identifier</p>
        </div>

        {option === 'emoji' && <div className={`w-[80%] mt-3 sm:w-[60%] md:w-[40%] xl:w-[35%] h-auto px-3 py-4 flex flex-col justify-start items-center gap-3`}>
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

          <div className={`w-full ${outputMessage ? "block" : "hidden"} bg-black h-auto mt-2 px-3 py-3 rounded-lg text-start relative`}>
            <p className={`w-full text-start text-white font-Montserrat text-sm`}>{outputMessage}</p>
            <span className={`w-auto absolute top-2 rounded-xl right-2 flex justify-center items-center gap-2 px-3 py-2 text-[10px] cursor-pointer bg-white text-black`} onClick={copyEmoji}>Copy <FaCopy /></span>
          </div>
        </div>}

        {option === 'identifier' && <div className={`w-[80%] mt-3 sm:w-[60%] md:w-[40%] xl:w-[35%] h-auto px-3 py-4 flex flex-col justify-start items-center gap-3`}>
          <h1 className={`w-full text-start font-Montserrat text-xl font-semibold`}>Encrypt</h1>
          <textarea value={encryptMessage} onChange={(e) => setEncryptMessage(e.target.value)} className={`w-full h-32 rounded-lg bg-gray-200 outline-none font-Montserrat text-black px-3 py-3`} placeholder="Enter your message" />
          <input value={encryptSecretKey} onChange={(e) => setEncryptSecretKey(e.target.value)} type="text" placeholder="Enter secret key" className={`w-full py-3 px-3 rounded-lg bg-gray-200 font-Montserrat text-black outline-none`} />
          <input value={encryptIdentifier} onChange={(e) => setEncryptIdentifier(e.target.value)} type="text" placeholder="Enter your unique identifier" className={`w-full py-3 px-3 rounded-lg bg-gray-200 font-Montserrat text-black outline-none`} />
          <p onClick={identifierEncrypt} className={`w-full mt-2 py-2 text-center flex justify-center items-center gap-2 rounded-lg cursor-pointer active:scale-95 duration-100 ease-in-out bg-green-400 hover:bg-green-500 text-white`}>Encrypt <FaLock /></p>

          <h1 className={`w-full mt-5 text-start font-Montserrat text-xl font-semibold`}>Decrypt</h1>
          <input value={decryptIdentifier} onChange={(e) => setDecryptIdentifier(e.target.value)} type="text" placeholder="Enter your identifier" className={`w-full py-3 px-3 rounded-lg bg-gray-200 font-Montserrat text-black outline-none`} />
          <input value={decryptSecretKey} onChange={(e) => setDecryptSecretKey(e.target.value)} type="text" placeholder="Enter secret key" className={`w-full py-3 px-3 rounded-lg bg-gray-200 font-Montserrat text-black outline-none`} />
          <p onClick={identifierDecrypt} className={`w-full mt-2 py-2 text-center flex justify-center items-center gap-2 rounded-lg cursor-pointer active:scale-95 duration-100 ease-in-out bg-blue-400 hover:bg-blue-500 text-white`}>Decrypt <FaLockOpen /></p>
        </div>}

      </div>
    </>
  )
}

export default page
