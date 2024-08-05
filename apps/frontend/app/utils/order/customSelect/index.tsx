import { Pizza } from "@/providers/pizzas/interface";
import Image from "next/image";
import { useState } from "react";


interface CustomSelectProps {
    title: string;
    options: Pizza[] | null;
    onSelect: (option: any) => void
}

export const CustomSelect = ({title, options, onSelect}: CustomSelectProps) => {
    const [isVisible, setIsVisible] = useState(false);

  const toggleOptions = () => {
    setIsVisible(!isVisible);
  };
  const handleSelect = (option: any) => {
    onSelect(option)
    setIsVisible(false)
  }
  if (!options) return null
    return (
        <div className="min-w-64 mx-auto">
        <div
          className="p-4 bg-green-500 text-white text-center cursor-pointer rounded"
          onClick={toggleOptions}
        >
          {title}
        </div>
        <div
          className={`mt-1 transition-all duration-500 ease-in-out transform ${
            isVisible ? 'max-h-45 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-5'
          } overflow-hidden`}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-gray-100 border border-gray-300 rounded cursor-pointer hover:bg-gray-200"
              onClick={() => handleSelect(option)}
            >
              {option?.size ? (<p>{option.size}</p>) : null}
              {option?.price ? (<p>R${(option.price * 4).toFixed(2)}</p>) : null}
              {option?.flavor ? (<p>{option.flavor}</p>) : null}
              {option?.flavor_image ? (<img src={option.flavor_image} alt="img" width={50} className="rounded-[50%]" />) : null}
              {option?.border_flavor ? (<p>{option.border_flavor}</p>) : null}
            </div>
          ))}
        </div>
      </div>
    )
}