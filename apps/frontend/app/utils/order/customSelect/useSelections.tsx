import { useState } from 'react';
import { Pizza } from "@/providers/pizzas/interface";

const useSelections = () => {
  const [selectedFlavor, setSelectedFlavor] = useState<Partial<Pizza>>({
    flavor: '',
    flavor_image: '',
  });
  const [selectedSize, setSelectedSize] = useState<Partial<Pizza>>({
    _id: '',
    __v: 0,
    size: '',
    price: '',
  });
  const [selectedBorder, setSelectedBorder] = useState<Partial<Pizza>>({
    border_flavor: '',
  });

  return {
    selectedFlavor,
    setSelectedFlavor,
    selectedSize,
    setSelectedSize,
    selectedBorder,
    setSelectedBorder,
  };
};

export default useSelections;
