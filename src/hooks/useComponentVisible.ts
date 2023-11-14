import { useEffect, useState } from 'react';

function useComponentVisible(
  element: HTMLElement,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [element, handleClick]);

  const [isVisible, setIsVisible] = useState(false);

  function handleClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const isClickingOut = !element.contains(target);

    if (isClickingOut && isVisible) {
      setIsVisible(false);
    }
  }

  return [isVisible, setIsVisible];
}

export default useComponentVisible;
