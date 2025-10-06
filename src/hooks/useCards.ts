import { useState } from 'react';

export const useCards = () => {
  const [selectedCards, setSelectedCards] = useState<Set<number>>(new Set());
  const [hoverReady, setHoverReady] = useState<Set<number>>(new Set());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const toggleSelect = (index: number) => {
    setSelectedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
        setHoverReady((prevReady) => {
          const newReady = new Set(prevReady);
          newReady.delete(index);
          return newReady;
        });
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleMouseEnter = (index: number) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = (index: number) => {
    setHoveredCard(null);
    if (selectedCards.has(index) && !hoverReady.has(index)) {
      setHoverReady((prev) => new Set(prev).add(index));
    }
  };

  const getCardProps = (index: number) => {
    const isSelected = selectedCards.has(index);
    const isHovered =
      (!isSelected && hoveredCard === index) ||
      (isSelected && hoverReady.has(index) && hoveredCard === index);

    return {
      isSelected,
      isHovered,
      onClick: () => toggleSelect(index),
      onMouseEnter: () => handleMouseEnter(index),
      onMouseLeave: () => handleMouseLeave(index)
    };
  };

  return { getCardProps, selectedCards };
};
