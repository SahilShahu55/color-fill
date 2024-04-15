"use client"
import { useState, useRef, ChangeEvent, DragEvent,useEffect } from "react";
import Image from "next/image";

const DragDropFiles: React.FC = () => {

  // variables

  const [imageURL, setImageURL] = useState<string | null>(null);
  const [files, setFiles] = useState<FileList | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);


  // functions to handle

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files) {
      setFiles(event.dataTransfer.files);
      const fileURL = URL.createObjectURL(event.dataTransfer.files[0]);
      setImageURL(fileURL);
    }
  };

  const handleUpload = () => {
    if (files) {
      const formData = new FormData();
      Array.from(files).forEach(file => {
        formData.append("Files", file);
      });
      
      console.log(Array.from(formData.getAll("Files")));
      
      // You can handle further processing or upload to the server here

      // const fileURL = URL.createObjectURL(files[0]);
      // setImageURL(fileURL);
      


    }
  };

  useEffect(()=>{
    if(files){
    setImageURL(URL.createObjectURL(files[0]));
    }
  },[files])


 
   
 

  return (
    <div className="bg-white w-[90%] h-[16rem] md:h-[18rem] lg:h-[20rem] rounded-xl">
      {files?(
        <div className=" w-[100%] h-[16rem] md:h-[18rem] lg:h-[20rem]  flex flex-col justify-center items-center text-center gap-5  ">
        {imageURL && 
        <Image src={imageURL} alt="image" width={500}  height={500} className="w-[80%] h-36 rounded-lg" />
        }
        <ul>
          {Array.from(files).map((file, idx) => <li className="text-xs font-medium" key={idx}>{file.name}</li>)}
        </ul>
        <div className="flex gap-5">
          <button onClick={() => setFiles(null)} className="m-auto bg-[#6B7CFF] text-white text-sm px-5 py-3 rounded-lg active:scale-95">Cancel</button>
          <button onClick={handleUpload} className="m-auto bg-[#6B7CFF] text-white text-sm px-5 py-3 rounded-lg active:scale-95">Upload</button>
        </div>
      </div>
      ):(
       <div 
        className=" w-[100%] h-[16rem] md:h-[18rem] lg:h-[20rem]  flex flex-col justify-center items-center"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div>
          <input 
            type="file"
          
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              if (event.target.files) {
                setFiles(event.target.files);
              }
            }}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
          <button onClick={() => inputRef.current?.click()} className="w-36 m-auto bg-[#6B7CFF] text-white text-sm px-5 py-3 rounded-lg active:scale-95">Upload</button>
          <p className="font-bold text-center mt-4">or</p>
          <p className="font-bold">drop a file/ paste URL</p>
        </div>
      </div>
      )}
      
    </div>
  );
};

export default DragDropFiles;
